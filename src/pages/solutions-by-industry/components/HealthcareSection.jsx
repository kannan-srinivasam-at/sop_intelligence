import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HealthcareSection = () => {
  const [activeProtocol, setActiveProtocol] = useState('medication');

  const protocols = {
    medication: {
      title: 'Medication Administration',
      description: 'Automated medication protocols with dosage verification and adverse event tracking',
      steps: [
        'Patient Identification',
        'Medication Verification',
        'Dosage Calculation',
        'Administration Recording',
        'Monitoring & Follow-up'
      ],
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    infection: {
      title: 'Infection Control',
      description: 'Comprehensive infection prevention protocols with real-time monitoring and reporting',
      steps: [
        'Risk Assessment',
        'Isolation Procedures',
        'PPE Requirements',
        'Disinfection Protocols',
        'Outbreak Management'
      ],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    emergency: {
      title: 'Emergency Response',
      description: 'Critical care protocols with automated alerts and escalation procedures',
      steps: [
        'Triage Assessment',
        'Emergency Protocols',
        'Team Notification',
        'Treatment Documentation',
        'Quality Review'
      ],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  };

  const complianceFeatures = [
    {
      icon: 'Shield',
      title: 'HIPAA Compliance',
      description: 'Built-in privacy controls and audit trails for patient data protection'
    },
    {
      icon: 'FileText',
      title: 'Clinical Documentation',
      description: 'Automated clinical note generation and regulatory reporting'
    },
    {
      icon: 'AlertTriangle',
      title: 'Patient Safety Alerts',
      description: 'Real-time alerts for drug interactions and safety protocols'
    },
    {
      icon: 'Activity',
      title: 'Quality Metrics',
      description: 'Continuous monitoring of clinical quality indicators and outcomes'
    }
  ];

  const customerStory = {
    organization: 'Regional Medical Center',
    type: 'Multi-specialty Hospital',
    challenge: 'Inconsistent medication administration protocols leading to safety concerns and compliance issues',
    solution: 'Implemented comprehensive digital SOP system for medication management and patient safety',
    results: [
      { metric: '92%', description: 'Reduction in medication errors' },
      { metric: '75%', description: 'Faster protocol compliance' },
      { metric: '100%', description: 'HIPAA audit success rate' }
    ],
    quote: `Patient safety is our top priority. SOP Intelligence gave us the tools to ensure every protocol is followed perfectly, every time.`,
    author: 'Dr. Michael Chen',
    role: 'Chief Medical Officer'
  };

  const integrations = [
    { name: 'Epic EMR', logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Cerner', logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Allscripts', logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Meditech', logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' }
  ];

  return (
    <section id="healthcare" className="py-16 bg-red-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-50 rounded-full px-4 py-2 mb-4">
            <Icon name="Heart" size={16} color="var(--color-error)" />
            <span className="text-red-600 text-sm font-medium">Healthcare Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Patient Safety Through Intelligent Clinical SOPs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ensure consistent, compliant patient care with AI-powered clinical protocols designed for healthcare environments and regulatory requirements.
          </p>
        </div>

        {/* Interactive Clinical Protocols */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Clinical Protocol Examples</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex space-x-2 mb-6">
                {Object.keys(protocols).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveProtocol(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeProtocol === key
                        ? 'bg-red-500 text-white shadow-soft'
                        : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
                    }`}
                  >
                    {protocols[key].title.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {protocols[activeProtocol].title}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {protocols[activeProtocol].description}
                </p>

                <div className="space-y-3">
                  {protocols[activeProtocol].steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Shield" size={16} color="var(--color-secondary)" />
                    <span>HIPAA Compliant & Audit Ready</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={protocols[activeProtocol].image}
                alt={protocols[activeProtocol].title}
                className="w-full h-80 object-cover rounded-xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-sm font-medium text-foreground">Live Protocol Status</div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Active & Monitored</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Healthcare Compliance Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-red-100 rounded-xl p-6 hover:shadow-soft transition-all duration-300">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} color="var(--color-error)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EMR Integrations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Seamless EMR Integration</h3>
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <p className="text-center text-muted-foreground mb-8">
              Connect with your existing Electronic Medical Records system for unified patient care
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden shadow-soft">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm font-medium text-foreground">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Success Story */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 mb-4">
                <Icon name="Award" size={14} color="var(--color-accent)" />
                <span className="text-xs font-medium text-foreground">Healthcare Excellence</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{customerStory.organization}</h3>
              <p className="text-muted-foreground mb-4">{customerStory.type}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                <p className="text-muted-foreground text-sm mb-4">{customerStory.challenge}</p>
                
                <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                <p className="text-muted-foreground text-sm">{customerStory.solution}</p>
              </div>

              <blockquote className="border-l-4 border-red-500 pl-4 italic text-foreground mb-4">
                "{customerStory.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
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
                  <div className="text-3xl font-bold text-red-500 mb-2">{result.metric}</div>
                  <div className="text-muted-foreground">{result.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Enhance Patient Safety with Intelligent SOPs
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover how healthcare organizations are improving patient outcomes and compliance with our specialized solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="default" size="lg" className="bg-red-500 hover:bg-red-600">
              Schedule Healthcare Demo
            </Button>
            <Button variant="outline" size="lg" className="border-red-200 text-red-600 hover:bg-red-50">
              Download Healthcare Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;