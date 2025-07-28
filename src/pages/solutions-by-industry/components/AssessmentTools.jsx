import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const AssessmentTools = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedTool, setSelectedTool] = useState('assessment');
  const [assessmentResults, setAssessmentResults] = useState(null);

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'financial', label: 'Financial Services' },
    { value: 'technology', label: 'Technology' }
  ];

  const tools = {
    assessment: {
      title: 'SOP Readiness Assessment',
      description: 'Evaluate your current SOP maturity and identify improvement opportunities',
      icon: 'CheckSquare'
    },
    roi: {
      title: 'ROI Calculator',
      description: 'Calculate potential cost savings and efficiency gains from SOP automation',
      icon: 'Calculator'
    },
    compliance: {
      title: 'Compliance Gap Analysis',
      description: 'Identify compliance gaps and regulatory requirements for your industry',
      icon: 'Shield'
    }
  };

  const mockAssessmentData = {
    manufacturing: {
      score: 72,
      strengths: ['Safety Protocol Documentation', 'Quality Control Processes'],
      improvements: ['Automated Compliance Tracking', 'Real-time Reporting'],
      roi: { timeSaved: '35%', costReduction: '$125,000', complianceImprovement: '40%' }
    },
    healthcare: {
      score: 68,
      strengths: ['Patient Safety Protocols', 'Clinical Documentation'],
      improvements: ['HIPAA Automation', 'Incident Reporting'],
      roi: { timeSaved: '42%', costReduction: '$180,000', complianceImprovement: '55%' }
    },
    financial: {
      score: 78,
      strengths: ['Audit Trail Management', 'Risk Assessment'],
      improvements: ['Regulatory Updates', 'Automated Reporting'],
      roi: { timeSaved: '48%', costReduction: '$220,000', complianceImprovement: '60%' }
    },
    technology: {
      score: 65,
      strengths: ['Development Workflows', 'Security Protocols'],
      improvements: ['CI/CD Integration', 'Change Management'],
      roi: { timeSaved: '38%', costReduction: '$95,000', complianceImprovement: '45%' }
    }
  };

  const handleRunAssessment = () => {
    if (selectedIndustry) {
      setAssessmentResults(mockAssessmentData[selectedIndustry]);
    }
  };

  const downloadableResources = [
    {
      title: 'Manufacturing SOP Template Library',
      description: 'Pre-built templates for safety, quality, and maintenance procedures',
      industry: 'manufacturing',
      type: 'Templates',
      downloads: '2,847'
    },
    {
      title: 'Healthcare Compliance Checklist',
      description: 'HIPAA and patient safety compliance verification checklist',
      industry: 'healthcare',
      type: 'Checklist',
      downloads: '1,923'
    },
    {
      title: 'Financial Services Audit Guide',
      description: 'Step-by-step guide for SOX and regulatory audit preparation',
      industry: 'financial',
      type: 'Guide',
      downloads: '1,456'
    },
    {
      title: 'DevOps SOP Implementation Kit',
      description: 'Complete toolkit for implementing DevOps SOPs and workflows',
      industry: 'technology',
      type: 'Toolkit',
      downloads: '3,124'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-4 shadow-soft">
            <Icon name="Target" size={16} color="var(--color-primary)" />
            <span className="text-primary text-sm font-medium">Assessment Tools</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Evaluate Your SOP Readiness
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Use our industry-specific assessment tools to identify opportunities for improvement and calculate the potential ROI of SOP automation.
          </p>
        </div>

        {/* Interactive Assessment Tool */}
        <div className="bg-white rounded-2xl shadow-medium p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Interactive Assessment</h3>
              
              {/* Tool Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">Select Assessment Type</label>
                <div className="grid grid-cols-1 gap-3">
                  {Object.keys(tools).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTool(key)}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        selectedTool === key
                          ? 'border-primary bg-primary/5' :'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Icon name={tools[key].icon} size={20} color={selectedTool === key ? 'var(--color-primary)' : 'var(--color-muted-foreground)'} />
                        <div>
                          <h4 className="font-medium text-foreground">{tools[key].title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{tools[key].description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry Selection */}
              <div className="mb-6">
                <Select
                  label="Select Your Industry"
                  placeholder="Choose your industry"
                  options={industries}
                  value={selectedIndustry}
                  onChange={setSelectedIndustry}
                  className="mb-4"
                />
              </div>

              <Button 
                variant="default" 
                size="lg" 
                onClick={handleRunAssessment}
                disabled={!selectedIndustry}
                className="w-full"
              >
                Run Assessment
              </Button>
            </div>

            {/* Results Display */}
            <div className="bg-gray-50 rounded-xl p-6">
              {assessmentResults ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-foreground">Assessment Results</h4>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{assessmentResults.score}</div>
                      <div className="text-sm text-muted-foreground">SOP Maturity Score</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-3">Current Strengths</h5>
                    <div className="space-y-2">
                      {assessmentResults.strengths.map((strength, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} color="var(--color-secondary)" />
                          <span className="text-sm text-foreground">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-3">Improvement Opportunities</h5>
                    <div className="space-y-2">
                      {assessmentResults.improvements.map((improvement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="ArrowRight" size={16} color="var(--color-accent)" />
                          <span className="text-sm text-foreground">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-lg font-bold text-secondary">{assessmentResults.roi.timeSaved}</div>
                      <div className="text-xs text-muted-foreground">Potential Time Savings</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-lg font-bold text-accent">{assessmentResults.roi.costReduction}</div>
                      <div className="text-xs text-muted-foreground">Annual Cost Reduction</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-lg font-bold text-primary">{assessmentResults.roi.complianceImprovement}</div>
                      <div className="text-xs text-muted-foreground">Compliance Improvement</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="BarChart3" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-foreground mb-2">Ready to Assess?</h4>
                  <p className="text-muted-foreground">Select your industry and run the assessment to see your results here.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Downloadable Resources */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Industry-Specific Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        resource.industry === 'manufacturing' ? 'bg-blue-100 text-blue-700' :
                        resource.industry === 'healthcare' ? 'bg-red-100 text-red-700' :
                        resource.industry === 'financial'? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {resource.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Download" size={16} />
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Download Free
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your SOPs?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get personalized recommendations and see how SOP Intelligence can address your specific industry challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="default" size="lg">
                Schedule Personalized Demo
              </Button>
              <Button variant="outline" size="lg">
                Get Custom Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentTools;