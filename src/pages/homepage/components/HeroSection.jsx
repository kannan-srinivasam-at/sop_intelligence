import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentTransform, setCurrentTransform] = useState(0);
  
  const transformSteps = [
    {
      title: "Traditional Paper SOPs",
      description: "Manual processes, scattered documents",
      icon: "FileText",
      color: "text-gray-500"
    },
    {
      title: "Digital Transformation",
      description: "AI-powered analysis and optimization",
      icon: "Zap",
      color: "text-accent"
    },
    {
      title: "Intelligent Workflows",
      description: "Automated compliance and collaboration",
      icon: "Brain",
      color: "text-secondary"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTransform((prev) => (prev + 1) % transformSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const roleBasedCTAs = [
    {
      role: "HR Leaders",
      action: "Streamline Training",
      description: "Reduce onboarding time by 60%",
      icon: "Users",
      color: "bg-primary",
      path: "/solutions-by-industry"
    },
    {
      role: "Compliance Managers", 
      action: "Automate Processes",
      description: "Eliminate 87% of compliance errors",
      icon: "Shield",
      color: "bg-secondary",
      path: "/security-compliance"
    },
    {
      role: "Operations Directors",
      action: "Scale Excellence", 
      description: "3x faster process optimization",
      icon: "TrendingUp",
      color: "bg-accent",
      path: "/product-demo"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium"
              >
                <Icon name="Sparkles" size={16} className="mr-2" />
                AI-Powered Compliance Platform
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Transform compliance from{' '}
                <span className="text-primary">burden</span> to{' '}
                <span className="text-secondary">advantage</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                Experience the future of SOP management with AI-powered workflows that make compliance effortless, collaborative, and intelligent. Turn your operational procedures into competitive advantages.
              </motion.p>
            </div>

            {/* Role-based CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              {roleBasedCTAs.map((cta, index) => (
                <Link
                  key={cta.role}
                  to={cta.path}
                  className="group relative p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className={`w-10 h-10 ${cta.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={cta.icon} size={20} color="white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{cta.role}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{cta.action}</p>
                  <p className="text-xs text-muted-foreground">{cta.description}</p>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="absolute top-4 right-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" 
                  />
                </Link>
              ))}
            </motion.div>

            {/* Main CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="default" 
                size="lg" 
                className="shadow-medium hover:shadow-strong"
                iconName="Play"
                iconPosition="left"
              >
                <Link to="/product-demo" className="flex items-center">
                  Watch Demo
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Rocket"
                iconPosition="left"
              >
                <Link to="/get-started-hub" className="flex items-center">
                  Start Free Trial
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-strong p-8 border border-gray-100">
              {/* Transformation Visual */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">SOP Transformation</h3>
                  <div className="flex space-x-1">
                    {transformSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTransform ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <motion.div
                  key={currentTransform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-4"
                >
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center ${transformSteps[currentTransform].color}`}>
                    <Icon name={transformSteps[currentTransform].icon} size={32} />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    {transformSteps[currentTransform].title}
                  </h4>
                  <p className="text-muted-foreground">
                    {transformSteps[currentTransform].description}
                  </p>
                </motion.div>

                {/* Progress Visualization */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Compliance Accuracy</span>
                    <span className="text-secondary font-semibold">87% ↑</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Process Speed</span>
                    <span className="text-secondary font-semibold">3x Faster</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-medium"
              >
                <Icon name="Check" size={16} color="white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-medium"
              >
                <Icon name="Zap" size={16} color="white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;