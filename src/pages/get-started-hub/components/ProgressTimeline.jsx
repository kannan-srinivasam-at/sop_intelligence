import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressTimeline = ({ currentPhase = 0 }) => {
  const phases = [
    {
      title: 'Initial Interest',
      description: 'Explore solutions and assess needs',
      duration: 'Day 1',
      icon: 'Search'
    },
    {
      title: 'Product Evaluation',
      description: 'Demo, trial, and technical review',
      duration: 'Week 1-2',
      icon: 'Eye'
    },
    {
      title: 'Decision & Planning',
      description: 'Stakeholder alignment and planning',
      duration: 'Week 3-4',
      icon: 'Users'
    },
    {
      title: 'Implementation',
      description: 'Setup, configuration, and training',
      duration: 'Week 5-8',
      icon: 'Settings'
    },
    {
      title: 'Full Deployment',
      description: 'Organization-wide rollout and optimization',
      duration: 'Week 9-12',
      icon: 'CheckCircle'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <h3 className="text-xl font-bold text-foreground mb-2">Typical Customer Journey</h3>
      <p className="text-muted-foreground mb-8">
        See how organizations typically progress from initial interest to full deployment
      </p>
      
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                index <= currentPhase
                  ? 'bg-primary text-white shadow-medium'
                  : index === currentPhase + 1
                  ? 'bg-primary/20 text-primary border-2 border-primary' :'bg-muted text-muted-foreground'
              }`}>
                <Icon 
                  name={phase.icon} 
                  size={18} 
                  strokeWidth={index <= currentPhase ? 2.5 : 2}
                />
              </div>
              {index < phases.length - 1 && (
                <div className={`w-0.5 h-12 mt-2 transition-colors duration-300 ${
                  index < currentPhase ? 'bg-primary' : 'bg-muted'
                }`} />
              )}
            </div>
            
            <div className="flex-1 pb-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className={`font-semibold transition-colors duration-300 ${
                  index <= currentPhase ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {phase.title}
                </h4>
                <span className={`text-sm font-medium px-2 py-1 rounded-full transition-colors duration-300 ${
                  index <= currentPhase
                    ? 'bg-primary/10 text-primary' :'bg-muted text-muted-foreground'
                }`}>
                  {phase.duration}
                </span>
              </div>
              <p className={`text-sm transition-colors duration-300 ${
                index <= currentPhase ? 'text-muted-foreground' : 'text-muted-foreground/60'
              }`}>
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-medium text-primary">Fast-track available:</span>
            <span className="text-muted-foreground ml-1">
              Urgent implementations can be completed in 2-4 weeks with dedicated support.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTimeline;