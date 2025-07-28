import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FeaturedStory from './components/FeaturedStory';
import FilterBar from './components/FilterBar';
import StoryCard from './components/StoryCard';
import StoryModal from './components/StoryModal';
import SimilarStoriesSection from './components/SimilarStoriesSection';
import StatsOverview from './components/StatsOverview';
import CTASection from './components/CTASection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';


const CustomerStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    industry: 'all',
    companySize: 'all',
    useCase: 'all',
    challenge: 'all'
  });
  const [filteredStories, setFilteredStories] = useState([]);

  // Mock customer stories data
  const customerStories = [
    {
      id: 1,
      title: "Reducing Safety Incidents by 65% Through AI-Powered SOP Management",
      company: "TechnoSteel Manufacturing",
      location: "Detroit, Michigan",
      industry: "manufacturing",
      companySize: "large",
      useCase: "safety-management",
      challenge: "manual-processes",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      challenge: "TechnoSteel was struggling with inconsistent safety protocol execution across multiple manufacturing facilities, leading to frequent incidents and regulatory compliance issues.",
      detailedChallenge: `TechnoSteel Manufacturing faced a critical challenge with their safety management system. With over 2,500 employees across 8 manufacturing facilities, ensuring consistent execution of safety protocols was becoming increasingly difficult. Manual paper-based SOPs were outdated within weeks, training was inconsistent, and safety incidents were occurring at an alarming rate of 12 per month.\n\nThe company was facing potential regulatory sanctions, rising insurance costs, and most importantly, putting their workforce at risk. Traditional training methods weren't effective, and supervisors couldn't track whether safety procedures were being followed correctly in real-time.`,
      solution: `SOP Intelligence implemented a comprehensive AI-powered safety management system that digitized all safety protocols, created interactive training modules, and established real-time monitoring capabilities. The system included mobile access for floor workers, automated compliance tracking, and predictive analytics to identify potential safety risks before incidents occurred.\n\nThe implementation included custom workflows for each facility type, integration with existing safety equipment, and a robust reporting system that provided insights to both floor supervisors and executive leadership.`,
      results: `Within 6 months of implementation, TechnoSteel achieved remarkable results. Safety incidents dropped by 65%, from 12 per month to just 4. Employee safety training completion rates increased to 98%, and the time required for safety audits was reduced by 80%. The company also achieved their first perfect safety audit score in over 5 years.`,
      implementationTime: "4 months",
      keyMetrics: [
        { value: "65%", label: "Reduction in Safety Incidents" },
        { value: "98%", label: "Training Completion Rate" },
        { value: "80%", label: "Faster Safety Audits" },
        { value: "$2.4M", label: "Annual Cost Savings" }
      ],
      timeline: [
        { phase: "Month 1", description: "System setup and safety protocol digitization" },
        { phase: "Month 2", description: "Pilot program with 2 facilities" },
        { phase: "Month 3", description: "Full rollout across all 8 facilities" },
        { phase: "Month 4", description: "Advanced analytics and reporting implementation" }
      ],
      testimonial: {
        quote: "SOP Intelligence transformed our safety culture. Our employees now have instant access to the most current safety procedures, and we can track compliance in real-time. The reduction in incidents has been remarkable, and our insurance costs have dropped significantly.",
        name: "Sarah Martinez",
        title: "VP of Safety & Compliance",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
      },
      roiBreakdown: [
        { category: "Reduced Insurance Costs", value: "$800K" },
        { category: "Avoided Regulatory Fines", value: "$1.2M" },
        { category: "Productivity Improvements", value: "$400K" },
        { category: "Training Efficiency", value: "$200K" }
      ]
    },
    {
      id: 2,
      title: "Achieving 99% Audit Compliance in Healthcare Network",
      company: "MedCare Health Systems",
      location: "Boston, Massachusetts",
      industry: "healthcare",
      companySize: "enterprise",
      useCase: "compliance-automation",
      challenge: "audit-failures",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop",
      challenge: "MedCare's 15-hospital network was failing critical healthcare audits due to inconsistent protocol adherence and documentation gaps across facilities.",
      detailedChallenge: `MedCare Health Systems, operating 15 hospitals across New England, was facing a compliance crisis. Their audit failure rate had reached 23%, with each failed audit resulting in average fines of $150,000 and potential loss of accreditation. The root cause was inconsistent execution of clinical protocols across different facilities and shifts.\n\nNurses and clinical staff were overwhelmed with paper-based procedures that were often outdated or difficult to locate during critical moments. Documentation was incomplete, training records were scattered across multiple systems, and there was no way to ensure that updated protocols were being followed consistently across all facilities.`,
      solution: `SOP Intelligence deployed a comprehensive healthcare compliance platform that integrated with existing EMR systems and created a unified protocol management system. The solution included mobile-first design for clinical staff, automated documentation workflows, real-time compliance monitoring, and AI-powered audit preparation tools.\n\nThe system featured role-based access controls, automated training assignments based on protocol updates, and predictive analytics to identify compliance risks before they became audit failures.`,
      results: `The transformation was dramatic. Within 8 months, MedCare achieved a 99% audit pass rate, eliminated regulatory fines, and reduced audit preparation time by 75%. Clinical staff reported 40% less time spent on documentation, allowing more focus on patient care. The system also improved patient safety scores by 28%.`,
      implementationTime: "6 months",
      keyMetrics: [
        { value: "99%", label: "Audit Pass Rate" },
        { value: "75%", label: "Faster Audit Prep" },
        { value: "40%", label: "Less Documentation Time" },
        { value: "28%", label: "Improved Safety Scores" }
      ],
      timeline: [
        { phase: "Month 1-2", description: "EMR integration and protocol digitization" },
        { phase: "Month 3-4", description: "Pilot with 3 hospitals" },
        { phase: "Month 5", description: "Network-wide deployment" },
        { phase: "Month 6", description: "Advanced analytics and reporting" }
      ],
      testimonial: {
        quote: "The impact on our compliance program has been transformational. We went from dreading audits to confidently welcoming them. Our clinical staff can now focus on what they do best - caring for patients - while the system handles compliance automatically.",
        name: "Dr. Michael Chen",
        title: "Chief Medical Officer",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop"
      },
      roiBreakdown: [
        { category: "Avoided Regulatory Fines", value: "$3.2M" },
        { category: "Reduced Audit Costs", value: "$450K" },
        { category: "Staff Productivity", value: "$1.8M" },
        { category: "Improved Patient Outcomes", value: "$2.1M" }
      ]
    },
    {
      id: 3,
      title: "Cutting Employee Onboarding Time by 75% in Financial Services",
      company: "Premier Financial Group",
      location: "New York, New York",
      industry: "financial-services",
      companySize: "medium",
      useCase: "employee-onboarding",
      challenge: "training-inefficiency",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      challenge: "Premier Financial's complex regulatory environment required extensive employee training, but their manual onboarding process was taking 6 months and costing $50K per new hire.",
      detailedChallenge: `Premier Financial Group, a mid-sized investment firm with 800 employees, was struggling with an inefficient and costly onboarding process. New hires required extensive training on financial regulations, compliance procedures, and internal protocols. The traditional approach involved weeks of classroom training, manual tracking of certifications, and inconsistent delivery of critical information.\n\nThe 6-month onboarding timeline was causing significant delays in productivity, high training costs, and frustration among new employees. Many new hires were leaving within their first year due to the overwhelming and disorganized training experience.`,
      solution: `SOP Intelligence created a personalized, AI-driven onboarding platform that delivered role-specific training paths, automated compliance tracking, and interactive learning modules. The system integrated with HR systems to automatically assign relevant training based on job function and regulatory requirements.\n\nThe platform included gamification elements, progress tracking, virtual mentorship programs, and real-time assessment capabilities to ensure comprehension and retention of critical information.`,
      results: `The results exceeded expectations. Onboarding time was reduced from 6 months to 6 weeks, a 75% improvement. Training costs per employee dropped by 60%, and new hire retention improved by 45%. Employee satisfaction scores for the onboarding experience increased from 2.3/5 to 4.7/5.`,
      implementationTime: "3 months",
      keyMetrics: [
        { value: "75%", label: "Faster Onboarding" },
        { value: "60%", label: "Lower Training Costs" },
        { value: "45%", label: "Better Retention" },
        { value: "4.7/5", label: "Employee Satisfaction" }
      ],
      timeline: [
        { phase: "Month 1", description: "Content digitization and platform setup" },
        { phase: "Month 2", description: "Pilot program with new hire cohort" },
        { phase: "Month 3", description: "Full deployment and optimization" }
      ],
      testimonial: {
        quote: "Our new employees are now productive in weeks instead of months. The personalized learning paths and automated tracking have transformed our onboarding from a burden into a competitive advantage for talent acquisition.",
        name: "Jennifer Walsh",
        title: "Head of Human Resources",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
      },
      roiBreakdown: [
        { category: "Reduced Training Costs", value: "$1.2M" },
        { category: "Faster Time to Productivity", value: "$2.8M" },
        { category: "Improved Retention", value: "$900K" },
        { category: "HR Efficiency", value: "$400K" }
      ]
    },
    {
      id: 4,
      title: "Streamlining Quality Control in Technology Manufacturing",
      company: "InnoTech Solutions",
      location: "Austin, Texas",
      industry: "technology",
      companySize: "large",
      useCase: "quality-control",
      challenge: "inconsistent-execution",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      challenge: "InnoTech's quality control processes were inconsistent across production lines, leading to 15% defect rates and customer satisfaction issues.",
      detailedChallenge: `InnoTech Solutions, a leading technology manufacturer producing consumer electronics, was facing significant quality control challenges. With 12 production lines running 24/7, maintaining consistent quality standards was proving difficult. Different shifts were following different procedures, leading to a 15% defect rate and increasing customer complaints.\n\nThe company was losing major contracts due to quality issues, and the cost of rework and returns was impacting profitability. Manual quality checklists were often skipped during busy periods, and there was no real-time visibility into quality metrics across different production lines.`,
      solution: `SOP Intelligence implemented an integrated quality management system that standardized procedures across all production lines, provided real-time quality monitoring, and automated defect tracking. The system included mobile devices for quality inspectors, automated alerts for deviations, and predictive analytics to identify potential quality issues.\n\nThe platform integrated with existing manufacturing systems to provide comprehensive quality dashboards and automated reporting for continuous improvement initiatives.`,
      results: `Quality improvements were immediate and substantial. Defect rates dropped from 15% to 2.1% within 4 months. Customer satisfaction scores improved by 52%, and the company regained two major contracts worth $12M annually. Rework costs were reduced by 78%, significantly improving profit margins.`,
      implementationTime: "5 months",
      keyMetrics: [
        { value: "2.1%", label: "Defect Rate" },
        { value: "52%", label: "Higher Customer Satisfaction" },
        { value: "78%", label: "Less Rework Costs" },
        { value: "$12M", label: "Contracts Regained" }
      ],
      timeline: [
        { phase: "Month 1", description: "Quality procedure standardization" },
        { phase: "Month 2-3", description: "System integration and testing" },
        { phase: "Month 4", description: "Full production deployment" },
        { phase: "Month 5", description: "Advanced analytics implementation" }
      ],
      testimonial: {
        quote: "The transformation in our quality metrics has been remarkable. We now have real-time visibility into every aspect of our quality process, and our customers have noticed the difference. It's been a game-changer for our business.",
        name: "David Kim",
        title: "VP of Manufacturing",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
      },
      roiBreakdown: [
        { category: "Reduced Rework Costs", value: "$3.2M" },
        { category: "Contract Renewals", value: "$12M" },
        { category: "Improved Efficiency", value: "$1.8M" },
        { category: "Customer Retention", value: "$2.4M" }
      ]
    },
    {
      id: 5,
      title: "Revolutionizing Retail Operations Across 200+ Stores",
      company: "RetailMax Corporation",
      location: "Chicago, Illinois",
      industry: "retail",
      companySize: "enterprise",
      useCase: "process-standardization",
      challenge: "documentation-chaos",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      challenge: "RetailMax's 200+ store network lacked standardized operations, resulting in inconsistent customer experiences and operational inefficiencies.",
      detailedChallenge: `RetailMax Corporation, operating over 200 retail locations across the Midwest, was struggling with operational inconsistencies that were impacting customer experience and profitability. Each store was essentially operating with its own interpretation of company policies, leading to wildly different customer experiences and operational costs.\n\nInventory management, customer service protocols, and staff training varied significantly between locations. Corporate initiatives took months to implement across all stores, and there was no way to ensure consistent execution of new policies or procedures.`,
      solution: `SOP Intelligence deployed a comprehensive retail operations platform that standardized procedures across all locations while allowing for local customization where appropriate. The system included mobile apps for store associates, automated inventory management protocols, customer service guidelines, and real-time performance monitoring.\n\nThe platform featured location-specific dashboards, automated compliance checking, and communication tools that ensured corporate initiatives could be deployed and tracked across all locations simultaneously.`,
      results: `The standardization effort yielded impressive results. Customer satisfaction scores improved by 34% across all locations, operational costs were reduced by 22%, and the time to implement new corporate initiatives was cut from months to weeks. Store manager satisfaction also improved significantly due to clearer guidance and support.`,
      implementationTime: "8 months",
      keyMetrics: [
        { value: "34%", label: "Higher Customer Satisfaction" },
        { value: "22%", label: "Lower Operational Costs" },
        { value: "85%", label: "Faster Initiative Deployment" },
        { value: "200+", label: "Stores Standardized" }
      ],
      timeline: [
        { phase: "Month 1-2", description: "Procedure documentation and standardization" },
        { phase: "Month 3-4", description: "Pilot program with 20 stores" },
        { phase: "Month 5-7", description: "Phased rollout across all locations" },
        { phase: "Month 8", description: "Advanced analytics and optimization" }
      ],
      testimonial: {
        quote: "Finally, we have consistency across all our locations. Our customers now receive the same high-quality experience whether they visit our store in Chicago or our store in Milwaukee. The operational efficiency gains have been substantial.",
        name: "Lisa Rodriguez",
        title: "Chief Operating Officer",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
      },
      roiBreakdown: [
        { category: "Operational Efficiency", value: "$4.2M" },
        { category: "Improved Customer Retention", value: "$6.8M" },
        { category: "Reduced Training Costs", value: "$1.1M" },
        { category: "Inventory Optimization", value: "$2.3M" }
      ]
    },
    {
      id: 6,
      title: "Enhancing Energy Plant Safety and Compliance",
      company: "PowerGen Energy",
      location: "Houston, Texas",
      industry: "energy",
      companySize: "large",
      useCase: "safety-management",
      challenge: "compliance-gaps",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      challenge: "PowerGen\'s energy facilities faced critical safety compliance gaps that threatened operations and regulatory standing.",
      detailedChallenge: `PowerGen Energy, operating 6 power generation facilities across Texas, was facing mounting pressure from regulatory bodies due to safety compliance gaps. The energy sector's complex regulatory environment requires strict adherence to safety protocols, but PowerGen's manual systems were failing to keep pace with evolving requirements.\n\nSafety incidents were increasing, regulatory inspections were revealing compliance gaps, and the company was at risk of facing operational shutdowns. The existing paper-based safety management system was inadequate for the complexity and criticality of power generation operations.`,
      solution: `SOP Intelligence implemented a comprehensive safety and compliance management system specifically designed for energy sector requirements. The platform included real-time safety monitoring, automated compliance tracking, incident management workflows, and predictive maintenance protocols.\n\nThe system integrated with existing plant control systems to provide comprehensive safety dashboards and automated regulatory reporting capabilities.`,
      results: `Safety performance improved dramatically. Compliance violations dropped by 91%, safety incidents were reduced by 58%, and regulatory audit scores improved from 72% to 96%. The company avoided potential operational shutdowns and significantly reduced insurance premiums.`,
      implementationTime: "7 months",
      keyMetrics: [
        { value: "91%", label: "Fewer Compliance Violations" },
        { value: "58%", label: "Reduction in Safety Incidents" },
        { value: "96%", label: "Regulatory Audit Score" },
        { value: "$5.2M", label: "Insurance Savings" }
      ],
      timeline: [
        { phase: "Month 1-2", description: "Safety protocol digitization and system setup" },
        { phase: "Month 3-4", description: "Pilot implementation at 2 facilities" },
        { phase: "Month 5-6", description: "Full deployment across all facilities" },
        { phase: "Month 7", description: "Advanced monitoring and reporting" }
      ],
      testimonial: {
        quote: "The safety improvements have been transformational. We now have complete visibility into our safety performance across all facilities, and our regulatory compliance is stronger than ever. This system has quite literally saved our business.",
        name: "Robert Thompson",
        title: "Director of Safety & Compliance",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
      },
      roiBreakdown: [
        { category: "Avoided Shutdowns", value: "$15M" },
        { category: "Insurance Savings", value: "$5.2M" },
        { category: "Regulatory Compliance", value: "$2.8M" },
        { category: "Operational Efficiency", value: "$3.1M" }
      ]
    }
  ];

  const featuredStory = customerStories[0];

  useEffect(() => {
    filterStories();
  }, [filters]);

  const filterStories = () => {
    let filtered = customerStories.filter(story => story.id !== featuredStory.id);

    if (filters.industry !== 'all') {
      filtered = filtered.filter(story => story.industry === filters.industry);
    }
    if (filters.companySize !== 'all') {
      filtered = filtered.filter(story => story.companySize === filters.companySize);
    }
    if (filters.useCase !== 'all') {
      filtered = filtered.filter(story => story.useCase === filters.useCase);
    }
    if (filters.challenge !== 'all') {
      filtered = filtered.filter(story => story.challenge === filters.challenge);
    }

    setFilteredStories(filtered);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      industry: 'all',
      companySize: 'all',
      useCase: 'all',
      challenge: 'all'
    });
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(value => value !== 'all').length;
  };

  const handleReadMore = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  // Get similar stories for the similar stories section
  const getSimilarStories = () => {
    return customerStories.filter(story => 
      story.id !== featuredStory.id && 
      (story.industry === 'manufacturing' || story.industry === 'healthcare' || story.industry === 'technology')
    ).slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Customer Success Stories - SOP Intelligence</title>
        <meta name="description" content="Discover how companies across industries have transformed their compliance processes with SOP Intelligence. Read detailed case studies with measurable results and ROI breakdowns." />
        <meta name="keywords" content="customer success stories, SOP transformation, compliance automation, case studies, ROI, business results" />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Customer Success Stories
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how companies across industries have transformed their compliance processes, 
                reduced risks, and achieved measurable results with SOP Intelligence.
              </p>
            </div>

            <StatsOverview />
          </div>
        </section>

        {/* Featured Story */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedStory 
              story={featuredStory} 
              onReadMore={handleReadMore}
            />
          </div>
        </section>

        {/* Filter and Stories Grid */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FilterBar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
              activeFiltersCount={getActiveFiltersCount()}
            />

            {filteredStories.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {filteredStories.map((story) => (
                    <StoryCard
                      key={story.id}
                      story={story}
                      onReadMore={handleReadMore}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted-foreground/10 rounded-2xl mb-6">
                  <Icon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No Stories Match Your Filters
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to see more success stories
                </p>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={16}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Similar Stories Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SimilarStoriesSection 
              stories={getSimilarStories()}
              onReadMore={handleReadMore}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection />
          </div>
        </section>
      </main>

      {/* Story Modal */}
      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default CustomerStories;