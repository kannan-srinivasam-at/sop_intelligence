import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ResourceRecommendations = ({ userProfile, selectedPath }) => {
  const getRecommendations = () => {
    const baseRecommendations = [
      {
        type: 'guide',
        title: 'SOP Digitization Starter Guide',
        description: 'Complete guide to transforming paper-based processes into intelligent digital workflows.',
        readTime: '15 min read',
        icon: 'BookOpen',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
        category: 'Getting Started'
      },
      {
        type: 'case-study',
        title: 'Manufacturing Compliance Success Story',
        description: 'How TechCorp reduced audit preparation time by 75% with automated SOP management.',
        readTime: '8 min read',
        icon: 'FileText',
        image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=400&h=200&fit=crop',
        category: 'Case Study'
      },
      {
        type: 'webinar',
        title: 'AI in Compliance: What\'s Possible Today',
        description: 'Live demonstration of AI-powered compliance automation and Q&A with experts.',
        readTime: '45 min webinar',
        icon: 'Video',
        image: 'https://images.pixabay.com/photos/2020/07/08/04/12/work-5382501_1280.jpg?w=400&h=200&fit=crop',
        category: 'Webinar'
      }
    ];

    // Customize based on user profile
    if (userProfile?.role === 'compliance') {
      baseRecommendations.push({
        type: 'checklist',
        title: 'Compliance Manager\'s Implementation Checklist',
        description: 'Step-by-step checklist for rolling out digital SOPs while maintaining regulatory compliance.',
        readTime: '10 min read',
        icon: 'CheckSquare',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=200&fit=crop',
        category: 'Checklist'
      });
    }

    if (userProfile?.role === 'it') {
      baseRecommendations.push({
        type: 'technical',
        title: 'Integration Architecture Guide',
        description: 'Technical documentation for integrating SOP Intelligence with existing enterprise systems.',
        readTime: '20 min read',
        icon: 'Code',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?w=400&h=200&fit=crop',
        category: 'Technical'
      });
    }

    return baseRecommendations;
  };

  const recommendations = getRecommendations();

  const getCategoryColor = (category) => {
    const colors = {
      'Getting Started': 'bg-blue-100 text-blue-700',
      'Case Study': 'bg-green-100 text-green-700',
      'Webinar': 'bg-purple-100 text-purple-700',
      'Checklist': 'bg-orange-100 text-orange-700',
      'Technical': 'bg-gray-100 text-gray-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">Recommended Resources</h3>
        <p className="text-muted-foreground">
          {userProfile?.role 
            ? `Curated content for ${userProfile.role === 'compliance' ? 'Compliance Managers' : userProfile.role === 'it' ? 'IT Decision Makers' : 'Operations Directors'}`
            : 'Essential resources to get you started'
          }
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((resource, index) => (
          <div key={index} className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-video overflow-hidden">
              <Image 
                src={resource.image}
                alt={resource.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                  {resource.category}
                </span>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>{resource.readTime}</span>
                </div>
              </div>
              
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h4>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {resource.description}
              </p>
              
              <Button variant="ghost" size="sm" className="w-full justify-between group-hover:bg-primary/5">
                <span>Read More</span>
                <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon name="Lightbulb" size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Need Personalized Guidance?</h4>
            <p className="text-muted-foreground mb-4">
              Our implementation specialists can provide customized recommendations based on your specific industry and use case.
            </p>
            <Button variant="outline" size="sm">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceRecommendations;