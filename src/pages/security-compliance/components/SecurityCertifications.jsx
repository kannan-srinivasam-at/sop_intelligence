import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SecurityCertifications = () => {
  const certifications = [
    {
      id: 1,
      name: "SOC 2 Type II",
      description: "System and Organization Controls for security, availability, and confidentiality",
      badge: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=120&fit=crop&crop=center",
      verificationLink: "#",
      status: "Verified",
      validUntil: "December 2024"
    },
    {
      id: 2,
      name: "ISO 27001",
      description: "International standard for information security management systems",
      badge: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=120&h=120&fit=crop&crop=center",
      verificationLink: "#",
      status: "Certified",
      validUntil: "March 2025"
    },
    {
      id: 3,
      name: "GDPR Compliant",
      description: "Full compliance with European General Data Protection Regulation",
      badge: "https://images.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_1280.jpg?w=120&h=120&fit=crop&crop=center",
      verificationLink: "#",
      status: "Compliant",
      validUntil: "Ongoing"
    },
    {
      id: 4,
      name: "HIPAA Ready",
      description: "Healthcare Information Portability and Accountability Act compliance",
      badge: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=120&fit=crop&crop=center",
      verificationLink: "#",
      status: "Ready",
      validUntil: "Ongoing"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Icon name="Shield" size={32} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Enterprise Security Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to security is validated by industry-leading certifications and continuous compliance monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-card rounded-xl border border-border p-6 hover:shadow-medium transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image 
                    src={cert.badge} 
                    alt={`${cert.name} certification badge`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {cert.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm font-medium text-success">
                    {cert.status}
                  </span>
                </div>
                
                <p className="text-xs text-muted-foreground mb-4">
                  Valid until: {cert.validUntil}
                </p>
                
                <button className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200">
                  <span>View Certificate</span>
                  <Icon name="ExternalLink" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-muted rounded-lg px-6 py-4">
            <Icon name="CheckCircle" size={20} className="text-success" />
            <span className="text-sm font-medium text-foreground">
              All certifications are independently verified and regularly audited
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCertifications;