import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveDashboard = ({ isActive, onScenarioSelect }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredCard, setHoveredCard] = useState(null);

  const dashboardTabs = [
    { id: 'overview', name: 'Overview', icon: 'BarChart3' },
    { id: 'workflows', name: 'Workflows', icon: 'GitBranch' },
    { id: 'compliance', name: 'Compliance', icon: 'Shield' },
    { id: 'analytics', name: 'Analytics', icon: 'TrendingUp' }
  ];

  const sopCards = [
    {
      id: 'onboarding',
      title: 'Employee Onboarding',
      department: 'Human Resources',
      status: 'active',
      completion: 94,
      lastUpdated: '2 hours ago',
      icon: 'UserPlus',
      color: 'bg-blue-500',
      scenarios: ['New hire documentation', 'Training assignments', 'Equipment setup']
    },
    {
      id: 'safety',
      title: 'Safety Protocol Updates',
      department: 'Operations',
      status: 'review',
      completion: 78,
      lastUpdated: '4 hours ago',
      icon: 'Shield',
      color: 'bg-orange-500',
      scenarios: ['Equipment inspection', 'Emergency procedures', 'Incident reporting']
    },
    {
      id: 'quality',
      title: 'Quality Assurance',
      department: 'Manufacturing',
      status: 'active',
      completion: 100,
      lastUpdated: '1 day ago',
      icon: 'CheckCircle',
      color: 'bg-green-500',
      scenarios: ['Product testing', 'Documentation review', 'Compliance verification']
    },
    {
      id: 'financial',
      title: 'Financial Reporting',
      department: 'Finance',
      status: 'pending',
      completion: 45,
      lastUpdated: '3 days ago',
      icon: 'DollarSign',
      color: 'bg-purple-500',
      scenarios: ['Monthly reports', 'Audit preparation', 'Regulatory filing']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'review': return 'text-orange-600 bg-orange-100';
      case 'pending': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'review': return 'In Review';
      case 'pending': return 'Needs Action';
      default: return 'Unknown';
    }
  };

  if (!isActive) return null;

  return (
    <div className="bg-white rounded-2xl shadow-strong border border-gray-200 overflow-hidden">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">SOP Intelligence Dashboard</h2>
            <p className="opacity-90">Real-time compliance management across all departments</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">98.7%</div>
            <div className="text-sm opacity-90">Overall Compliance</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">247</div>
            <div className="text-sm opacity-90">Active SOPs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm opacity-90">In Review</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm opacity-90">Need Action</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">1,847</div>
            <div className="text-sm opacity-90">Team Members</div>
          </div>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-0">
          {dashboardTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-primary text-primary bg-primary/5' :'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Icon name={tab.icon} size={18} />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Active SOP Workflows</h3>
              <div className="text-sm text-gray-500">Click any workflow to explore</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {sopCards.map((sop) => (
                <div
                  key={sop.id}
                  className={`relative bg-white border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-medium ${
                    hoveredCard === sop.id ? 'border-primary shadow-medium scale-105' : 'border-gray-200'
                  }`}
                  onMouseEnter={() => setHoveredCard(sop.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => onScenarioSelect(sop)}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${sop.color} rounded-lg flex items-center justify-center text-white`}>
                        <Icon name={sop.icon} size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{sop.title}</h4>
                        <p className="text-sm text-gray-500">{sop.department}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sop.status)}`}>
                      {getStatusText(sop.status)}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Completion</span>
                      <span className="text-sm font-bold text-primary">{sop.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${sop.completion}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Scenarios Preview */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Key Scenarios:</div>
                    <div className="space-y-1">
                      {sop.scenarios.slice(0, 2).map((scenario, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Icon name="ChevronRight" size={14} />
                          <span>{scenario}</span>
                        </div>
                      ))}
                      {sop.scenarios.length > 2 && (
                        <div className="text-sm text-primary font-medium">
                          +{sop.scenarios.length - 2} more scenarios
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Icon name="Clock" size={14} />
                      <span>Updated {sop.lastUpdated}</span>
                    </div>
                    <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                      Explore
                    </Button>
                  </div>

                  {/* Hover Effect */}
                  {hoveredCard === sop.id && (
                    <div className="absolute inset-0 bg-primary/5 rounded-xl pointer-events-none"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'workflows' && (
          <div className="text-center py-12">
            <Icon name="GitBranch" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow Management</h3>
            <p className="text-gray-600 mb-6">Advanced workflow automation and routing capabilities</p>
            <Button variant="outline" iconName="Play" iconPosition="left">
              View Workflow Demo
            </Button>
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="text-center py-12">
            <Icon name="Shield" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Monitoring</h3>
            <p className="text-gray-600 mb-6">Real-time compliance tracking and automated reporting</p>
            <Button variant="outline" iconName="Play" iconPosition="left">
              View Compliance Demo
            </Button>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="text-center py-12">
            <Icon name="TrendingUp" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
            <p className="text-gray-600 mb-6">Predictive insights and performance optimization</p>
            <Button variant="outline" iconName="Play" iconPosition="left">
              View Analytics Demo
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveDashboard;