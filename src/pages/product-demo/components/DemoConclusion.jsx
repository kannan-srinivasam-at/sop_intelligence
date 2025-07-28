import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DemoConclusion = () => {
  const [selectedPath, setSelectedPath] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    industry: '',
    teamSize: ''
  });

  const nextSteps = [
    {
      id: 'trial',
      title: 'Start Free Trial',
      description: 'Get immediate access to SOP Intelligence with a 14-day free trial',
      icon: 'Zap',
      color: 'bg-green-500',
      benefits: ['Full platform access', 'No credit card required', 'Dedicated onboarding', 'Sample templates included'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      id: 'demo',
      title: 'Schedule Live Demo',
      description: 'Book a personalized demo with our solution experts',
      icon: 'Calendar',
      color: 'bg-blue-500',
      benefits: ['Customized to your industry', '45-minute deep dive', 'Q&A with experts', 'ROI calculation'],
      cta: 'Book Demo Call',
      popular: false
    },
    {
      id: 'consultation',
      title: 'Implementation Consultation',
      description: 'Discuss your specific compliance challenges with our specialists',
      icon: 'Users',
      color: 'bg-purple-500',
      benefits: ['Strategic planning session', 'Custom implementation roadmap', 'Change management guidance', 'Success metrics definition'],
      cta: 'Schedule Consultation',
      popular: false
    }
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Financial Services',
    'Technology',
    'Retail',
    'Energy',
    'Government',
    'Other'
  ];

  const teamSizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on selected path
    console.log('Form submitted:', { selectedPath, formData });
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Demo Summary */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="CheckCircle" size={16} />
            <span>Demo Complete</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            You've Experienced the Future of Compliance
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            You've seen how SOP Intelligence transforms manual, error-prone processes into 
            intelligent, automated workflows. Now it's time to bring this transformation to your organization.
          </p>

          {/* Key Takeaways */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">85% Time Reduction</h3>
              <p className="text-gray-600 text-sm">Average time savings across all compliance processes</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">95% Error Reduction</h3>
              <p className="text-gray-600 text-sm">Dramatic improvement in process accuracy and compliance</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">4.8/5 User Rating</h3>
              <p className="text-gray-600 text-sm">Exceptional user satisfaction and adoption rates</p>
            </div>
          </div>
        </div>

        {/* Next Steps Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Choose Your Next Step
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {nextSteps.map((step) => (
              <div
                key={step.id}
                className={`relative bg-white rounded-xl border-2 p-6 cursor-pointer transition-all duration-300 ${
                  selectedPath === step.id
                    ? 'border-primary shadow-medium scale-105'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-soft'
                } ${step.popular ? 'ring-2 ring-primary/20' : ''}`}
                onClick={() => setSelectedPath(step.id)}
              >
                {step.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center text-white`}>
                    <Icon name={step.icon} size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      {selectedPath === step.id && (
                        <Icon name="Check" size={16} className="text-primary" />
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {step.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant={selectedPath === step.id ? "primary" : "outline"}
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {step.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        {selectedPath && (
          <div className="bg-white rounded-2xl shadow-strong border border-gray-200 p-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Let's Get Started
                </h3>
                <p className="text-gray-600">
                  Tell us a bit about yourself and we'll personalize your experience
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                  
                  <Input
                    label="Work Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    required
                  />
                  
                  <Input
                    label="Job Title"
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="Your role/title"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Team Size
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select team size</option>
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <div className="text-sm text-gray-600">
                    <strong>Privacy Protected:</strong> We never share your information and you can unsubscribe at any time.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    {nextSteps.find(step => step.id === selectedPath)?.cta}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setSelectedPath('')}
                    iconName="ArrowLeft"
                    iconPosition="left"
                  >
                    Back to Options
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Additional Resources
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="ghost" iconName="Download" iconPosition="left">
              Download ROI Calculator
            </Button>
            <Button variant="ghost" iconName="FileText" iconPosition="left">
              Implementation Guide
            </Button>
            <Button variant="ghost" iconName="Users" iconPosition="left">
              Customer Success Stories
            </Button>
            <Button variant="ghost" iconName="MessageSquare" iconPosition="left">
              Join Community Forum
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Questions? Contact our team at{' '}
            <a href="mailto:demo@sopintelligence.com" className="text-primary hover:underline">
              demo@sopintelligence.com
            </a>{' '}
            or call{' '}
            <a href="tel:+1-555-0123" className="text-primary hover:underline">
              +1 (555) 012-3456
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoConclusion;