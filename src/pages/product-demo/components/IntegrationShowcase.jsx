import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const IntegrationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('communication');
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const integrationCategories = [
    { id: 'communication', name: 'Communication', icon: 'MessageSquare', count: 8 },
    { id: 'productivity', name: 'Productivity', icon: 'Briefcase', count: 12 },
    { id: 'crm', name: 'CRM & Sales', icon: 'Users', count: 6 },
    { id: 'hr', name: 'HR & Talent', icon: 'UserCheck', count: 9 },
    { id: 'security', name: 'Security', icon: 'Shield', count: 7 },
    { id: 'analytics', name: 'Analytics', icon: 'BarChart3', count: 5 }
  ];

  const integrations = {
    communication: [
      {
        id: 'slack',
        name: 'Slack',
        description: 'Real-time SOP notifications and approvals directly in Slack channels',
        logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
        features: ['Instant notifications', 'Approval workflows', 'Status updates', 'Team collaboration'],
        status: 'active',
        setupTime: '5 minutes'
      },
      {
        id: 'teams',
        name: 'Microsoft Teams',
        description: 'Seamless integration with Teams for SOP management and collaboration',
        logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop&crop=center',
        features: ['Meeting integration', 'File sharing', 'Bot commands', 'Calendar sync'],
        status: 'active',
        setupTime: '3 minutes'
      },
      {
        id: 'discord',
        name: 'Discord',
        description: 'Community-based SOP discussions and knowledge sharing',
        logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=100&h=100&fit=crop&crop=center',
        features: ['Voice channels', 'Screen sharing', 'Role management', 'Custom bots'],
        status: 'beta',
        setupTime: '8 minutes'
      }
    ],
    productivity: [
      {
        id: 'office365',
        name: 'Microsoft 365',
        description: 'Complete integration with Word, Excel, PowerPoint, and SharePoint',
        logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop&crop=center',
        features: ['Document sync', 'Email integration', 'Calendar events', 'OneDrive storage'],
        status: 'active',
        setupTime: '10 minutes'
      },
      {
        id: 'google-workspace',
        name: 'Google Workspace',
        description: 'Seamless integration with Gmail, Drive, Docs, and Calendar',
        logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center',
        features: ['Gmail integration', 'Drive sync', 'Calendar sync', 'Docs collaboration'],
        status: 'active',
        setupTime: '7 minutes'
      },
      {
        id: 'notion',
        name: 'Notion',
        description: 'Sync SOPs with Notion databases and collaborative workspaces',
        logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
        features: ['Database sync', 'Template sharing', 'Workflow automation', 'Team wikis'],
        status: 'active',
        setupTime: '12 minutes'
      }
    ],
    crm: [
      {
        id: 'salesforce',
        name: 'Salesforce',
        description: 'Integrate compliance workflows with customer relationship management',
        logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
        features: ['Lead qualification', 'Opportunity tracking', 'Custom objects', 'Workflow rules'],
        status: 'active',
        setupTime: '15 minutes'
      },
      {
        id: 'hubspot',
        name: 'HubSpot',
        description: 'Connect SOPs with marketing automation and sales processes',
        logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
        features: ['Contact sync', 'Deal tracking', 'Email sequences', 'Reporting'],
        status: 'active',
        setupTime: '8 minutes'
      }
    ],
    hr: [
      {
        id: 'workday',
        name: 'Workday',
        description: 'Streamline HR processes with automated SOP compliance tracking',
        logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
        features: ['Employee onboarding', 'Performance reviews', 'Compliance tracking', 'Reporting'],
        status: 'active',
        setupTime: '20 minutes'
      },
      {
        id: 'bamboohr',
        name: 'BambooHR',
        description: 'Integrate employee lifecycle management with SOP workflows',
        logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center',
        features: ['Employee records', 'Time tracking', 'Benefits admin', 'Document storage'],
        status: 'active',
        setupTime: '12 minutes'
      }
    ],
    security: [
      {
        id: 'okta',
        name: 'Okta',
        description: 'Single sign-on and identity management for secure SOP access',
        logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=100&h=100&fit=crop&crop=center',
        features: ['SSO integration', 'Multi-factor auth', 'User provisioning', 'Access policies'],
        status: 'active',
        setupTime: '25 minutes'
      },
      {
        id: 'azure-ad',
        name: 'Azure Active Directory',
        description: 'Enterprise-grade identity and access management integration',
        logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop&crop=center',
        features: ['Directory sync', 'Conditional access', 'Group management', 'Audit logs'],
        status: 'active',
        setupTime: '30 minutes'
      }
    ],
    analytics: [
      {
        id: 'tableau',
        name: 'Tableau',
        description: 'Advanced analytics and visualization for SOP performance metrics',
        logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center',
        features: ['Custom dashboards', 'Data visualization', 'Automated reports', 'Predictive analytics'],
        status: 'active',
        setupTime: '18 minutes'
      },
      {
        id: 'powerbi',
        name: 'Power BI',
        description: 'Business intelligence and reporting for compliance insights',
        logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop&crop=center',
        features: ['Interactive reports', 'Real-time data', 'Mobile access', 'AI insights'],
        status: 'active',
        setupTime: '15 minutes'
      }
    ]
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Active</span>;
      case 'beta':
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Beta</span>;
      case 'coming-soon':
        return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Coming Soon</span>;
      default:
        return null;
    }
  };

  const currentIntegrations = integrations[activeCategory] || [];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Plug" size={16} />
            <span>Seamless Integrations</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Connect With Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SOP Intelligence integrates seamlessly with 50+ popular business tools, 
            ensuring your compliance workflows fit perfectly into your existing ecosystem.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {integrationCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-medium'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:shadow-soft border border-gray-200'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white' :'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentIntegrations.map((integration) => (
            <div
              key={integration.id}
              className={`bg-white rounded-xl border-2 p-6 cursor-pointer transition-all duration-300 hover:shadow-medium ${
                selectedIntegration?.id === integration.id
                  ? 'border-primary shadow-medium'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedIntegration(integration)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      {getStatusBadge(integration.status)}
                      <span className="text-xs text-gray-500">{integration.setupTime} setup</span>
                    </div>
                  </div>
                </div>
                <Icon 
                  name={selectedIntegration?.id === integration.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-gray-400" 
                />
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {integration.description}
              </p>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900">Key Features:</div>
                <div className="grid grid-cols-2 gap-1">
                  {integration.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-1 text-xs text-gray-600">
                      <Icon name="Check" size={12} className="text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedIntegration?.id === integration.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <Button variant="primary" size="sm" fullWidth>
                      Connect Now
                    </Button>
                    <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
                      Learn More
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="bg-white rounded-2xl shadow-strong border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Our Integrations Matter</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our deep integrations ensure that SOP Intelligence becomes a natural part of your 
              existing workflows, not another tool to learn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Instant Setup</h4>
              <p className="text-gray-600 text-sm">
                Most integrations can be configured in under 10 minutes with our guided setup wizard.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="RefreshCw" size={32} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Real-time Sync</h4>
              <p className="text-gray-600 text-sm">
                Bidirectional data synchronization ensures information is always up-to-date across all platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-accent" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise Security</h4>
              <p className="text-gray-600 text-sm">
                All integrations use OAuth 2.0 and enterprise-grade encryption to protect your data.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" iconName="Plus" iconPosition="left">
              Request New Integration
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              Don't see your tool? We add new integrations every month based on customer requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationShowcase;