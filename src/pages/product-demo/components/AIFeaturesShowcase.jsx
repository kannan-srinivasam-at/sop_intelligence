import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AIFeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState('analysis');
  const [isProcessing, setIsProcessing] = useState(false);

  const aiFeatures = [
    {
      id: 'analysis',
      name: 'Intelligent Document Analysis',
      icon: 'FileSearch',
      description: 'AI automatically extracts key information, identifies compliance gaps, and suggests improvements',
      color: 'bg-blue-500'
    },
    {
      id: 'compliance',
      name: 'Automated Compliance Checking',
      icon: 'ShieldCheck',
      description: 'Real-time validation against regulatory requirements with instant feedback',
      color: 'bg-green-500'
    },
    {
      id: 'routing',
      name: 'Smart Workflow Routing',
      icon: 'Route',
      description: 'Intelligent assignment of tasks based on expertise, workload, and priority',
      color: 'bg-purple-500'
    },
    {
      id: 'nlp',
      name: 'Natural Language Processing',
      icon: 'MessageSquare',
      description: 'Create and update SOPs using natural language commands and conversations',
      color: 'bg-orange-500'
    }
  ];

  const mockAnalysisResults = {
    analysis: {
      title: 'Document Analysis Results',
      content: [
        { type: 'success', text: 'Identified 12 key compliance requirements' },
        { type: 'warning', text: '3 potential gaps found in safety procedures' },
        { type: 'info', text: 'Suggested 5 process improvements' },
        { type: 'success', text: 'Cross-referenced with 47 regulatory standards' }
      ]
    },
    compliance: {
      title: 'Compliance Check Results',
      content: [
        { type: 'success', text: 'SOC 2 Type II: Fully compliant' },
        { type: 'success', text: 'GDPR: All requirements met' },
        { type: 'warning', text: 'ISO 27001: Minor documentation update needed' },
        { type: 'success', text: 'HIPAA: Compliant with all provisions' }
      ]
    },
    routing: {
      title: 'Smart Routing Analysis',
      content: [
        { type: 'info', text: 'Assigned to Sarah Chen (Quality Expert)' },
        { type: 'info', text: 'Priority: High (regulatory deadline in 5 days)' },
        { type: 'success', text: 'Estimated completion: 2.5 hours' },
        { type: 'info', text: 'Backup assignee: Michael Rodriguez' }
      ]
    },
    nlp: {
      title: 'NLP Processing Results',
      content: [
        { type: 'success', text: 'Converted natural language to structured SOP' },
        { type: 'info', text: 'Generated 8 process steps automatically' },
        { type: 'success', text: 'Added relevant compliance checkpoints' },
        { type: 'info', text: 'Suggested 3 related SOPs for cross-reference' }
      ]
    }
  };

  const handleFeatureDemo = (featureId) => {
    setActiveFeature(featureId);
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  const getResultIcon = (type) => {
    switch (type) {
      case 'success': return { icon: 'CheckCircle', color: 'text-green-500' };
      case 'warning': return { icon: 'AlertTriangle', color: 'text-orange-500' };
      case 'info': return { icon: 'Info', color: 'text-blue-500' };
      default: return { icon: 'Circle', color: 'text-gray-500' };
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            <span>AI-Powered Intelligence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Experience AI That Actually Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how artificial intelligence transforms complex compliance tasks into simple, 
            automated workflows that save time and reduce errors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Choose an AI Feature to Explore:</h3>
            
            {aiFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'border-primary bg-primary/5 shadow-medium'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-soft'
                }`}
                onClick={() => handleFeatureDemo(feature.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    <Icon name={feature.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {activeFeature === feature.id ? (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Check" size={16} color="white" />
                      </div>
                    ) : (
                      <Icon name="ChevronRight" size={20} className="text-gray-400" />
                    )}
                  </div>
                </div>

                {activeFeature === feature.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      iconName="Play" 
                      iconPosition="left"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFeatureDemo(feature.id);
                      }}
                    >
                      Run Demo
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Demo Results */}
          <div className="sticky top-8">
            <div className="bg-white rounded-xl shadow-strong border border-gray-200 overflow-hidden">
              {/* Demo Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">AI Processing Demo</h3>
                    <p className="opacity-90 text-sm">Real-time artificial intelligence analysis</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isProcessing ? (
                      <>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-sm">Processing...</span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">Ready</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6">
                {isProcessing ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">AI Processing in Progress</h4>
                    <p className="text-gray-600 text-sm">Analyzing document and applying machine learning models...</p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      {mockAnalysisResults[activeFeature]?.title}
                    </h4>
                    <div className="space-y-3">
                      {mockAnalysisResults[activeFeature]?.content.map((result, index) => {
                        const { icon, color } = getResultIcon(result.type);
                        return (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                            <Icon name={icon} size={18} className={color} />
                            <span className="text-sm text-gray-700 flex-1">{result.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Processing completed in 1.2 seconds
                        </div>
                        <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                          Export Results
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* AI Confidence Meter */}
            <div className="mt-6 bg-white rounded-xl shadow-soft border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">AI Confidence Level</h4>
                <span className="text-2xl font-bold text-primary">96.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-primary h-3 rounded-full" style={{ width: '96.8%' }}></div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Accuracy Rate</div>
                  <div className="font-semibold text-gray-900">99.2%</div>
                </div>
                <div>
                  <div className="text-gray-500">Processing Speed</div>
                  <div className="font-semibold text-gray-900">1.2s avg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeaturesShowcase;