import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedStory = ({ story, onReadMore }) => {
  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl overflow-hidden shadow-strong mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="Star" size={20} className="text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-white/90">Featured Success Story</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {story.title}
          </h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <Image
              src={story.logo}
              alt={`${story.company} logo`}
              className="w-16 h-16 object-contain rounded-xl bg-white/10 backdrop-blur-sm p-3"
            />
            <div>
              <h2 className="text-xl font-semibold">{story.company}</h2>
              <p className="text-white/80">{story.industry} • {story.companySize}</p>
            </div>
          </div>
          
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {story.challenge}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {story.keyMetrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-white/80">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onReadMore(story)}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={20}
            className="self-start"
          >
            Read Full Story
          </Button>
        </div>
        
        <div className="relative overflow-hidden">
          <Image
            src={story.image}
            alt={story.company}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/20" />
          
          {story.testimonial && (
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-medium">
                <blockquote className="text-foreground italic mb-4">
                  "{story.testimonial.quote.substring(0, 120)}..."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src={story.testimonial.avatar}
                    alt={story.testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {story.testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {story.testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;