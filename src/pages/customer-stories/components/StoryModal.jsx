import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StoryModal = ({ story, isOpen, onClose }) => {
  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl shadow-strong max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-4">
            <Image
              src={story.logo}
              alt={`${story.company} logo`}
              className="w-12 h-12 object-contain rounded-lg bg-gray-50 p-2"
            />
            <div>
              <h2 className="text-xl font-bold text-foreground">{story.company}</h2>
              <p className="text-muted-foreground">{story.location}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
            iconSize={20}
          />
        </div>

        <div className="p-6">
          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
            <Image
              src={story.image}
              alt={story.company}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h1 className="text-2xl font-bold text-white mb-2">{story.title}</h1>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                  {story.industry}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                  {story.companySize}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <Icon name="AlertTriangle" size={20} className="mr-2 text-accent" />
                  The Challenge
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.detailedChallenge}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <Icon name="Lightbulb" size={20} className="mr-2 text-secondary" />
                  The Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {story.solution}
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Implementation Timeline</h4>
                  <div className="space-y-2">
                    {story.timeline.map((phase, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{phase.phase}:</span> {phase.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2 text-primary" />
                  The Results
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {story.results}
                </p>

                {story.testimonial && (
                  <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
                    <blockquote className="text-foreground italic mb-4">
                      "{story.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={story.testimonial.avatar}
                        alt={story.testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">
                          {story.testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {story.testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4">Key Metrics</h4>
                <div className="space-y-4">
                  {story.keyMetrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-soft">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4">ROI Breakdown</h4>
                <div className="space-y-3">
                  {story.roiBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{item.category}</span>
                      <span className="font-semibold text-secondary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                >
                  Schedule Consultation
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Discuss your transformation goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;