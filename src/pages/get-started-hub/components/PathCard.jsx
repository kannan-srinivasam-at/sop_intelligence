import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PathCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  timeCommitment, 
  ctaText, 
  ctaVariant = "default",
  onSelect,
  isPopular = false 
}) => {
  return (
    <div className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-strong hover:-translate-y-1 ${
      isPopular 
        ? 'border-primary shadow-medium' 
        : 'border-gray-200 hover:border-primary/30'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6 mx-auto">
          <Icon name={icon} size={32} color="var(--color-primary)" strokeWidth={2} />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground text-center mb-4">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-center mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2.5} className="mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center space-x-2 mb-6 text-sm text-muted-foreground">
          <Icon name="Clock" size={16} />
          <span>{timeCommitment}</span>
        </div>
        
        <Button 
          variant={ctaVariant}
          fullWidth
          onClick={onSelect}
          className="shadow-soft hover:shadow-medium"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default PathCard;