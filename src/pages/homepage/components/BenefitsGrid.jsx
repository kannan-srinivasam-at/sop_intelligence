import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const BenefitsGrid = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 'automation',
      title: 'Intelligent Automation',
      subtitle: 'AI-Powered Workflows',
      description: 'Transform manual processes into intelligent, self-optimizing workflows that adapt and improve over time.',
      icon: 'Brain',
      color: 'from-primary to-primary/80',
      features: [
        'Smart document processing',
        'Automated compliance checks',
        'Intelligent task routing',
        'Predictive maintenance alerts'
      ],
      metrics: {
        primary: '87%',
        primaryLabel: 'Error Reduction',
        secondary: '3x',
        secondaryLabel: 'Faster Processing'
      }
    },
    {
      id: 'collaboration',
      title: 'Effortless Collaboration',
      subtitle: 'Team-Centric Design',
      description: 'Enable seamless collaboration across departments with real-time updates, shared workflows, and intelligent notifications.',
      icon: 'Users',
      color: 'from-secondary to-secondary/80',
      features: [
        'Real-time collaborative editing',
        'Smart notification system',
        'Role-based access control',
        'Cross-department workflows'
      ],
      metrics: {
        primary: '92%',
        primaryLabel: 'User Adoption',
        secondary: '45min',
        secondaryLabel: 'Daily Time Saved'
      }
    },
    {
      id: 'compliance',
      title: 'Proactive Compliance',
      subtitle: 'Stay Ahead of Regulations',
      description: 'Maintain continuous compliance with automated monitoring, intelligent alerts, and comprehensive audit trails.',
      icon: 'Shield',
      color: 'from-accent to-accent/80',
      features: [
        'Automated compliance monitoring',
        'Regulatory change alerts',
        'Complete audit trails',
        'Risk assessment tools'
      ],
      metrics: {
        primary: '100%',
        primaryLabel: 'Audit Success',
        secondary: '24/7',
        secondaryLabel: 'Monitoring'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6"
          >
            <Icon name="Sparkles" size={16} className="mr-2" />
            Core Benefits
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Why Teams Choose{' '}
            <span className="text-primary">SOP Intelligence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Discover the three pillars that make compliance effortless and operational excellence achievable for every organization.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredBenefit(benefit.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden h-full">
                {/* Header */}
                <div className={`bg-gradient-to-br ${benefit.color} p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={benefit.icon} size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-white/90 text-sm">{benefit.subtitle}</p>
                  </div>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {benefit.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: hoveredBenefit === benefit.id ? 1 : 0.7,
                          x: hoveredBenefit === benefit.id ? 0 : -10
                        }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${benefit.color}`}></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {benefit.metrics.primary}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {benefit.metrics.primaryLabel}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {benefit.metrics.secondary}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {benefit.metrics.secondaryLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredBenefit === benefit.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"
                />
              </div>

              {/* Floating Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: hoveredBenefit === benefit.id ? 1 : 0,
                  rotate: hoveredBenefit === benefit.id ? 0 : -180
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-medium flex items-center justify-center border border-gray-100"
              >
                <Icon name="ArrowUpRight" size={16} className="text-primary" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of teams who have transformed their compliance processes from burden to competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-xl font-semibold shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="Play" size={20} />
                <span>Watch Demo</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="Rocket" size={20} />
                <span>Start Free Trial</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsGrid;