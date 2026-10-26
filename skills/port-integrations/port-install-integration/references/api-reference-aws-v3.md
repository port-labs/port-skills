{
  "integration": "aws-v3",
  "examples": {
    "account-info": [
      {
        "Type": "AWS::Account::Info",
        "Properties": {
          "Id": "123456789012",
          "Name": "account-name"
        }
      }
    ],
    "codebuild-build-run": [
      {
        "Type": "AWS::CodeBuild::BuildRun",
        "Properties": {
          "Arn": "arn:aws:codebuild:us-central-2:123456789012:build/test-project-EXAMPLE001:00000000-0000-4000-8000-000000000057",
          "Artifacts": {
            "location": ""
          },
          "BuildComplete": true,
          "BuildNumber": 1,
          "BuildStatus": "SUCCEEDED",
          "Cache": {
            "type": "NO_CACHE"
          },
          "CurrentPhase": "COMPLETED",
          "EncryptionKey": "arn:aws:kms:us-central-2:build:alias/aws/s3",
          "EndTime": "2026-06-01T14:41:28.045000Z",
          "Environment": {
            "type": "LINUX_CONTAINER",
            "image": "aws/codebuild/amazonlinux2-x86_64-standard:5.0",
            "computeType": "BUILD_GENERAL1_SMALL",
            "environmentVariables": [],
            "privilegedMode": false,
            "imagePullCredentialsType": "CODEBUILD"
          },
          "Id": "test-project-0a8232e7e6e8:00000000-0000-4000-8000-000000000057",
          "Initiator": "codepipeline/MyPipeline",
          "Logs": {
            "groupName": "/aws/codebuild/test-project-0a8232e7e6e7",
            "streamName": "00000000-0000-4000-8000-000000000058",
            "deepLink": "https://console.aws.amazon.com/cloudwatch/home?region=us-central-2#logsV2:log-groups/log-group/$252Faws$252Fcodebuild$252FExampleBuildProject-000000000000/log-events/00000000-0000-4000-8000-000000000058",
            "cloudWatchLogsArn": "arn:aws:logs:us-central-2:111122223333:log-group:/aws/codebuild/ExampleBuildProject-000000000000:log-stream:00000000-0000-4000-8000-000000000058"
          },
          "Phases": [
            {
              "phaseType": "SUBMITTED",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:21.968000Z",
              "endTime": "2026-06-01T14:41:22.076000Z",
              "durationInSeconds": 0
            },
            {
              "phaseType": "QUEUED",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:22.076000Z",
              "endTime": "2026-06-01T14:41:22.642000Z",
              "durationInSeconds": 0
            },
            {
              "phaseType": "PROVISIONING",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:22.642000Z",
              "endTime": "2026-06-01T14:41:25.711000Z",
              "durationInSeconds": 3,
              "contexts": [
                {
                  "statusCode": "",
                  "message": ""
                }
              ]
            },
            {
              "phaseType": "DOWNLOAD_SOURCE",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:25.711000Z",
              "endTime": "2026-06-01T14:41:27.136000Z",
              "durationInSeconds": 1,
              "contexts": [
                {
                  "statusCode": "",
                  "message": ""
                }
              ]
            },
            {
              "phaseType": "INSTALL",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:27.136000Z",
              "endTime": "2026-06-01T14:41:27.257000Z",
              "durationInSeconds": 0,
              "contexts": [
                {
                  "statusCode": "",
                  "message": ""
                }
              ]
            },
            {
              "phaseType": "PRE_BUILD",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:27.257000Z",
              "endTime": "2026-06-01T14:41:27.295000Z",
              "durationInSeconds": 0,
              "contexts": [
                {
                  "statusCode": "",
                  "message": ""
                }
              ]
            },
            {
              "phaseType": "BUILD",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:27.295000Z",
              "endTime": "2026-06-01T14:41:27.450000Z",
              "durationInSeconds": 0,
              "contexts": [
                {
                  "statusCode": "",
                  "message": ""
                }
              ]
            },
            {
              "phaseType": "POST_BUILD",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:27.450000Z",
              "endTime": "2026-06-01T14:41:27.485000Z",
              "durationInSeconds": 0,
              "contexts": [
                {
                  "statusCode": "",
                  "message": ""
                }
              ]
            },
            {
              "phaseType": "UPLOAD_ARTIFACTS",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:27.485000Z",
              "endTime": "2026-06-01T14:41:27.551000Z",
              "durationInSeconds": 0,
              "contexts": [
                {
                  "statusCode": "",
                  "message": ""
                }
              ]
            },
            {
              "phaseType": "FINALIZING",
              "phaseStatus": "SUCCEEDED",
              "startTime": "2026-06-01T14:41:27.551000Z",
              "endTime": "2026-06-01T14:41:28.045000Z",
              "durationInSeconds": 0,
              "contexts": [
                {
                  "statusCode": "",
                  "message": ""
                }
              ]
            },
            {
              "phaseType": "COMPLETED",
              "startTime": "2026-06-01T14:41:28.045000Z"
            }
          ],
          "ProjectName": "test-project-0a8232e7e6e7",
          "QueuedTimeoutInMinutes": 480,
          "ResolvedSourceVersion": "0000000000000000000000000000000000000001",
          "SecondarySources": [],
          "SecondarySourceVersions": [],
          "ServiceRole": "arn:aws:iam::123456789012:role/ExamplePipelineTemplate-EXAMPLE002-EXAMPLE003-EXAMPLE001",
          "Source": {
            "type": "CODEPIPELINE",
            "buildspec": "version: 0.2\n\nphases:\n  build:\n    commands:\n      - echo \"Ding\"",
            "insecureSsl": false
          },
          "SourceVersion": "arn:aws:s3:::example-EXAMPLE004-EXAMPLE005-bucket-001/ExamplePipeline/SourceOut/EXAMPLE1",
          "StartTime": "2026-06-01T14:41:21.968000Z",
          "TimeoutInMinutes": 45
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "codebuild-project": [
      {
        "Type": "AWS::CodeBuild::Project",
        "Properties": {
          "Name": "sample-codebuild-project",
          "Arn": "arn:aws:codebuild:us-central-2:123456789012:project/sample-EXAMPLE006-project",
          "Description": "Sample CodeBuild project for building and testing applications",
          "Source": {
            "type": "GITHUB",
            "location": "https://github.com/example/sample-app.git",
            "gitCloneDepth": 1,
            "buildspec": "buildspec.yml",
            "reportBuildStatus": true,
            "insecureSsl": false
          },
          "SecondarySources": [],
          "SourceVersion": "main",
          "SecondarySourceVersions": [],
          "Artifacts": {
            "type": "S3",
            "location": "sample-build-artifacts-bucket",
            "path": "artifacts/",
            "namespaceType": "BUILD_ID",
            "name": "sample-app-artifacts",
            "packaging": "ZIP",
            "overrideArtifactName": false,
            "encryptionDisabled": false
          },
          "SecondaryArtifacts": [],
          "Cache": {
            "type": "S3",
            "location": "sample-build-cache-bucket/cache"
          },
          "Environment": {
            "type": "LINUX_CONTAINER",
            "image": "aws/codebuild/amazonlinux2-x86_64-standard:3.0",
            "computeType": "BUILD_GENERAL1_MEDIUM",
            "environmentVariables": [
              {
                "name": "NODE_ENV",
                "value": "production",
                "type": "PLAINTEXT"
              },
              {
                "name": "API_KEY",
                "value": "sample-api-key-parameter",
                "type": "PARAMETER_STORE"
              }
            ],
            "privilegedMode": false,
            "imagePullCredentialsType": "CODEBUILD"
          },
          "ServiceRole": "arn:aws:iam::123456789012:role/service-role/codebuild-sample-service-role",
          "TimeoutInMinutes": 60,
          "QueuedTimeoutInMinutes": 480,
          "EncryptionKey": "arn:aws:kms:us-central-2:123456789012:key/12345678-1234-1234-1234-123456789012",
          "Tags": [
            {
              "key": "Environment",
              "value": "Production"
            },
            {
              "key": "Team",
              "value": "DevOps"
            },
            {
              "key": "Project",
              "value": "SampleApp"
            }
          ],
          "VpcConfig": {
            "vpcId": "vpc-12345678",
            "subnets": [
              "subnet-12345678",
              "subnet-87654321"
            ],
            "securityGroupIds": [
              "sg-12345678"
            ]
          },
          "Badge": {
            "badgeEnabled": true,
            "badgeRequestUrl": "https://codebuild.us-central-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiSampleEncryptedData"
          },
          "LogsConfig": {
            "cloudWatchLogs": {
              "status": "ENABLED",
              "groupName": "/aws/codebuild/sample-codebuild-project",
              "streamName": "sample-stream"
            },
            "s3Logs": {
              "status": "ENABLED",
              "location": "sample-build-logs-bucket/logs"
            }
          },
          "FileSystemLocations": [],
          "BuildBatchConfig": {
            "serviceRole": "arn:aws:iam::123456789012:role/service-role/codebuild-sample-batch-service-role",
            "combineArtifacts": false,
            "restrictions": {
              "maximumBuildsAllowed": 10,
              "computeTypesAllowed": [
                "BUILD_GENERAL1_SMALL",
                "BUILD_GENERAL1_MEDIUM"
              ]
            },
            "timeoutInMins": 120
          },
          "ConcurrentBuildLimit": 5,
          "ProjectVisibility": "PRIVATE",
          "PublicReadOnlyAccess": false,
          "Created": "2023-01-15T10:30:00.000Z",
          "LastModified": "2023-06-20T14:45:00.000Z",
          "Webhook": {
            "url": "https://codebuild.us-central-2.amazonaws.com/webhooks?12345",
            "payloadUrl": "https://codebuild.us-central-2.amazonaws.com/webhooks?12345",
            "secret": "webhook-secret-token",
            "branchFilter": "main",
            "filterGroups": [
              [
                {
                  "type": "EVENT",
                  "pattern": "PUSH"
                },
                {
                  "type": "HEAD_REF",
                  "pattern": "refs/heads/main"
                }
              ]
            ],
            "lastModifiedSecret": "2023-01-15T10:30:00.000Z"
          }
        },
        "__Region": "us-central-2",
        "__AccountId": "123456789012",
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "codedeploy-application": [
      {
        "Type": "AWS::CodeDeploy::Application",
        "Properties": {
          "ApplicationName": "example-application",
          "ApplicationId": "f00000000-0000-4000-8000-000000000059",
          "CreateTime": "2026-05-31T16:55:54.858000Z",
          "LinkedToGitHub": false,
          "GitHubAccountName": null,
          "ComputePlatform": "Server",
          "Tags": []
        },
        "__ExtraContext": {
          "AccountId": "123465890",
          "Region": "us-central-2"
        }
      }
    ],
    "codedeploy-deployment": [
      {
        "Type": "AWS::CodeDeploy::Deployment",
        "Properties": {
          "AdditionalDeploymentStatusInfo": null,
          "ApplicationName": "MyPythonCodeDeployApp",
          "AutoRollbackConfiguration": null,
          "BlueGreenDeploymentConfiguration": null,
          "CompleteTime": null,
          "CreateTime": "2026-06-16T16:16:16.162000Z",
          "Creator": "user",
          "DeploymentGroupName": "MyDeploymentGroup",
          "DeploymentId": "EXAMPLE0002",
          "DeploymentOverview": {
            "Pending": 1,
            "InProgress": 0,
            "Succeeded": 0,
            "Failed": 0,
            "Skipped": 0,
            "Ready": 0
          },
          "DeploymentStyle": {
            "deploymentType": "IN_PLACE",
            "deploymentOption": "WITHOUT_TRAFFIC_CONTROL"
          },
          "Description": null,
          "ErrorInformation": null,
          "ExternalId": null,
          "FileExistsBehavior": "DISALLOW",
          "IgnoreApplicationStopFailures": false,
          "InstanceTerminationWaitTimeStarted": false,
          "LoadBalancerInfo": null,
          "Revision": {
            "revisionType": "S3",
            "s3Location": {
              "bucket": "codedeploy-bucket-1234",
              "key": "bundle.zip",
              "bundleType": "zip"
            }
          },
          "RollbackInfo": null,
          "StartTime": null,
          "Status": "InProgress",
          "TargetInstances": null,
          "UpdateOutdatedInstancesOnly": false
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "codedeploy-deployment-group": [
      {
        "Type": "AWS::CodeDeploy::DeploymentGroup",
        "Properties": {
          "ApplicationName": "MyApp",
          "AutoScalingGroups": [],
          "ComputePlatform": "Server",
          "DeploymentConfigName": "CodeDeployDefault.OneAtATime",
          "DeploymentGroupId": "00000000-0000-4000-8000-000000000060",
          "DeploymentGroupName": "MyGroup",
          "DeploymentStyle": {
            "deploymentType": "IN_PLACE",
            "deploymentOption": "WITHOUT_TRAFFIC_CONTROL"
          },
          "Ec2TagFilters": [
            {
              "Key": "Environment",
              "Value": "Production",
              "Type": "KEY_AND_VALUE"
            }
          ],
          "LastAttemptedDeployment": {
            "deploymentId": "EXAMPLE0003",
            "status": "Failed",
            "endTime": "2026-06-03T16:10:48.108000Z",
            "createTime": "2026-06-03T16:10:47.199000Z"
          },
          "OnPremisesInstanceTagFilters": [],
          "OutdatedInstancesStrategy": "UPDATE",
          "ServiceRoleArn": "arn:aws:iam::123456789012:role/service-role/example-codepipeline-role",
          "Tags": [
            {
              "Key": "Hum",
              "Value": "Drum"
            }
          ],
          "TerminationHookEnabled": false,
          "TriggerConfigurations": []
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "codedeploy-deployment-target": [
      {
        "Type": "AWS::CodeDeploy::DeploymentTarget",
        "Properties": {
          "DeploymentId": "EXAMPLE0004",
          "DeploymentTargetType": "InstanceTarget",
          "InstanceTarget": {
            "deploymentId": "EXAMPLE0004",
            "targetId": "i-2001abcdef0",
            "targetArn": "arn:aws:ec2:us-central-2:123456789012:instance/i-2001abcdef0",
            "lastUpdatedAt": "2026-06-03T16:10:48.108000Z",
            "lifecycleEvents": [
              {
                "lifecycleEventName": "ApplicationStop",
                "diagnostics": null,
                "startTime": "2026-06-03T16:10:47.000000Z",
                "endTime": "2026-06-03T16:10:47.500000Z",
                "status": "Succeeded"
              },
              {
                "lifecycleEventName": "ApplicationStart",
                "diagnostics": null,
                "startTime": "2026-06-03T16:10:47.600000Z",
                "endTime": "2026-06-03T16:10:48.108000Z",
                "status": "Succeeded"
              }
            ],
            "instanceLabel": "Blue",
            "status": "Succeeded"
          }
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "codepipeline-action": [
      {
        "Type": "AWS::CodePipeline::Action",
        "Properties": {
          "ActionTypeId": {
            "Category": "Source",
            "Owner": "AWS",
            "Provider": "CodeStarSourceConnection",
            "Version": "1"
          },
          "Configuration": {
            "BranchName": "main",
            "ConnectionArn": "arn:aws:codeconnections:us-central-2:12345678012:connection/1fb197f2-18g8-47f5-9d79-EXAMPLE007",
            "FullRepositoryId": "Organization/Repo",
            "OutputArtifactFormat": "CODEBUILD_CLONE_REF"
          },
          "InputArtifacts": [],
          "Name": "GitHub_Source",
          "OutputArtifacts": [
            {
              "name": "SourceArtifact"
            }
          ],
          "PipelineName": "my-pipeline",
          "PipelineArn": "arn:aws:codepipeline:us-central-2:123456789012:my-EXAMPLE008",
          "PipelineVersion": 2,
          "Region": "us-central-2",
          "RunOrder": 1,
          "StageName": "Source"
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "codepipeline-action-execution": [
      {
        "Type": "AWS::CodePipeline::ActionExecution",
        "Properties": {
          "ActionExecutionId": "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
          "ActionName": "GitHub_Source",
          "PipelineExecutionId": "a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
          "PipelineVersion": 2,
          "PipelineName": "my-pipeline",
          "StageName": "Source",
          "StartTime": "2024-01-15T10:00:00Z",
          "LastUpdateTime": "2024-01-15T10:01:30Z",
          "Status": "Succeeded",
          "Input": {
            "ActionTypeId": {
              "Category": "Source",
              "Owner": "AWS",
              "Provider": "CodeStarSourceConnection",
              "Version": "1"
            },
            "Configuration": {
              "BranchName": "main",
              "ConnectionArn": "arn:aws:codeconnections:us-central-2:123456789012:connection/1fb197f2-18g8-47f5-9d79-EXAMPLE007",
              "FullRepositoryId": "Organization/Repo",
              "OutputArtifactFormat": "CODEBUILD_CLONE_REF"
            },
            "RoleArn": "arn:aws:iam::123456789012:role/codepipeline-role",
            "Region": "us-central-2",
            "InputArtifacts": [],
            "Namespace": "SourceVariables"
          },
          "Output": {
            "OutputArtifacts": [
              {
                "name": "SourceArtifact",
                "s3location": {
                  "bucket": "my-pipeline-artifacts",
                  "key": "my-pipeline/SourceArtif/abc123"
                }
              }
            ],
            "ExecutionResult": {
              "ExternalExecutionId": "a1b2c3d4-5678-90ab-cdef-EXAMPLE33333",
              "ExternalExecutionSummary": "Checkout of branch main for repository Organization/Repo",
              "ExternalExecutionUrl": "https://us-central-2.console.aws.amazon.com/codesuite/codeconnections/connections"
            },
            "OutputVariables": {}
          }
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "codepipeline-pipeline": [
      {
        "Type": "AWS::CodePipeline::Pipeline",
        "Properties": {
          "Name": "ExampleBuildService",
          "PipelineArn": "arn:aws:codepipeline:us-central-2:123456789012:pipeline/sample-EXAMPLE004-EXAMPLE008",
          "RoleArn": "arn:aws:iam::1234567890:role/ExamplePipelineTempla-CodeConnectionsActionRole-EXAMPLE009",
          "ArtifactStore": {
            "location": "example-codepipeline-artifacts-bucket-002",
            "type": "S3",
            "encryptionKey": null
          },
          "ArtifactStores": {},
          "Stages": [
            {
              "name": "Source",
              "actions": [
                {
                  "name": "CodeConnections",
                  "actionTypeId": {
                    "category": "Source",
                    "owner": "AWS",
                    "provider": "CodeStarSourceConnection",
                    "version": "1"
                  },
                  "runOrder": 1,
                  "configuration": {
                    "BranchName": "master",
                    "ConnectionArn": "arn:aws:codeconnections:us-central-2:1234567890:connection/2fb507g1-18f8-47f5-9z19-EXAMPLE010",
                    "DetectChanges": "false",
                    "FullRepositoryId": "Organization/Repository"
                  },
                  "outputArtifacts": [
                    {
                      "name": "SourceOutput"
                    }
                  ],
                  "inputArtifacts": [],
                  "roleArn": "arn:aws:iam::1234567890:role/ExamplePipelineTempla-CodeConnectionsActionRole-EXAMPLE009"
                }
              ],
              "blockers": []
            },
            {
              "name": "PythonBuild",
              "actions": [
                {
                  "name": "CI_Python_Build",
                  "actionTypeId": {
                    "category": "Build",
                    "owner": "AWS",
                    "provider": "CodeBuild",
                    "version": "1"
                  },
                  "runOrder": 1,
                  "configuration": {
                    "ProjectName": "ExampleBuildProject-000000000000"
                  },
                  "outputArtifacts": [],
                  "inputArtifacts": [
                    {
                      "name": "SourceOutput"
                    }
                  ],
                  "roleArn": "arn:aws:iam::1234567890:role/ExamplePipelineTemplate-Sch-CodeBuildActionRole-EXAMPLE011"
                },
                {
                  "name": "Source_Code_Inspector_Scan",
                  "actionTypeId": {
                    "category": "Invoke",
                    "owner": "AWS",
                    "provider": "InspectorScan",
                    "version": "1"
                  },
                  "runOrder": 1,
                  "configuration": {
                    "CriticalThreshold": "0",
                    "InspectorRunMode": "SourceCodeScan"
                  },
                  "outputArtifacts": [
                    {
                      "name": "SBOMResult"
                    }
                  ],
                  "inputArtifacts": [
                    {
                      "name": "SourceOutput"
                    }
                  ]
                }
              ],
              "blockers": []
            }
          ],
          "Version": 1,
          "ExecutionMode": "QUEUED",
          "PipelineType": "V2",
          "Variables": [],
          "Triggers": [],
          "Created": "2026-06-01T14:41:13.216000Z",
          "Updated": "2026-06-01T14:41:13.216000Z",
          "Tags": [
            {
              "key": "hill",
              "value": "billy"
            },
            {
              "key": "jazz",
              "value": "hands"
            }
          ]
        },
        "__ExtraContext": {
          "AccountId": "1234567890",
          "Region": "us-central-2"
        }
      }
    ],
    "codepipeline-pipeline-execution": [
      {
        "Type": "AWS::CodePipeline::PipelineExecution",
        "Properties": {
          "ArtifactRevisions": [],
          "ExecutionMode": "SUPERSEDED",
          "LastUpdateTime": "2026-06-04T14:11:40.176000Z",
          "PipelineExecutionId": "00000000-0000-4000-8000-000000000061",
          "PipelineName": "my-pipeline",
          "PipelineVersion": 1,
          "SourceRevisions": [],
          "StartTime": "2026-06-04T14:11:28.350000Z",
          "Status": "Failed",
          "Trigger": {
            "triggerType": "CreatePipeline",
            "triggerDetail": "arn:aws:sts::123456789012:assumed-role/AWSReservedSSO_PowerUserAccess_EXAMPLE001/contributor16@example.com"
          }
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "codepipeline-stage": [
      {
        "Type": "AWS::CodePipeline::Stage",
        "Properties": {
          "Actions": [
            {
              "name": "GitHub_Source",
              "actionTypeId": {
                "category": "Source",
                "owner": "AWS",
                "provider": "CodeStarSourceConnection",
                "version": "1"
              },
              "runOrder": 1,
              "configuration": {
                "BranchName": "main",
                "ConnectionArn": "arn:aws:codeconnections:us-central-2:123456789012:connection/00000000-0000-4000-8000-000000000062",
                "FullRepositoryId": "Org/Repo",
                "OutputArtifactFormat": "CODEBUILD_CLONE_REF"
              },
              "outputArtifacts": [
                {
                  "name": "SourceArtifact"
                }
              ],
              "inputArtifacts": [],
              "region": "us-central-2"
            }
          ],
          "Name": "Source",
          "Order": 1,
          "PipelineArn": "arn:aws:codepipeline:us-central-2:123456789012:my-EXAMPLE008",
          "PipelineName": "my-pipeline"
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "ec2-instance": [
      {
        "Type": "AWS::EC2::Instance",
        "Properties": {
          "InstanceId": "i-0a1b2c3d4e5f67890",
          "InstanceType": "t3.medium",
          "State": {
            "Code": 16,
            "Name": "running"
          },
          "PublicIpAddress": "203.0.113.10",
          "PrivateIpAddress": "10.0.1.100",
          "ImageId": "ami-0abcdef1234567890",
          "SubnetId": "subnet-12345678901234567",
          "VpcId": "vpc-12345678901234567",
          "LaunchTime": "2024-03-15T08:30:00.000Z",
          "Platform": "Linux/UNIX",
          "Architecture": "x86_64",
          "KeyName": "my-key-pair",
          "Placement": {
            "AvailabilityZone": "us-central-2a",
            "Tenancy": "default"
          },
          "Monitoring": {
            "State": "disabled"
          },
          "SecurityGroups": [
            {
              "GroupId": "sg-12345678901234567",
              "GroupName": "my-security-group"
            }
          ],
          "Tags": [
            {
              "Key": "Name",
              "Value": "example-production-server"
            },
            {
              "Key": "Environment",
              "Value": "production"
            },
            {
              "Key": "Team",
              "Value": "backend"
            }
          ]
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "ec2-volume": [
      {
        "Type": "AWS::EC2::Volume",
        "Properties": {
          "VolumeId": "vol-09a13562b4dacdee2",
          "VolumeType": "gp2",
          "Size": 10,
          "Iops": 100,
          "Throughput": null,
          "AvailabilityZone": "us-central-2c",
          "State": "available",
          "CreateTime": "2024-04-17T19:45:45.700000Z",
          "Encrypted": false,
          "MultiAttachEnabled": false,
          "SnapshotId": "",
          "Attachments": [],
          "KmsKeyId": null,
          "AutoEnableIO": false,
          "Tags": [
            {
              "Key": "Name",
              "Value": "zinc"
            }
          ]
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "ecr-repository": [
      {
        "Type": "AWS::ECR::Repository",
        "Properties": {
          "RepositoryName": "my-app/backend",
          "RepositoryArn": "arn:aws:ecr:us-central-2:123456789012:repository/my-app/backend",
          "RegistryId": "123456789012",
          "RepositoryUri": "123456789012.dkr.ecr.us-central-2.amazonaws.com/my-app/backend",
          "CreatedAt": "2024-01-10T12:00:00.000Z",
          "ImageTagMutability": "IMMUTABLE",
          "ImageScanningConfiguration": {
            "ScanOnPush": true
          },
          "EncryptionConfiguration": {
            "EncryptionType": "AES256"
          },
          "Tags": [
            {
              "Key": "Environment",
              "Value": "production"
            },
            {
              "Key": "Team",
              "Value": "backend"
            }
          ]
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "ecs-cluster": [
      {
        "Type": "AWS::ECS::Cluster",
        "Properties": {
          "ClusterName": "example-production-cluster",
          "ClusterArn": "arn:aws:ecs:us-central-2:123456789012:cluster/my-cluster",
          "CapacityProviders": [
            "FARGATE",
            "FARGATE_SPOT"
          ],
          "ClusterSettings": [],
          "Configuration": null,
          "DefaultCapacityProviderStrategy": [],
          "ServiceConnectDefaults": null,
          "Tags": [
            {
              "key": "Environment",
              "value": "production"
            },
            {
              "key": "Team",
              "value": "platform"
            },
            {
              "key": "CostCenter",
              "value": "engineering"
            }
          ],
          "Status": "ACTIVE",
          "RunningTasksCount": 12,
          "ActiveServicesCount": 5,
          "PendingTasksCount": 2,
          "RegisteredContainerInstancesCount": 8
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "ecs-task-definition": [
      {
        "Type": "AWS::ECS::TaskDefinition",
        "Properties": {
          "TaskDefinitionArn": "arn:aws:ecs:us-central-2:123456789012:task-EXAMPLE012/port-ocean-aws-aws-EXAMPLE013:3",
          "Family": "example-aws-integration",
          "Revision": 3,
          "Status": "ACTIVE",
          "ContainerDefinitions": [
            {
              "name": "example-aws-integration",
              "image": "ghcr.io/port-labs/port-ocean-aws:latest",
              "cpu": 1024,
              "memory": 2048,
              "portMappings": [
                {
                  "containerPort": 8000,
                  "hostPort": 8000,
                  "protocol": "tcp"
                }
              ],
              "essential": true,
              "environment": [
                {
                  "name": "OCEAN__SCHEDULED_RESYNC_INTERVAL",
                  "value": "60"
                },
                {
                  "name": "OCEAN__INITIALIZE_PORT_RESOURCES",
                  "value": "true"
                },
                {
                  "name": "OCEAN__EVENT_LISTENER",
                  "value": "{\"type\":\"POLLING\"}"
                }
              ],
              "mountPoints": [],
              "volumesFrom": [],
              "secrets": [
                {
                  "name": "OCEAN__PORT",
                  "valueFrom": "arn:aws:secretsmanager:us-central-2:123456789012:secret:port-EXAMPLE014"
                },
                {
                  "name": "OCEAN__INTEGRATION",
                  "valueFrom": "arn:aws:secretsmanager:us-central-2:123456789012:secret:integration-config"
                }
              ],
              "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                  "awslogs-group": "/ecs/example-aws-integration",
                  "awslogs-create-group": "true",
                  "awslogs-region": "us-central-2",
                  "awslogs-stream-prefix": "ecs"
                }
              },
              "systemControls": []
            }
          ],
          "Cpu": "1024",
          "Memory": "2048",
          "NetworkMode": "awsvpc",
          "RequiresCompatibilities": [
            "FARGATE"
          ],
          "TaskRoleArn": "arn:aws:iam::123456789012:role/ecs-task-role-port-ocean-aws-aws-EXAMPLE013",
          "ExecutionRoleArn": "arn:aws:iam::123456789012:role/ecs-task-EXAMPLE015-role-port-ocean-aws-aws-EXAMPLE013",
          "Volumes": [],
          "PlacementConstraints": [],
          "Tags": [],
          "RegisteredAt": "2024-08-20T19:54:12.602000Z"
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "eks-cluster": [
      {
        "Type": "AWS::EKS::Cluster",
        "Properties": {
          "Name": "example-production-cluster",
          "Arn": "arn:aws:eks:us-central-2:123456789012:cluster/my-EXAMPLE016-cluster",
          "CreatedAt": "2025-09-25T09:24:31.701000Z",
          "Version": "1.33",
          "Endpoint": "https://ABCDEF1234567890ABCDEF1234567890.sk1.us-central-2.eks.amazonaws.com",
          "RoleArn": "arn:aws:iam::123456789012:role/AmazonEKSClusterRole",
          "ResourcesVpcConfig": {
            "subnetIds": [
              "subnet-12345678901234567",
              "subnet-2002",
              "subnet-2003"
            ],
            "securityGroupIds": [],
            "clusterSecurityGroupId": "sg-12345678901234567",
            "vpcId": "vpc-12345678901234567",
            "endpointPublicAccess": true,
            "endpointPrivateAccess": true,
            "publicAccessCidrs": [
              "0.0.0.0/0"
            ]
          },
          "KubernetesNetworkConfig": {
            "serviceIpv4Cidr": "172.20.0.0/16",
            "ipFamily": "ipv4",
            "elasticLoadBalancing": {
              "enabled": true
            }
          },
          "Logging": {
            "clusterLogging": [
              {
                "types": [
                  "api",
                  "audit",
                  "authenticator",
                  "controllerManager",
                  "scheduler"
                ],
                "enabled": true
              }
            ]
          },
          "Identity": {
            "oidc": {
              "issuer": "https://oidc.eks.us-central-2.amazonaws.com/id/ABCDEF1234567890ABCDEF1234567890"
            }
          },
          "Status": "ACTIVE",
          "CertificateAuthority": {
            "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJek1EY3hNVEV3TkRVeU1sb1hEVE16TURjd09ERXdORFV5TWxvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTXVuCnhYNEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQQpBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBCkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQQpBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBCkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg=="
          },
          "PlatformVersion": "eks.14",
          "Tags": {},
          "AccessConfig": {
            "authenticationMode": "API"
          },
          "UpgradePolicy": {
            "supportType": "STANDARD"
          },
          "ZonalShiftConfig": {
            "enabled": true
          },
          "ComputeConfig": {
            "enabled": true,
            "nodePools": [
              "general-purpose",
              "system"
            ],
            "nodeRoleArn": "arn:aws:iam::123456789012:role/AmazonEKSNodeRole"
          },
          "StorageConfig": {
            "blockStorage": {
              "enabled": true
            }
          }
        }
      }
    ],
    "elasticache-cluster": [
      {
        "Type": "AWS::ElastiCache::Cluster",
        "Properties": {
          "CacheClusterId": "my-cluster",
          "ARN": "arn:aws:elasticache:us-central-2:123456789012:cluster:my-cluster",
          "ClientDownloadLandingPage": "https://console.aws.amazon.com/elasticache/home#client-download:",
          "CacheNodeType": "cache.t4g.micro",
          "Engine": "redis",
          "EngineVersion": "7.1.0",
          "CacheClusterStatus": "available",
          "NumCacheNodes": 1,
          "PreferredAvailabilityZone": "us-central-2b",
          "CacheClusterCreateTime": "2025-04-16T17:42:04.653000Z",
          "PreferredMaintenanceWindow": "sun:04:30-sun:05:30",
          "PendingModifiedValues": {},
          "CacheSecurityGroups": [],
          "CacheParameterGroup": {
            "CacheParameterGroupName": "default.redis7",
            "ParameterApplyStatus": "in-sync",
            "CacheNodeIdsToReboot": []
          },
          "CacheSubnetGroupName": "default",
          "CacheNodes": [
            {
              "CacheNodeId": "0001",
              "CacheNodeStatus": "available",
              "CacheNodeCreateTime": "2025-04-16T17:42:04.653000Z",
              "Endpoint": {
                "Address": "my-cluster.xxxxxx.0001.usc2.cache.amazonaws.com",
                "Port": 6379
              },
              "ParameterGroupStatus": "in-sync",
              "CustomerAvailabilityZone": "us-central-2b"
            }
          ],
          "AutoMinorVersionUpgrade": true,
          "SecurityGroups": [],
          "ReplicationGroupId": null,
          "SnapshotRetentionLimit": 0,
          "SnapshotWindow": "02:30-03:30",
          "AuthTokenEnabled": false,
          "TransitEncryptionEnabled": false,
          "AtRestEncryptionEnabled": false,
          "ReplicationGroupLogDeliveryEnabled": false,
          "LogDeliveryConfigurations": [],
          "NetworkType": "ipv4",
          "IpDiscovery": "ipv4",
          "TagList": []
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "lambda-function": [
      {
        "Type": "AWS::Lambda::Function",
        "Properties": {
          "FunctionName": "my-function",
          "FunctionArn": "arn:aws:lambda:us-central-2:123456789012:function:my-EXAMPLE017",
          "Runtime": "python3.9",
          "Handler": "index.handler",
          "MemorySize": 512,
          "Timeout": 30,
          "State": "Active",
          "LastModified": "2023-12-01T10:30:00.000Z",
          "CodeSha256": "abcd1234efgh5678ijkl9012mnop3456qrst7890uvwx1234yzab5678cdef",
          "CodeSize": 1029,
          "Description": "My sample Lambda function",
          "Role": "arn:aws:iam::123456789012:role/lambda-EXAMPLE015-role",
          "LastUpdateStatus": "Successful",
          "LastUpdateStatusReason": "The function was successfully updated",
          "LastUpdateStatusReasonCode": "Successful",
          "Version": "$LATEST",
          "RevisionId": "12345678-1234-1234-1234-123456789012",
          "PackageType": "Zip",
          "MasterArn": null,
          "SigningJobArn": null,
          "SigningProfileVersionArn": null,
          "StateReason": "The function is ready",
          "StateReasonCode": "OK",
          "DeadLetterConfig": {
            "TargetArn": "arn:aws:sqs:us-central-2:123456789012:my-dlq"
          },
          "Environment": {
            "Variables": {
              "ENV_VAR_1": "value1",
              "ENV_VAR_2": "value2"
            },
            "Error": null
          },
          "VpcConfig": {
            "VpcId": "vpc-12345678",
            "SubnetIds": [
              "subnet-12345678",
              "subnet-87654321"
            ],
            "SecurityGroupIds": [
              "sg-12345678"
            ],
            "Ipv6AllowedForDualStack": false
          },
          "TracingConfig": {
            "Mode": "Active"
          },
          "LoggingConfig": {
            "LogFormat": "Text",
            "ApplicationLogLevel": "INFO",
            "SystemLogLevel": "INFO",
            "LogGroup": "/aws/lambda/my-function"
          },
          "EphemeralStorage": {
            "Size": {
              "Size": 10240
            }
          },
          "ImageConfigResponse": {
            "ImageConfig": {
              "Command": [
                "python",
                "app.py"
              ],
              "EntryPoint": [
                "/lambda-entrypoint.sh"
              ],
              "WorkingDirectory": "/var/task"
            },
            "Error": null
          },
          "RuntimeVersionConfig": {
            "RuntimeVersionArn": "arn:aws:lambda:us-central-2::runtime:python3.9",
            "Error": null
          },
          "SnapStart": {
            "ApplyOn": "PublishedVersions",
            "OptimizationStatus": "On"
          },
          "Layers": [
            {
              "Arn": "arn:aws:lambda:us-central-2:123456789012:layer:my-layer:1",
              "CodeSize": 1029,
              "SigningJobArn": null,
              "SigningProfileVersionArn": null
            }
          ],
          "Architectures": [
            "x86_64"
          ],
          "FileSystemConfigs": [
            {
              "Arn": "arn:aws:elasticfilesystem:us-central-2:123456789012:access-point/fsap-12345678",
              "LocalMountPath": "/mnt/efs"
            }
          ],
          "Tags": {
            "Environment": "production",
            "Team": "backend",
            "Project": "my-project"
          },
          "KmsKeyArn": "arn:aws:kms:us-central-2:123456789012:key/12345678-1234-1234-1234-123456789012"
        }
      }
    ],
    "memorydb-user": [
      {
        "Type": "AWS::MemoryDB::User",
        "Properties": {
          "Name": "default",
          "Status": "active",
          "AccessString": "on ~* &* +@all",
          "ACLNames": [
            "open-access"
          ],
          "MinimumEngineVersion": "6.0",
          "Authentication": {
            "Type": "no-password"
          },
          "ARN": "arn:aws:memorydb:us-central-2:123456789012:user/default",
          "TagList": []
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "msk-cluster": [
      {
        "Type": "AWS::MSK::Cluster",
        "Properties": {
          "ClusterArn": "arn:aws:kafka:us-central-2:123456789012:cluster/demo-cluster-1/a1b2c3d4-e5f6-7890-abcd-EXAMPLE018",
          "ClusterName": "demo-cluster-1",
          "State": "ACTIVE",
          "CreationTime": "2026-04-19T14:51:13.196000Z",
          "CurrentVersion": "EXAMPLE0000005",
          "BrokerNodeGroupInfo": {
            "BrokerAZDistribution": "DEFAULT",
            "ClientSubnets": [
              "subnet-2001abcdef0",
              "subnet-2001abcdef1",
              "subnet-2001abcdef2"
            ],
            "InstanceType": "express.m7g.large",
            "SecurityGroups": [
              "sg-2001abcdef0"
            ],
            "ConnectivityInfo": {
              "PublicAccess": {
                "Type": "DISABLED"
              },
              "VpcConnectivity": {
                "ClientAuthentication": {
                  "Sasl": {
                    "Scram": {
                      "Enabled": false
                    },
                    "Iam": {
                      "Enabled": false
                    }
                  },
                  "Tls": {
                    "Enabled": false
                  }
                }
              },
              "NetworkType": "IPV4"
            },
            "ZoneIds": [
              "usc2-az1",
              "usc2-az3",
              "usc2-az2"
            ]
          },
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": false
              },
              "Iam": {
                "Enabled": true
              }
            },
            "Tls": {
              "CertificateAuthorityArnList": [],
              "Enabled": false
            },
            "Unauthenticated": {
              "Enabled": false
            }
          },
          "EncryptionInfo": {
            "EncryptionAtRest": {
              "DataVolumeKMSKeyId": "arn:aws:kms:us-central-2:123456789012:key/a1b2c3d4-e5f6-7890-abcd-EXAMPLE018"
            },
            "EncryptionInTransit": {
              "ClientBroker": "TLS",
              "InCluster": true
            }
          },
          "CurrentBrokerSoftwareInfo": {
            "KafkaVersion": "3.9.x.kraft"
          },
          "EnhancedMonitoring": "DEFAULT",
          "OpenMonitoring": {
            "Prometheus": {
              "JmxExporter": {
                "EnabledInBroker": false
              },
              "NodeExporter": {
                "EnabledInBroker": false
              }
            }
          },
          "NumberOfBrokerNodes": 3,
          "Tags": {
            "Environment": "demo",
            "Team": "platform"
          }
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "msk-serverless-cluster": [
      {
        "Type": "AWS::MSK::ServerlessCluster",
        "Properties": {
          "ActiveOperationArn": null,
          "ClusterArn": "arn:aws:kafka:us-central-2:123456789012:cluster/my-EXAMPLE019-cluster/00000000-0000-4000-8000-000000000063-1",
          "ClusterName": "my-serverless-cluster",
          "ClusterType": "SERVERLESS",
          "CreationTime": "2024-03-15T10:30:00Z",
          "CurrentVersion": "EXAMPLE0000006",
          "State": "ACTIVE",
          "StateInfo": null,
          "Tags": {
            "Environment": "production",
            "Team": "platform"
          },
          "Serverless": {
            "VpcConfigs": [
              {
                "SubnetIds": [
                  "subnet-0a1b2c3d4e5f67890",
                  "subnet-0f9e8d7c6b5a43210"
                ],
                "SecurityGroupIds": [
                  "sg-2001abcdef0"
                ]
              }
            ],
            "ClientAuthentication": {
              "Sasl": {
                "Iam": {
                  "Enabled": true
                }
              }
            },
            "ConnectivityInfo": {
              "NetworkType": "IPV4"
            }
          }
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "organizations-account": [
      {
        "Type": "AWS::Organizations::Account",
        "Properties": {
          "Id": "123456789013",
          "Arn": "arn:aws:organizations::123456789012:account/o-exampleorg11/123456789013",
          "Email": "dev-team@example.com",
          "Name": "dev-account",
          "Status": "ACTIVE",
          "JoinedMethod": "CREATED",
          "JoinedTimestamp": "2023-06-15T09:00:00.000Z"
        }
      }
    ],
    "rds-db-cluster": [
      {
        "Type": "AWS::RDS::DBCluster",
        "Properties": {
          "ActivityStreamStatus": "stopped",
          "AssociatedRoles": [],
          "AutoMinorVersionUpgrade": true,
          "AvailabilityZones": [
            "us-central-2a",
            "us-central-2b",
            "us-central-2c"
          ],
          "BackupRetentionPeriod": 7,
          "ClusterCreateTime": "2024-03-15T10:22:33.456Z",
          "CopyTagsToSnapshot": true,
          "CrossAccountClone": false,
          "DatabaseName": "myappdb",
          "DBClusterArn": "arn:aws:rds:us-central-2:123456789012:cluster:my-aurora-cluster",
          "DBClusterIdentifier": "my-aurora-cluster",
          "DBClusterMembers": [
            {
              "DBInstanceIdentifier": "my-aurora-cluster-instance-1",
              "IsClusterWriter": true,
              "DBClusterParameterGroupStatus": "in-sync",
              "PromotionTier": 1
            },
            {
              "DBInstanceIdentifier": "my-aurora-cluster-instance-2",
              "IsClusterWriter": false,
              "DBClusterParameterGroupStatus": "in-sync",
              "PromotionTier": 1
            }
          ],
          "DbClusterResourceId": "cluster-ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          "DeletionProtection": true,
          "EarliestRestorableTime": "2024-03-15T10:30:00.000Z",
          "Endpoint": "my-aurora-cluster.cluster-abcdefgh1234.us-central-2.rds.amazonaws.com",
          "Engine": "aurora-mysql",
          "EngineMode": "provisioned",
          "EngineVersion": "8.0.mysql_aurora.3.04.0",
          "GlobalWriteForwardingStatus": "disabled",
          "HttpEndpointEnabled": false,
          "IAMDatabaseAuthenticationEnabled": true,
          "KmsKeyId": "arn:aws:kms:us-central-2:123456789012:key/mrk-EXAMPLE020",
          "LatestRestorableTime": "2024-03-20T08:15:00.000Z",
          "MasterUsername": "admin",
          "MultiAZ": true,
          "NetworkType": "IPV4",
          "Port": 3306,
          "PreferredBackupWindow": "02:00-03:00",
          "PreferredMaintenanceWindow": "sun:05:00-sun:06:00",
          "ReaderEndpoint": "my-aurora-cluster.cluster-ro-abcdefgh1234.us-central-2.rds.amazonaws.com",
          "Status": "available",
          "StorageEncrypted": true,
          "StorageType": "aurora",
          "Tags": [
            {
              "Key": "Environment",
              "Value": "production"
            },
            {
              "Key": "Team",
              "Value": "platform"
            }
          ],
          "VpcSecurityGroups": [
            {
              "VpcSecurityGroupId": "sg-2001abcdef0",
              "Status": "active"
            }
          ],
          "DBSubnetGroup": "my-db-subnet-group"
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ],
    "rds-db-instance": [
      {
        "Type": "AWS::RDS::DBInstance",
        "Properties": {
          "ActivityStreamStatus": null,
          "AllocatedStorage": 100,
          "AssociatedRoles": [],
          "AutoMinorVersionUpgrade": true,
          "AvailabilityZone": "us-central-2b",
          "BackupRetentionPeriod": 7,
          "BackupTarget": null,
          "CACertificateIdentifier": "rds-ca-2015",
          "CertificateDetails": null,
          "CharacterSetName": null,
          "CopyTagsToSnapshot": false,
          "CustomerOwnedIpEnabled": false,
          "DBInstanceArn": "arn:aws:rds:us-central-2:1234567890:db:mysqldb",
          "DBInstanceClass": "db.m4.xlarge",
          "DBInstanceIdentifier": "mysqldb",
          "DBInstanceStatus": "available",
          "DBName": null,
          "DBParameterGroups": [
            {
              "DBParameterGroupName": "default.mysql5.6",
              "ParameterApplyStatus": "in-sync"
            }
          ],
          "DBSecurityGroups": [],
          "DBSubnetGroup": {
            "VpcId": "vpc-########",
            "Subnets": [
              {
                "SubnetIdentifier": "subnet-########",
                "SubnetStatus": "Active",
                "SubnetAvailabilityZone": {
                  "Name": "us-central-2e"
                }
              },
              {
                "SubnetIdentifier": "subnet-########",
                "SubnetStatus": "Active",
                "SubnetAvailabilityZone": {
                  "Name": "us-central-2d"
                }
              },
              {
                "SubnetIdentifier": "subnet-########",
                "SubnetStatus": "Active",
                "SubnetAvailabilityZone": {
                  "Name": "us-central-2c"
                }
              },
              {
                "SubnetIdentifier": "subnet-########",
                "SubnetStatus": "Active",
                "SubnetAvailabilityZone": {
                  "Name": "us-central-2f"
                }
              },
              {
                "SubnetIdentifier": "subnet-########",
                "SubnetStatus": "Active",
                "SubnetAvailabilityZone": {
                  "Name": "us-central-2a"
                }
              },
              {
                "SubnetIdentifier": "subnet-########",
                "SubnetStatus": "Active",
                "SubnetAvailabilityZone": {
                  "Name": "us-central-2b"
                }
              }
            ],
            "SubnetGroupStatus": "Complete",
            "DBSubnetGroupDescription": "default",
            "DBSubnetGroupName": "default"
          },
          "DbiResourceId": "db-EXAMPLE0000000000000000000",
          "DatabaseInsightsMode": null,
          "DedicatedLogVolume": false,
          "DeletionProtection": false,
          "DomainMemberships": [],
          "IAMDatabaseAuthenticationEnabled": false,
          "PerformanceInsightsEnabled": false,
          "Endpoint": {
            "HostedZoneId": "EXAMPLE0000007",
            "Address": "mysqldb.########.us-central-2.rds.amazonaws.com",
            "Port": 3306
          },
          "Engine": "mysql",
          "EngineLifecycleSupport": null,
          "EngineVersion": "5.6.39",
          "EnhancedMonitoringResourceArn": "arn:aws:logs:us-central-2:1234567890:log-group:RDSOSMetrics:log-stream:db-EXAMPLE0000000000000000000",
          "InstanceCreateTime": "2018-03-28T19:54:07.871Z",
          "Iops": 1000,
          "IsStorageConfigUpgradeAvailable": false,
          "KmsKeyId": "arn:aws:kms:us-central-2:1234567890:key/######################",
          "LatestRestorableTime": "2018-03-28T20:10:00Z",
          "LicenseModel": "general-public-license",
          "MasterUsername": "mysqldbadmin",
          "MonitoringInterval": 60,
          "MonitoringRoleArn": "arn:aws:iam::1234567890:role/rds-EXAMPLE021-role",
          "MultiAZ": true,
          "NetworkType": null,
          "OptionGroupMemberships": [
            {
              "OptionGroupName": "default:mysql-5-6",
              "Status": "in-sync"
            }
          ],
          "PendingModifiedValues": {},
          "DbInstancePort": 0,
          "PreferredBackupWindow": "05:27-05:57",
          "PreferredMaintenanceWindow": "fri:05:57-fri:06:27",
          "PubliclyAccessible": true,
          "ReadReplicaDBInstanceIdentifiers": [],
          "SecondaryAvailabilityZone": "us-central-2a",
          "StorageEncrypted": true,
          "StorageThroughput": null,
          "StorageType": "io1",
          "Tags": [
            {
              "Key": "Environment",
              "Value": "production"
            },
            {
              "Key": "Team",
              "Value": "database"
            },
            {
              "Key": "Application",
              "Value": "web-app"
            }
          ],
          "VpcSecurityGroups": [
            {
              "VpcSecurityGroupId": "sg-########",
              "Status": "active"
            }
          ]
        }
      }
    ],
    "s3-bucket": [
      {
        "Type": "AWS::S3::Bucket",
        "Properties": {
          "BucketName": "example-production-bucket",
          "Arn": "arn:aws:s3:::my-EXAMPLE016-bucket",
          "CreationDate": "2023-10-15T14:30:00.000Z",
          "Tags": [
            {
              "Key": "Environment",
              "Value": "production"
            },
            {
              "Key": "Team",
              "Value": "platform"
            },
            {
              "Key": "CostCenter",
              "Value": "engineering"
            }
          ],
          "BucketEncryption": {
            "Rules": [
              {
                "ApplyServerSideEncryptionByDefault": {
                  "SSEAlgorithm": "aws:kms",
                  "KMSMasterKeyID": "arn:aws:kms:us-central-2:123456789012:key/12345678-1234-1234-1234-123456789012"
                },
                "BucketKeyEnabled": true
              }
            ]
          },
          "PublicAccessBlockConfiguration": {
            "BlockPublicAcls": true,
            "IgnorePublicAcls": true,
            "BlockPublicPolicy": true,
            "RestrictPublicBuckets": true
          },
          "OwnershipControls": {
            "Rules": [
              {
                "ObjectOwnership": "BucketOwnerPreferred"
              }
            ]
          }
        }
      }
    ],
    "sqs-queue": [
      {
        "Type": "AWS::SQS::Queue",
        "Properties": {
          "QueueUrl": "https://sqs.us-central-2.amazonaws.com/123456789012/example-production-queue",
          "QueueArn": "arn:aws:sqs:us-central-2:123456789012:my-EXAMPLE016-queue",
          "ApproximateNumberOfMessages": 5,
          "ApproximateNumberOfMessagesNotVisible": 2,
          "ApproximateNumberOfMessagesDelayed": 0,
          "CreatedTimestamp": "2004",
          "LastModifiedTimestamp": "2005",
          "VisibilityTimeout": 60,
          "MaximumMessageSize": 1030,
          "MessageRetentionPeriod": 1031,
          "DelaySeconds": 0,
          "ReceiveMessageWaitTimeSeconds": 2,
          "Policy": "{\"Version\":\"2012-10-17\",\"Id\":\"Policy2006\",\"Statement\":[{\"Sid\":\"Stmt2007\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Action\":\"sqs:ReceiveMessage\",\"Resource\":\"arn:aws:sqs:us-central-2:123456789012:my-EXAMPLE016-queue\"}]}",
          "RedrivePolicy": "{\"deadLetterTargetArn\":\"arn:aws:sqs:us-central-2:123456789012:my-EXAMPLE016-queue-dlq\",\"maxReceiveCount\":3}",
          "RedriveAllowPolicy": "{\"redrivePermission\":\"allowAll\"}",
          "KmsMasterKeyId": "alias/aws/sqs",
          "KmsDataKeyReusePeriodSeconds": 300,
          "SqsManagedSseEnabled": true,
          "FifoQueue": false,
          "ContentBasedDeduplication": false,
          "DeduplicationScope": "queue",
          "FifoThroughputLimit": "perQueue",
          "Tags": {
            "Environment": "production",
            "Team": "platform",
            "CostCenter": "engineering",
            "Application": "order-processing"
          }
        },
        "__ExtraContext": {
          "AccountId": "123456789012",
          "Region": "us-central-2"
        }
      }
    ]
  }
}
