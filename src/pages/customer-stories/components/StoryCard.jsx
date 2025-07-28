import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, onReadMore }) => {
  return (
    <div className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={story.image}
          alt={story.company}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
              {story.industry}
            </span>
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
              {story.companySize}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white line-clamp-2">
            {story.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Image
            src={story.logo}
            alt={`${story.company} logo`}
            className="w-12 h-12 object-contain rounded-lg bg-gray-50 p-2"
          />
          <div>
            <h4 className="font-semibold text-foreground">{story.company}</h4>
            <p className="text-sm text-muted-foreground">{story.location}</p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {story.challenge}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {story.keyMetrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} />
            <span>{story.implementationTime}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onReadMore(story)}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
          >
            Read Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;