import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ManufacturingSection = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('safety');

  const workflows = {
    safety: {
      title: 'Safety Protocol Management',
      description: 'Automated safety training and incident reporting with real-time compliance tracking',
      steps: [
        'Hazard Identification',
        'Risk Assessment',
        'Control Measures',
        'Training Verification',
        'Incident Reporting'
      ],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    quality: {
      title: 'Quality Control Workflows',
      description: 'Streamlined quality assurance processes with automated documentation and reporting',
      steps: [
        'Inspection Planning',
        'Quality Checks',
        'Defect Documentation',
        'Corrective Actions',
        'Compliance Reporting'
      ],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    maintenance: {
      title: 'Equipment Maintenance',
      description: 'Predictive maintenance scheduling with automated work orders and compliance tracking',
      steps: [
        'Maintenance Scheduling',
        'Work Order Creation',
        'Parts Management',
        'Completion Verification',
        'Performance Analysis'
      ],
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  };

  const features = [
    {
      icon: 'Shield',
      title: 'OSHA Compliance',
      description: 'Automated compliance tracking and reporting for all OSHA requirements'
    },
    {
      icon: 'Award',
      title: 'ISO Standards',
      description: 'Built-in templates and workflows for ISO 9001, 14001, and 45001 compliance'
    },
    {
      icon: 'BarChart3',
      title: 'Real-time Analytics',
      description: 'Live dashboards showing compliance metrics and operational efficiency'
    },
    {
      icon: 'Users',
      title: 'Training Management',
      description: 'Automated training assignments and certification tracking'
    }
  ];

  const customerStory = {
    company: 'TechManufacturing Corp',
    industry: 'Automotive Parts',
    challenge: 'Manual safety protocols leading to compliance gaps and increased incident rates',
    solution: 'Implemented automated safety training and incident reporting system',
    results: [
      { metric: '85%', description: 'Reduction in safety incidents' },
      { metric: '60%', description: 'Faster compliance reporting' },
      { metric: '40%', description: 'Time saved on training' }
    ],
    quote: `SOP Intelligence transformed our safety culture. We went from reactive incident management to proactive safety excellence.`,
    author: 'Sarah Johnson',
    role: 'Safety Director'
  };

  return (
    <section id="manufacturing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
            <Icon name="Factory" size={16} color="var(--color-primary)" />
            <span className="text-primary text-sm font-medium">Manufacturing Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Manufacturing Excellence Through Intelligent SOPs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Streamline safety protocols, quality control, and regulatory compliance with AI-powered SOP management designed for manufacturing environments.
          </p>
        </div>

        {/* Interactive Workflows */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Interactive Workflow Examples</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex space-x-2 mb-6">
                {Object.keys(workflows).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveWorkflow(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeWorkflow === key
                        ? 'bg-primary text-white shadow-soft'
                        : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
                    }`}
                  >
                    {workflows[key].title.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {workflows[activeWorkflow].title}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {workflows[activeWorkflow].description}
                </p>

                <div className="space-y-3">
                  {workflows[activeWorkflow].steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
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
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Manufacturing-Specific Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-soft transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Success Story */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 mb-4">
                <Icon name="Star" size={14} color="var(--color-accent)" />
                <span className="text-xs font-medium text-foreground">Customer Success</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{customerStory.company}</h3>
              <p className="text-muted-foreground mb-4">{customerStory.industry}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                <p className="text-muted-foreground text-sm mb-4">{customerStory.challenge}</p>
                
                <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                <p className="text-muted-foreground text-sm">{customerStory.solution}</p>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mb-4">
                "{customerStory.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
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
                  <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                  <div className="text-muted-foreground">{result.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Manufacturing Operations?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            See how SOP Intelligence can streamline your safety protocols, quality control, and compliance management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="default" size="lg">
              Schedule Manufacturing Demo
            </Button>
            <Button variant="outline" size="lg">
              Download Manufacturing Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;