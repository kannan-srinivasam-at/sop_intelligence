import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AuditTrailDemo = () => {
  const [activeView, setActiveView] = useState('timeline');

  const auditEvents = [
    {
      id: 1,
      timestamp: "2024-01-27 14:32:15",
      user: "Sarah Johnson",
      action: "SOP Document Updated",
      resource: "Employee Onboarding Checklist v2.1",
      details: "Modified section 3.2 - Background Check Requirements",
      riskLevel: "low",
      ipAddress: "192.168.1.45",
      userAgent: "Chrome 120.0.0.0"
    },
    {
      id: 2,
      timestamp: "2024-01-27 13:45:22",
      user: "Michael Chen",
      action: "Access Permission Changed",
      resource: "HR Policies Folder",
      details: "Granted read access to new team member",
      riskLevel: "medium",
      ipAddress: "10.0.0.23",
      userAgent: "Firefox 121.0.1"
    },
    {
      id: 3,
      timestamp: "2024-01-27 12:18:07",
      user: "System Admin",
      action: "Compliance Check Completed",
      resource: "HIPAA Audit Trail",
      details: "Automated quarterly compliance verification passed",
      riskLevel: "low",
      ipAddress: "127.0.0.1",
      userAgent: "System Process"
    },
    {
      id: 4,
      timestamp: "2024-01-27 11:55:33",
      user: "Jennifer Davis",
      action: "Failed Login Attempt",
      resource: "User Authentication",
      details: "Multiple failed login attempts detected",
      riskLevel: "high",
      ipAddress: "203.0.113.45",
      userAgent: "Unknown"
    },
    {
      id: 5,
      timestamp: "2024-01-27 10:22:18",
      user: "Robert Wilson",
      action: "Document Downloaded",
      resource: "Financial Controls SOP",
      details: "Downloaded for external audit preparation",
      riskLevel: "medium",
      ipAddress: "192.168.1.67",
      userAgent: "Edge 120.0.2210.91"
    }
  ];

  const complianceMetrics = [
    {
      metric: "Total Events Logged",
      value: "2,847,392",
      change: "+12.3%",
      period: "This Month"
    },
    {
      metric: "High-Risk Events",
      value: "23",
      change: "-45.2%",
      period: "This Week"
    },
    {
      metric: "Compliance Score",
      value: "98.7%",
      change: "+2.1%",
      period: "Current Quarter"
    },
    {
      metric: "Audit Readiness",
      value: "100%",
      change: "0%",
      period: "Always Ready"
    }
  ];

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'text-error bg-error/10 border-error/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const getRiskIcon = (level) => {
    switch (level) {
      case 'high': return 'AlertTriangle';
      case 'medium': return 'AlertCircle';
      case 'low': return 'CheckCircle';
      default: return 'Info';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Comprehensive Audit Trail Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-time monitoring and detailed logging of all system activities with advanced analytics for compliance reporting.
          </p>
        </div>

        {/* Compliance Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {complianceMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-soft border border-border p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {metric.metric}
                </h3>
                <Icon name="TrendingUp" size={16} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <span className={`font-medium ${metric.change.startsWith('+') ? 'text-success' : metric.change.startsWith('-') ? 'text-error' : 'text-muted-foreground'}`}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground">{metric.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-soft border border-border">
            <button
              onClick={() => setActiveView('timeline')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeView === 'timeline' ?'bg-primary text-white shadow-soft' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Timeline View
            </button>
            <button
              onClick={() => setActiveView('dashboard')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeView === 'dashboard' ?'bg-primary text-white shadow-soft' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Dashboard View
            </button>
          </div>
        </div>

        {/* Audit Trail Content */}
        {activeView === 'timeline' ? (
          <div className="bg-white rounded-xl shadow-soft border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  Recent Audit Events
                </h3>
                <div className="flex items-center space-x-4">
                  <button className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80">
                    <Icon name="Download" size={16} />
                    <span>Export Report</span>
                  </button>
                  <button className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80">
                    <Icon name="Filter" size={16} />
                    <span>Filter Events</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="divide-y divide-border">
              {auditEvents.map((event) => (
                <div key={event.id} className="p-6 hover:bg-muted/20 transition-colors duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${getRiskColor(event.riskLevel)}`}>
                        <Icon name={getRiskIcon(event.riskLevel)} size={16} />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-foreground">
                          {event.action}
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          {event.timestamp}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-medium">{event.user}</span> performed action on{' '}
                        <span className="font-medium">{event.resource}</span>
                      </p>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {event.details}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>IP: {event.ipAddress}</span>
                        <span>•</span>
                        <span>Agent: {event.userAgent}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded-full border font-medium ${getRiskColor(event.riskLevel)}`}>
                          {event.riskLevel.toUpperCase()} RISK
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-soft border border-border p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Compliance Monitoring Dashboard
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-foreground mb-4">Event Distribution</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Document Access</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Permission Changes</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-secondary"></div>
                      </div>
                      <span className="text-sm font-medium">50%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">System Events</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-accent"></div>
                      </div>
                      <span className="text-sm font-medium">33%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-4">Risk Assessment</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-success/5 rounded-lg border border-success/20">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Low Risk Events</div>
                      <div className="text-xs text-muted-foreground">2,847 events (94.2%)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
                    <Icon name="AlertCircle" size={20} className="text-warning" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Medium Risk Events</div>
                      <div className="text-xs text-muted-foreground">152 events (5.0%)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-error/5 rounded-lg border border-error/20">
                    <Icon name="AlertTriangle" size={20} className="text-error" />
                    <div>
                      <div className="text-sm font-medium text-foreground">High Risk Events</div>
                      <div className="text-xs text-muted-foreground">23 events (0.8%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuditTrailDemo;