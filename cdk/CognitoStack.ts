import { Construct } from "constructs";
import {
  Stack,
  StackProps,
  CfnResource,
  aws_cognito as cognito,
  aws_lambda_nodejs as lambdaNodeJs,
  aws_dynamodb as dynamodb,
} from "aws-cdk-lib";

import { EnvName } from "~/src/env";
import { GlobalConfig } from "~/lib/global-config";

export type DefaultLambdaProps = Partial<lambdaNodeJs.NodejsFunctionProps>;

export interface ICognitoStackProps extends StackProps {
  envName: EnvName;
  mainTable: dynamodb.ITable;
}

export class CognitoStack extends Stack {
  public readonly userPool: cognito.IUserPool;
  public readonly userPoolClient: cognito.IUserPoolClient;
  public readonly identityPool: cognito.CfnIdentityPool;
  public readonly userPoolDomain: CfnResource;

  constructor(scope: Construct, id: string, props: ICognitoStackProps) {
    super(scope, id, props);

    const { envName, mainTable } = props;

    const domainName = GlobalConfig.getDomainName();

    const userPool = new cognito.UserPool(this, "UserPool", {
      signInAliases: {
        email: true,
      },
      selfSignUpEnabled: false,
      passwordPolicy: {
        minLength: 8,
        requireLowercase: false,
        requireDigits: false,
        requireSymbols: false,
        requireUppercase: false,
      },
      autoVerify: {
        email: true,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: false,
        },
      },
    });
    this.userPool = userPool;
    this.userPoolClient = userPool.addClient("UserPoolClient", {
      authFlows: {
        userPassword: true,
      },
      generateSecret: false,
    });
  }
}
