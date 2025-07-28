import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const AssessmentModal = ({ isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({
    role: '',
    experience: '',
    priorities: [],
    timeline: '',
    teamSize: ''
  });

  const questions = [
    {
      id: 'role',
      title: 'What best describes your role?',
      type: 'single',
      options: [
        { value: 'compliance', label: 'Compliance Manager', description: 'Managing regulatory requirements and audits' },
        { value: 'operations', label: 'Operations Director', description: 'Overseeing operational efficiency and processes' },
        { value: 'hr', label: 'HR Leader', description: 'Managing training and employee onboarding' },
        { value: 'it', label: 'IT Decision Maker', description: 'Evaluating technical solutions and integrations' }
      ]
    },
    {
      id: 'experience',
      title: 'How familiar are you with SOP digitization?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Just getting started', description: 'New to digital SOP management' },
        { value: 'intermediate', label: 'Some experience', description: 'Used basic document management tools' },
        { value: 'advanced', label: 'Very experienced', description: 'Implemented multiple digital solutions' }
      ]
    },
    {
      id: 'priorities',
      title: 'What are your top priorities? (Select all that apply)',
      type: 'multiple',
      options: [
        { value: 'compliance', label: 'Regulatory compliance' },
        { value: 'efficiency', label: 'Process efficiency' },
        { value: 'training', label: 'Employee training' },
        { value: 'automation', label: 'Workflow automation' },
        { value: 'reporting', label: 'Analytics and reporting' },
        { value: 'integration', label: 'System integration' }
      ]
    }
  ];

  const handleOptionSelect = (questionId, value, isMultiple = false) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: isMultiple 
        ? prev[questionId].includes(value)
          ? prev[questionId].filter(v => v !== value)
          : [...prev[questionId], value]
        : value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(responses);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const canProceed = currentQuestion.type === 'multiple' 
    ? responses[currentQuestion.id].length > 0
    : responses[currentQuestion.id] !== '';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-strong max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Quick Assessment</h2>
              <p className="text-muted-foreground mt-1">Help us personalize your experience</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {currentQuestion.title}
            </h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <div key={option.value}>
                  {currentQuestion.type === 'single' ? (
                    <button
                      onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-primary/30 ${
                        responses[currentQuestion.id] === option.value
                          ? 'border-primary bg-primary/5' :'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-4 h-4 rounded-full border-2 mt-1 flex-shrink-0 ${
                          responses[currentQuestion.id] === option.value
                            ? 'border-primary bg-primary' :'border-gray-300'
                        }`}>
                          {responses[currentQuestion.id] === option.value && (
                            <div className="w-full h-full rounded-full bg-white scale-50" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{option.label}</div>
                          {option.description && (
                            <div className="text-sm text-muted-foreground mt-1">
                              {option.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ) : (
                    <div className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-primary/30 transition-colors">
                      <Checkbox
                        checked={responses[currentQuestion.id].includes(option.value)}
                        onChange={() => handleOptionSelect(currentQuestion.id, option.value, true)}
                      />
                      <label className="font-medium text-foreground cursor-pointer">
                        {option.label}
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <Icon name="ChevronLeft" size={16} className="mr-2" />
              Back
            </Button>

            <Button
              variant="default"
              onClick={handleNext}
              disabled={!canProceed}
            >
              {isLastStep ? 'Get Recommendations' : 'Next'}
              {!isLastStep && <Icon name="ChevronRight" size={16} className="ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentModal;