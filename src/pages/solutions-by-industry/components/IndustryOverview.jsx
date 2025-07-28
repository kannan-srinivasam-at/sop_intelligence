import React from 'react';
import Icon from '../../../components/AppIcon';

const IndustryOverview = () => {
  const industries = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: 'Factory',
      description: 'Safety protocols, quality control, and regulatory compliance automation',
      challenges: ['OSHA Compliance', 'ISO Standards', 'Equipment Maintenance', 'Safety Training'],
      color: 'from-blue-500 to-blue-600',
      stats: { companies: '2,500+', compliance: '99.8%', time_saved: '40%' }
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: 'Heart',
      description: 'Patient safety, HIPAA compliance, and clinical protocol management',
      challenges: ['HIPAA Compliance', 'Patient Safety', 'Clinical Protocols', 'Infection Control'],
      color: 'from-red-500 to-red-600',
      stats: { companies: '1,800+', compliance: '99.9%', time_saved: '45%' }
    },
    {
      id: 'financial',
      name: 'Financial Services',
      icon: 'DollarSign',
      description: 'Regulatory compliance, risk management, and audit trail capabilities',
      challenges: ['SOX Compliance', 'GDPR Requirements', 'Risk Management', 'Audit Trails'],
      color: 'from-green-500 to-green-600',
      stats: { companies: '1,200+', compliance: '99.7%', time_saved: '50%' }
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: 'Cpu',
      description: 'Development workflows, security protocols, and change management',
      challenges: ['Security Protocols', 'Change Management', 'Code Reviews', 'Deployment SOPs'],
      color: 'from-purple-500 to-purple-600',
      stats: { companies: '3,100+', compliance: '99.5%', time_saved: '35%' }
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each industry faces unique compliance challenges. Our specialized solutions address your sector's specific requirements with proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <div key={industry.id} className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={industry.icon} size={24} color="white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Challenges Addressed</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} color="var(--color-secondary)" />
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{industry.stats.companies}</div>
                    <div className="text-xs text-muted-foreground">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary">{industry.stats.compliance}</div>
                    <div className="text-xs text-muted-foreground">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{industry.stats.time_saved}</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryOverview;