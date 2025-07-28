import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DataResidencySection = () => {
  const [selectedRegion, setSelectedRegion] = useState('us-east');

  const dataRegions = {
    'us-east': {
      name: "US East (Virginia)",
      flag: "🇺🇸",
      compliance: ["SOC 2", "HIPAA", "SOX"],
      description: "Primary data center with full redundancy and 99.99% uptime SLA",
      features: [
        "24/7 security monitoring",
        "Biometric access controls",
        "N+1 power redundancy",
        "Multi-zone backup"
      ],
      certifications: ["SOC 2 Type II", "ISO 27001", "PCI DSS Level 1"],
      latency: "< 50ms",
      backup: "Real-time replication to US West"
    },
    'us-west': {
      name: "US West (Oregon)",
      flag: "🇺🇸",
      compliance: ["SOC 2", "HIPAA", "SOX"],
      description: "Secondary data center with disaster recovery capabilities",
      features: [
        "Automated failover systems",
        "Green energy powered",
        "Advanced fire suppression",
        "Seismic protection"
      ],
      certifications: ["SOC 2 Type II", "ISO 27001", "LEED Certified"],
      latency: "< 75ms",
      backup: "Real-time replication to US East"
    },
    'eu-central': {
      name: "EU Central (Frankfurt)",
      flag: "🇪🇺",
      compliance: ["GDPR", "ISO 27001", "BSI C5"],
      description: "European data center ensuring GDPR compliance and data sovereignty",
      features: [
        "GDPR-compliant operations",
        "Data sovereignty guarantee",
        "EU-based support team",
        "Local data processing"
      ],
      certifications: ["ISO 27001", "BSI C5", "GDPR Certified"],
      latency: "< 60ms",
      backup: "Regional backup within EU"
    },
    'asia-pacific': {
      name: "Asia Pacific (Singapore)",
      flag: "🇸🇬",
      compliance: ["ISO 27001", "MTCS SS 584", "CSA STAR"],
      description: "Strategic location serving Asia-Pacific region with local compliance",
      features: [
        "Multi-tier security design",
        "Local regulatory compliance",
        "24/7 local support",
        "Regional data processing"
      ],
      certifications: ["ISO 27001", "MTCS SS 584", "CSA STAR"],
      latency: "< 80ms",
      backup: "Regional redundancy"
    }
  };

  const complianceRequirements = [
    {
      region: "United States",
      requirements: [
        "HIPAA - Healthcare data must remain in US",
        "SOX - Financial records require US-based storage",
        "FERPA - Educational records need domestic hosting"
      ]
    },
    {
      region: "European Union",
      requirements: [
        "GDPR - Personal data of EU residents",
        "Data Protection Act - UK-specific requirements",
        "Banking regulations - Financial services compliance"
      ]
    },
    {
      region: "Asia Pacific",
      requirements: [
        "Personal Data Protection Act - Singapore",
        "Privacy Act - Australia",
        "Data localization laws - Various countries"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Global Data Residency & Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose where your data is stored and processed to meet local regulations and optimize performance for your global teams.
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="bg-muted/30 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Global Data Center Network
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(dataRegions).map(([key, region]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRegion(key)}
                  className={`p-4 rounded-lg border transition-all duration-200 ${
                    selectedRegion === key
                      ? 'bg-primary text-white border-primary shadow-medium'
                      : 'bg-white text-foreground border-border hover:border-primary/50 hover:shadow-soft'
                  }`}
                >
                  <div className="text-2xl mb-2">{region.flag}</div>
                  <div className="text-sm font-medium">{region.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Region Details */}
        <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">{dataRegions[selectedRegion].flag}</div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {dataRegions[selectedRegion].name}
                </h3>
                <p className="text-muted-foreground">
                  {dataRegions[selectedRegion].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Features */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Server" size={20} className="text-primary" />
                  <span>Infrastructure Features</span>
                </h4>
                <div className="space-y-3">
                  {dataRegions[selectedRegion].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Award" size={20} className="text-secondary" />
                  <span>Certifications</span>
                </h4>
                <div className="space-y-3">
                  {dataRegions[selectedRegion].certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="Shield" size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Zap" size={20} className="text-accent" />
                  <span>Performance</span>
                </h4>
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Average Latency</div>
                    <div className="text-xl font-bold text-accent">
                      {dataRegions[selectedRegion].latency}
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Backup Strategy</div>
                    <div className="text-sm font-medium text-foreground">
                      {dataRegions[selectedRegion].backup}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Requirements by Region */}
        <div className="bg-muted/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Regional Compliance Requirements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceRequirements.map((region, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-soft border border-border">
                <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Globe" size={20} className="text-primary" />
                  <span>{region.region}</span>
                </h4>
                <div className="space-y-3">
                  {region.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="text-sm">
                      <div className="font-medium text-foreground mb-1">
                        {req.split(' - ')[0]}
                      </div>
                      <div className="text-muted-foreground">
                        {req.split(' - ')[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sovereignty Guarantee */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Lock" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Data Sovereignty Guarantee
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Your data stays exactly where you choose. We guarantee that your information will not cross regional boundaries without your explicit consent, ensuring full compliance with local data protection laws.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-soft">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm font-medium">No cross-border transfers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-soft">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm font-medium">Local processing only</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-soft">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm font-medium">Regional compliance certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataResidencySection;