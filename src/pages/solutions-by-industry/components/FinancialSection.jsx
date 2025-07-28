import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FinancialSection = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('loan');

  const workflows = {
    loan: {
      title: 'Loan Processing',
      description: 'Automated loan origination with compliance checks and risk assessment',
      steps: [
        'Application Review',
        'Credit Assessment',
        'Risk Evaluation',
        'Compliance Verification',
        'Approval & Documentation'
      ],
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    kyc: {
      title: 'Customer Onboarding',
      description: 'KYC/AML compliance with automated identity verification and risk scoring',
      steps: [
        'Identity Verification',
        'Document Collection',
        'Risk Assessment',
        'AML Screening',
        'Account Activation'
      ],
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    audit: {
      title: 'Audit Management',
      description: 'Comprehensive audit trail management with automated reporting and compliance tracking',
      steps: [
        'Audit Planning',
        'Evidence Collection',
        'Risk Documentation',
        'Findings Review',
        'Compliance Reporting'
      ],
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  };

  const complianceFrameworks = [
    {
      icon: 'FileCheck',
      title: 'SOX Compliance',
      description: 'Automated Sarbanes-Oxley controls and reporting with real-time monitoring'
    },
    {
      icon: 'Shield',
      title: 'GDPR & Privacy',
      description: 'Data protection workflows with consent management and breach notification'
    },
    {
      icon: 'AlertCircle',
      title: 'Risk Management',
      description: 'Integrated risk assessment and mitigation workflows with escalation protocols'
    },
    {
      icon: 'Search',
      title: 'Audit Trails',
      description: 'Comprehensive audit logging with immutable records and compliance reporting'
    }
  ];

  const customerStory = {
    company: 'Premier Financial Group',
    type: 'Regional Banking Institution',
    challenge: 'Manual compliance processes creating audit risks and slowing customer onboarding',
    solution: 'Implemented end-to-end digital compliance platform with automated workflows',
    results: [
      { metric: '78%', description: 'Faster customer onboarding' },
      { metric: '95%', description: 'Audit compliance rate' },
      { metric: '60%', description: 'Reduction in compliance costs' }
    ],
    quote: `Regulatory compliance used to be our biggest operational challenge. Now it's our competitive advantage.`,author: 'Jennifer Martinez',role: 'Chief Compliance Officer'
  };

  const regulatoryUpdates = [
    {
      date: '2025-01-15',
      title: 'Basel III Implementation',
      status: 'Updated',
      impact: 'High'
    },
    {
      date: '2024-12-20',
      title: 'GDPR Amendment Guidelines',
      status: 'Monitored',
      impact: 'Medium'
    },
    {
      date: '2024-11-30',
      title: 'AML Reporting Changes',
      status: 'Implemented',
      impact: 'High'
    }
  ];

  return (
    <section id="financial" className="py-16 bg-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-2 mb-4">
            <Icon name="DollarSign" size={16} color="var(--color-secondary)" />
            <span className="text-green-600 text-sm font-medium">Financial Services Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Regulatory Excellence Through Intelligent Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Navigate complex financial regulations with confidence using AI-powered compliance workflows designed for banking, insurance, and financial services.
          </p>
        </div>

        {/* Interactive Workflows */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Financial Workflow Examples</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex space-x-2 mb-6">
                {Object.keys(workflows).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveWorkflow(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeWorkflow === key
                        ? 'bg-green-500 text-white shadow-soft'
                        : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
                    }`}
                  >
                    {workflows[key].title.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {workflows[activeWorkflow].title}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {workflows[activeWorkflow].description}
                </p>

                <div className="space-y-3">
                  {workflows[activeWorkflow].steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Shield" size={16} color="var(--color-secondary)" />
                      <span>SOX & GDPR Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <Icon name="CheckCircle" size={16} />
                      <span>Audit Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={workflows[activeWorkflow].image}
                alt={workflows[activeWorkflow].title}
                className="w-full h-80 object-cover rounded-xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-sm font-medium text-foreground">Compliance Status</div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">100% Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Regulatory Compliance Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white border border-green-100 rounded-xl p-6 hover:shadow-soft transition-all duration-300">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={framework.icon} size={24} color="var(--color-secondary)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{framework.title}</h4>
                <p className="text-muted-foreground text-sm">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Updates Dashboard */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Live Regulatory Updates</h3>
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Icon name="Bell" size={20} color="var(--color-secondary)" />
                <span className="font-medium text-foreground">Recent Regulatory Changes</span>
              </div>
              <div className="text-sm text-muted-foreground">Last updated: January 27, 2025</div>
            </div>
            
            <div className="space-y-4">
              {regulatoryUpdates.map((update, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{update.title}</h4>
                    <p className="text-sm text-muted-foreground">Updated: {update.date}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      update.impact === 'High' ?'bg-red-100 text-red-700' :'bg-yellow-100 text-yellow-700'
                    }`}>
                      {update.impact} Impact
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      update.status === 'Updated' ?'bg-green-100 text-green-700' 
                        : update.status === 'Implemented' ?'bg-blue-100 text-blue-700' :'bg-gray-100 text-gray-700'
                    }`}>
                      {update.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Success Story */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 mb-4">
                <Icon name="TrendingUp" size={14} color="var(--color-accent)" />
                <span className="text-xs font-medium text-foreground">Financial Success</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{customerStory.company}</h3>
              <p className="text-muted-foreground mb-4">{customerStory.type}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                <p className="text-muted-foreground text-sm mb-4">{customerStory.challenge}</p>
                
                <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                <p className="text-muted-foreground text-sm">{customerStory.solution}</p>
              </div>

              <blockquote className="border-l-4 border-green-500 pl-4 italic text-foreground mb-4">
                "{customerStory.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{customerStory.author}</div>
                  <div className="text-sm text-muted-foreground">{customerStory.role}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {customerStory.results.map((result, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                  <div className="text-3xl font-bold text-green-500 mb-2">{result.metric}</div>
                  <div className="text-muted-foreground">{result.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Transform Financial Compliance into Competitive Advantage
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            See how financial institutions are reducing compliance costs while improving regulatory readiness with our specialized solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="default" size="lg" className="bg-green-500 hover:bg-green-600">
              Schedule Financial Demo
            </Button>
            <Button variant="outline" size="lg" className="border-green-200 text-green-600 hover:bg-green-50">
              Download Compliance Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSection;