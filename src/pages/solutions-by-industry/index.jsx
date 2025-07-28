import React from 'react';
import Header from '../../components/ui/Header';
import IndustryHero from './components/IndustryHero';
import IndustryOverview from './components/IndustryOverview';
import ManufacturingSection from './components/ManufacturingSection';
import HealthcareSection from './components/HealthcareSection';
import FinancialSection from './components/FinancialSection';
import TechnologySection from './components/TechnologySection';
import AssessmentTools from './components/AssessmentTools';

const SolutionsByIndustry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <IndustryHero />
        <IndustryOverview />
        <ManufacturingSection />
        <HealthcareSection />
        <FinancialSection />
        <TechnologySection />
        <AssessmentTools />
      </main>
    </div>
  );
};

export default SolutionsByIndustry;