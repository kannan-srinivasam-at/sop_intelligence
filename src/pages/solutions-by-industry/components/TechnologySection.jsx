import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TechnologySection = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('development');

  const workflows = {
    development: {
      title: 'Development Workflows',
      description: 'Automated code review, testing, and deployment processes with compliance tracking',
      steps: [
        'Code Review Process',
        'Automated Testing',
        'Security Scanning',
        'Deployment Approval',
        'Release Documentation'
      ],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    security: {
      title: 'Security Protocols',
      description: 'Comprehensive security workflows with incident response and vulnerability management',
      steps: [
        'Threat Assessment',
        'Security Controls',
        'Incident Response',
        'Vulnerability Patching',
        'Compliance Reporting'
      ],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    change: {
      title: 'Change Management',
      description: 'Structured change control processes with approval workflows and rollback procedures',
      steps: [
        'Change Request',
        'Impact Assessment',
        'Approval Workflow',
        'Implementation Plan',
        'Post-Change Review'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  };

  const techFeatures = [
    {
      icon: 'Code',
      title: 'DevOps Integration',
      description: 'Seamless integration with CI/CD pipelines and development tools'
    },
    {
      icon: 'Shield',
      title: 'Security Compliance',
      description: 'Built-in security protocols and compliance frameworks (SOC 2, ISO 27001)'
    },
    {
      icon: 'GitBranch',
      title: 'Version Control',
      description: 'Automated versioning and change tracking for all SOPs and procedures'
    },
    {
      icon: 'Zap',
      title: 'API Management',
      description: 'Comprehensive API governance and documentation workflows'
    }
  ];

  const customerStory = {
    company: 'InnovateTech Solutions',
    type: 'Software Development Company',
    challenge: 'Inconsistent development processes leading to security vulnerabilities and deployment delays',
    solution: 'Implemented comprehensive DevOps SOP platform with automated compliance and security checks',
    results: [
      { metric: '65%', description: 'Faster deployment cycles' },
      { metric: '90%', description: 'Reduction in security incidents' },
      { metric: '80%', description: 'Improved code quality scores' }
    ],
    quote: `Our development velocity increased dramatically while maintaining the highest security standards. It's transformed how we build software.`,
    author: 'Alex Thompson',role: 'VP of Engineering'
  };

  const integrations = [
    { name: 'GitHub', icon: 'Github', color: 'text-gray-700' },
    { name: 'GitLab', icon: 'GitBranch', color: 'text-orange-500' },
    { name: 'Jenkins', icon: 'Settings', color: 'text-blue-600' },
    { name: 'Docker', icon: 'Package', color: 'text-blue-500' },
    { name: 'Kubernetes', icon: 'Server', color: 'text-blue-600' },
    { name: 'AWS', icon: 'Cloud', color: 'text-orange-400' },
    { name: 'Jira', icon: 'Bug', color: 'text-blue-500' },
    { name: 'Slack', icon: 'MessageSquare', color: 'text-purple-500' }
  ];

  const securityMetrics = [
    { label: 'Vulnerability Detection', value: '99.8%', trend: 'up' },
    { label: 'Incident Response Time', value: '< 15min', trend: 'down' },
    { label: 'Compliance Score', value: '98.5%', trend: 'up' },
    { label: 'Code Coverage', value: '94.2%', trend: 'up' }
  ];

  return (
    <section id="technology" className="py-16 bg-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-50 rounded-full px-4 py-2 mb-4">
            <Icon name="Cpu" size={16} color="var(--color-primary)" />
            <span className="text-purple-600 text-sm font-medium">Technology Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            DevOps Excellence Through Intelligent Process Automation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Accelerate development cycles while maintaining security and compliance with AI-powered SOPs designed for modern technology organizations.
          </p>
        </div>

        {/* Interactive Workflows */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Development Workflow Examples</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex space-x-2 mb-6">
                {Object.keys(workflows).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveWorkflow(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeWorkflow === key
                        ? 'bg-purple-500 text-white shadow-soft'
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
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Zap" size={16} color="var(--color-secondary)" />
                      <span>Automated & Scalable</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-purple-600">
                      <Icon name="Shield" size={16} />
                      <span>Security First</span>
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
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-sm font-medium text-foreground">Pipeline Status</div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Running Successfully</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technology-Specific Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-purple-100 rounded-xl p-6 hover:shadow-soft transition-all duration-300">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Metrics Dashboard */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Real-time Security & Performance Metrics</h3>
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-3xl font-bold text-purple-600">{metric.value}</div>
                    <Icon 
                      name={metric.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                      size={20} 
                      color={metric.trend === 'up' ? 'var(--color-secondary)' : 'var(--color-accent)'} 
                      className="ml-2"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tool Integrations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Seamless Tool Integration</h3>
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <p className="text-center text-muted-foreground mb-8">
              Connect with your existing development and deployment tools for unified workflow management
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
                    <Icon name={integration.icon} size={24} className={integration.color} />
                  </div>
                  <div className="text-xs font-medium text-foreground">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Success Story */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 mb-4">
                <Icon name="Rocket" size={14} color="var(--color-accent)" />
                <span className="text-xs font-medium text-foreground">Innovation Success</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{customerStory.company}</h3>
              <p className="text-muted-foreground mb-4">{customerStory.type}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                <p className="text-muted-foreground text-sm mb-4">{customerStory.challenge}</p>
                
                <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                <p className="text-muted-foreground text-sm">{customerStory.solution}</p>
              </div>

              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-foreground mb-4">
                "{customerStory.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
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
                  <div className="text-3xl font-bold text-purple-500 mb-2">{result.metric}</div>
                  <div className="text-muted-foreground">{result.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Accelerate Development with Intelligent Process Automation
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover how technology companies are improving development velocity while maintaining security and compliance standards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="default" size="lg" className="bg-purple-500 hover:bg-purple-600">
              Schedule Technology Demo
            </Button>
            <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              Download DevOps Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;