# wiz raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `wiz` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### control

#### a.json

```json
{
	"__typename": "Control",
	"id": "wc-id-3206",
	"name": "Publicly exposed cloud resource with non-PQC compliant transport encryption",
	"controlDescription": "This cloud resource is publicly accessible from the internet and uses transport encryption (TLS/SSL) that does not support Post-Quantum Cryptography (PQC) compliant cipher suites or key exchange algorithms. The public exposure combined with classical cryptographic protocols creates an increased attack surface.\n\nPublicly exposed resources are more easily targeted by attackers than internal ones. An attacker can intercept encrypted traffic from this publicly accessible resource and store it for future decryption using quantum computers. This \"Harvest Now, Decrypt Later\" attack vector is particularly concerning for publicly exposed endpoints where traffic interception is more feasible.",
	"resolutionRecommendation": "### Limit external exposure\n* Restrict access to resources that do not need to be accessible from the internet.\n* Ensure that exposed ports allow only encrypted communications.\n\n### Ensure quantum-resistant cryptography\n* Configure TLS settings to enforce modern protocol versions (TLS 1.2 or higher) with PQC-compliant cipher suites.\n* Enable Hybrid Post-Quantum Key Exchange (e.g., ECDHE + ML-KEM) to protect data in transit.\n* Update security policies to mandate quantum-safe key exchange algorithms.\n* Disable support for deprecated cryptographic protocols and cipher suites.\n* Prioritize PQC migration for publicly exposed endpoints.",
	"securitySubCategories": [
		{
			"title": "2 Data-in-transit is protected",
			"category": {
				"name": "9 Data Security (PR.DS)",
				"framework": {
					"name": "NIST CSF v1.1"
				}
			}
		},
		{
			"title": "3.10 Encrypt Sensitive Data in Transit",
			"category": {
				"name": "3 Data Protection",
				"framework": {
					"name": "CIS Controls v8"
				}
			}
		},
		{
			"title": "3.13.8 Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.",
			"category": {
				"name": "3.13 System and Communications Protection",
				"framework": {
					"name": "NIST 800-171 Rev.2"
				}
			}
		},
		{
			"title": "4.1 Use strong cryptography and security protocols to safeguard sensitive cardholder data during transmission over open, public networks",
			"category": {
				"name": "4 encrypt transmission of cardholder data across open, public networks",
				"framework": {
					"name": "PCI DSS v3.1.0"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Cloud Matrix"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Matrix"
				}
			}
		},
		{
			"title": "SC-13 Cryptographic Protection",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		},
		{
			"title": "SC-8 Transmission Confidentiality and Integrity",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		},
		{
			"title": "Security policies",
			"category": {
				"name": "Session Negotiation - PQC Compliance",
				"framework": {
					"name": "Wiz for Post-Quantum Cryptography Security"
				}
			}
		}
	]
}
```

#### b.json

```json
{
	"__typename": "Control",
	"id": "wc-id-3206",
	"name": "Publicly exposed cloud resource with non-PQC compliant transport encryption",
	"controlDescription": "This cloud resource is publicly accessible from the internet and uses transport encryption (TLS/SSL) that does not support Post-Quantum Cryptography (PQC) compliant cipher suites or key exchange algorithms. The public exposure combined with classical cryptographic protocols creates an increased attack surface.\n\nPublicly exposed resources are more easily targeted by attackers than internal ones. An attacker can intercept encrypted traffic from this publicly accessible resource and store it for future decryption using quantum computers. This \"Harvest Now, Decrypt Later\" attack vector is particularly concerning for publicly exposed endpoints where traffic interception is more feasible.",
	"resolutionRecommendation": "### Limit external exposure\n* Restrict access to resources that do not need to be accessible from the internet.\n* Ensure that exposed ports allow only encrypted communications.\n\n### Ensure quantum-resistant cryptography\n* Configure TLS settings to enforce modern protocol versions (TLS 1.2 or higher) with PQC-compliant cipher suites.\n* Enable Hybrid Post-Quantum Key Exchange (e.g., ECDHE + ML-KEM) to protect data in transit.\n* Update security policies to mandate quantum-safe key exchange algorithms.\n* Disable support for deprecated cryptographic protocols and cipher suites.\n* Prioritize PQC migration for publicly exposed endpoints.",
	"securitySubCategories": [
		{
			"title": "2 Data-in-transit is protected",
			"category": {
				"name": "9 Data Security (PR.DS)",
				"framework": {
					"name": "NIST CSF v1.1"
				}
			}
		},
		{
			"title": "3.10 Encrypt Sensitive Data in Transit",
			"category": {
				"name": "3 Data Protection",
				"framework": {
					"name": "CIS Controls v8"
				}
			}
		},
		{
			"title": "3.13.8 Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.",
			"category": {
				"name": "3.13 System and Communications Protection",
				"framework": {
					"name": "NIST 800-171 Rev.2"
				}
			}
		},
		{
			"title": "4.1 Use strong cryptography and security protocols to safeguard sensitive cardholder data during transmission over open, public networks",
			"category": {
				"name": "4 encrypt transmission of cardholder data across open, public networks",
				"framework": {
					"name": "PCI DSS v3.1.0"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Cloud Matrix"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Matrix"
				}
			}
		},
		{
			"title": "SC-13 Cryptographic Protection",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		},
		{
			"title": "SC-8 Transmission Confidentiality and Integrity",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		},
		{
			"title": "Security policies",
			"category": {
				"name": "Session Negotiation - PQC Compliance",
				"framework": {
					"name": "Wiz for Post-Quantum Cryptography Security"
				}
			}
		}
	]
}
```

#### c.json

```json
{
	"__typename": "Control",
	"id": "wc-id-3206",
	"name": "Publicly exposed cloud resource with non-PQC compliant transport encryption",
	"controlDescription": "This cloud resource is publicly accessible from the internet and uses transport encryption (TLS/SSL) that does not support Post-Quantum Cryptography (PQC) compliant cipher suites or key exchange algorithms. The public exposure combined with classical cryptographic protocols creates an increased attack surface.\n\nPublicly exposed resources are more easily targeted by attackers than internal ones. An attacker can intercept encrypted traffic from this publicly accessible resource and store it for future decryption using quantum computers. This \"Harvest Now, Decrypt Later\" attack vector is particularly concerning for publicly exposed endpoints where traffic interception is more feasible.",
	"resolutionRecommendation": "### Limit external exposure\n* Restrict access to resources that do not need to be accessible from the internet.\n* Ensure that exposed ports allow only encrypted communications.\n\n### Ensure quantum-resistant cryptography\n* Configure TLS settings to enforce modern protocol versions (TLS 1.2 or higher) with PQC-compliant cipher suites.\n* Enable Hybrid Post-Quantum Key Exchange (e.g., ECDHE + ML-KEM) to protect data in transit.\n* Update security policies to mandate quantum-safe key exchange algorithms.\n* Disable support for deprecated cryptographic protocols and cipher suites.\n* Prioritize PQC migration for publicly exposed endpoints.",
	"securitySubCategories": [
		{
			"title": "2 Data-in-transit is protected",
			"category": {
				"name": "9 Data Security (PR.DS)",
				"framework": {
					"name": "NIST CSF v1.1"
				}
			}
		},
		{
			"title": "3.10 Encrypt Sensitive Data in Transit",
			"category": {
				"name": "3 Data Protection",
				"framework": {
					"name": "CIS Controls v8"
				}
			}
		},
		{
			"title": "3.13.8 Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.",
			"category": {
				"name": "3.13 System and Communications Protection",
				"framework": {
					"name": "NIST 800-171 Rev.2"
				}
			}
		},
		{
			"title": "4.1 Use strong cryptography and security protocols to safeguard sensitive cardholder data during transmission over open, public networks",
			"category": {
				"name": "4 encrypt transmission of cardholder data across open, public networks",
				"framework": {
					"name": "PCI DSS v3.1.0"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Cloud Matrix"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Matrix"
				}
			}
		},
		{
			"title": "SC-13 Cryptographic Protection",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		},
		{
			"title": "SC-8 Transmission Confidentiality and Integrity",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		},
		{
			"title": "Security policies",
			"category": {
				"name": "Session Negotiation - PQC Compliance",
				"framework": {
					"name": "Wiz for Post-Quantum Cryptography Security"
				}
			}
		}
	]
}
```

#### d.json

```json
{
	"__typename": "Control",
	"id": "wc-id-3204",
	"name": "Subscription with compute instances using non-PQC compliant SSH authorized keys",
	"controlDescription": "This subscription contains compute instances with SSH authorized keys (public keys) that use classical cryptographic algorithms (such as RSA or ECDSA) which are not resistant to quantum computing attacks. The authorized keys stored on these instances do not utilize Post-Quantum Cryptography (PQC) compliant algorithms.\n\nAuthorized keys using classical algorithms are at risk of being compromised by future quantum computers. An attacker with access to quantum computing capabilities could forge signatures or derive corresponding private keys, gaining unauthorized access to systems within the subscription that trust these authorized keys.\n",
	"resolutionRecommendation": "### Ensure quantum-resistant cryptography\n* Migrate private keys to PQC-compliant algorithms such as ML-DSA (Dilithium) or hybrid key schemes that combine classical and quantum-resistant algorithms.\n* Update SSH configurations to generate and accept only quantum-safe key types.\n* Rotate existing private keys and replace them with quantum-resistant alternatives.\n* Store private keys securely using approved secret management solutions.\n\n### Ensure secure use of cloud keys\n* Manage all cloud keys using approved secret management solutions. Your environment should not contain cleartext cloud keys.\n* Alternatively, remove the key from the resource.\n* If removing the key is impossible, restrict the permissions assigned to the cloud key or store the key encrypted at rest.\n* Set an expiration date for all secrets and rotate them on a regular basis.",
	"securitySubCategories": [
		{
			"title": "3.13.10 Establish and manage cryptographic keys for cryptography employed in organizational systems.",
			"category": {
				"name": "3.13 System and Communications Protection",
				"framework": {
					"name": "NIST 800-171 Rev.2"
				}
			}
		},
		{
			"title": "3.13.11 Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.",
			"category": {
				"name": "3.13 System and Communications Protection",
				"framework": {
					"name": "NIST 800-171 Rev.2"
				}
			}
		},
		{
			"title": "A.10.1.2 Key management",
			"category": {
				"name": "A.10 Cryptography",
				"framework": {
					"name": "ISO/IEC 27001"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Cloud Matrix"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Matrix"
				}
			}
		},
		{
			"title": "Exposed secret",
			"category": {
				"name": "External Attack Surface Management",
				"framework": {
					"name": "Wiz for Risk Assessment"
				}
			}
		},
		{
			"title": "File misconfigurations",
			"category": {
				"name": "Session Negotiation - PQC Compliance",
				"framework": {
					"name": "Wiz for Post-Quantum Cryptography Security"
				}
			}
		},
		{
			"title": "SC-12 Cryptographic Key Establishment and Management",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		},
		{
			"title": "SC-13 Cryptographic Protection",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		}
	]
}
```

#### e.json

```json
{
	"__typename": "Control",
	"id": "wc-id-3204",
	"name": "Subscription with compute instances using non-PQC compliant SSH authorized keys",
	"controlDescription": "This subscription contains compute instances with SSH authorized keys (public keys) that use classical cryptographic algorithms (such as RSA or ECDSA) which are not resistant to quantum computing attacks. The authorized keys stored on these instances do not utilize Post-Quantum Cryptography (PQC) compliant algorithms.\n\nAuthorized keys using classical algorithms are at risk of being compromised by future quantum computers. An attacker with access to quantum computing capabilities could forge signatures or derive corresponding private keys, gaining unauthorized access to systems within the subscription that trust these authorized keys.\n",
	"resolutionRecommendation": "### Ensure quantum-resistant cryptography\n* Migrate private keys to PQC-compliant algorithms such as ML-DSA (Dilithium) or hybrid key schemes that combine classical and quantum-resistant algorithms.\n* Update SSH configurations to generate and accept only quantum-safe key types.\n* Rotate existing private keys and replace them with quantum-resistant alternatives.\n* Store private keys securely using approved secret management solutions.\n\n### Ensure secure use of cloud keys\n* Manage all cloud keys using approved secret management solutions. Your environment should not contain cleartext cloud keys.\n* Alternatively, remove the key from the resource.\n* If removing the key is impossible, restrict the permissions assigned to the cloud key or store the key encrypted at rest.\n* Set an expiration date for all secrets and rotate them on a regular basis.",
	"securitySubCategories": [
		{
			"title": "3.13.10 Establish and manage cryptographic keys for cryptography employed in organizational systems.",
			"category": {
				"name": "3.13 System and Communications Protection",
				"framework": {
					"name": "NIST 800-171 Rev.2"
				}
			}
		},
		{
			"title": "3.13.11 Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.",
			"category": {
				"name": "3.13 System and Communications Protection",
				"framework": {
					"name": "NIST 800-171 Rev.2"
				}
			}
		},
		{
			"title": "A.10.1.2 Key management",
			"category": {
				"name": "A.10 Cryptography",
				"framework": {
					"name": "ISO/IEC 27001"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Cloud Matrix"
				}
			}
		},
		{
			"title": "Data Encrypted for Impact",
			"category": {
				"name": "Impact",
				"framework": {
					"name": "MITRE ATT&CK Matrix"
				}
			}
		},
		{
			"title": "Exposed secret",
			"category": {
				"name": "External Attack Surface Management",
				"framework": {
					"name": "Wiz for Risk Assessment"
				}
			}
		},
		{
			"title": "File misconfigurations",
			"category": {
				"name": "Session Negotiation - PQC Compliance",
				"framework": {
					"name": "Wiz for Post-Quantum Cryptography Security"
				}
			}
		},
		{
			"title": "SC-12 Cryptographic Key Establishment and Management",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		},
		{
			"title": "SC-13 Cryptographic Protection",
			"category": {
				"name": "SC System And Communications Protection",
				"framework": {
					"name": "NIST SP 800-53 Revision 5"
				}
			}
		}
	]
}
```

### hosted-technology

#### a.json

```json
{
	"id": "7ef60ebe-841e-5a72-be95-e72e0d2219a1",
	"name": "NGINX (docker.io/nginx@dec7a90b)",
	"technology": {
		"id": "2599",
		"name": "NGINX"
	},
	"resource": {
		"id": "8687d4ec-9644-55ba-a9be-6c7c9bfa0111",
		"name": "docker.io/nginx@dec7a90b"
	},
	"detectionMethods": [
		"PACKAGE",
		"EXTERNAL_NETWORK_SCAN"
	],
	"installedPackages": null,
	"firstSeen": "2026-03-18T14:17:59.986833Z",
	"updatedAt": "2026-03-21T07:51:42.977126Z",
	"cpe": "cpe:/a:f5:nginx:1.29.6"
}
```

#### b.json

```json
{
	"id": "5f7abf81-8fc9-5574-badc-5ab93f34579c",
	"name": "Linux Debian (docker.io/nginx@dec7a90b)",
	"technology": {
		"id": "4370",
		"name": "Linux Debian"
	},
	"resource": {
		"id": "8687d4ec-9644-55ba-a9be-6c7c9bfa0111",
		"name": "docker.io/nginx@dec7a90b"
	},
	"detectionMethods": [
		"OS"
	],
	"installedPackages": [
		"apt (3.0.3)",
		"base-files (13.8+deb13u4)",
		"base-passwd (3.6.7)",
		"bash (5.2.37-2+b8)",
		"bsdutils (1:2.41-5)",
		"ca-certificates (20250419)",
		"coreutils (9.7-3)",
		"curl (8.14.1-2+deb13u2)",
		"dash (0.5.12-12)",
		"debconf (1.5.91)",
		"debian-archive-keyring (2025.1)",
		"debianutils (5.23.2)",
		"diffutils (1:3.10-4)",
		"dpkg (1.22.22)",
		"findutils (4.10.0-3)",
		"fontconfig-config (2.15.0-2.3)",
		"fonts-dejavu-core (2.37-8)",
		"fonts-dejavu-mono (2.37-8)",
		"gcc-14-base (14.2.0-19)",
		"gettext-base (0.23.1-2)",
		"grep (3.11-4)",
		"gzip (1.13-1)",
		"hostname (3.25)",
		"init-system-helpers (1.69~deb13u1)",
		"libabsl20240722 (20240722.0-4)",
		"libacl1 (2.3.2-2+b1)",
		"libaom3 (3.12.1-1)",
		"libapt-pkg7.0 (3.0.3)",
		"libattr1 (1:2.5.2-3)",
		"libaudit-common (1:4.0.2-2)",
		"libaudit1 (1:4.0.2-2+b2)",
		"libavif16 (1.2.1-1.2)",
		"libblkid1 (2.41-5)",
		"libbrotli1 (1.1.0-2+b7)",
		"libbsd0 (0.12.2-2)",
		"libbz2-1.0 (1.0.8-6)",
		"libc-bin (2.41-12+deb13u2)",
		"libc6 (2.41-12+deb13u2)",
		"libcap-ng0 (0.8.5-4+b1)",
		"libcap2 (1:2.75-10+b8)",
		"libcom-err2 (1.47.2-3+b10)",
		"libcrypt1 (1:4.4.38-1)",
		"libcurl4t64 (8.14.1-2+deb13u2)",
		"libdav1d7 (1.5.1-1)",
		"libdb5.3t64 (5.3.28+dfsg2-9)",
		"libde265-0 (1.0.15-1+b3)",
		"libdebconfclient0 (0.280)",
		"libdeflate0 (1.23-2)",
		"libedit2 (3.1-20250104-1)",
		"libexpat1 (2.7.1-2)",
		"libffi8 (3.4.8-2)",
		"libfontconfig1 (2.15.0-2.3)",
		"libfreetype6 (2.13.3+dfsg-1)",
		"libgav1-1 (0.19.0-3+b1)",
		"libgcc-s1 (14.2.0-19)",
		"libgcrypt20 (1.11.0-7)",
		"libgd3 (2.3.3-13)",
		"libgeoip1t64 (1.6.12-11.1+b1)",
		"libgmp10 (2:6.3.0+dfsg-3)",
		"libgnutls30t64 (3.8.9-3+deb13u2)",
		"libgomp1 (14.2.0-19)",
		"libgpg-error0 (1.51-4)",
		"libgssapi-krb5-2 (1.21.3-5)",
		"libheif-plugin-dav1d (1.19.8-1)",
		"libheif-plugin-libde265 (1.19.8-1)",
		"libheif1 (1.19.8-1)",
		"libhogweed6t64 (3.10.1-1)",
		"libidn2-0 (2.3.8-2)",
		"libimagequant0 (2.18.0-1+b2)",
		"libjbig0 (2.1-6.1+b2)",
		"libjpeg62-turbo (1:2.1.5-4)",
		"libk5crypto3 (1.21.3-5)",
		"libkeyutils1 (1.6.3-6)",
		"libkrb5-3 (1.21.3-5)",
		"libkrb5support0 (1.21.3-5)",
		"liblastlog2-2 (2.41-5)",
		"libldap2 (2.6.10+dfsg-1)",
		"liblerc4 (4.0.0+ds-5)",
		"liblz4-1 (1.10.0-4)",
		"liblzma5 (5.8.1-1)",
		"libmd0 (1.1.0-2+b1)",
		"libmount1 (2.41-5)",
		"libnettle8t64 (3.10.1-1)",
		"libnghttp2-14 (1.64.0-1.1)",
		"libnghttp3-9 (1.8.0-1)",
		"libp11-kit0 (0.25.5-3)",
		"libpam-modules (1.7.0-5)",
		"libpam-modules-bin (1.7.0-5)",
		"libpam-runtime (1.7.0-5)",
		"libpam0g (1.7.0-5)",
		"libpcre2-8-0 (10.46-1~deb13u1)",
		"libpng16-16t64 (1.6.48-1+deb13u3)",
		"libpsl5t64 (0.21.2-1.1+b1)",
		"librav1e0.7 (0.7.1-9+b2)",
		"librtmp1 (2.4+20151223.gitfa8646d.1-2+b5)",
		"libsasl2-2 (2.1.28+dfsg1-9)",
		"libsasl2-modules-db (2.1.28+dfsg1-9)",
		"libseccomp2 (2.6.0-2)",
		"libselinux1 (3.8.1-1)",
		"libsemanage-common (3.8.1-1)",
		"libsemanage2 (3.8.1-1)",
		"libsepol2 (3.8.1-1)",
		"libsharpyuv0 (1.5.0-0.1)",
		"libsmartcols1 (2.41-5)",
		"libsqlite3-0 (3.46.1-7+deb13u1)",
		"libssh2-1t64 (1.11.1-1)",
		"libssl3t64 (3.5.5-1~deb13u1)",
		"libstdc++6 (14.2.0-19)",
		"libsvtav1enc2 (2.3.0+dfsg-1)",
		"libsystemd0 (257.9-1~deb13u1)",
		"libtasn1-6 (4.20.0-2)",
		"libtiff6 (4.7.0-3+deb13u1)",
		"libtinfo6 (6.5+20250216-2)",
		"libudev1 (257.9-1~deb13u1)",
		"libunistring5 (1.3-2)",
		"libuuid1 (2.41-5)",
		"libwebp7 (1.5.0-0.1)",
		"libx11-6 (2:1.8.12-1)",
		"libx11-data (2:1.8.12-1)",
		"libxau6 (1:1.0.11-1)",
		"libxcb1 (1.17.0-2+b1)",
		"libxdmcp6 (1:1.1.5-1)",
		"libxml2 (2.12.7+dfsg+really2.9.14-2.1+deb13u2)",
		"libxpm4 (1:3.5.17-1+b3)",
		"libxslt1.1 (1.1.35-1.2+deb13u2)",
		"libxxhash0 (0.8.3-2)",
		"libyuv0 (0.0.1904.20250204-1)",
		"libzstd1 (1.5.7+dfsg-1)",
		"login (1:4.16.0-2+really2.41-5)",
		"login.defs (1:4.17.4-2)",
		"mawk (1.3.4.20250131-1)",
		"mount (2.41-5)",
		"ncurses-base (6.5+20250216-2)",
		"ncurses-bin (6.5+20250216-2)",
		"nginx (1.29.6-1~trixie)",
		"nginx-module-acme (1.29.6+0.3.1-1~trixie)",
		"nginx-module-geoip (1.29.6-1~trixie)",
		"nginx-module-image-filter (1.29.6-1~trixie)",
		"nginx-module-njs (1.29.6+0.9.6-1~trixie)",
		"nginx-module-xslt (1.29.6-1~trixie)",
		"openssl (3.5.5-1~deb13u1)",
		"openssl-provider-legacy (3.5.5-1~deb13u1)",
		"passwd (1:4.17.4-2)",
		"perl-base (5.40.1-6)",
		"sed (4.9-2)",
		"sqv (1.3.0-3+b2)",
		"sysvinit-utils (3.14-4)",
		"tar (1.35+dfsg-3.1)",
		"tzdata (2026a-0+deb13u1)",
		"util-linux (2.41-5)",
		"zlib1g (1:1.3.dfsg+really1.3.1-1+b1)"
	],
	"firstSeen": "2026-03-18T14:17:59.282075Z",
	"updatedAt": "2026-03-20T09:50:09.985873Z",
	"cpe": "cpe:/o:debian:debian_linux:13.4"
}
```

#### c.json

```json
{
	"id": "a1f2efdc-5834-5210-b755-8bbbb7093b5d",
	"name": "Libwebp (docker.io/nginx@dec7a90b)",
	"technology": {
		"id": "9553",
		"name": "Libwebp"
	},
	"resource": {
		"id": "8687d4ec-9644-55ba-a9be-6c7c9bfa0111",
		"name": "docker.io/nginx@dec7a90b"
	},
	"detectionMethods": [
		"PACKAGE"
	],
	"installedPackages": null,
	"firstSeen": "2026-03-18T14:17:58.904917Z",
	"updatedAt": "2026-03-20T09:50:09.819797Z",
	"cpe": "cpe:/a:webmproject:libwebp:1.5.0"
}
```

#### d.json

```json
{
	"id": "8e9664f8-2deb-57cb-8b7e-d14b52588456",
	"name": "OpenSSL (docker.io/nginx@dec7a90b)",
	"technology": {
		"id": "3929",
		"name": "OpenSSL"
	},
	"resource": {
		"id": "8687d4ec-9644-55ba-a9be-6c7c9bfa0111",
		"name": "docker.io/nginx@dec7a90b"
	},
	"detectionMethods": [
		"PACKAGE"
	],
	"installedPackages": null,
	"firstSeen": "2026-03-18T14:17:58.306923Z",
	"updatedAt": "2026-03-20T09:50:09.664826Z",
	"cpe": "cpe:/a:openssl:openssl:3.5.5"
}
```

#### e.json

```json
{
	"id": "6d6965b6-b31f-5a42-9fcf-e3aa6f8ca767",
	"name": "cURL (docker.io/nginx@dec7a90b)",
	"technology": {
		"id": "3760",
		"name": "cURL"
	},
	"resource": {
		"id": "8687d4ec-9644-55ba-a9be-6c7c9bfa0111",
		"name": "docker.io/nginx@dec7a90b"
	},
	"detectionMethods": [
		"PACKAGE"
	],
	"installedPackages": null,
	"firstSeen": "2026-03-18T14:17:57.723489Z",
	"updatedAt": "2026-03-20T09:50:09.457451Z",
	"cpe": "cpe:/a:haxx:curl, cpe:/a:daniel_stenberg:curl:8.14.1"
}
```

### issue

#### a.json

```json
{
	"id": "9cbcba1e-0c11-478d-8593-942995201487",
	"sourceRule": {
		"__typename": "Control",
		"id": "wc-id-3206",
		"name": "Publicly exposed cloud resource with non-PQC compliant transport encryption",
		"controlDescription": "This cloud resource is publicly accessible from the internet and uses transport encryption (TLS/SSL) that does not support Post-Quantum Cryptography (PQC) compliant cipher suites or key exchange algorithms. The public exposure combined with classical cryptographic protocols creates an increased attack surface.\n\nPublicly exposed resources are more easily targeted by attackers than internal ones. An attacker can intercept encrypted traffic from this publicly accessible resource and store it for future decryption using quantum computers. This \"Harvest Now, Decrypt Later\" attack vector is particularly concerning for publicly exposed endpoints where traffic interception is more feasible.",
		"resolutionRecommendation": "### Limit external exposure\n* Restrict access to resources that do not need to be accessible from the internet.\n* Ensure that exposed ports allow only encrypted communications.\n\n### Ensure quantum-resistant cryptography\n* Configure TLS settings to enforce modern protocol versions (TLS 1.2 or higher) with PQC-compliant cipher suites.\n* Enable Hybrid Post-Quantum Key Exchange (e.g., ECDHE + ML-KEM) to protect data in transit.\n* Update security policies to mandate quantum-safe key exchange algorithms.\n* Disable support for deprecated cryptographic protocols and cipher suites.\n* Prioritize PQC migration for publicly exposed endpoints.",
		"securitySubCategories": [
			{
				"title": "2 Data-in-transit is protected",
				"category": {
					"name": "9 Data Security (PR.DS)",
					"framework": {
						"name": "NIST CSF v1.1"
					}
				}
			},
			{
				"title": "3.10 Encrypt Sensitive Data in Transit",
				"category": {
					"name": "3 Data Protection",
					"framework": {
						"name": "CIS Controls v8"
					}
				}
			},
			{
				"title": "3.13.8 Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.",
				"category": {
					"name": "3.13 System and Communications Protection",
					"framework": {
						"name": "NIST 800-171 Rev.2"
					}
				}
			},
			{
				"title": "4.1 Use strong cryptography and security protocols to safeguard sensitive cardholder data during transmission over open, public networks",
				"category": {
					"name": "4 encrypt transmission of cardholder data across open, public networks",
					"framework": {
						"name": "PCI DSS v3.1.0"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Cloud Matrix"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Matrix"
					}
				}
			},
			{
				"title": "SC-13 Cryptographic Protection",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			},
			{
				"title": "SC-8 Transmission Confidentiality and Integrity",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			},
			{
				"title": "Security policies",
				"category": {
					"name": "Session Negotiation - PQC Compliance",
					"framework": {
						"name": "Wiz for Post-Quantum Cryptography Security"
					}
				}
			}
		]
	},
	"createdAt": "2026-03-25T05:46:26.681576Z",
	"updatedAt": "2026-03-25T05:46:26.681576Z",
	"dueAt": null,
	"type": "TOXIC_COMBINATION",
	"resolvedAt": null,
	"statusChangedAt": "2026-03-25T05:46:26.681576Z",
	"projects": [
		{
			"id": "4f76f599-1f6c-5cb6-a0b9-a262517aeacd",
			"name": "Test Folder - Test",
			"slug": "testfolder",
			"businessUnit": "",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "83b76efe-a7b6-5762-8a53-8e8f59e68bd8",
			"name": "Project 2",
			"slug": "project-2",
			"businessUnit": "",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "af52828c-4eb1-5c4e-847c-ebc3a5ead531",
			"name": "project 4",
			"slug": "project-4",
			"businessUnit": "Dev",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "d6ac50bb-aec0-52fc-80ab-bacd7b02f178",
			"name": "Project1",
			"slug": "project1",
			"businessUnit": "Dev",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		}
	],
	"status": "OPEN",
	"severity": "LOW",
	"entitySnapshot": {
		"id": "0727dd0c-24e3-56b2-a170-adf96b72e2d6",
		"type": "LOAD_BALANCER",
		"nativeType": "loadBalancerv2/application",
		"name": "Splunk",
		"status": "Active",
		"cloudPlatform": "AWS",
		"cloudProviderURL": "https://eu-north-1.console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LoadBalancers:search=Splunk;sort=loadBalancerName",
		"providerId": "arn:aws:elasticloadbalancing:eu-north-1:998231069301:loadbalancer/app/Splunk/6a65a4bd322d6f5f",
		"region": "eu-north-1",
		"resourceGroupExternalId": "",
		"subscriptionExternalId": "998231069301",
		"subscriptionName": "wiz-integrations",
		"subscriptionTags": {},
		"tags": {},
		"createdAt": "2022-12-04T10:57:17Z",
		"externalId": "arn:aws:elasticloadbalancing:eu-north-1:998231069301:loadbalancer/app/Splunk/6a65a4bd322d6f5f"
	},
	"serviceTickets": null,
	"notes": null
}
```

#### b.json

```json
{
	"id": "6f6c5953-025f-4dfe-9f53-06bba2bec1a8",
	"sourceRule": {
		"__typename": "Control",
		"id": "wc-id-3206",
		"name": "Publicly exposed cloud resource with non-PQC compliant transport encryption",
		"controlDescription": "This cloud resource is publicly accessible from the internet and uses transport encryption (TLS/SSL) that does not support Post-Quantum Cryptography (PQC) compliant cipher suites or key exchange algorithms. The public exposure combined with classical cryptographic protocols creates an increased attack surface.\n\nPublicly exposed resources are more easily targeted by attackers than internal ones. An attacker can intercept encrypted traffic from this publicly accessible resource and store it for future decryption using quantum computers. This \"Harvest Now, Decrypt Later\" attack vector is particularly concerning for publicly exposed endpoints where traffic interception is more feasible.",
		"resolutionRecommendation": "### Limit external exposure\n* Restrict access to resources that do not need to be accessible from the internet.\n* Ensure that exposed ports allow only encrypted communications.\n\n### Ensure quantum-resistant cryptography\n* Configure TLS settings to enforce modern protocol versions (TLS 1.2 or higher) with PQC-compliant cipher suites.\n* Enable Hybrid Post-Quantum Key Exchange (e.g., ECDHE + ML-KEM) to protect data in transit.\n* Update security policies to mandate quantum-safe key exchange algorithms.\n* Disable support for deprecated cryptographic protocols and cipher suites.\n* Prioritize PQC migration for publicly exposed endpoints.",
		"securitySubCategories": [
			{
				"title": "2 Data-in-transit is protected",
				"category": {
					"name": "9 Data Security (PR.DS)",
					"framework": {
						"name": "NIST CSF v1.1"
					}
				}
			},
			{
				"title": "3.10 Encrypt Sensitive Data in Transit",
				"category": {
					"name": "3 Data Protection",
					"framework": {
						"name": "CIS Controls v8"
					}
				}
			},
			{
				"title": "3.13.8 Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.",
				"category": {
					"name": "3.13 System and Communications Protection",
					"framework": {
						"name": "NIST 800-171 Rev.2"
					}
				}
			},
			{
				"title": "4.1 Use strong cryptography and security protocols to safeguard sensitive cardholder data during transmission over open, public networks",
				"category": {
					"name": "4 encrypt transmission of cardholder data across open, public networks",
					"framework": {
						"name": "PCI DSS v3.1.0"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Cloud Matrix"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Matrix"
					}
				}
			},
			{
				"title": "SC-13 Cryptographic Protection",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			},
			{
				"title": "SC-8 Transmission Confidentiality and Integrity",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			},
			{
				"title": "Security policies",
				"category": {
					"name": "Session Negotiation - PQC Compliance",
					"framework": {
						"name": "Wiz for Post-Quantum Cryptography Security"
					}
				}
			}
		]
	},
	"createdAt": "2026-03-25T05:46:26.681576Z",
	"updatedAt": "2026-03-25T05:46:26.681576Z",
	"dueAt": null,
	"type": "TOXIC_COMBINATION",
	"resolvedAt": null,
	"statusChangedAt": "2026-03-25T05:46:26.681576Z",
	"projects": [
		{
			"id": "4f76f599-1f6c-5cb6-a0b9-a262517aeacd",
			"name": "Test Folder - Test",
			"slug": "testfolder",
			"businessUnit": "",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "83b76efe-a7b6-5762-8a53-8e8f59e68bd8",
			"name": "Project 2",
			"slug": "project-2",
			"businessUnit": "",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "af52828c-4eb1-5c4e-847c-ebc3a5ead531",
			"name": "project 4",
			"slug": "project-4",
			"businessUnit": "Dev",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "d6ac50bb-aec0-52fc-80ab-bacd7b02f178",
			"name": "Project1",
			"slug": "project1",
			"businessUnit": "Dev",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		}
	],
	"status": "OPEN",
	"severity": "LOW",
	"entitySnapshot": {
		"id": "3d3b35a4-3d34-53ea-983c-00f4ad552b3c",
		"type": "LOAD_BALANCER",
		"nativeType": "loadBalancerv2/application",
		"name": "JiraALB",
		"status": "Active",
		"cloudPlatform": "AWS",
		"cloudProviderURL": "https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2#LoadBalancers:search=JiraALB;sort=loadBalancerName",
		"providerId": "arn:aws:elasticloadbalancing:us-east-2:998231069301:loadbalancer/app/JiraALB/bbd1b5779ec48f96",
		"region": "us-east-2",
		"resourceGroupExternalId": "",
		"subscriptionExternalId": "998231069301",
		"subscriptionName": "wiz-integrations",
		"subscriptionTags": {},
		"tags": {},
		"createdAt": "2022-08-28T17:48:20Z",
		"externalId": "arn:aws:elasticloadbalancing:us-east-2:998231069301:loadbalancer/app/JiraALB/bbd1b5779ec48f96"
	},
	"serviceTickets": null,
	"notes": null
}
```

#### c.json

```json
{
	"id": "60f3f630-d6fa-4a56-b4e4-4653ef45b98a",
	"sourceRule": {
		"__typename": "Control",
		"id": "wc-id-3206",
		"name": "Publicly exposed cloud resource with non-PQC compliant transport encryption",
		"controlDescription": "This cloud resource is publicly accessible from the internet and uses transport encryption (TLS/SSL) that does not support Post-Quantum Cryptography (PQC) compliant cipher suites or key exchange algorithms. The public exposure combined with classical cryptographic protocols creates an increased attack surface.\n\nPublicly exposed resources are more easily targeted by attackers than internal ones. An attacker can intercept encrypted traffic from this publicly accessible resource and store it for future decryption using quantum computers. This \"Harvest Now, Decrypt Later\" attack vector is particularly concerning for publicly exposed endpoints where traffic interception is more feasible.",
		"resolutionRecommendation": "### Limit external exposure\n* Restrict access to resources that do not need to be accessible from the internet.\n* Ensure that exposed ports allow only encrypted communications.\n\n### Ensure quantum-resistant cryptography\n* Configure TLS settings to enforce modern protocol versions (TLS 1.2 or higher) with PQC-compliant cipher suites.\n* Enable Hybrid Post-Quantum Key Exchange (e.g., ECDHE + ML-KEM) to protect data in transit.\n* Update security policies to mandate quantum-safe key exchange algorithms.\n* Disable support for deprecated cryptographic protocols and cipher suites.\n* Prioritize PQC migration for publicly exposed endpoints.",
		"securitySubCategories": [
			{
				"title": "2 Data-in-transit is protected",
				"category": {
					"name": "9 Data Security (PR.DS)",
					"framework": {
						"name": "NIST CSF v1.1"
					}
				}
			},
			{
				"title": "3.10 Encrypt Sensitive Data in Transit",
				"category": {
					"name": "3 Data Protection",
					"framework": {
						"name": "CIS Controls v8"
					}
				}
			},
			{
				"title": "3.13.8 Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.",
				"category": {
					"name": "3.13 System and Communications Protection",
					"framework": {
						"name": "NIST 800-171 Rev.2"
					}
				}
			},
			{
				"title": "4.1 Use strong cryptography and security protocols to safeguard sensitive cardholder data during transmission over open, public networks",
				"category": {
					"name": "4 encrypt transmission of cardholder data across open, public networks",
					"framework": {
						"name": "PCI DSS v3.1.0"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Cloud Matrix"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Matrix"
					}
				}
			},
			{
				"title": "SC-13 Cryptographic Protection",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			},
			{
				"title": "SC-8 Transmission Confidentiality and Integrity",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			},
			{
				"title": "Security policies",
				"category": {
					"name": "Session Negotiation - PQC Compliance",
					"framework": {
						"name": "Wiz for Post-Quantum Cryptography Security"
					}
				}
			}
		]
	},
	"createdAt": "2026-03-25T05:46:26.681576Z",
	"updatedAt": "2026-03-25T05:46:26.681576Z",
	"dueAt": null,
	"type": "TOXIC_COMBINATION",
	"resolvedAt": null,
	"statusChangedAt": "2026-03-25T05:46:26.681576Z",
	"projects": [
		{
			"id": "4f76f599-1f6c-5cb6-a0b9-a262517aeacd",
			"name": "Test Folder - Test",
			"slug": "testfolder",
			"businessUnit": "",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "83b76efe-a7b6-5762-8a53-8e8f59e68bd8",
			"name": "Project 2",
			"slug": "project-2",
			"businessUnit": "",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "af52828c-4eb1-5c4e-847c-ebc3a5ead531",
			"name": "project 4",
			"slug": "project-4",
			"businessUnit": "Dev",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "d6ac50bb-aec0-52fc-80ab-bacd7b02f178",
			"name": "Project1",
			"slug": "project1",
			"businessUnit": "Dev",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		}
	],
	"status": "OPEN",
	"severity": "LOW",
	"entitySnapshot": {
		"id": "cc280612-e73d-5be7-99b2-f4e90231de63",
		"type": "LOAD_BALANCER",
		"nativeType": "loadBalancerv2/application",
		"name": "LBSplunkMK",
		"status": "Active",
		"cloudPlatform": "AWS",
		"cloudProviderURL": "https://eu-north-1.console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LoadBalancers:search=LBSplunkMK;sort=loadBalancerName",
		"providerId": "arn:aws:elasticloadbalancing:eu-north-1:998231069301:loadbalancer/app/LBSplunkMK/e60ac4971d11c5eb",
		"region": "eu-north-1",
		"resourceGroupExternalId": "",
		"subscriptionExternalId": "998231069301",
		"subscriptionName": "wiz-integrations",
		"subscriptionTags": {},
		"tags": {},
		"createdAt": "2023-01-18T18:00:25Z",
		"externalId": "arn:aws:elasticloadbalancing:eu-north-1:998231069301:loadbalancer/app/LBSplunkMK/e60ac4971d11c5eb"
	},
	"serviceTickets": null,
	"notes": null
}
```

#### d.json

```json
{
	"id": "3f644902-c009-4f73-a5bf-0448b8fd6a99",
	"sourceRule": {
		"__typename": "Control",
		"id": "wc-id-3204",
		"name": "Subscription with compute instances using non-PQC compliant SSH authorized keys",
		"controlDescription": "This subscription contains compute instances with SSH authorized keys (public keys) that use classical cryptographic algorithms (such as RSA or ECDSA) which are not resistant to quantum computing attacks. The authorized keys stored on these instances do not utilize Post-Quantum Cryptography (PQC) compliant algorithms.\n\nAuthorized keys using classical algorithms are at risk of being compromised by future quantum computers. An attacker with access to quantum computing capabilities could forge signatures or derive corresponding private keys, gaining unauthorized access to systems within the subscription that trust these authorized keys.\n",
		"resolutionRecommendation": "### Ensure quantum-resistant cryptography\n* Migrate private keys to PQC-compliant algorithms such as ML-DSA (Dilithium) or hybrid key schemes that combine classical and quantum-resistant algorithms.\n* Update SSH configurations to generate and accept only quantum-safe key types.\n* Rotate existing private keys and replace them with quantum-resistant alternatives.\n* Store private keys securely using approved secret management solutions.\n\n### Ensure secure use of cloud keys\n* Manage all cloud keys using approved secret management solutions. Your environment should not contain cleartext cloud keys.\n* Alternatively, remove the key from the resource.\n* If removing the key is impossible, restrict the permissions assigned to the cloud key or store the key encrypted at rest.\n* Set an expiration date for all secrets and rotate them on a regular basis.",
		"securitySubCategories": [
			{
				"title": "3.13.10 Establish and manage cryptographic keys for cryptography employed in organizational systems.",
				"category": {
					"name": "3.13 System and Communications Protection",
					"framework": {
						"name": "NIST 800-171 Rev.2"
					}
				}
			},
			{
				"title": "3.13.11 Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.",
				"category": {
					"name": "3.13 System and Communications Protection",
					"framework": {
						"name": "NIST 800-171 Rev.2"
					}
				}
			},
			{
				"title": "A.10.1.2 Key management",
				"category": {
					"name": "A.10 Cryptography",
					"framework": {
						"name": "ISO/IEC 27001"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Cloud Matrix"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Matrix"
					}
				}
			},
			{
				"title": "Exposed secret",
				"category": {
					"name": "External Attack Surface Management",
					"framework": {
						"name": "Wiz for Risk Assessment"
					}
				}
			},
			{
				"title": "File misconfigurations",
				"category": {
					"name": "Session Negotiation - PQC Compliance",
					"framework": {
						"name": "Wiz for Post-Quantum Cryptography Security"
					}
				}
			},
			{
				"title": "SC-12 Cryptographic Key Establishment and Management",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			},
			{
				"title": "SC-13 Cryptographic Protection",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			}
		]
	},
	"createdAt": "2026-03-25T05:46:26.592582Z",
	"updatedAt": "2026-03-25T05:46:26.592582Z",
	"dueAt": null,
	"type": "TOXIC_COMBINATION",
	"resolvedAt": null,
	"statusChangedAt": "2026-03-25T05:46:26.592582Z",
	"projects": [
		{
			"id": "4f76f599-1f6c-5cb6-a0b9-a262517aeacd",
			"name": "Test Folder - Test",
			"slug": "testfolder",
			"businessUnit": "",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "83b76efe-a7b6-5762-8a53-8e8f59e68bd8",
			"name": "Project 2",
			"slug": "project-2",
			"businessUnit": "",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "af52828c-4eb1-5c4e-847c-ebc3a5ead531",
			"name": "project 4",
			"slug": "project-4",
			"businessUnit": "Dev",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		},
		{
			"id": "d6ac50bb-aec0-52fc-80ab-bacd7b02f178",
			"name": "Project1",
			"slug": "project1",
			"businessUnit": "Dev",
			"riskProfile": {
				"businessImpact": "MBI"
			}
		}
	],
	"status": "OPEN",
	"severity": "LOW",
	"entitySnapshot": {
		"id": "94e76baa-85fd-5928-b829-1669a2ca9660",
		"type": "SUBSCRIPTION",
		"nativeType": "account",
		"name": "wiz-integrations",
		"status": "Active",
		"cloudPlatform": "AWS",
		"cloudProviderURL": "https://console.aws.amazon.com/organizations/v2/home/accounts/998231069301",
		"providerId": "998231069301",
		"region": "",
		"resourceGroupExternalId": "",
		"subscriptionExternalId": "998231069301",
		"subscriptionName": "wiz-integrations",
		"subscriptionTags": {},
		"tags": {},
		"createdAt": null,
		"externalId": "998231069301"
	},
	"serviceTickets": null,
	"notes": null
}
```

#### e.json

```json
{
	"id": "16301b7f-1d6e-4d84-b561-b34dd37bc35c",
	"sourceRule": {
		"__typename": "Control",
		"id": "wc-id-3204",
		"name": "Subscription with compute instances using non-PQC compliant SSH authorized keys",
		"controlDescription": "This subscription contains compute instances with SSH authorized keys (public keys) that use classical cryptographic algorithms (such as RSA or ECDSA) which are not resistant to quantum computing attacks. The authorized keys stored on these instances do not utilize Post-Quantum Cryptography (PQC) compliant algorithms.\n\nAuthorized keys using classical algorithms are at risk of being compromised by future quantum computers. An attacker with access to quantum computing capabilities could forge signatures or derive corresponding private keys, gaining unauthorized access to systems within the subscription that trust these authorized keys.\n",
		"resolutionRecommendation": "### Ensure quantum-resistant cryptography\n* Migrate private keys to PQC-compliant algorithms such as ML-DSA (Dilithium) or hybrid key schemes that combine classical and quantum-resistant algorithms.\n* Update SSH configurations to generate and accept only quantum-safe key types.\n* Rotate existing private keys and replace them with quantum-resistant alternatives.\n* Store private keys securely using approved secret management solutions.\n\n### Ensure secure use of cloud keys\n* Manage all cloud keys using approved secret management solutions. Your environment should not contain cleartext cloud keys.\n* Alternatively, remove the key from the resource.\n* If removing the key is impossible, restrict the permissions assigned to the cloud key or store the key encrypted at rest.\n* Set an expiration date for all secrets and rotate them on a regular basis.",
		"securitySubCategories": [
			{
				"title": "3.13.10 Establish and manage cryptographic keys for cryptography employed in organizational systems.",
				"category": {
					"name": "3.13 System and Communications Protection",
					"framework": {
						"name": "NIST 800-171 Rev.2"
					}
				}
			},
			{
				"title": "3.13.11 Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.",
				"category": {
					"name": "3.13 System and Communications Protection",
					"framework": {
						"name": "NIST 800-171 Rev.2"
					}
				}
			},
			{
				"title": "A.10.1.2 Key management",
				"category": {
					"name": "A.10 Cryptography",
					"framework": {
						"name": "ISO/IEC 27001"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Cloud Matrix"
					}
				}
			},
			{
				"title": "Data Encrypted for Impact",
				"category": {
					"name": "Impact",
					"framework": {
						"name": "MITRE ATT&CK Matrix"
					}
				}
			},
			{
				"title": "Exposed secret",
				"category": {
					"name": "External Attack Surface Management",
					"framework": {
						"name": "Wiz for Risk Assessment"
					}
				}
			},
			{
				"title": "File misconfigurations",
				"category": {
					"name": "Session Negotiation - PQC Compliance",
					"framework": {
						"name": "Wiz for Post-Quantum Cryptography Security"
					}
				}
			},
			{
				"title": "SC-12 Cryptographic Key Establishment and Management",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			},
			{
				"title": "SC-13 Cryptographic Protection",
				"category": {
					"name": "SC System And Communications Protection",
					"framework": {
						"name": "NIST SP 800-53 Revision 5"
					}
				}
			}
		]
	},
	"createdAt": "2026-03-25T05:46:26.592582Z",
	"updatedAt": "2026-03-25T05:46:26.592582Z",
	"dueAt": null,
	"type": "TOXIC_COMBINATION",
	"resolvedAt": null,
	"statusChangedAt": "2026-03-25T05:46:26.592582Z",
	"projects": null,
	"status": "OPEN",
	"severity": "LOW",
	"entitySnapshot": {
		"id": "064ecbb5-19ee-540d-b9f5-99c3a4e2d0db",
		"type": "SUBSCRIPTION",
		"nativeType": "Microsoft.Subscription",
		"name": "partner integrations",
		"status": "Active",
		"cloudPlatform": "Azure",
		"cloudProviderURL": "https://portal.azure.com/#@partnerintegrations.onmicrosoft.com/resource//subscriptions/434f3cbb-30f2-4bc0-8bba-cb080280652b",
		"providerId": "434f3cbb-30f2-4bc0-8bba-cb080280652b",
		"region": "",
		"resourceGroupExternalId": "",
		"subscriptionExternalId": "434f3cbb-30f2-4bc0-8bba-cb080280652b",
		"subscriptionName": "partner integrations",
		"subscriptionTags": {
			"Owner": "annam.iyer@wiz.io"
		},
		"tags": {
			"Owner": "annam.iyer@wiz.io"
		},
		"createdAt": null,
		"externalId": "434f3cbb-30f2-4bc0-8bba-cb080280652b"
	},
	"serviceTickets": null,
	"notes": null
}
```

### project

#### a.json

```json
{
	"id": "4f76f599-1f6c-5cb6-a0b9-a262517aeacd",
	"name": "Test Folder - Test",
	"isFolder": true,
	"archived": false,
	"businessUnit": "",
	"description": ""
}
```

#### b.json

```json
{
	"id": "33517170-b379-5cbd-ae42-31cee300a1cf",
	"name": "Prod Identity SecOps",
	"isFolder": true,
	"archived": false,
	"businessUnit": "",
	"description": ""
}
```

#### c.json

```json
{
	"id": "d6ac50bb-aec0-52fc-80ab-bacd7b02f178",
	"name": "Project1",
	"isFolder": false,
	"archived": false,
	"businessUnit": "Dev",
	"description": "Test project"
}
```

#### d.json

```json
{
	"id": "af52828c-4eb1-5c4e-847c-ebc3a5ead531",
	"name": "project 4",
	"isFolder": false,
	"archived": false,
	"businessUnit": "Dev",
	"description": ""
}
```

#### e.json

```json
{
	"id": "8b2ad261-e25a-59a3-ba6b-31f0c85ccdd6",
	"name": "test",
	"isFolder": false,
	"archived": false,
	"businessUnit": "",
	"description": ""
}
```

### serviceTicket

#### a.json

```json
{
	"externalId": "slackThread/TSYNK6AJ3/C08E7P8R4P4/1767037578.607709",
	"name": "Wiz (C08E7P8R4P4) - 1767037578.607709",
	"url": "https://wiz-sec.slack.com/archives/C08E7P8R4P4/p1767037578607709"
}
```

#### b.json

```json
{
	"externalId": "slackThread/TSYNK6AJ3/C09S60H5W2W/1767037583.043159",
	"name": "Wiz (C09S60H5W2W) - 1767037583.043159",
	"url": "https://wiz-sec.slack.com/archives/C09S60H5W2W/p1767037583043159"
}
```

#### c.json

```json
{
	"externalId": "slackThread/TSYNK6AJ3/C08E7P8R4P4/1767037562.798959",
	"name": "Wiz (C08E7P8R4P4) - 1767037562.798959",
	"url": "https://wiz-sec.slack.com/archives/C08E7P8R4P4/p1767037562798959"
}
```

#### d.json

```json
{
	"externalId": "slackThread/TSYNK6AJ3/C09S60H5W2W/1767037580.868619",
	"name": "Wiz (C09S60H5W2W) - 1767037580.868619",
	"url": "https://wiz-sec.slack.com/archives/C09S60H5W2W/p1767037580868619"
}
```

### technology

#### a.json

```json
{
	"id": "10071",
	"name": ".NET Core SDK",
	"description": ".NET Core SDK is a set of libraries and tools that allow developers to create .NET Core applications and libraries. It includes the .NET Core runtime for running applications, but also provides additional capabilities for building, testing, and debugging .NET Core applications. The SDK also includes a command line interface (CLI) for performing various tasks such as project creation, code compilation, and package management.",
	"categories": [
		{
			"name": "Frameworks & Libraries"
		}
	],
	"usage": "COMMON",
	"status": "UNREVIEWED",
	"risk": "MEDIUM",
	"note": null,
	"ownerName": "Microsoft Corporation",
	"businessModel": "COMMERCIAL_OPEN_SOURCE",
	"popularity": "VERY_COMMON",
	"projectCount": 0,
	"codeRepoCount": 0,
	"isCloudService": false,
	"supportedOperatingSystems": [
		"WINDOWS",
		"LINUX"
	]
}
```

#### b.json

```json
{
	"id": "10530",
	"name": ".NET Framework SDK",
	"description": ".NET Framework SDK is a software development kit developed by Microsoft that provides tools, compilers, and application program interfaces (APIs) for developing applications for the .NET Framework. This SDK allows developers to build, test, and deploy a wide range of applications, including web applications, desktop applications, and mobile applications. It includes classes, interfaces and value types, all of which help in creating efficient code and software programs.",
	"categories": [
		{
			"name": "Frameworks & Libraries"
		}
	],
	"usage": "COMMON",
	"status": "UNREVIEWED",
	"risk": "HIGH",
	"note": null,
	"ownerName": "Microsoft Corporation",
	"businessModel": "COMMERCIAL_PROPRIETARY",
	"popularity": "VERY_COMMON",
	"projectCount": 0,
	"codeRepoCount": 0,
	"isCloudService": false,
	"supportedOperatingSystems": [
		"WINDOWS"
	]
}
```

#### c.json

```json
{
	"id": "7881",
	"name": ".NET Core",
	"description": ".NET Core is a free, open-source, cross-platform development framework developed by Microsoft. It allows developers to build applications for Windows, macOS, and Linux using C#, F#, and Visual Basic. .NET Core provides a modular and high-performance runtime for creating web applications, microservices, console apps, and cloud-based services.",
	"categories": [
		{
			"name": "Frameworks & Libraries"
		}
	],
	"usage": "COMMON",
	"status": "UNREVIEWED",
	"risk": "MEDIUM",
	"note": null,
	"ownerName": "Microsoft Corporation",
	"businessModel": "COMMERCIAL_OPEN_SOURCE",
	"popularity": null,
	"projectCount": 0,
	"codeRepoCount": 0,
	"isCloudService": false,
	"supportedOperatingSystems": null
}
```

#### d.json

```json
{
	"id": "7880",
	"name": ".NET Framework",
	"description": ".NET Framework is a software development platform developed by Microsoft. It provides a controlled programming environment where software can be developed, installed, and executed on Windows-based operating systems. It primarily supports the creation and management of Windows applications and web services.",
	"categories": [
		{
			"name": "Frameworks & Libraries"
		}
	],
	"usage": "COMMON",
	"status": "UNREVIEWED",
	"risk": "MEDIUM",
	"note": null,
	"ownerName": "Microsoft Corporation",
	"businessModel": "COMMERCIAL_PROPRIETARY",
	"popularity": "VERY_COMMON",
	"projectCount": 4,
	"codeRepoCount": 0,
	"isCloudService": false,
	"supportedOperatingSystems": [
		"WINDOWS"
	]
}
```

#### e.json

```json
{
	"id": "10531",
	"name": ".NET Host",
	"description": ".NET Host refers to the .NET runtime that is responsible for loading and executing .NET applications. It's the entity that invokes the main entry point of your .NET application (like the 'dotnet' command in .NET Core CLI). .NET Host provides features like application dependency management, runtime configuration, and runtime applying of patches and updates.",
	"categories": [
		{
			"name": "Frameworks & Libraries"
		}
	],
	"usage": "COMMON",
	"status": "UNREVIEWED",
	"risk": "HIGH",
	"note": null,
	"ownerName": "Microsoft Corporation",
	"businessModel": "COMMERCIAL_OPEN_SOURCE",
	"popularity": "VERY_COMMON",
	"projectCount": 0,
	"codeRepoCount": 0,
	"isCloudService": false,
	"supportedOperatingSystems": [
		"WINDOWS"
	]
}
```
