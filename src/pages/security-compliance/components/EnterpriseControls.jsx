import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const EnterpriseControls = () => {
  const [activeControl, setActiveControl] = useState('sso');

  const controlSections = {
    sso: {
      title: "Single Sign-On (SSO)",
      icon: "Key",
      description: "Streamlined authentication with enterprise identity providers",
      features: [
        {
          name: "SAML 2.0 Integration",
          description: "Seamless integration with Active Directory, Okta, and other SAML providers",
          status: "Available"
        },
        {
          name: "OAuth 2.0 Support",
          description: "Modern authentication with Google, Microsoft, and custom OAuth providers",
          status: "Available"
        },
        {
          name: "Multi-Factor Authentication",
          description: "Additional security layer with SMS, authenticator apps, and hardware tokens",
          status: "Available"
        },
        {
          name: "Session Management",
          description: "Configurable session timeouts and concurrent session controls",
          status: "Available"
        }
      ],
      integrations: [
        { name: "Microsoft Azure AD", logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=40&h=40&fit=crop&crop=center" },
        { name: "Okta", logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=40&h=40&fit=crop&crop=center" },
        { name: "Google Workspace", logo: "https://images.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png?w=40&h=40&fit=crop&crop=center" },
        { name: "OneLogin", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=40&h=40&fit=crop&crop=center" }
      ]
    },
    rbac: {
      title: "Role-Based Access Control",
      icon: "Users",
      description: "Granular permissions management with hierarchical role structures",
      features: [
        {
          name: "Custom Role Creation",
          description: "Define roles with specific permissions tailored to your organization",
          status: "Available"
        },
        {
          name: "Permission Inheritance",
          description: "Hierarchical role structures with automatic permission inheritance",
          status: "Available"
        },
        {
          name: "Dynamic Permissions",
          description: "Context-aware permissions based on data sensitivity and user location",
          status: "Available"
        },
        {
          name: "Bulk User Management",
          description: "Efficient user provisioning and role assignment for large teams",
          status: "Available"
        }
      ],
      roleExamples: [
        { role: "System Administrator", permissions: "Full system access", users: 3 },
        { role: "Compliance Manager", permissions: "Audit and compliance features", users: 8 },
        { role: "Department Head", permissions: "Department-specific SOPs", users: 15 },
        { role: "Standard User", permissions: "Read and execute assigned SOPs", users: 247 }
      ]
    },
    admin: {
      title: "Administrative Oversight",
      icon: "Shield",
      description: "Comprehensive administrative controls and monitoring capabilities",
      features: [
        {
          name: "User Activity Monitoring",
          description: "Real-time tracking of user actions and system interactions",
          status: "Available"
        },
        {
          name: "Policy Enforcement",
          description: "Automated enforcement of security policies and compliance rules",
          status: "Available"
        },
        {
          name: "Anomaly Detection",
          description: "AI-powered detection of unusual user behavior and potential threats",
          status: "Available"
        },
        {
          name: "Compliance Reporting",
          description: "Automated generation of compliance reports and audit documentation",
          status: "Available"
        }
      ],
      adminStats: [
        { metric: "Active Users", value: "1,247", trend: "+12%" },
        { metric: "Policy Violations", value: "3", trend: "-67%" },
        { metric: "System Uptime", value: "99.98%", trend: "+0.02%" },
        { metric: "Security Score", value: "A+", trend: "Stable" }
      ]
    }
  };

  const controlTabs = [
    { key: 'sso', label: 'Single Sign-On', icon: 'Key' },
    { key: 'rbac', label: 'Access Control', icon: 'Users' },
    { key: 'admin', label: 'Admin Oversight', icon: 'Shield' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Enterprise Security Controls
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced security features designed for enterprise environments with sophisticated access management and administrative oversight.
          </p>
        </div>

        {/* Control Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted/30 rounded-lg p-1">
            {controlTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveControl(tab.key)}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeControl === tab.key
                    ? 'bg-white text-primary shadow-soft border border-border'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/50'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Control Content */}
        <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={controlSections[activeControl].icon} size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {controlSections[activeControl].title}
                </h3>
                <p className="text-muted-foreground">
                  {controlSections[activeControl].description}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {controlSections[activeControl].features.map((feature, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-success/10 rounded-full flex items-center justify-center mt-1">
                      <Icon name="Check" size={16} className="text-success" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {feature.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-xs font-medium text-success">
                          {feature.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Content Based on Active Control */}
            {activeControl === 'sso' && controlSections[activeControl].integrations && (
              <div className="border-t border-border pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-6">
                  Supported Identity Providers
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {controlSections[activeControl].integrations.map((integration, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src={integration.logo} 
                          alt={`${integration.name} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {integration.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeControl === 'rbac' && controlSections[activeControl].roleExamples && (
              <div className="border-t border-border pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-6">
                  Example Role Configurations
                </h4>
                <div className="space-y-4">
                  {controlSections[activeControl].roleExamples.map((role, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h5 className="font-medium text-foreground">{role.role}</h5>
                        <p className="text-sm text-muted-foreground">{role.permissions}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-primary">{role.users}</div>
                        <div className="text-xs text-muted-foreground">users</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeControl === 'admin' && controlSections[activeControl].adminStats && (
              <div className="border-t border-border pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-6">
                  Administrative Dashboard Overview
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {controlSections[activeControl].adminStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {stat.metric}
                      </div>
                      <div className={`text-xs font-medium ${
                        stat.trend.startsWith('+') ? 'text-success' : 
                        stat.trend.startsWith('-') ? 'text-error' : 
                        'text-muted-foreground'
                      }`}>
                        {stat.trend}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Best Practices */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/20">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="BookOpen" size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Security Best Practices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span>Enable multi-factor authentication for all administrative accounts</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span>Regularly review and audit user permissions and access levels</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span>Implement principle of least privilege for all user roles</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span>Monitor and log all administrative actions and system changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseControls;