import React from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';


const FilterBar = ({ filters, onFilterChange, onClearFilters, activeFiltersCount }) => {
  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'financial-services', label: 'Financial Services' },
    { value: 'technology', label: 'Technology' },
    { value: 'retail', label: 'Retail' },
    { value: 'energy', label: 'Energy & Utilities' }
  ];

  const companySizeOptions = [
    { value: 'all', label: 'All Company Sizes' },
    { value: 'startup', label: 'Startup (1-50)' },
    { value: 'small', label: 'Small (51-200)' },
    { value: 'medium', label: 'Medium (201-1000)' },
    { value: 'large', label: 'Large (1000+)' },
    { value: 'enterprise', label: 'Enterprise (5000+)' }
  ];

  const useCaseOptions = [
    { value: 'all', label: 'All Use Cases' },
    { value: 'compliance-automation', label: 'Compliance Automation' },
    { value: 'safety-management', label: 'Safety Management' },
    { value: 'quality-control', label: 'Quality Control' },
    { value: 'employee-onboarding', label: 'Employee Onboarding' },
    { value: 'audit-preparation', label: 'Audit Preparation' },
    { value: 'process-standardization', label: 'Process Standardization' }
  ];

  const challengeOptions = [
    { value: 'all', label: 'All Challenges' },
    { value: 'manual-processes', label: 'Manual Processes' },
    { value: 'compliance-gaps', label: 'Compliance Gaps' },
    { value: 'training-inefficiency', label: 'Training Inefficiency' },
    { value: 'audit-failures', label: 'Audit Failures' },
    { value: 'inconsistent-execution', label: 'Inconsistent Execution' },
    { value: 'documentation-chaos', label: 'Documentation Chaos' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Find Your Success Story
          </h2>
          <p className="text-muted-foreground">
            Filter by industry, company size, or specific challenges to find relevant transformation stories
          </p>
        </div>
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={16}
            className="mt-4 lg:mt-0"
          >
            Clear Filters ({activeFiltersCount})
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select
          label="Industry"
          options={industryOptions}
          value={filters.industry}
          onChange={(value) => onFilterChange('industry', value)}
          placeholder="Select industry"
        />

        <Select
          label="Company Size"
          options={companySizeOptions}
          value={filters.companySize}
          onChange={(value) => onFilterChange('companySize', value)}
          placeholder="Select company size"
        />

        <Select
          label="Use Case"
          options={useCaseOptions}
          value={filters.useCase}
          onChange={(value) => onFilterChange('useCase', value)}
          placeholder="Select use case"
        />

        <Select
          label="Challenge Addressed"
          options={challengeOptions}
          value={filters.challenge}
          onChange={(value) => onFilterChange('challenge', value)}
          placeholder="Select challenge"
        />
      </div>
    </div>
  );
};

export default FilterBar;