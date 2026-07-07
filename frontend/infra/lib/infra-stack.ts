import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigatewayv2 from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as path from "path";
import * as iam from "aws-cdk-lib/aws-iam";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // --- Validate required env vars up front, fail fast with a clear message ---
    const DOMAIN_NAME = requireEnv("DOMAIN_NAME");
    const CERT_ARN = requireEnv("CERT_ARN");
    const WWW_DOMAIN = `www.${DOMAIN_NAME}`;

    // --- S3 bucket for the static site ---
    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      bucketName: `${DOMAIN_NAME}-site`,
      versioned: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // --- Import existing ACM cert (must be us-east-1) ---
    const certificate = acm.Certificate.fromCertificateArn(
      this,
      "SiteCertificate",
      CERT_ARN,
    );

    // --- CloudFront distribution using Origin Access Control ---
    const distribution = new cloudfront.Distribution(this, "SiteDistribution", {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      domainNames: [DOMAIN_NAME, WWW_DOMAIN],
      certificate,
      defaultRootObject: "index.html",
    });

    // --- Import existing hosted zone ---
    const zone = route53.HostedZone.fromLookup(this, "Zone", {
      domainName: DOMAIN_NAME,
    });

    // --- Alias A records for apex and www ---
    new route53.ARecord(this, "ApexAliasRecord", {
      zone,
      recordName: DOMAIN_NAME,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution),
      ),
    });

    new route53.ARecord(this, "WwwAliasRecord", {
      zone,
      recordName: WWW_DOMAIN,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution),
      ),
    });

    // Output the distribution domain for reference
    new cdk.CfnOutput(this, "DistributionDomainName", {
      value: distribution.distributionDomainName,
    });
    new cdk.CfnOutput(this, "DistributionId", {
      value: distribution.distributionId,
    });

    // --- DynamoDB table ---
    const visitorTable = new dynamodb.Table(this, "VisitorCountTable", {
      tableName: "VisitorCount",
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // --- Lambda function ---
    const visitorCounterFn = new NodejsFunction(
      this,
      "VisitorCounterFunction",
      {
        runtime: lambda.Runtime.NODEJS_24_X,
        entry: path.join(__dirname, "../lambda/visitor-counter/index.mjs"),
        handler: "handler",
        environment: {
          TABLE_NAME: visitorTable.tableName,
        },
      },
    );

    visitorTable.grantWriteData(visitorCounterFn);

    // --- HTTP API ---
    const httpApi = new apigatewayv2.HttpApi(this, "VisitorApi", {
      corsPreflight: {
        allowOrigins: [
          `https://${DOMAIN_NAME}`,
          `https://${WWW_DOMAIN}`,
          "http://localhost:3000",
        ],
        allowMethods: [apigatewayv2.CorsHttpMethod.POST],
        allowHeaders: ["content-type"],
      },
    });

    httpApi.addRoutes({
      path: "/visitors",
      methods: [apigatewayv2.HttpMethod.POST],
      integration: new HttpLambdaIntegration(
        "VisitorIntegration",
        visitorCounterFn,
      ),
    });

    new cdk.CfnOutput(this, "VisitorApiUrl", {
      value: httpApi.apiEndpoint,
    });

    const githubProvider = new iam.OpenIdConnectProvider(this, "GitHubOIDC", {
      url: "https://token.actions.githubusercontent.com",
      clientIds: ["sts.amazonaws.com"],
    });

    const deployRole = new iam.Role(this, "GitHubDeployRole", {
      assumedBy: new iam.WebIdentityPrincipal(
        githubProvider.openIdConnectProviderArn,
        {
          StringEquals: {
            "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          },
          StringLike: {
            "token.actions.githubusercontent.com:sub":
              "repo:froilanbuendia/froilanbuendia:*",
          },
        },
      ),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess"),
      ],
    });

    new cdk.CfnOutput(this, "GitHubDeployRoleArn", {
      value: deployRole.roleArn,
    });
  } // <- end of constructor
} // <- end of class

// --- Small helper: fail fast with a clear error instead of a cryptic undefined downstream ---
function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}
