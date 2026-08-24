# aws-v3 raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `aws-v3` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### account-info

```json
{
	"Type": "AWS::Account::Info",
	"Properties": {
		"Id": "123456789012",
		"Name": "account-name"
	}
}
```

### codebuild-build-run

```json
{
	"Type": "AWS::CodeBuild::BuildRun",
	"Properties": {
		"Arn": "arn:aws:codebuild:eu-west-1:123456789012:build/test-project-0a8232e7e6e8:05e0378b-f071-4c80-85f6-e307757e8120",
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
		"EncryptionKey": "arn:aws:kms:eu-west-1:build:alias/aws/s3",
		"EndTime": "2026-06-01T14:41:28.045000+03:00",
		"Environment": {
			"type": "LINUX_CONTAINER",
			"image": "aws/codebuild/amazonlinux2-x86_64-standard:5.0",
			"computeType": "BUILD_GENERAL1_SMALL",
			"environmentVariables": [],
			"privilegedMode": false,
			"imagePullCredentialsType": "CODEBUILD"
		},
		"Id": "test-project-0a8232e7e6e8:05e0378b-f071-4c80-85f6-e307757e8120",
		"Initiator": "codepipeline/MyPipeline",
		"Logs": {
			"groupName": "/aws/codebuild/test-project-0a8232e7e6e7",
			"streamName": "05e0214b-f071-4c80-85f6-e307757e8120",
			"deepLink": "https://console.aws.amazon.com/cloudwatch/home?region=eu-west-1#logsV2:log-groups/log-group/$252Faws$252Fcodebuild$252FSimpleSchedulePythonBuildProject-0a8232e7e6e7/log-events/05e0214b-f071-4c80-85f6-e307757e8120",
			"cloudWatchLogsArn": "arn:aws:logs:eu-west-1:268995414429:log-group:/aws/codebuild/SimpleSchedulePythonBuildProject-0a8232e7e6e7:log-stream:05e0214b-f071-4c80-85f6-e307757e8120"
		},
		"Phases": [
			{
				"phaseType": "SUBMITTED",
				"phaseStatus": "SUCCEEDED",
				"startTime": "2026-06-01T14:41:21.968000+03:00",
				"endTime": "2026-06-01T14:41:22.076000+03:00",
				"durationInSeconds": 0
			},
			{
				"phaseType": "QUEUED",
				"phaseStatus": "SUCCEEDED",
				"startTime": "2026-06-01T14:41:22.076000+03:00",
				"endTime": "2026-06-01T14:41:22.642000+03:00",
				"durationInSeconds": 0
			},
			{
				"phaseType": "PROVISIONING",
				"phaseStatus": "SUCCEEDED",
				"startTime": "2026-06-01T14:41:22.642000+03:00",
				"endTime": "2026-06-01T14:41:25.711000+03:00",
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
				"startTime": "2026-06-01T14:41:25.711000+03:00",
				"endTime": "2026-06-01T14:41:27.136000+03:00",
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
				"startTime": "2026-06-01T14:41:27.136000+03:00",
				"endTime": "2026-06-01T14:41:27.257000+03:00",
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
				"startTime": "2026-06-01T14:41:27.257000+03:00",
				"endTime": "2026-06-01T14:41:27.295000+03:00",
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
				"startTime": "2026-06-01T14:41:27.295000+03:00",
				"endTime": "2026-06-01T14:41:27.450000+03:00",
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
				"startTime": "2026-06-01T14:41:27.450000+03:00",
				"endTime": "2026-06-01T14:41:27.485000+03:00",
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
				"startTime": "2026-06-01T14:41:27.485000+03:00",
				"endTime": "2026-06-01T14:41:27.551000+03:00",
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
				"startTime": "2026-06-01T14:41:27.551000+03:00",
				"endTime": "2026-06-01T14:41:28.045000+03:00",
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
				"startTime": "2026-06-01T14:41:28.045000+03:00"
			}
		],
		"ProjectName": "test-project-0a8232e7e6e7",
		"QueuedTimeoutInMinutes": 480,
		"ResolvedSourceVersion": "a03a2f7c04724979e58a8852c0c8062facfeff2b",
		"SecondarySources": [],
		"SecondarySourceVersions": [],
		"ServiceRole": "arn:aws:iam::123456789012:role/CodePipelineStarterTemplate-ScheduleA-CodeBuildRole-mNoEBLqvGMFc",
		"Source": {
			"type": "CODEPIPELINE",
			"buildspec": "version: 0.2\n\nphases:\n  build:\n    commands:\n      - echo \"Ding\"",
			"insecureSsl": false
		},
		"SourceVersion": "arn:aws:s3:::codepipelinestartertempla-codepipelineartifactsbuc-xdx8gvyceuuq/SimpleSchedulePython/SourceOutp/ezxwXmH",
		"StartTime": "2026-06-01T14:41:21.968000+03:00",
		"TimeoutInMinutes": 45
	},
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "eu-west-1"
	}
}
```

### codebuild-project

```json
{
	"Type": "AWS::CodeBuild::Project",
	"Properties": {
		"Name": "sample-codebuild-project",
		"Arn": "arn:aws:codebuild:us-east-1:123456789012:project/sample-codebuild-project",
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
		"EncryptionKey": "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012",
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
			"badgeRequestUrl": "https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiSampleEncryptedData"
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
			"url": "https://codebuild.us-east-1.amazonaws.com/webhooks?12345",
			"payloadUrl": "https://codebuild.us-east-1.amazonaws.com/webhooks?12345",
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
	"__Region": "us-east-1",
	"__AccountId": "123456789012",
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "us-east-1"
	}
}
```

### codedeploy-application

```json
{
	"Type": "AWS::CodeDeploy::Application",
	"Properties": {
		"ApplicationName": "example-application",
		"ApplicationId": "f14523ba6-66e4-4849-bd12-42e0ea4d43c0",
		"CreateTime": "2026-05-31T16:55:54.858000+03:00",
		"LinkedToGitHub": false,
		"GitHubAccountName": null,
		"ComputePlatform": "Server",
		"Tags": []
	},
	"__ExtraContext": {
		"AccountId": "123465890",
		"Region": "eu-west-1"
	}
}
```

### codedeploy-deployment

```json
{
	"Type": "AWS::CodeDeploy::Deployment",
	"Properties": {
		"AdditionalDeploymentStatusInfo": null,
		"ApplicationName": "MyPythonCodeDeployApp",
		"AutoRollbackConfiguration": null,
		"BlueGreenDeploymentConfiguration": null,
		"CompleteTime": null,
		"CreateTime": "2026-06-16T16:16:16.162000+03:00",
		"Creator": "user",
		"DeploymentGroupName": "MyDeploymentGroup",
		"DeploymentId": "d-F7ZFJNVSJ",
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
		"Region": "eu-west-1"
	}
}
```

### codedeploy-deployment-group

```json
{
	"Type": "AWS::CodeDeploy::DeploymentGroup",
	"Properties": {
		"ApplicationName": "MyApp",
		"AutoScalingGroups": [],
		"ComputePlatform": "Server",
		"DeploymentConfigName": "CodeDeployDefault.OneAtATime",
		"DeploymentGroupId": "d87f1777-7de0-47e2-8f89-f193c382ee6d",
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
			"deploymentId": "d-92GQ47BKJ",
			"status": "Failed",
			"endTime": "2026-06-03T16:10:48.108000+03:00",
			"createTime": "2026-06-03T16:10:47.199000+03:00"
		},
		"OnPremisesInstanceTagFilters": [],
		"OutdatedInstancesStrategy": "UPDATE",
		"ServiceRoleArn": "arn:aws:iam::123456789012:role/service-role/Somebody",
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
		"Region": "eu-west-1"
	}
}
```

### codedeploy-deployment-target

```json
{
	"Type": "AWS::CodeDeploy::DeploymentTarget",
	"Properties": {
		"DeploymentId": "d-EXAMPLE11",
		"DeploymentTargetType": "InstanceTarget",
		"InstanceTarget": {
			"deploymentId": "d-EXAMPLE11",
			"targetId": "i-0123456789abcdef0",
			"targetArn": "arn:aws:ec2:us-east-1:123456789012:instance/i-0123456789abcdef0",
			"lastUpdatedAt": "2026-06-03T16:10:48.108000+00:00",
			"lifecycleEvents": [
				{
					"lifecycleEventName": "ApplicationStop",
					"diagnostics": null,
					"startTime": "2026-06-03T16:10:47.000000+00:00",
					"endTime": "2026-06-03T16:10:47.500000+00:00",
					"status": "Succeeded"
				},
				{
					"lifecycleEventName": "ApplicationStart",
					"diagnostics": null,
					"startTime": "2026-06-03T16:10:47.600000+00:00",
					"endTime": "2026-06-03T16:10:48.108000+00:00",
					"status": "Succeeded"
				}
			],
			"instanceLabel": "Blue",
			"status": "Succeeded"
		}
	},
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "us-east-1"
	}
}
```

### codepipeline-action

```json
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
			"ConnectionArn": "arn:aws:codeconnections:eu-west-1:12345678012:connection/1fb197f2-18g8-47f5-9d79-35fed26b2133",
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
		"PipelineArn": "arn:aws:codepipeline:eu-west-1:123456789012:my-pipeline",
		"PipelineVersion": 2,
		"Region": "eu-west-1",
		"RunOrder": 1,
		"StageName": "Source"
	},
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "eu-west-1"
	}
}
```

### codepipeline-action-execution

```json
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
				"ConnectionArn": "arn:aws:codeconnections:eu-west-1:123456789012:connection/1fb197f2-18g8-47f5-9d79-35fed26b2133",
				"FullRepositoryId": "Organization/Repo",
				"OutputArtifactFormat": "CODEBUILD_CLONE_REF"
			},
			"RoleArn": "arn:aws:iam::123456789012:role/codepipeline-role",
			"Region": "eu-west-1",
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
				"ExternalExecutionUrl": "https://eu-west-1.console.aws.amazon.com/codesuite/codeconnections/connections"
			},
			"OutputVariables": {}
		}
	},
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "eu-west-1"
	}
}
```

### codepipeline-pipeline

```json
{
	"Type": "AWS::CodePipeline::Pipeline",
	"Properties": {
		"Name": "SimpleSchedulePythonBuildService",
		"PipelineArn": "arn:aws:codepipeline:us-east-1:123456789012:pipeline/sample-codepipeline-pipeline",
		"RoleArn": "arn:aws:iam::1234567890:role/CodePipelineStarterTempla-CodeConnectionsActionRole-abcD7EOOCwn8",
		"ArtifactStore": {
			"location": "codepipelinestartertempla-codepipelineartifactsbuc-xdz8gvyceuuh",
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
							"ConnectionArn": "arn:aws:codeconnections:eu-west-1:1234567890:connection/2fb507g1-18f8-47f5-9z19-47f6d22b6133",
							"DetectChanges": "false",
							"FullRepositoryId": "Organization/Repository"
						},
						"outputArtifacts": [
							{
								"name": "SourceOutput"
							}
						],
						"inputArtifacts": [],
						"roleArn": "arn:aws:iam::1234567890:role/CodePipelineStarterTempla-CodeConnectionsActionRole-abcD7EOOCwn8"
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
							"ProjectName": "SimpleSchedulePythonBuildProject-0a8232e7e6e7"
						},
						"outputArtifacts": [],
						"inputArtifacts": [
							{
								"name": "SourceOutput"
							}
						],
						"roleArn": "arn:aws:iam::1234567890:role/CodePipelineStarterTemplate-Sch-CodeBuildActionRole-aBcDEF2gqrVs"
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
		"Created": "2026-06-01T14:41:13.216000+03:00",
		"Updated": "2026-06-01T14:41:13.216000+03:00",
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
		"Region": "eu-west-1"
	}
}
```

### codepipeline-pipeline-execution

```json
{
	"Type": "AWS::CodePipeline::PipelineExecution",
	"Properties": {
		"ArtifactRevisions": [],
		"ExecutionMode": "SUPERSEDED",
		"LastUpdateTime": "2026-06-04T14:11:40.176000+03:00",
		"PipelineExecutionId": "43858f3d-2987-40c7-9332-f82611de1449",
		"PipelineName": "my-pipeline",
		"PipelineVersion": 1,
		"SourceRevisions": [],
		"StartTime": "2026-06-04T14:11:28.350000+03:00",
		"Status": "Failed",
		"Trigger": {
			"triggerType": "CreatePipeline",
			"triggerDetail": "arn:aws:sts::123456789012:assumed-role/AWSReservedSSO_PowerUserAccess_43dd902745d50632/my_user@port.io"
		}
	},
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "eu-west-1"
	}
}
```

### codepipeline-stage

```json
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
					"ConnectionArn": "arn:aws:codeconnections:eu-west-1:123456789012:connection/1fb190f1-18f2-47f5-9f19-35f6d26b6134",
					"FullRepositoryId": "Org/Repo",
					"OutputArtifactFormat": "CODEBUILD_CLONE_REF"
				},
				"outputArtifacts": [
					{
						"name": "SourceArtifact"
					}
				],
				"inputArtifacts": [],
				"region": "eu-west-1"
			}
		],
		"Name": "Source",
		"Order": 1,
		"PipelineArn": "arn:aws:codepipeline:eu-west-1:123456789012:my-pipeline",
		"PipelineName": "my-pipeline"
	},
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "eu-west-1"
	}
}
```

### ec2-instance

```json
{
	"Type": "AWS::EC2::Instance",
	"Properties": {
		"InstanceId": "i-0a1b2c3d4e5f67890",
		"InstanceType": "t3.medium",
		"State": {
			"Code": 16,
			"Name": "running"
		},
		"PublicIpAddress": "54.123.45.67",
		"PrivateIpAddress": "10.0.1.100",
		"ImageId": "ami-0abcdef1234567890",
		"SubnetId": "subnet-12345678901234567",
		"VpcId": "vpc-12345678901234567",
		"LaunchTime": "2024-03-15T08:30:00.000Z",
		"Platform": "Linux/UNIX",
		"Architecture": "x86_64",
		"KeyName": "my-key-pair",
		"Placement": {
			"AvailabilityZone": "us-east-1a",
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
				"Value": "my-production-server"
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
		"Region": "us-east-1"
	}
}
```

### ec2-volume

```json
{
	"Type": "AWS::EC2::Volume",
	"Properties": {
		"VolumeId": "vol-09a13562b4dacdee2",
		"VolumeType": "gp2",
		"Size": 10,
		"Iops": 100,
		"Throughput": null,
		"AvailabilityZone": "eu-west-1c",
		"State": "available",
		"CreateTime": "2024-04-17T19:45:45.700000+00:00",
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
		"Region": "eu-west-1"
	}
}
```

### ecr-repository

```json
{
	"Type": "AWS::ECR::Repository",
	"Properties": {
		"RepositoryName": "my-app/backend",
		"RepositoryArn": "arn:aws:ecr:us-east-1:123456789012:repository/my-app/backend",
		"RegistryId": "123456789012",
		"RepositoryUri": "123456789012.dkr.ecr.us-east-1.amazonaws.com/my-app/backend",
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
		"Region": "us-east-1"
	}
}
```

### ecs-cluster

```json
{
	"Type": "AWS::ECS::Cluster",
	"Properties": {
		"ClusterName": "my-production-cluster",
		"ClusterArn": "arn:aws:ecs:eu-west-1:123456789012:cluster/my-cluster",
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
		"Region": "eu-west-1"
	}
}
```

### ecs-task-definition

```json
{
	"Type": "AWS::ECS::TaskDefinition",
	"Properties": {
		"TaskDefinitionArn": "arn:aws:ecs:eu-west-1:123456789012:task-definition/port-ocean-aws-aws-integration:3",
		"Family": "port-ocean-aws-aws-integration",
		"Revision": 3,
		"Status": "ACTIVE",
		"ContainerDefinitions": [
			{
				"name": "port-ocean-aws-aws-integration",
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
						"valueFrom": "arn:aws:secretsmanager:eu-west-1:123456789012:secret:port-credentials"
					},
					{
						"name": "OCEAN__INTEGRATION",
						"valueFrom": "arn:aws:secretsmanager:eu-west-1:123456789012:secret:integration-config"
					}
				],
				"logConfiguration": {
					"logDriver": "awslogs",
					"options": {
						"awslogs-group": "/ecs/port-ocean-aws-aws-integration",
						"awslogs-create-group": "true",
						"awslogs-region": "eu-west-1",
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
		"TaskRoleArn": "arn:aws:iam::123456789012:role/ecs-task-role-port-ocean-aws-aws-integration",
		"ExecutionRoleArn": "arn:aws:iam::123456789012:role/ecs-task-execution-role-port-ocean-aws-aws-integration",
		"Volumes": [],
		"PlacementConstraints": [],
		"Tags": [],
		"RegisteredAt": "2024-08-20T19:54:12.602000+01:00"
	},
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "eu-west-1"
	}
}
```

### eks-cluster

```json
{
	"Type": "AWS::EKS::Cluster",
	"Properties": {
		"Name": "my-production-cluster",
		"Arn": "arn:aws:eks:us-west-2:123456789012:cluster/my-production-cluster",
		"CreatedAt": "2025-09-25T09:24:31.701000+00:00",
		"Version": "1.33",
		"Endpoint": "https://ABCDEF1234567890ABCDEF1234567890.sk1.us-west-2.eks.amazonaws.com",
		"RoleArn": "arn:aws:iam::123456789012:role/AmazonEKSClusterRole",
		"ResourcesVpcConfig": {
			"subnetIds": [
				"subnet-12345678901234567",
				"subnet-23456789012345678",
				"subnet-34567890123456789"
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
				"issuer": "https://oidc.eks.us-west-2.amazonaws.com/id/ABCDEF1234567890ABCDEF1234567890"
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
```

### elasticache-cluster

```json
{
	"Type": "AWS::ElastiCache::Cluster",
	"Properties": {
		"CacheClusterId": "my-cluster",
		"ARN": "arn:aws:elasticache:eu-west-1:123456789012:cluster:my-cluster",
		"ClientDownloadLandingPage": "https://console.aws.amazon.com/elasticache/home#client-download:",
		"CacheNodeType": "cache.t4g.micro",
		"Engine": "redis",
		"EngineVersion": "7.1.0",
		"CacheClusterStatus": "available",
		"NumCacheNodes": 1,
		"PreferredAvailabilityZone": "eu-west-1b",
		"CacheClusterCreateTime": "2025-04-16T17:42:04.653000+00:00",
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
				"CacheNodeCreateTime": "2025-04-16T17:42:04.653000+00:00",
				"Endpoint": {
					"Address": "my-cluster.xxxxxx.0001.euw1.cache.amazonaws.com",
					"Port": 6379
				},
				"ParameterGroupStatus": "in-sync",
				"CustomerAvailabilityZone": "eu-west-1b"
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
		"Region": "eu-west-1"
	}
}
```

### lambda-function

```json
{
	"Type": "AWS::Lambda::Function",
	"Properties": {
		"FunctionName": "my-function",
		"FunctionArn": "arn:aws:lambda:us-east-1:123456789012:function:my-function",
		"Runtime": "python3.9",
		"Handler": "index.handler",
		"MemorySize": 512,
		"Timeout": 30,
		"State": "Active",
		"LastModified": "2023-12-01T10:30:00.000+0000",
		"CodeSha256": "abcd1234efgh5678ijkl9012mnop3456qrst7890uvwx1234yzab5678cdef",
		"CodeSize": 1024000,
		"Description": "My sample Lambda function",
		"Role": "arn:aws:iam::123456789012:role/lambda-execution-role",
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
			"TargetArn": "arn:aws:sqs:us-east-1:123456789012:my-dlq"
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
			"RuntimeVersionArn": "arn:aws:lambda:us-east-1::runtime:python3.9",
			"Error": null
		},
		"SnapStart": {
			"ApplyOn": "PublishedVersions",
			"OptimizationStatus": "On"
		},
		"Layers": [
			{
				"Arn": "arn:aws:lambda:us-east-1:123456789012:layer:my-layer:1",
				"CodeSize": 1024000,
				"SigningJobArn": null,
				"SigningProfileVersionArn": null
			}
		],
		"Architectures": [
			"x86_64"
		],
		"FileSystemConfigs": [
			{
				"Arn": "arn:aws:elasticfilesystem:us-east-1:123456789012:access-point/fsap-12345678",
				"LocalMountPath": "/mnt/efs"
			}
		],
		"Tags": {
			"Environment": "production",
			"Team": "backend",
			"Project": "my-project"
		},
		"KmsKeyArn": "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012"
	}
}
```

### memorydb-user

```json
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
		"ARN": "arn:aws:memorydb:eu-west-1:123456789012:user/default",
		"TagList": []
	},
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "eu-west-1"
	}
}
```

### msk-cluster

```json
{
	"Type": "AWS::MSK::Cluster",
	"Properties": {
		"ClusterArn": "arn:aws:kafka:eu-west-1:123456789012:cluster/demo-cluster-1/a1b2c3d4-e5f6-7890-abcd-ef1234567890",
		"ClusterName": "demo-cluster-1",
		"State": "ACTIVE",
		"CreationTime": "2026-04-19T14:51:13.196000+00:00",
		"CurrentVersion": "K2EUQ1WTGCTBG2",
		"BrokerNodeGroupInfo": {
			"BrokerAZDistribution": "DEFAULT",
			"ClientSubnets": [
				"subnet-0123456789abcdef0",
				"subnet-0123456789abcdef1",
				"subnet-0123456789abcdef2"
			],
			"InstanceType": "express.m7g.large",
			"SecurityGroups": [
				"sg-0123456789abcdef0"
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
				"euw1-az1",
				"euw1-az3",
				"euw1-az2"
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
				"DataVolumeKMSKeyId": "arn:aws:kms:eu-west-1:123456789012:key/a1b2c3d4-e5f6-7890-abcd-ef1234567890"
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
		"Region": "eu-west-1"
	}
}
```

### msk-serverless-cluster

```json
{
	"Type": "AWS::MSK::ServerlessCluster",
	"Properties": {
		"ActiveOperationArn": null,
		"ClusterArn": "arn:aws:kafka:eu-west-1:123456789012:cluster/my-serverless-cluster/abcd1234-ab12-cd34-ef56-abcdef012345-1",
		"ClusterName": "my-serverless-cluster",
		"ClusterType": "SERVERLESS",
		"CreationTime": "2024-03-15T10:30:00+00:00",
		"CurrentVersion": "K3AEGXETSR30VB",
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
						"sg-0123456789abcdef0"
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
		"Region": "eu-west-1"
	}
}
```

### organizations-account

```json
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
```

### rds-db-cluster

```json
{
	"Type": "AWS::RDS::DBCluster",
	"Properties": {
		"ActivityStreamStatus": "stopped",
		"AssociatedRoles": [],
		"AutoMinorVersionUpgrade": true,
		"AvailabilityZones": [
			"us-east-1a",
			"us-east-1b",
			"us-east-1c"
		],
		"BackupRetentionPeriod": 7,
		"ClusterCreateTime": "2024-03-15T10:22:33.456Z",
		"CopyTagsToSnapshot": true,
		"CrossAccountClone": false,
		"DatabaseName": "myappdb",
		"DBClusterArn": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-cluster",
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
		"Endpoint": "my-aurora-cluster.cluster-abcdefgh1234.us-east-1.rds.amazonaws.com",
		"Engine": "aurora-mysql",
		"EngineMode": "provisioned",
		"EngineVersion": "8.0.mysql_aurora.3.04.0",
		"GlobalWriteForwardingStatus": "disabled",
		"HttpEndpointEnabled": false,
		"IAMDatabaseAuthenticationEnabled": true,
		"KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/mrk-abcdef1234567890",
		"LatestRestorableTime": "2024-03-20T08:15:00.000Z",
		"MasterUsername": "admin",
		"MultiAZ": true,
		"NetworkType": "IPV4",
		"Port": 3306,
		"PreferredBackupWindow": "02:00-03:00",
		"PreferredMaintenanceWindow": "sun:05:00-sun:06:00",
		"ReaderEndpoint": "my-aurora-cluster.cluster-ro-abcdefgh1234.us-east-1.rds.amazonaws.com",
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
				"VpcSecurityGroupId": "sg-0123456789abcdef0",
				"Status": "active"
			}
		],
		"DBSubnetGroup": "my-db-subnet-group"
	},
	"__ExtraContext": {
		"AccountId": "123456789012",
		"Region": "us-east-1"
	}
}
```

### rds-db-instance

```json
{
	"Type": "AWS::RDS::DBInstance",
	"Properties": {
		"ActivityStreamStatus": null,
		"AllocatedStorage": 100,
		"AssociatedRoles": [],
		"AutoMinorVersionUpgrade": true,
		"AvailabilityZone": "us-east-1b",
		"BackupRetentionPeriod": 7,
		"BackupTarget": null,
		"CACertificateIdentifier": "rds-ca-2015",
		"CertificateDetails": null,
		"CharacterSetName": null,
		"CopyTagsToSnapshot": false,
		"CustomerOwnedIpEnabled": false,
		"DBInstanceArn": "arn:aws:rds:us-east-1:1234567890:db:mysqldb",
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
						"Name": "us-east-1e"
					}
				},
				{
					"SubnetIdentifier": "subnet-########",
					"SubnetStatus": "Active",
					"SubnetAvailabilityZone": {
						"Name": "us-east-1d"
					}
				},
				{
					"SubnetIdentifier": "subnet-########",
					"SubnetStatus": "Active",
					"SubnetAvailabilityZone": {
						"Name": "us-east-1c"
					}
				},
				{
					"SubnetIdentifier": "subnet-########",
					"SubnetStatus": "Active",
					"SubnetAvailabilityZone": {
						"Name": "us-east-1f"
					}
				},
				{
					"SubnetIdentifier": "subnet-########",
					"SubnetStatus": "Active",
					"SubnetAvailabilityZone": {
						"Name": "us-east-1a"
					}
				},
				{
					"SubnetIdentifier": "subnet-########",
					"SubnetStatus": "Active",
					"SubnetAvailabilityZone": {
						"Name": "us-east-1b"
					}
				}
			],
			"SubnetGroupStatus": "Complete",
			"DBSubnetGroupDescription": "default",
			"DBSubnetGroupName": "default"
		},
		"DbiResourceId": "db-IXRXA2XS7KFFA6JWYYWFZEBJDE",
		"DatabaseInsightsMode": null,
		"DedicatedLogVolume": false,
		"DeletionProtection": false,
		"DomainMemberships": [],
		"IAMDatabaseAuthenticationEnabled": false,
		"PerformanceInsightsEnabled": false,
		"Endpoint": {
			"HostedZoneId": "Z2R2ITUGPM61AM",
			"Address": "mysqldb.########.us-east-1.rds.amazonaws.com",
			"Port": 3306
		},
		"Engine": "mysql",
		"EngineLifecycleSupport": null,
		"EngineVersion": "5.6.39",
		"EnhancedMonitoringResourceArn": "arn:aws:logs:us-east-1:1234567890:log-group:RDSOSMetrics:log-stream:db-IXRXA2XS7KFFA6JWYYWFZEBJDE",
		"InstanceCreateTime": "2018-03-28T19:54:07.871Z",
		"Iops": 1000,
		"IsStorageConfigUpgradeAvailable": false,
		"KmsKeyId": "arn:aws:kms:us-east-1:1234567890:key/######################",
		"LatestRestorableTime": "2018-03-28T20:10:00Z",
		"LicenseModel": "general-public-license",
		"MasterUsername": "mysqldbadmin",
		"MonitoringInterval": 60,
		"MonitoringRoleArn": "arn:aws:iam::1234567890:role/rds-monitoring-role",
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
		"SecondaryAvailabilityZone": "us-east-1a",
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
```

### s3-bucket

```json
{
	"Type": "AWS::S3::Bucket",
	"Properties": {
		"BucketName": "my-production-bucket",
		"Arn": "arn:aws:s3:::my-production-bucket",
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
						"KMSMasterKeyID": "arn:aws:kms:us-west-2:123456789012:key/12345678-1234-1234-1234-123456789012"
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
```

### sqs-queue

```json
{
	"Type": "AWS::SQS::Queue",
	"Properties": {
		"QueueUrl": "https://sqs.us-east-1.amazonaws.com/123456789012/my-production-queue",
		"QueueArn": "arn:aws:sqs:us-east-1:123456789012:my-production-queue",
		"ApproximateNumberOfMessages": 5,
		"ApproximateNumberOfMessagesNotVisible": 2,
		"ApproximateNumberOfMessagesDelayed": 0,
		"CreatedTimestamp": "1676665337",
		"LastModifiedTimestamp": "1677096375",
		"VisibilityTimeout": 60,
		"MaximumMessageSize": 262144,
		"MessageRetentionPeriod": 1209600,
		"DelaySeconds": 0,
		"ReceiveMessageWaitTimeSeconds": 2,
		"Policy": "{\"Version\":\"2012-10-17\",\"Id\":\"Policy1677095510157\",\"Statement\":[{\"Sid\":\"Stmt1677095506939\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Action\":\"sqs:ReceiveMessage\",\"Resource\":\"arn:aws:sqs:us-east-1:123456789012:my-production-queue\"}]}",
		"RedrivePolicy": "{\"deadLetterTargetArn\":\"arn:aws:sqs:us-east-1:123456789012:my-production-queue-dlq\",\"maxReceiveCount\":3}",
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
		"Region": "us-east-1"
	}
}
```
