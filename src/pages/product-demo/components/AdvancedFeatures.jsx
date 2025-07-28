import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AdvancedFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('nlp');
  const [isExpanded, setIsExpanded] = useState({});

  const advancedFeatures = [
    {
      id: 'nlp',
      name: 'Natural Language Processing',
      icon: 'MessageSquare',
      color: 'bg-blue-500',
      description: 'Create and update SOPs using natural language commands',
      longDescription: `Our advanced NLP engine understands natural language instructions and converts them into structured, compliant SOPs. Simply describe your process in plain English, and our AI will generate a comprehensive, regulation-compliant standard operating procedure with all necessary checkpoints, approvals, and documentation requirements.`,
      capabilities: [
        'Voice-to-SOP conversion with 98% accuracy',
        'Multi-language support (12 languages)',
        'Context-aware process understanding',
        'Automatic compliance mapping',
        'Smart template suggestions'
      ],
      demoData: {
        input: "Create a new employee onboarding process that includes IT setup, HR documentation, and safety training",
        output: {
          title: "Employee Onboarding Standard Operating Procedure",
          sections: [
            "Pre-arrival Preparation",
            "Day 1: Welcome and Orientation", 
            "IT Equipment and Access Setup",
            "HR Documentation and Benefits",
            "Safety Training and Certification",
            "Department-Specific Training",
            "30-Day Check-in and Evaluation"
          ],
          compliance: ["OSHA Safety Standards", "GDPR Data Protection", "Company Policy Alignment"],
          estimatedTime: "Generated in 12 seconds"
        }
      }
    },
    {
      id: 'predictive',
      name: 'Predictive Compliance Analytics',
      icon: 'TrendingUp',
      color: 'bg-green-500',
      description: 'AI-powered insights to prevent compliance issues before they occur',
      longDescription: `Our predictive analytics engine analyzes historical compliance data, regulatory trends, and organizational patterns to forecast potential compliance risks. By identifying issues before they become problems, organizations can take proactive measures to maintain perfect compliance records.`,
      capabilities: [
        'Risk prediction with 94% accuracy',
        'Regulatory change impact analysis',
        'Resource allocation optimization',
        'Deadline management and alerts',
        'Performance trend analysis'
      ],
      demoData: {
        predictions: [
          {
            type: 'High Risk',
            issue: 'Safety Training Compliance Gap',
            probability: '87%',
            timeline: 'Next 14 days',
            impact: 'Potential regulatory violation',
            recommendation: 'Schedule immediate training for 23 employees'
          },
          {
            type: 'Medium Risk',
            issue: 'Document Review Backlog',
            probability: '64%',
            timeline: 'Next 30 days',
            impact: 'Delayed process updates',
            recommendation: 'Assign additional reviewers to quality team'
          },
          {
            type: 'Low Risk',
            issue: 'Equipment Maintenance Schedule',
            probability: '31%',
            timeline: 'Next 60 days',
            impact: 'Minor efficiency reduction',
            recommendation: 'Review maintenance calendar for optimization'
          }
        ]
      }
    },
    {
      id: 'workflow',
      name: 'Intelligent Workflow Automation',
      icon: 'GitBranch',
      color: 'bg-purple-500',
      description: 'Smart routing and automation based on content, priority, and expertise',
      longDescription: `Our intelligent workflow engine automatically routes tasks, documents, and approvals to the right people at the right time. Using machine learning algorithms, it considers factors like expertise, workload, priority, and availability to ensure optimal process flow and minimal delays.`,
      capabilities: [
        'Smart task assignment and routing',
        'Dynamic priority adjustment',
        'Workload balancing across teams',
        'Escalation management',
        'Performance-based optimization'
      ],
      demoData: {
        workflow: {
          trigger: "New Safety Protocol Update",
          steps: [
            {
              step: 1,
              action: "Document Analysis",
              assignee: "AI System",
              duration: "2 minutes",
              status: "completed"
            },
            {
              step: 2,
              action: "Expert Review",
              assignee: "Sarah Chen (Safety Expert)",
              duration: "4 hours",
              status: "in-progress"
            },
            {
              step: 3,
              action: "Management Approval",
              assignee: "Michael Rodriguez (Operations Manager)",
              duration: "1 hour",
              status: "pending"
            },
            {
              step: 4,
              action: "Distribution",
              assignee: "Automated System",
              duration: "5 minutes",
              status: "queued"
            }
          ],
          estimatedCompletion: "6 hours, 7 minutes"
        }
      }
    },
    {
      id: 'analytics',
      name: 'Advanced Performance Analytics',
      icon: 'BarChart3',
      color: 'bg-orange-500',
      description: 'Deep insights into process performance and optimization opportunities',
      longDescription: `Comprehensive analytics dashboard providing actionable insights into SOP performance, compliance rates, and process efficiency. Our advanced analytics help organizations identify bottlenecks, optimize workflows, and demonstrate ROI from compliance investments.`,
      capabilities: [
        'Real-time performance dashboards',
        'Custom KPI tracking and reporting',
        'Bottleneck identification and analysis',
        'ROI calculation and optimization',
        'Benchmarking against industry standards'
      ],
      demoData: {
        metrics: [
          {
            category: "Process Efficiency",
            current: "94.2%",
            target: "95%",
            trend: "up",
            change: "+2.1%"
          },
          {
            category: "Compliance Rate",
            current: "98.7%",
            target: "99%",
            trend: "up",
            change: "+0.8%"
          },
          {
            category: "Average Completion Time",
            current: "4.2 hours",
            target: "4 hours",
            trend: "down",
            change: "-12%"
          },
          {
            category: "User Satisfaction",
            current: "4.6/5",
            target: "4.5/5",
            trend: "up",
            change: "+0.3"
          }
        ]
      }
    }
  ];

  const toggleExpanded = (featureId) => {
    setIsExpanded(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const currentFeature = advancedFeatures.find(f => f.id === activeFeature);

  const getTrendIcon = (trend) => {
    return trend === 'up' ? 'TrendingUp' : 'TrendingDown';
  };

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Zap" size={16} />
            <span>Advanced AI Features</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Next-Generation Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI capabilities that set SOP Intelligence apart from 
            traditional compliance tools. Experience the future of intelligent process management.
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {advancedFeatures.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                activeFeature === feature.id
                  ? 'border-primary bg-primary/5 shadow-medium'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-soft'
              }`}
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </button>
          ))}
        </div>

        {/* Feature Details */}
        <div className="bg-white rounded-2xl shadow-strong border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 ${currentFeature.color} rounded-xl flex items-center justify-center text-white`}>
                <Icon name={currentFeature.icon} size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{currentFeature.name}</h3>
                <p className="opacity-90">{currentFeature.description}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Description and Capabilities */}
              <div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">How It Works:</h4>
                  <p className="text-gray-600 leading-relaxed">{currentFeature.longDescription}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                  <div className="space-y-2">
                    {currentFeature.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  iconName="Play" 
                  iconPosition="left"
                  onClick={() => toggleExpanded(currentFeature.id)}
                >
                  {isExpanded[currentFeature.id] ? 'Hide Demo' : 'Try Interactive Demo'}
                </Button>
              </div>

              {/* Demo Content */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Live Demo:</h4>
                
                {activeFeature === 'nlp' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Natural Language Input:</label>
                      <div className="bg-white p-3 rounded-lg border border-gray-200 text-sm text-gray-600 italic">
                        "{currentFeature.demoData.input}"
                      </div>
                    </div>
                    
                    <div className="text-center py-2">
                      <Icon name="ArrowDown" size={20} className="text-primary" />
                      <span className="text-sm text-gray-500 ml-2">AI Processing...</span>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Generated SOP Structure:</label>
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">{currentFeature.demoData.output.title}</h5>
                        <div className="space-y-1 mb-3">
                          {currentFeature.demoData.output.sections.map((section, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <span className="w-4 h-4 bg-primary/10 rounded text-primary text-xs flex items-center justify-center">
                                {index + 1}
                              </span>
                              <span className="text-gray-700">{section}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-gray-500 border-t pt-2">
                          {currentFeature.demoData.output.estimatedTime}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === 'predictive' && (
                  <div className="space-y-3">
                    {currentFeature.demoData.predictions.map((prediction, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            prediction.type === 'High Risk' ? 'bg-red-100 text-red-800' :
                            prediction.type === 'Medium Risk'? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {prediction.type}
                          </div>
                          <div className="text-sm font-bold text-gray-900">{prediction.probability}</div>
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">{prediction.issue}</h5>
                        <p className="text-sm text-gray-600 mb-2">{prediction.impact}</p>
                        <div className="text-xs text-gray-500 mb-2">Expected: {prediction.timeline}</div>
                        <div className="text-sm text-primary font-medium">{prediction.recommendation}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeFeature === 'workflow' && (
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-gray-700 mb-3">
                      Workflow: {currentFeature.demoData.workflow.trigger}
                    </div>
                    {currentFeature.demoData.workflow.steps.map((step, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              step.status === 'completed' ? 'bg-green-100 text-green-800' :
                              step.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                              step.status === 'pending'? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {step.step}
                            </div>
                            <span className="font-medium text-gray-900">{step.action}</span>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            step.status === 'completed' ? 'bg-green-100 text-green-800' :
                            step.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                            step.status === 'pending'? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {step.status}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">{step.assignee}</div>
                        <div className="text-xs text-gray-500">Est. {step.duration}</div>
                      </div>
                    ))}
                    <div className="text-center text-sm text-gray-600 pt-2 border-t">
                      Total estimated completion: {currentFeature.demoData.workflow.estimatedCompletion}
                    </div>
                  </div>
                )}

                {activeFeature === 'analytics' && (
                  <div className="grid grid-cols-2 gap-3">
                    {currentFeature.demoData.metrics.map((metric, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="text-sm font-medium text-gray-700 mb-1">{metric.category}</div>
                        <div className="text-xl font-bold text-gray-900 mb-1">{metric.current}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">Target: {metric.target}</div>
                          <div className={`flex items-center space-x-1 text-xs ${getTrendColor(metric.trend)}`}>
                            <Icon name={getTrendIcon(metric.trend)} size={12} />
                            <span>{metric.change}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Expanded Demo */}
            {isExpanded[currentFeature.id] && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
                  <div className="text-center">
                    <Icon name="Sparkles" size={48} className="mx-auto text-primary mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Interactive Demo Available</h4>
                    <p className="text-gray-600 mb-4">
                      Experience the full power of {currentFeature.name} with our hands-on interactive demo.
                    </p>
                    <Button variant="primary" size="lg" iconName="ExternalLink" iconPosition="right">
                      Launch Full Demo
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeatures;