import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SecurityDocumentation = () => {
  const [selectedCategory, setSelectedCategory] = useState('security');

  const documentCategories = {
    security: {
      title: "Security Documentation",
      icon: "Shield",
      documents: [
        {
          name: "Security Architecture Overview",
          description: "Comprehensive overview of our security infrastructure and controls",
          type: "PDF",
          size: "2.4 MB",
          lastUpdated: "January 2024",
          downloadCount: "1,247",
          restricted: false
        },
        {
          name: "Penetration Testing Report",
          description: "Latest third-party security assessment and vulnerability testing results",
          type: "PDF",
          size: "1.8 MB",
          lastUpdated: "December 2023",
          downloadCount: "892",
          restricted: true
        },
        {
          name: "Security Incident Response Plan",
          description: "Detailed procedures for security incident detection, response, and recovery",
          type: "PDF",
          size: "1.2 MB",
          lastUpdated: "November 2023",
          downloadCount: "654",
          restricted: false
        },
        {
          name: "Data Encryption Standards",
          description: "Technical specifications for data encryption at rest and in transit",
          type: "PDF",
          size: "956 KB",
          lastUpdated: "October 2023",
          downloadCount: "423",
          restricted: false
        }
      ]
    },
    compliance: {
      title: "Compliance Reports",
      icon: "FileText",
      documents: [
        {
          name: "SOC 2 Type II Report",
          description: "Independent audit report on security, availability, and confidentiality controls",
          type: "PDF",
          size: "3.2 MB",
          lastUpdated: "January 2024",
          downloadCount: "2,156",
          restricted: true
        },
        {
          name: "ISO 27001 Certificate",
          description: "Current ISO 27001 certification and scope documentation",
          type: "PDF",
          size: "1.1 MB",
          lastUpdated: "March 2023",
          downloadCount: "1,834",
          restricted: false
        },
        {
          name: "GDPR Compliance Assessment",
          description: "Detailed assessment of GDPR compliance measures and data protection controls",
          type: "PDF",
          size: "2.1 MB",
          lastUpdated: "December 2023",
          downloadCount: "1,456",
          restricted: false
        },
        {
          name: "HIPAA Compliance Guide",
          description: "Implementation guide for HIPAA compliance using SOP Intelligence",
          type: "PDF",
          size: "1.7 MB",
          lastUpdated: "November 2023",
          downloadCount: "987",
          restricted: false
        }
      ]
    },
    questionnaires: {
      title: "Security Questionnaires",
      icon: "ClipboardList",
      documents: [
        {
          name: "Vendor Security Assessment",
          description: "Comprehensive security questionnaire for vendor evaluation processes",
          type: "DOCX",
          size: "245 KB",
          lastUpdated: "January 2024",
          downloadCount: "3,421",
          restricted: false
        },
        {
          name: "SIG Lite Questionnaire",
          description: "Standardized Information Gathering (SIG) Lite security questionnaire",
          type: "XLSX",
          size: "189 KB",
          lastUpdated: "December 2023",
          downloadCount: "2,876",
          restricted: false
        },
        {
          name: "CAIQ (Cloud Security Alliance)",
          description: "Cloud Security Alliance Consensus Assessments Initiative Questionnaire",
          type: "XLSX",
          size: "312 KB",
          lastUpdated: "November 2023",
          downloadCount: "1,654",
          restricted: false
        },
        {
          name: "Custom Security Assessment",
          description: "Customizable security assessment template for specific requirements",
          type: "DOCX",
          size: "198 KB",
          lastUpdated: "October 2023",
          downloadCount: "1,234",
          restricted: false
        }
      ]
    },
    policies: {
      title: "Security Policies",
      icon: "BookOpen",
      documents: [
        {
          name: "Information Security Policy",
          description: "Comprehensive information security policy and governance framework",
          type: "PDF",
          size: "1.4 MB",
          lastUpdated: "January 2024",
          downloadCount: "2,345",
          restricted: false
        },
        {
          name: "Data Privacy Policy",
          description: "Data privacy and protection policy covering all personal information handling",
          type: "PDF",
          size: "1.1 MB",
          lastUpdated: "December 2023",
          downloadCount: "1,987",
          restricted: false
        },
        {
          name: "Incident Response Policy",
          description: "Security incident response policy and escalation procedures",
          type: "PDF",
          size: "892 KB",
          lastUpdated: "November 2023",
          downloadCount: "1,456",
          restricted: false
        },
        {
          name: "Access Control Policy",
          description: "User access control policy and role-based permission management",
          type: "PDF",
          size: "756 KB",
          lastUpdated: "October 2023",
          downloadCount: "1,123",
          restricted: false
        }
      ]
    }
  };

  const categories = [
    { key: 'security', label: 'Security Docs', icon: 'Shield' },
    { key: 'compliance', label: 'Compliance', icon: 'FileText' },
    { key: 'questionnaires', label: 'Questionnaires', icon: 'ClipboardList' },
    { key: 'policies', label: 'Policies', icon: 'BookOpen' }
  ];

  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf': return 'FileText';
      case 'docx': return 'FileText';
      case 'xlsx': return 'Table';
      default: return 'File';
    }
  };

  const handleDownload = (document) => {
    // Mock download functionality
    console.log(`Downloading: ${document.name}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Security Documentation Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive security documentation, compliance reports, and assessment questionnaires to support your evaluation process.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`inline-flex items-center space-x-3 px-6 py-3 rounded-lg border transition-all duration-200 ${
                selectedCategory === category.key
                  ? 'bg-primary text-white border-primary shadow-medium'
                  : 'bg-white text-foreground border-border hover:border-primary/50 hover:shadow-soft'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Document Grid */}
        <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <Icon name={documentCategories[selectedCategory].icon} size={24} className="text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                {documentCategories[selectedCategory].title}
              </h3>
            </div>
          </div>

          <div className="divide-y divide-border">
            {documentCategories[selectedCategory].documents.map((doc, index) => (
              <div key={index} className="p-6 hover:bg-muted/20 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-muted/30 rounded-lg flex items-center justify-center">
                      <Icon name={getFileIcon(doc.type)} size={20} className="text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {doc.name}
                        </h4>
                        {doc.restricted && (
                          <span className="inline-flex items-center space-x-1 px-2 py-1 bg-warning/10 text-warning border border-warning/20 rounded-full text-xs font-medium">
                            <Icon name="Lock" size={12} />
                            <span>Restricted</span>
                          </span>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-3">
                        {doc.description}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Icon name="File" size={14} />
                          <span>{doc.type} • {doc.size}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Calendar" size={14} />
                          <span>Updated {doc.lastUpdated}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Download" size={14} />
                          <span>{doc.downloadCount} downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 ml-4">
                    <button
                      onClick={() => handleDownload(doc)}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
                    >
                      <Icon name="Download" size={16} />
                      <span>Download</span>
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-200">
                      <Icon name="Share" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Security Documents</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-2">25K+</div>
            <div className="text-sm text-muted-foreground">Total Downloads</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">Monthly</div>
            <div className="text-sm text-muted-foreground">Updates</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-warning mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Access Available</div>
          </div>
        </div>

        {/* Request Custom Documentation */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageSquare" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Need Custom Documentation?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Can't find the specific security documentation you need? Our team can provide custom reports, assessments, and documentation tailored to your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200">
                <Icon name="Mail" size={16} />
                <span>Request Documentation</span>
              </button>
              <button className="inline-flex items-center space-x-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <Icon name="Phone" size={16} />
                <span>Schedule Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityDocumentation;