import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const BeforeAfterComparison = () => {
  const [activeScenario, setActiveScenario] = useState('onboarding');
  const [isAnimating, setIsAnimating] = useState(false);

  const scenarios = [
    {
      id: 'onboarding',
      title: 'Employee Onboarding',
      icon: 'UserPlus',
      color: 'bg-blue-500'
    },
    {
      id: 'safety',
      title: 'Safety Protocol Updates',
      icon: 'Shield',
      color: 'bg-orange-500'
    },
    {
      id: 'compliance',
      title: 'Compliance Reporting',
      icon: 'FileCheck',
      color: 'bg-green-500'
    }
  ];

  const comparisonData = {
    onboarding: {
      before: {
        title: 'Traditional Manual Process',
        timeframe: '2-3 weeks',
        steps: [
          'HR manually creates checklist',
          'Paper forms distributed to departments',
          'Manual tracking via spreadsheets',
          'Email follow-ups for missing items',
          'Physical document collection',
          'Manual compliance verification',
          'Paper-based approvals required'
        ],
        issues: [
          'High error rates (15-20%)',
          'Inconsistent process execution',
          'Lost or incomplete documentation',
          'Delayed onboarding completion',
          'No real-time visibility'
        ],
        metrics: {
          time: '18 days average',
          errors: '18% error rate',
          satisfaction: '2.3/5 rating',
          cost: '$1,200 per hire'
        }
      },
      after: {
        title: 'SOP Intelligence Automated Process',
        timeframe: '3-5 days',
        steps: [
          'AI generates personalized onboarding plan',
          'Automated task assignment and notifications',
          'Digital forms with smart validation',
          'Real-time progress tracking dashboard',
          'Automated compliance checking',
          'Digital approval workflows',
          'Intelligent escalation management'
        ],
        benefits: [
          'Reduced errors by 95%',
          'Consistent, standardized process',
          'Complete audit trail maintained',
          'Faster completion times',
          'Real-time visibility and reporting'
        ],
        metrics: {
          time: '4 days average',
          errors: '0.9% error rate',
          satisfaction: '4.7/5 rating',
          cost: '$320 per hire'
        }
      }
    },
    safety: {
      before: {
        title: 'Manual Safety Management',
        timeframe: '4-6 weeks',
        steps: [
          'Safety officer creates update manually',
          'Print and distribute paper copies',
          'Manual training session scheduling',
          'Paper-based acknowledgment forms',
          'Manual tracking of completion',
          'Physical file storage and retrieval',
          'Manual compliance reporting'
        ],
        issues: [
          'Delayed protocol distribution',
          'Inconsistent training delivery',
          'Missing acknowledgments',
          'Difficult compliance tracking',
          'Risk of outdated information'
        ],
        metrics: {
          time: '32 days average',
          errors: '22% error rate',
          satisfaction: '2.1/5 rating',
          cost: '$2,800 per update'
        }
      },
      after: {
        title: 'AI-Powered Safety Management',
        timeframe: '2-3 days',
        steps: [
          'AI analyzes regulatory changes',
          'Automated protocol generation',
          'Smart distribution to relevant teams',
          'Interactive digital training modules',
          'Automated progress tracking',
          'Digital acknowledgment capture',
          'Real-time compliance dashboard'
        ],
        benefits: [
          'Instant protocol distribution',
          'Personalized training delivery',
          'Complete acknowledgment tracking',
          'Real-time compliance monitoring',
          'Always current information'
        ],
        metrics: {
          time: '2.5 days average',
          errors: '1.2% error rate',
          satisfaction: '4.6/5 rating',
          cost: '$420 per update'
        }
      }
    },
    compliance: {
      before: {
        title: 'Manual Compliance Reporting',
        timeframe: '6-8 weeks',
        steps: [
          'Manual data collection from departments',
          'Spreadsheet compilation and analysis',
          'Manual cross-referencing with regulations',
          'Email-based review and approval cycles',
          'Manual report formatting',
          'Physical document preparation',
          'Manual submission to regulators'
        ],
        issues: [
          'Time-intensive data gathering',
          'High risk of calculation errors',
          'Missed regulatory deadlines',
          'Inconsistent report quality',
          'Limited audit trail'
        ],
        metrics: {
          time: '45 days average',
          errors: '25% error rate',
          satisfaction: '1.9/5 rating',
          cost: '$8,500 per report'
        }
      },
      after: {
        title: 'Automated Compliance Intelligence',
        timeframe: '2-4 hours',
        steps: [
          'AI automatically collects relevant data',
          'Intelligent analysis and validation',
          'Automated regulatory cross-checking',
          'Smart workflow routing for approvals',
          'AI-generated report formatting',
          'Digital submission preparation',
          'Automated regulatory filing'
        ],
        benefits: [
          'Real-time data aggregation',
          'Eliminated calculation errors',
          'Never miss deadlines',
          'Consistent, high-quality reports',
          'Complete digital audit trail'
        ],
        metrics: {
          time: '3 hours average',
          errors: '0.3% error rate',
          satisfaction: '4.8/5 rating',
          cost: '$850 per report'
        }
      }
    }
  };

  const handleTransition = (scenarioId) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveScenario(scenarioId);
      setIsAnimating(false);
    }, 300);
  };

  const currentData = comparisonData[activeScenario];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Zap" size={16} />
            <span>Transformation Impact</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Before vs After SOP Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic transformation in efficiency, accuracy, and user satisfaction 
            across different business processes.
          </p>
        </div>

        {/* Scenario Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2 inline-flex space-x-2">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => handleTransition(scenario.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeScenario === scenario.id
                    ? 'bg-white text-primary shadow-soft'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className={`w-6 h-6 ${scenario.color} rounded-md flex items-center justify-center text-white`}>
                  <Icon name={scenario.icon} size={14} />
                </div>
                <span>{scenario.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Content */}
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white">
                  <Icon name="AlertTriangle" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-900">{currentData.before.title}</h3>
                  <p className="text-red-700">Completion Time: {currentData.before.timeframe}</p>
                </div>
              </div>

              {/* Process Steps */}
              <div className="mb-6">
                <h4 className="font-semibold text-red-900 mb-3">Process Steps:</h4>
                <div className="space-y-2">
                  {currentData.before.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-red-800 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Issues */}
              <div className="mb-6">
                <h4 className="font-semibold text-red-900 mb-3">Common Issues:</h4>
                <div className="space-y-2">
                  {currentData.before.issues.map((issue, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="X" size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-800 text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-red-100 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-3">Performance Metrics:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-red-700 text-sm">Average Time</div>
                    <div className="font-bold text-red-900">{currentData.before.metrics.time}</div>
                  </div>
                  <div>
                    <div className="text-red-700 text-sm">Error Rate</div>
                    <div className="font-bold text-red-900">{currentData.before.metrics.errors}</div>
                  </div>
                  <div>
                    <div className="text-red-700 text-sm">User Rating</div>
                    <div className="font-bold text-red-900">{currentData.before.metrics.satisfaction}</div>
                  </div>
                  <div>
                    <div className="text-red-700 text-sm">Cost Per Process</div>
                    <div className="font-bold text-red-900">{currentData.before.metrics.cost}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white">
                  <Icon name="CheckCircle" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900">{currentData.after.title}</h3>
                  <p className="text-green-700">Completion Time: {currentData.after.timeframe}</p>
                </div>
              </div>

              {/* Process Steps */}
              <div className="mb-6">
                <h4 className="font-semibold text-green-900 mb-3">Automated Process:</h4>
                <div className="space-y-2">
                  {currentData.after.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-700 text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-green-800 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-green-900 mb-3">Key Benefits:</h4>
                <div className="space-y-2">
                  {currentData.after.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-green-100 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">Improved Metrics:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-green-700 text-sm">Average Time</div>
                    <div className="font-bold text-green-900">{currentData.after.metrics.time}</div>
                  </div>
                  <div>
                    <div className="text-green-700 text-sm">Error Rate</div>
                    <div className="font-bold text-green-900">{currentData.after.metrics.errors}</div>
                  </div>
                  <div>
                    <div className="text-green-700 text-sm">User Rating</div>
                    <div className="font-bold text-green-900">{currentData.after.metrics.satisfaction}</div>
                  </div>
                  <div>
                    <div className="text-green-700 text-sm">Cost Per Process</div>
                    <div className="font-bold text-green-900">{currentData.after.metrics.cost}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="flex justify-center my-8">
            <div className="bg-primary text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-medium">
              <Icon name="ArrowRight" size={20} />
              <span className="font-semibold">Transformation Impact</span>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Overall Transformation Results</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-sm opacity-90">Time Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Error Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">120%</div>
                <div className="text-sm opacity-90">Satisfaction Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">70%</div>
                <div className="text-sm opacity-90">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;