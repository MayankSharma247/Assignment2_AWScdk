import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class CdkProject8875518Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 Bucket
    const bucket = new s3.Bucket(this, 'S3Bucket8875518', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // Lambda Function
    const myLambda = new lambda.Function(this, 'Lambda8875518', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log("Hello from Lambda 8875518!");
          return { statusCode: 200, body: "Hello World from Lambda 8875518" };
        };
      `),
      environment: {
        BUCKET_NAME: bucket.bucketName,
      }
    });

    // DynamoDB Table
    const table = new dynamodb.Table(this, 'DynamoDB8875518', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      tableName: 'DynamoDBTable_8875518',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}

