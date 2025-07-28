import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PathCard from './components/PathCard';
import AssessmentModal from './components/AssessmentModal';
import TestimonialCard from './components/TestimonialCard';
import ProgressTimeline from './components/ProgressTimeline';
import ResourceRecommendations from './components/ResourceRecommendations';
import TrialSignupForm from './components/TrialSignupForm';

const GetStartedHub = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [showTrialForm, setShowTrialForm] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [selectedPath, setSelectedPath] = useState(null);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    // Simulate user progress for demo
    const timer = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const pathOptions = [
    {
      icon: 'Play',
      title: 'See It in Action',
      description: 'Watch interactive demos and see how SOP Intelligence transforms your workflows in real-time.',
      features: [
        'Interactive product walkthrough',
        'Live feature demonstrations',
        'Industry-specific use cases',
        'Q&A with product experts'
      ],
      timeCommitment: '30-45 minutes',
      ctaText: 'Watch Demo',
      ctaVariant: 'outline',
      isPopular: false
    },
    {
      icon: 'Zap',
      title: 'Try It Yourself',
      description: 'Get hands-on experience with our sandbox environment loaded with sample SOPs and guided tutorials.',
      features: [
        'Full platform access for 14 days',
        'Pre-loaded sample SOPs',
        'Guided onboarding tutorials',
        'Email support included'
      ],
      timeCommitment: '5 minutes to start',
      ctaText: 'Start Free Trial',
      ctaVariant: 'default',
      isPopular: true
    },
    {
      icon: 'Users',
      title: 'Talk to an Expert',
      description: 'Schedule a personalized consultation with our specialists to discuss your specific needs and challenges.',
      features: [
        'Personalized needs assessment',
        'Custom implementation roadmap',
        'ROI analysis and projections',
        'Technical architecture review'
      ],
      timeCommitment: '45-60 minutes',
      ctaText: 'Book Consultation',
      ctaVariant: 'secondary',
      isPopular: false
    }
  ];

  const testimonials = [
    {
      quote: "The onboarding process was incredibly smooth. We went from initial demo to full implementation in just 6 weeks, and the support team was with us every step of the way.",
      author: "Sarah Chen",
      role: "Compliance Director",
      company: "TechFlow Industries",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      implementationTime: "6 weeks",
      results: "75% faster audit prep"
    },
    {
      quote: "What impressed me most was how quickly our team adopted the platform. The guided tutorials and sandbox environment made the learning curve almost non-existent.",
      author: "Michael Rodriguez",
      role: "Operations Manager",
      company: "Global Manufacturing Corp",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      implementationTime: "4 weeks",
      results: "90% user adoption rate"
    },
    {
      quote: "The consultation call helped us understand exactly how SOP Intelligence would fit into our existing workflows. The ROI projections were spot-on.",
      author: "Emily Watson",
      role: "Quality Assurance Lead",
      company: "Precision Dynamics",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      implementationTime: "8 weeks",
      results: "300% ROI in first year"
    }
  ];

  const handlePathSelect = (path) => {
    setSelectedPath(path);
    if (path.title === 'Try It Yourself') {
      setShowTrialForm(true);
    } else if (path.title === 'See It in Action') {
      // Redirect to demo page
      window.location.href = '/product-demo';
    } else {
      // Show consultation booking (would integrate with calendar)
      alert('Consultation booking would open here');
    }
  };

  const handleAssessmentComplete = (responses) => {
    setUserProfile(responses);
    setShowAssessment(false);
  };

  const handleTrialSuccess = (trialData) => {
    setShowTrialForm(false);
    alert(`Trial created successfully! Check your email (${trialData.email}) for access details.`);
  };

  return (
    <>
      <Helmet>
        <title>Get Started Hub - SOP Intelligence</title>
        <meta name="description" content="Choose your path to transform compliance from burden to advantage. Start with a demo, free trial, or expert consultation." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Rocket" size={16} />
                <span>Start Your Transformation Journey</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                How do you prefer to
                <span className="text-primary block">explore?</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Choose the path that best fits your style and timeline. Whether you want to see it, try it, or discuss it—we've designed the perfect experience for you.
              </p>
              
              <Button 
                variant="ghost" 
                onClick={() => setShowAssessment(true)}
                className="text-primary hover:bg-primary/5"
              >
                Take Quick Assessment
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>

            {/* Path Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {pathOptions.map((path, index) => (
                <PathCard
                  key={index}
                  {...path}
                  onSelect={() => handlePathSelect(path)}
                />
              ))}
            </div>

            {/* Value Proposition */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Why Organizations Choose SOP Intelligence
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Join thousands of companies who've transformed their compliance from a burden into a competitive advantage.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={32} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Fast Implementation</h3>
                  <p className="text-muted-foreground">
                    Average setup time of 4-6 weeks with dedicated support and proven methodologies.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={32} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">High Adoption</h3>
                  <p className="text-muted-foreground">
                    90%+ user adoption rates thanks to intuitive design and comprehensive training.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={32} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Proven ROI</h3>
                  <p className="text-muted-foreground">
                    Average 300% ROI in the first year through efficiency gains and risk reduction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Journey Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <ProgressTimeline currentPhase={currentPhase} />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Success Stories from Real Customers
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See how organizations like yours have successfully implemented SOP Intelligence and achieved remarkable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Resource Recommendations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <ResourceRecommendations 
              userProfile={userProfile} 
              selectedPath={selectedPath}
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Compliance?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of organizations who've made compliance their competitive advantage. Start your journey today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => setShowTrialForm(true)}
                  className="shadow-medium hover:shadow-strong"
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Schedule Demo
                </Button>
              </div>
              
              <p className="text-sm opacity-75 mt-6">
                No credit card required • 14-day free trial • Setup in minutes
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={18} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold text-primary">SOP Intelligence</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Transforming compliance from burden to advantage through AI-powered intelligence.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <span>© {new Date().getFullYear()} SOP Intelligence</span>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Support</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Modals */}
        <AssessmentModal
          isOpen={showAssessment}
          onClose={() => setShowAssessment(false)}
          onComplete={handleAssessmentComplete}
        />
        
        <TrialSignupForm
          isOpen={showTrialForm}
          onClose={() => setShowTrialForm(false)}
          onSuccess={handleTrialSuccess}
        />
      </div>
    </>
  );
};

export default GetStartedHub;