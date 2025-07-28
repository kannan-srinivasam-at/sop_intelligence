import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DemoHero = ({ onStartDemo }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium">Interactive Demo</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={16} />
                <span className="text-sm opacity-90">2,847 professionals watching</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Experience SOP Intelligence
              <span className="block text-secondary">in Action</span>
            </h1>

            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              See how AI transforms compliance from a burden into your competitive advantage. 
              Explore real workflows, witness intelligent automation, and discover why 
              leading organizations choose SOP Intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={onStartDemo}
                iconName="Play"
                iconPosition="left"
                className="shadow-strong hover:shadow-medium transition-all duration-300"
              >
                Start Interactive Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Live Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>5-minute walkthrough</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>No registration required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={16} />
                <span>Real-time scenarios</span>
              </div>
            </div>
          </div>

          {/* Demo Preview */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-strong">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-white/70 text-sm">SOP Intelligence Dashboard</div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-primary">Live Compliance Status</h3>
                  <div className="flex items-center space-x-1 text-secondary">
                    <Icon name="TrendingUp" size={16} />
                    <span className="text-sm font-medium">98.7% Compliant</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">247</div>
                    <div className="text-xs text-green-700">Active SOPs</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">12</div>
                    <div className="text-xs text-blue-700">In Review</div>
                  </div>
                  <div className="text-center p-2 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">3</div>
                    <div className="text-xs text-orange-700">Needs Action</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">Employee Onboarding</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Updated 2h ago</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">Safety Protocols</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Review pending</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={onStartDemo}
                  className="animate-pulse"
                >
                  Click to Explore
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-white p-3 rounded-full shadow-strong animate-bounce">
              <Icon name="Sparkles" size={20} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-white p-2 rounded-lg shadow-strong">
              <div className="text-xs font-medium">AI Powered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoHero;