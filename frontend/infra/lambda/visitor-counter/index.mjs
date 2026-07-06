import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

export const handler = async () => {
  const result = await ddb.send(
    new UpdateCommand({
      TableName: process.env.TABLE_NAME,
      Key: { id: "counter" },
      UpdateExpression: "ADD #c :incr",
      ExpressionAttributeNames: { "#c": "count" },
      ExpressionAttributeValues: { ":incr": 1 },
      ReturnValues: "UPDATED_NEW",
    }),
  );

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ count: result.Attributes.count }),
  };
};
