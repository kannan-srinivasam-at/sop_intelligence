import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 lg:p-12 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
          <Icon name="Rocket" size={32} className="text-white" />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Write Your Success Story?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join hundreds of companies that have transformed their compliance processes with SOP Intelligence. 
          Your transformation story could be next.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            variant="outline"
            size="lg"
            iconName="Play"
            iconPosition="left"
            iconSize={20}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Watch Product Demo
          </Button>
          <Button
            variant="secondary"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            iconSize={20}
            className="bg-white text-secondary hover:bg-white/90"
          >
            Schedule Consultation
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-white/80">
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={16} />
            <span>Free 30-day trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={16} />
            <span>No setup fees</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={16} />
            <span>Expert implementation support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;