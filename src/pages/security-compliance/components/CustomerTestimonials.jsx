import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CustomerTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Chief Information Security Officer",
      company: "HealthTech Solutions",
      industry: "Healthcare",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      quote: `SOP Intelligence transformed our HIPAA compliance from a constant worry into a streamlined process. The automated audit trails and real-time monitoring gave us confidence during our recent compliance review. We passed with zero findings for the first time in five years.`,
      metrics: {
        complianceScore: "99.8%",
        auditTime: "75% reduction",
        violations: "Zero findings"
      },
      securityFocus: "HIPAA Compliance & Healthcare Data Protection"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "VP of Risk Management",
      company: "Global Financial Services",
      industry: "Financial Services",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=80&h=80&fit=crop&crop=face",
      quote: `The SOX compliance features are exceptional. Our external auditors were impressed with the comprehensive audit trails and automated controls testing. The platform's security architecture gave us the confidence to handle sensitive financial data without compromise.`,
      metrics: {
        complianceScore: "100%",
        auditTime: "60% faster",
        violations: "Clean audit"
      },
      securityFocus: "SOX Compliance & Financial Data Security"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Data Protection Officer",
      company: "European Manufacturing Corp",
      industry: "Manufacturing",
      avatar: "https://images.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg?w=80&h=80&fit=crop&crop=face",
      quote: `GDPR compliance was our biggest challenge until we implemented SOP Intelligence. The data residency controls and privacy-by-design features made our DPA audit seamless. The platform's transparency about data handling built trust with our customers.`,
      metrics: {
        complianceScore: "98.5%",
        auditTime: "50% reduction",
        violations: "No violations"
      },
      securityFocus: "GDPR Compliance & Data Privacy"
    },
    {
      id: 4,
      name: "David Park",
      title: "IT Security Director",
      company: "TechStart Innovations",
      industry: "Technology",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      quote: `The security incident response capabilities are outstanding. When we had a potential breach attempt, the platform's automated detection and response helped us contain it within minutes. The detailed forensic logs were invaluable for our investigation.`,
      metrics: {
        complianceScore: "99.2%",
        auditTime: "Response in <5min",
        violations: "Threat contained"
      },
      securityFocus: "Incident Response & Threat Detection"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "Compliance Manager",
      company: "Pharmaceutical Research Inc",
      industry: "Pharmaceuticals",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=80&h=80&fit=crop&crop=face",
      quote: `Managing FDA validation requirements became effortless with SOP Intelligence. The platform's validation documentation and change control features streamlined our 21 CFR Part 11 compliance. Our recent FDA inspection went smoothly thanks to the comprehensive audit trails.`,
      metrics: {
        complianceScore: "100%",
        auditTime: "FDA ready",
        violations: "Inspection passed"
      },
      securityFocus: "FDA Validation & Pharmaceutical Compliance"
    }
  ];

  const securityStats = [
    {
      metric: "Average Compliance Score",
      value: "99.5%",
      description: "Across all customer audits"
    },
    {
      metric: "Audit Time Reduction",
      value: "65%",
      description: "Faster compliance reviews"
    },
    {
      metric: "Security Incidents",
      value: "0.02%",
      description: "Incident rate per customer"
    },
    {
      metric: "Customer Satisfaction",
      value: "98%",
      description: "Security confidence rating"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Security Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from security professionals who trust SOP Intelligence to protect their most sensitive data and maintain compliance.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden mb-12">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <Image 
                      src={testimonials[activeTestimonial].avatar} 
                      alt={`${testimonials[activeTestimonial].name} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-muted-foreground">
                      {testimonials[activeTestimonial].title}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonials[activeTestimonial].company} • {testimonials[activeTestimonial].industry}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <Icon name="Quote" size={32} className="text-primary/20 mb-4" />
                  <blockquote className="text-lg text-foreground leading-relaxed">
                    {testimonials[activeTestimonial].quote}
                  </blockquote>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">
                    Security Focus: {testimonials[activeTestimonial].securityFocus}
                  </h4>
                </div>
              </div>

              {/* Metrics */}
              <div className="lg:w-80">
                <h4 className="font-semibold text-foreground mb-4">
                  Security & Compliance Results
                </h4>
                <div className="space-y-4">
                  {Object.entries(testimonials[activeTestimonial].metrics).map(([key, value], index) => (
                    <div key={index} className="bg-muted/30 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-muted/30 px-8 py-4 flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon name="ChevronLeft" size={20} />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span>Next</span>
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Security Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.metric}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Trust Badges */}
        <div className="bg-muted/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            Trusted by Security Leaders Across Industries
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['Healthcare', 'Financial Services', 'Manufacturing', 'Technology', 'Pharmaceuticals'].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-soft">
                  <Icon 
                    name={
                      industry === 'Healthcare' ? 'Heart' :
                      industry === 'Financial Services' ? 'TrendingUp' :
                      industry === 'Manufacturing' ? 'Cog' :
                      industry === 'Technology' ? 'Cpu' : 'Beaker'
                    } 
                    size={24} 
                    className="text-primary" 
                  />
                </div>
                <div className="text-sm font-medium text-foreground">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Join These Security Leaders
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the same level of security confidence and compliance success. Schedule a personalized security assessment with our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200">
                <Icon name="Shield" size={16} />
                <span>Schedule Security Review</span>
              </button>
              <button className="inline-flex items-center space-x-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <Icon name="FileText" size={16} />
                <span>Download Security Overview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;