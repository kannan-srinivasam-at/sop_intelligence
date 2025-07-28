import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DemoPreview = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const demoSteps = [
    {
      title: "Document Upload",
      description: "Upload your existing SOP document",
      icon: "Upload",
      status: "completed"
    },
    {
      title: "AI Analysis",
      description: "Our AI engine analyzes and structures content",
      icon: "Brain",
      status: "processing"
    },
    {
      title: "Smart Suggestions",
      description: "Receive intelligent recommendations",
      icon: "Lightbulb",
      status: "pending"
    },
    {
      title: "Compliance Check",
      description: "Automated compliance verification",
      icon: "Shield",
      status: "pending"
    }
  ];

  const aiSuggestions = [
    {
      type: "improvement",
      title: "Clarity Enhancement",
      description: "Step 3 could be more specific about timing requirements",
      impact: "High",
      color: "text-accent"
    },
    {
      type: "compliance",
      title: "Regulatory Alignment",
      description: "Add ISO 9001 compliance checkpoint after step 5",
      impact: "Critical",
      color: "text-error"
    },
    {
      type: "efficiency",
      title: "Process Optimization",
      description: "Steps 7-9 can be automated using workflow triggers",
      impact: "Medium",
      color: "text-secondary"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < demoSteps.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentStep === 1) {
      setIsProcessing(true);
      const timeout = setTimeout(() => setIsProcessing(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [currentStep]);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-6"
          >
            <Icon name="Play" size={16} className="mr-2" />
            Interactive Demo Preview
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            See AI Intelligence in{' '}
            <span className="text-primary">Action</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Watch how our AI engine transforms a traditional SOP document into an intelligent, compliant, and collaborative workflow in real-time.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-strong border border-gray-100 overflow-hidden"
          >
            {/* Demo Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Employee Onboarding SOP</h3>
                    <p className="text-sm opacity-90">Processing with AI Engine</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="p-6 space-y-4">
              {demoSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.5 }}
                  animate={{ 
                    opacity: index <= currentStep ? 1 : 0.5,
                    scale: index === currentStep ? 1.02 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-primary/5 border-primary/20' :'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index < currentStep 
                      ? 'bg-secondary text-white' 
                      : index === currentStep
                        ? 'bg-primary text-white' :'bg-gray-300 text-gray-600'
                  }`}>
                    {index < currentStep ? (
                      <Icon name="Check" size={16} />
                    ) : index === currentStep && isProcessing ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon name="Loader" size={16} />
                      </motion.div>
                    ) : (
                      <Icon name={step.icon} size={16} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index === currentStep && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-primary rounded-full animate-pulse"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="px-6 pb-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Processing Progress</span>
                <span>{Math.round(((currentStep + 1) / demoSteps.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* AI Suggestions Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-strong border border-gray-100 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Suggestions</h3>
                  <p className="text-sm text-muted-foreground">Intelligent recommendations</p>
                </div>
              </div>

              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 1 }}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground">{suggestion.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        suggestion.impact === 'Critical' ?'bg-error/10 text-error'
                          : suggestion.impact === 'High' ?'bg-accent/10 text-accent' :'bg-secondary/10 text-secondary'
                      }`}>
                        {suggestion.impact}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{suggestion.description}</p>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="xs">
                        Apply
                      </Button>
                      <Button variant="ghost" size="xs">
                        Dismiss
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                variant="default" 
                size="lg" 
                className="shadow-medium hover:shadow-strong"
                iconName="ArrowRight"
                iconPosition="right"
              >
                <Link to="/product-demo" className="flex items-center">
                  Try Full Demo
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                No signup required • 5-minute interactive experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;