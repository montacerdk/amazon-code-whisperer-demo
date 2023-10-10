import { Construct } from "constructs";
import {
  Stack,
  StackProps,
  aws_route53 as route53,
  aws_certificatemanager as acm,
} from "aws-cdk-lib";

import { SsmExportedValue } from "~/lib/constructs/ssm-export-value";
import { GlobalConfig } from "~/lib/global-config";

export class CertificateStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const domainName = GlobalConfig.getDomainName();

    const hostedZone = route53.HostedZone.fromLookup(this, "HostedZone", {
      domainName,
    });

    const certificate = new acm.DnsValidatedCertificate(this, "Certificate", {
      domainName,
      hostedZone,
      region: "us-east-1",
    });

    new SsmExportedValue(this, "CertificateArn", {
      value: certificate.certificateArn,
    });
  }
}
