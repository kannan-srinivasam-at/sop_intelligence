import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ComplianceFrameworks = () => {
  const [selectedFramework, setSelectedFramework] = useState('hipaa');

  const frameworks = {
    hipaa: {
      name: "HIPAA",
      fullName: "Health Insurance Portability and Accountability Act",
      description: "Comprehensive healthcare data protection and privacy compliance",
      color: "bg-blue-500",
      features: [
        {
          requirement: "Administrative Safeguards",
          sopFeature: "Role-based access controls and audit trails",
          implementation: "Automated user provisioning and access reviews"
        },
        {
          requirement: "Physical Safeguards",
          sopFeature: "Secure data center operations",
          implementation: "Tier IV facilities with biometric access"
        },
        {
          requirement: "Technical Safeguards",
          sopFeature: "Encryption and access controls",
          implementation: "AES-256 encryption and MFA requirements"
        },
        {
          requirement: "Breach Notification",
          sopFeature: "Incident response automation",
          implementation: "Real-time monitoring and automated reporting"
        }
      ]
    },
    sox: {
      name: "SOX",
      fullName: "Sarbanes-Oxley Act",
      description: "Financial reporting controls and corporate governance compliance",
      color: "bg-green-500",
      features: [
        {
          requirement: "Internal Controls",
          sopFeature: "Process documentation and approval workflows",
          implementation: "Automated control testing and validation"
        },
        {
          requirement: "Financial Reporting",
          sopFeature: "Audit trail and change management",
          implementation: "Immutable logs and version control"
        },
        {
          requirement: "IT General Controls",
          sopFeature: "System access and change controls",
          implementation: "Segregation of duties and approval matrices"
        },
        {
          requirement: "Documentation",
          sopFeature: "Policy management and training records",
          implementation: "Centralized documentation with attestation"
        }
      ]
    },
    gdpr: {
      name: "GDPR",
      fullName: "General Data Protection Regulation",
      description: "European data protection and privacy rights compliance",
      color: "bg-purple-500",
      features: [
        {
          requirement: "Data Protection by Design",
          sopFeature: "Privacy-first architecture and controls",
          implementation: "Built-in privacy controls and data minimization"
        },
        {
          requirement: "Consent Management",
          sopFeature: "Granular permission controls",
          implementation: "Dynamic consent tracking and withdrawal"
        },
        {
          requirement: "Data Subject Rights",
          sopFeature: "Self-service data access and deletion",
          implementation: "Automated fulfillment of data requests"
        },
        {
          requirement: "Breach Notification",
          sopFeature: "72-hour notification automation",
          implementation: "Integrated incident response workflows"
        }
      ]
    },
    iso27001: {
      name: "ISO 27001",
      fullName: "Information Security Management System",
      description: "International standard for information security management",
      color: "bg-orange-500",
      features: [
        {
          requirement: "Risk Assessment",
          sopFeature: "Continuous risk monitoring and assessment",
          implementation: "Automated risk scoring and mitigation tracking"
        },
        {
          requirement: "Security Controls",
          sopFeature: "Comprehensive security control framework",
          implementation: "114 security controls with continuous monitoring"
        },
        {
          requirement: "Incident Management",
          sopFeature: "Security incident response procedures",
          implementation: "Automated incident detection and response"
        },
        {
          requirement: "Continuous Improvement",
          sopFeature: "Regular security reviews and updates",
          implementation: "Quarterly assessments and control updates"
        }
      ]
    }
  };

  const frameworkList = [
    { key: 'hipaa', name: 'HIPAA', icon: 'Heart' },
    { key: 'sox', name: 'SOX', icon: 'TrendingUp' },
    { key: 'gdpr', name: 'GDPR', icon: 'Shield' },
    { key: 'iso27001', name: 'ISO 27001', icon: 'Award' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Regulatory Compliance Framework Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built-in compliance features that map directly to regulatory requirements, making audits effortless and continuous compliance automatic.
          </p>
        </div>

        {/* Framework Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {frameworkList.map((framework) => (
            <button
              key={framework.key}
              onClick={() => setSelectedFramework(framework.key)}
              className={`inline-flex items-center space-x-3 px-6 py-3 rounded-lg border transition-all duration-200 ${
                selectedFramework === framework.key
                  ? 'bg-primary text-white border-primary shadow-medium'
                  : 'bg-white text-foreground border-border hover:border-primary/50 hover:shadow-soft'
              }`}
            >
              <Icon name={framework.icon} size={20} />
              <span className="font-medium">{framework.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Framework Details */}
        <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
          <div className="p-8">
            <div className="flex items-start space-x-4 mb-8">
              <div className={`w-16 h-16 ${frameworks[selectedFramework].color} rounded-lg flex items-center justify-center`}>
                <Icon name="FileText" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {frameworks[selectedFramework].fullName}
                </h3>
                <p className="text-muted-foreground">
                  {frameworks[selectedFramework].description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Compliance Feature Mapping
              </h4>
              
              {frameworks[selectedFramework].features.map((feature, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                        <Icon name="AlertCircle" size={16} className="text-warning" />
                        <span>Requirement</span>
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {feature.requirement}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                        <Icon name="Cog" size={16} className="text-primary" />
                        <span>SOP Feature</span>
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {feature.sopFeature}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span>Implementation</span>
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {feature.implementation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Audit Success Rate</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Compliance Monitoring</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">&lt;1hr</div>
            <div className="text-sm text-muted-foreground">Incident Response</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-warning mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Control Points</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceFrameworks;