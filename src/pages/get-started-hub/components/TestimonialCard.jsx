import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company, 
  avatar, 
  rating = 5,
  implementationTime,
  results 
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-soft hover:shadow-medium transition-all duration-300">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Icon key={i} name="Star" size={16} color="#FFD700" strokeWidth={0} className="fill-current" />
        ))}
      </div>
      
      <blockquote className="text-foreground mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image 
            src={avatar} 
            alt={`${author} avatar`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
          <div className="text-sm text-muted-foreground">{company}</div>
        </div>
      </div>
      
      {(implementationTime || results) && (
        <div className="border-t border-gray-100 pt-4 space-y-2">
          {implementationTime && (
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="Clock" size={14} color="var(--color-success)" />
              <span className="text-muted-foreground">Implementation: </span>
              <span className="font-medium text-foreground">{implementationTime}</span>
            </div>
          )}
          {results && (
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="TrendingUp" size={14} color="var(--color-success)" />
              <span className="text-muted-foreground">Results: </span>
              <span className="font-medium text-foreground">{results}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;