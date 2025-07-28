import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DataProtectionSection = () => {
  const [activeTab, setActiveTab] = useState('encryption');

  const protectionFeatures = {
    encryption: {
      title: "Advanced Encryption",
      icon: "Lock",
      content: [
        {
          feature: "AES-256 Encryption",
          description: "Military-grade encryption for data at rest and in transit",
          status: "Active"
        },
        {
          feature: "TLS 1.3 Protocol",
          description: "Latest transport layer security for all communications",
          status: "Active"
        },
        {
          feature: "End-to-End Encryption",
          description: "Complete data protection from source to destination",
          status: "Active"
        },
        {
          feature: "Key Management",
          description: "Automated key rotation and secure key storage",
          status: "Active"
        }
      ]
    },
    infrastructure: {
      title: "Secure Infrastructure",
      icon: "Server",
      content: [
        {
          feature: "Tier IV Data Centers",
          description: "99.995% uptime guarantee with redundant systems",
          status: "Active"
        },
        {
          feature: "Multi-Region Backup",
          description: "Automated backups across geographically distributed centers",
          status: "Active"
        },
        {
          feature: "Network Isolation",
          description: "Virtual private clouds with strict access controls",
          status: "Active"
        },
        {
          feature: "DDoS Protection",
          description: "Advanced threat detection and mitigation systems",
          status: "Active"
        }
      ]
    },
    privacy: {
      title: "Privacy Controls",
      icon: "Eye",
      content: [
        {
          feature: "Data Minimization",
          description: "Collect and process only necessary information",
          status: "Active"
        },
        {
          feature: "Right to Erasure",
          description: "Complete data deletion upon request",
          status: "Active"
        },
        {
          feature: "Consent Management",
          description: "Granular control over data usage permissions",
          status: "Active"
        },
        {
          feature: "Data Portability",
          description: "Export your data in standard formats anytime",
          status: "Active"
        }
      ]
    }
  };

  const tabs = [
    { key: 'encryption', label: 'Encryption', icon: 'Lock' },
    { key: 'infrastructure', label: 'Infrastructure', icon: 'Server' },
    { key: 'privacy', label: 'Privacy', icon: 'Eye' }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Comprehensive Data Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Multi-layered security architecture designed to protect your most sensitive information at every level.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-soft border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-primary text-white shadow-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-soft border border-border overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={protectionFeatures[activeTab].icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {protectionFeatures[activeTab].title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {protectionFeatures[activeTab].content.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-success/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {item.feature}
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm font-medium text-success">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Architecture Diagram */}
        <div className="mt-12 bg-white rounded-xl shadow-soft border border-border p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Security Architecture Overview
          </h3>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">User Access</h4>
                <p className="text-sm text-muted-foreground">
                  Multi-factor authentication and SSO integration
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Application Layer</h4>
                <p className="text-sm text-muted-foreground">
                  WAF protection and API security controls
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Database" size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Data Storage</h4>
                <p className="text-sm text-muted-foreground">
                  Encrypted databases with access logging
                </p>
              </div>
            </div>
            
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-border transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-border transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataProtectionSection;