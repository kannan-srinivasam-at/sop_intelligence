import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import DemoHero from './components/DemoHero';
import InteractiveDashboard from './components/InteractiveDashboard';
import AIFeaturesShowcase from './components/AIFeaturesShowcase';
import BeforeAfterComparison from './components/BeforeAfterComparison';
import IntegrationShowcase from './components/IntegrationShowcase';
import IndustryScenarios from './components/IndustryScenarios';
import AdvancedFeatures from './components/AdvancedFeatures';
import DemoConclusion from './components/DemoConclusion';
import ScrollToTop from '../../components/ScrollToTop';

const ProductDemo = () => {
  const [demoStarted, setDemoStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [selectedScenario, setSelectedScenario] = useState(null);

  useEffect(() => {
    // Track demo progress for analytics
    const sections = ['hero', 'dashboard', 'ai-features', 'comparison', 'integrations', 'scenarios', 'advanced', 'conclusion'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartDemo = () => {
    setDemoStarted(true);
    // Smooth scroll to dashboard section
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScenarioSelect = (scenario) => {
    setSelectedScenario(scenario);
    // Could trigger specific demo flows based on scenario
    console.log('Selected scenario:', scenario);
  };

  return (
    <>
      <Helmet>
        <title>Interactive Product Demo - SOP Intelligence | AI-Powered Compliance Platform</title>
        <meta 
          name="description" 
          content="Experience SOP Intelligence in action. Interactive demo showcasing AI-powered compliance management, workflow automation, and intelligent document processing. See real results in minutes." 
        />
        <meta name="keywords" content="SOP demo, compliance software demo, AI workflow automation, interactive product demo, process management demo" />
        <meta property="og:title" content="Interactive Product Demo - SOP Intelligence" />
        <meta property="og:description" content="Experience the future of compliance management with our interactive demo. See AI-powered workflows, automation, and real customer scenarios." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sopintelligence.com/product-demo" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Demo Progress Indicator */}
        {demoStarted && (
          <div className="fixed top-20 right-4 z-40 bg-white rounded-lg shadow-medium border border-gray-200 p-3">
            <div className="text-xs font-medium text-gray-700 mb-2">Demo Progress</div>
            <div className="flex space-x-1">
              {['dashboard', 'ai-features', 'comparison', 'integrations', 'scenarios', 'advanced', 'conclusion'].map((section, index) => (
                <div
                  key={section}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentSection === section ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  title={`Section ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section id="hero" className="relative">
          <DemoHero onStartDemo={handleStartDemo} />
        </section>

        {/* Interactive Dashboard */}
        <section id="dashboard" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>Live Dashboard Demo</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Explore Real SOP Workflows
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Click through actual compliance scenarios and see how SOP Intelligence 
                manages complex workflows across different departments and industries.
              </p>
            </div>
            
            <InteractiveDashboard 
              isActive={demoStarted} 
              onScenarioSelect={handleScenarioSelect}
            />
          </div>
        </section>

        {/* AI Features Showcase */}
        <section id="ai-features">
          <AIFeaturesShowcase />
        </section>

        {/* Before/After Comparison */}
        <section id="comparison">
          <BeforeAfterComparison />
        </section>

        {/* Integration Showcase */}
        <section id="integrations">
          <IntegrationShowcase />
        </section>

        {/* Industry Scenarios */}
        <section id="scenarios">
          <IndustryScenarios />
        </section>

        {/* Advanced Features */}
        <section id="advanced">
          <AdvancedFeatures />
        </section>

        {/* Demo Conclusion */}
        <section id="conclusion">
          <DemoConclusion />
        </section>

        <ScrollToTop />
      </div>
    </>
  );
};

export default ProductDemo;