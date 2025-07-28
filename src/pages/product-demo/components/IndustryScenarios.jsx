import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IndustryScenarios = () => {
  const [activeIndustry, setActiveIndustry] = useState('manufacturing');
  const [playingScenario, setPlayingScenario] = useState(null);

  const industries = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: 'Factory',
      color: 'bg-blue-500',
      description: 'Quality control and safety protocols'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: 'Heart',
      color: 'bg-red-500',
      description: 'Patient safety and regulatory compliance'
    },
    {
      id: 'financial',
      name: 'Financial Services',
      icon: 'DollarSign',
      color: 'bg-green-500',
      description: 'Risk management and regulatory reporting'
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: 'Cpu',
      color: 'bg-purple-500',
      description: 'Security protocols and development processes'
    }
  ];

  const scenarios = {
    manufacturing: [
      {
        id: 'safety-inspection',
        title: 'Equipment Safety Inspection',
        description: 'Daily safety checks for manufacturing equipment with automated compliance tracking',
        duration: '3:45',
        steps: [
          'AI-powered inspection checklist generation',
          'Mobile app guides technician through process',
          'Photo documentation with automatic analysis',
          'Real-time compliance status updates',
          'Automated reporting to safety management'
        ],
        metrics: {
          timeReduction: '65%',
          errorReduction: '89%',
          complianceRate: '99.2%'
        },
        customerQuote: "SOP Intelligence transformed our safety inspections from a 2-hour manual process to a 45-minute guided workflow with zero missed checks.",
        customerName: "Sarah Chen",
        customerTitle: "Safety Manager, TechManufacturing Inc."
      },
      {
        id: 'quality-control',
        title: 'Product Quality Control',
        description: 'Comprehensive quality assurance workflow with AI-powered defect detection',
        duration: '4:20',
        steps: [
          'Automated quality standards verification',
          'AI-assisted defect identification',
          'Digital documentation and traceability',
          'Automated corrective action workflows',
          'Real-time quality metrics dashboard'
        ],
        metrics: {
          timeReduction: '72%',
          errorReduction: '94%',
          complianceRate: '98.8%'
        },
        customerQuote: "Our quality control process is now completely digital and catches issues we used to miss with manual inspections.",
        customerName: "Michael Rodriguez",
        customerTitle: "QA Director, Precision Parts Ltd."
      }
    ],
    healthcare: [
      {
        id: 'patient-safety',
        title: 'Patient Safety Protocol',
        description: 'Comprehensive patient safety checks with automated compliance monitoring',
        duration: '2:30',
        steps: [
          'Patient identification verification',
          'Medication administration checks',
          'Allergy and contraindication alerts',
          'Digital signature and documentation',
          'Automated incident reporting'
        ],
        metrics: {
          timeReduction: '58%',
          errorReduction: '96%',
          complianceRate: '99.7%'
        },
        customerQuote: "Patient safety incidents have dropped by 96% since implementing SOP Intelligence in our medication administration process.",
        customerName: "Dr. Emily Watson",
        customerTitle: "Chief Medical Officer, Regional Medical Center"
      },
      {
        id: 'infection-control',
        title: 'Infection Control Procedures',
        description: 'Standardized infection prevention protocols with real-time monitoring',
        duration: '3:15',
        steps: [
          'Hand hygiene compliance tracking',
          'PPE usage verification',
          'Environmental cleaning validation',
          'Isolation protocol management',
          'Outbreak response coordination'
        ],
        metrics: {
          timeReduction: '45%',
          errorReduction: '87%',
          complianceRate: '99.1%'
        },
        customerQuote: "Our infection control compliance has never been higher, and staff actually enjoy using the system.",
        customerName: "Jennifer Park",
        customerTitle: "Infection Control Nurse, City Hospital"
      }
    ],
    financial: [
      {
        id: 'risk-assessment',
        title: 'Risk Assessment Workflow',
        description: 'Automated risk evaluation and compliance reporting for financial institutions',
        duration: '5:10',
        steps: [
          'Automated data collection and analysis',
          'AI-powered risk scoring',
          'Regulatory requirement mapping',
          'Automated report generation',
          'Stakeholder notification and approval'
        ],
        metrics: {
          timeReduction: '83%',
          errorReduction: '91%',
          complianceRate: '99.5%'
        },
        customerQuote: "What used to take our team 3 weeks now takes 3 days, with better accuracy and complete audit trails.",
        customerName: "David Kim",
        customerTitle: "Risk Manager, First National Bank"
      },
      {
        id: 'regulatory-reporting',
        title: 'Regulatory Reporting',
        description: 'Streamlined regulatory compliance reporting with automated validation',
        duration: '4:45',
        steps: [
          'Automated data aggregation',
          'Regulatory template matching',
          'Cross-validation and error checking',
          'Digital approval workflows',
          'Automated submission to regulators'
        ],
        metrics: {
          timeReduction: '78%',
          errorReduction: '95%',
          complianceRate: '100%'
        },
        customerQuote: "We've never missed a regulatory deadline since implementing SOP Intelligence, and our reports are consistently error-free.",
        customerName: "Lisa Thompson",
        customerTitle: "Compliance Director, Investment Partners LLC"
      }
    ],
    technology: [
      {
        id: 'security-incident',
        title: 'Security Incident Response',
        description: 'Rapid security incident response with automated escalation and documentation',
        duration: '6:30',
        steps: [
          'Automated threat detection and classification',
          'Incident response team notification',
          'Evidence collection and preservation',
          'Containment and remediation steps',
          'Post-incident analysis and reporting'
        ],
        metrics: {
          timeReduction: '67%',
          errorReduction: '88%',
          complianceRate: '99.3%'
        },
        customerQuote: "Our incident response time improved from hours to minutes, and we never miss a step in our security protocols.",
        customerName: "Alex Johnson",
        customerTitle: "CISO, CloudTech Solutions"
      },
      {
        id: 'code-review',
        title: 'Code Review Process',
        description: 'Standardized code review workflow with automated quality checks',
        duration: '3:55',
        steps: [
          'Automated code quality analysis',
          'Security vulnerability scanning',
          'Peer review assignment and tracking',
          'Compliance checklist validation',
          'Automated deployment approval'
        ],
        metrics: {
          timeReduction: '54%',
          errorReduction: '76%',
          complianceRate: '98.9%'
        },
        customerQuote: "Our code quality has improved dramatically, and developers love the streamlined review process.",
        customerName: "Maria Garcia",
        customerTitle: "Engineering Manager, DevCorp Inc."
      }
    ]
  };

  const handlePlayScenario = (scenarioId) => {
    setPlayingScenario(scenarioId);
    setTimeout(() => setPlayingScenario(null), 3000);
  };

  const currentScenarios = scenarios[activeIndustry] || [];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Building" size={16} />
            <span>Industry Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Customer Scenarios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations across different industries use SOP Intelligence 
            to solve their unique compliance challenges with measurable results.
          </p>
        </div>

        {/* Industry Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeIndustry === industry.id
                  ? 'bg-primary text-white shadow-medium scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-soft'
              }`}
            >
              <div className={`w-8 h-8 ${industry.color} rounded-lg flex items-center justify-center text-white`}>
                <Icon name={industry.icon} size={20} />
              </div>
              <div className="text-left">
                <div className="font-semibold">{industry.name}</div>
                <div className={`text-sm ${activeIndustry === industry.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {industry.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Scenarios */}
        <div className="space-y-8">
          {currentScenarios.map((scenario, index) => (
            <div key={scenario.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Scenario Info */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{scenario.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Icon name="Clock" size={14} />
                        <span>Demo Duration: {scenario.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {scenario.description}
                  </p>

                  {/* Process Steps */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Process Overview:</h4>
                    <div className="space-y-2">
                      {scenario.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-700 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Demo Button */}
                  <div className="flex space-x-3">
                    <Button
                      variant="primary"
                      onClick={() => handlePlayScenario(scenario.id)}
                      loading={playingScenario === scenario.id}
                      iconName={playingScenario === scenario.id ? "Loader" : "Play"}
                      iconPosition="left"
                    >
                      {playingScenario === scenario.id ? 'Playing Demo...' : 'Watch Demo'}
                    </Button>
                    <Button variant="outline" iconName="ExternalLink" iconPosition="right">
                      Full Case Study
                    </Button>
                  </div>
                </div>

                {/* Results & Testimonial */}
                <div className="space-y-6">
                  {/* Metrics */}
                  <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Measurable Results:</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {scenario.metrics.timeReduction}
                        </div>
                        <div className="text-xs text-gray-600">Time Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {scenario.metrics.errorReduction}
                        </div>
                        <div className="text-xs text-gray-600">Error Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                          {scenario.metrics.complianceRate}
                        </div>
                        <div className="text-xs text-gray-600">Compliance Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Testimonial */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                    <div className="flex items-start space-x-3 mb-4">
                      <Icon name="Quote" size={24} className="text-primary flex-shrink-0" />
                      <blockquote className="text-gray-700 italic leading-relaxed">
                        "{scenario.customerQuote}"
                      </blockquote>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {scenario.customerName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{scenario.customerName}</div>
                        <div className="text-sm text-gray-600">{scenario.customerTitle}</div>
                      </div>
                    </div>
                  </div>

                  {/* Demo Preview */}
                  {playingScenario === scenario.id && (
                    <div className="bg-black rounded-xl p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-sm">Live Demo Recording</span>
                        </div>
                        <div className="text-sm opacity-70">0:45 / {scenario.duration}</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 text-center">
                        <Icon name="Play" size={48} className="mx-auto mb-2 opacity-50" />
                        <p className="text-sm opacity-70">Demo video would play here</p>
                        <p className="text-xs opacity-50 mt-1">Showing {scenario.title} workflow</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Industry?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of organizations who have revolutionized their compliance processes 
            with SOP Intelligence. See results in your first week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" iconName="Calendar" iconPosition="left">
              Schedule Industry Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10"
              iconName="Download"
              iconPosition="left"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryScenarios;