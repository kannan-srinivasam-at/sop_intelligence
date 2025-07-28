import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = () => {
  const stats = [
    {
      icon: "Building2",
      value: "500+",
      label: "Companies Transformed",
      description: "Across 25+ industries"
    },
    {
      icon: "TrendingUp",
      value: "89%",
      label: "Average ROI Improvement",
      description: "Within first 12 months"
    },
    {
      icon: "Clock",
      value: "67%",
      label: "Time Savings",
      description: "On compliance processes"
    },
    {
      icon: "Shield",
      value: "99.2%",
      label: "Audit Success Rate",
      description: "First-time pass rate"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Transformation by the Numbers
        </h2>
        <p className="text-muted-foreground">
          Real results from real companies using SOP Intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Icon name={stat.icon} size={28} className="text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <div className="font-semibold text-foreground mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;