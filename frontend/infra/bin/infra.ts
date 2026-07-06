import "dotenv/config";
import * as cdk from "aws-cdk-lib";
import { InfraStack } from "../lib/infra-stack";

const app = new cdk.App();
new InfraStack(app, "InfraStack", {
  env: {
    account: process.env.CDK_ACCOUNT,
    region: process.env.CDK_REGION,
  },
});
