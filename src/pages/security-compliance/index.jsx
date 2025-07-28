import React from 'react';
import Header from '../../components/ui/Header';
import SecurityCertifications from './components/SecurityCertifications';
import DataProtectionSection from './components/DataProtectionSection';
import ComplianceFrameworks from './components/ComplianceFrameworks';
import AuditTrailDemo from './components/AuditTrailDemo';
import EnterpriseControls from './components/EnterpriseControls';
import DataResidencySection from './components/DataResidencySection';
import SecurityIncidentResponse from './components/SecurityIncidentResponse';
import SecurityDocumentation from './components/SecurityDocumentation';
import CustomerTestimonials from './components/CustomerTestimonials';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const SecurityCompliancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Icon name="Shield" size={40} className="text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Enterprise Security &
              <span className="text-primary block">Compliance Center</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive security infrastructure and compliance framework designed to meet the most stringent enterprise requirements. Built with security-first architecture and continuous compliance monitoring.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="default" size="lg" iconName="Download" iconPosition="left">
                Download Security Overview
              </Button>
              <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left">
                Schedule Security Assessment
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-success" />
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-success" />
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span>99.99% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <SecurityCertifications />

      {/* Data Protection */}
      <DataProtectionSection />

      {/* Compliance Frameworks */}
      <ComplianceFrameworks />

      {/* Audit Trail Demo */}
      <AuditTrailDemo />

      {/* Enterprise Controls */}
      <EnterpriseControls />

      {/* Data Residency */}
      <DataResidencySection />

      {/* Security Incident Response */}
      <SecurityIncidentResponse />

      {/* Security Documentation */}
      <SecurityDocumentation />

      {/* Customer Testimonials */}
      <CustomerTestimonials />

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Secure Your Operations?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of organizations who trust SOP Intelligence with their most sensitive data and critical compliance requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" iconName="Rocket" iconPosition="left">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Security Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={18} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold">SOP Intelligence</span>
              </div>
              <p className="text-sm text-gray-400">
                AI-powered compliance platform transforming operational excellence.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Security</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Security Overview</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Response</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>security@sopintelligence.com</li>
                <li>+1 (555) 123-SECURITY</li>
                <li>24/7 Emergency Hotline</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SOP Intelligence. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Security Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecurityCompliancePage;