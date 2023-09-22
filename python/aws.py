import boto3
from botocore.exceptions import ClientError
import os
import json
import logging

# Variables for AWS credentials
AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
# AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_REGION = os.environ.get("AWS_REGION")

# function to upload a file to s3 bucket using sse
def upload_file_sse(file_name, bucket, object_name=None, args=None):
    # If S3 object_name was not specified, use file_name
    if object_name is None:
        object_name = os.path.basename(file_name)
    # Upload the file
    s3_client = boto3.client("s3")
    try:
        response = s3_client.upload_file(
            file_name,
            bucket,
            object_name,
            ExtraArgs=args,
        )
        print(response)
    except ClientError as e:
        logging.error(e)
        return False
    return True

# function that creates an ec2 instance
def create_ec2_instance(instance_type, ami_id, key_name, security_group_id, subnet_id):
    ec2_client = boto3.client("ec2")
    response = ec2_client.run_instances(
        ImageId=ami_id,
        InstanceType=instance_type,
        KeyName=key_name,
        SecurityGroupIds=[security_group_id],
        SubnetId=subnet_id,
        MaxCount=1,
        MinCount=1,
    )