import React from 'react';
import Icon from '../../../components/AppIcon';
import StoryCard from './StoryCard';

const SimilarStoriesSection = ({ stories, onReadMore }) => {
  if (!stories || stories.length === 0) return null;

  return (
    <div className="bg-muted rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
          <Icon name="Users" size={24} className="text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Stories Similar to Yours
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Based on your profile and interests, these transformation stories might resonate with your challenges and goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onReadMore={onReadMore}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground mb-4">
          Want to find more stories relevant to your specific situation?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Take Assessment Quiz
          </button>
          <span className="hidden sm:block text-muted-foreground">•</span>
          <button className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimilarStoriesSection;