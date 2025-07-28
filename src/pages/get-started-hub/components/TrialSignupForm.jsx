import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const TrialSignupForm = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    industry: '',
    agreeToTerms: false,
    subscribeToUpdates: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const roleOptions = [
    { value: 'compliance-manager', label: 'Compliance Manager' },
    { value: 'operations-director', label: 'Operations Director' },
    { value: 'hr-leader', label: 'HR Leader' },
    { value: 'it-decision-maker', label: 'IT Decision Maker' },
    { value: 'quality-manager', label: 'Quality Manager' },
    { value: 'other', label: 'Other' }
  ];

  const teamSizeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-1000', label: '201-1,000 employees' },
    { value: '1000+', label: '1,000+ employees' }
  ];

  const industryOptions = [
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'financial-services', label: 'Financial Services' },
    { value: 'technology', label: 'Technology' },
    { value: 'retail', label: 'Retail' },
    { value: 'construction', label: 'Construction' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.role) newErrors.role = 'Please select your role';
    if (!formData.teamSize) newErrors.teamSize = 'Please select team size';
    if (!formData.industry) newErrors.industry = 'Please select your industry';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    onSuccess({
      ...formData,
      trialStartDate: new Date().toISOString(),
      trialEndDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-strong max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Start Your Free Trial</h2>
              <p className="text-muted-foreground mt-1">
                Get instant access to our sandbox environment with sample SOPs
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                error={errors.firstName}
                placeholder="Enter your first name"
              />
              
              <Input
                label="Last Name"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                error={errors.lastName}
                placeholder="Enter your last name"
              />
            </div>

            <Input
              label="Work Email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              placeholder="you@company.com"
              description="We'll send your trial access details to this email"
            />

            <Input
              label="Company Name"
              type="text"
              required
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              error={errors.company}
              placeholder="Enter your company name"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Your Role"
                required
                options={roleOptions}
                value={formData.role}
                onChange={(value) => handleInputChange('role', value)}
                error={errors.role}
                placeholder="Select your role"
              />
              
              <Select
                label="Team Size"
                required
                options={teamSizeOptions}
                value={formData.teamSize}
                onChange={(value) => handleInputChange('teamSize', value)}
                error={errors.teamSize}
                placeholder="Select team size"
              />
            </div>

            <Select
              label="Industry"
              required
              options={industryOptions}
              value={formData.industry}
              onChange={(value) => handleInputChange('industry', value)}
              error={errors.industry}
              placeholder="Select your industry"
            />

            <div className="space-y-4">
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                required
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                error={errors.agreeToTerms}
              />
              
              <Checkbox
                label="Send me product updates and compliance insights"
                checked={formData.subscribeToUpdates}
                onChange={(e) => handleInputChange('subscribeToUpdates', e.target.checked)}
                description="You can unsubscribe at any time"
              />
            </div>

            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <div className="flex items-start space-x-3">
                <Icon name="Gift" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-primary mb-1">What's included in your 14-day trial:</div>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Full access to all platform features</li>
                    <li>• Pre-loaded sample SOPs and templates</li>
                    <li>• Guided tutorials and onboarding</li>
                    <li>• Email support from our team</li>
                    <li>• No credit card required</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="default"
              fullWidth
              loading={isSubmitting}
              disabled={isSubmitting}
              className="shadow-soft hover:shadow-medium"
            >
              {isSubmitting ? 'Creating Your Trial...' : 'Start Free Trial'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrialSignupForm;