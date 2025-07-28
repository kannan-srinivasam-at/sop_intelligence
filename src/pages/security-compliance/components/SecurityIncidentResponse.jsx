import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SecurityIncidentResponse = () => {
  const [activeTab, setActiveTab] = useState('response');

  const responseSteps = [
    {
      step: 1,
      title: "Detection & Alert",
      description: "Automated monitoring systems detect potential security incidents",
      timeframe: "< 5 minutes",
      actions: [
        "Real-time threat detection",
        "Automated alert generation",
        "Stakeholder notification",
        "Initial assessment"
      ]
    },
    {
      step: 2,
      title: "Assessment & Classification",
      description: "Security team evaluates incident severity and impact",
      timeframe: "< 15 minutes",
      actions: [
        "Incident severity classification",
        "Impact assessment",
        "Resource allocation",
        "Communication plan activation"
      ]
    },
    {
      step: 3,
      title: "Containment & Mitigation",
      description: "Immediate actions to contain and mitigate the incident",
      timeframe: "< 1 hour",
      actions: [
        "Threat containment",
        "System isolation if needed",
        "Vulnerability patching",
        "Service restoration"
      ]
    },
    {
      step: 4,
      title: "Investigation & Recovery",
      description: "Detailed investigation and full system recovery",
      timeframe: "< 24 hours",
      actions: [
        "Forensic analysis",
        "Root cause identification",
        "Full service restoration",
        "Security enhancement"
      ]
    },
    {
      step: 5,
      title: "Documentation & Review",
      description: "Complete incident documentation and process improvement",
      timeframe: "< 72 hours",
      actions: [
        "Incident report generation",
        "Lessons learned analysis",
        "Process improvement",
        "Stakeholder communication"
      ]
    }
  ];

  const businessContinuity = {
    uptime: {
      title: "Uptime Guarantees",
      metrics: [
        { service: "Core Platform", sla: "99.99%", downtime: "< 4.38 hours/year" },
        { service: "API Services", sla: "99.95%", downtime: "< 21.9 hours/year" },
        { service: "Data Backup", sla: "99.99%", downtime: "< 4.38 hours/year" },
        { service: "Support Portal", sla: "99.9%", downtime: "< 43.8 hours/year" }
      ]
    },
    recovery: {
      title: "Disaster Recovery",
      objectives: [
        { metric: "Recovery Time Objective (RTO)", value: "< 4 hours", description: "Maximum time to restore services" },
        { metric: "Recovery Point Objective (RPO)", value: "< 15 minutes", description: "Maximum acceptable data loss" },
        { metric: "Mean Time to Recovery (MTTR)", value: "< 2 hours", description: "Average time to full recovery" },
        { metric: "Backup Frequency", value: "Every 15 minutes", description: "Continuous data protection" }
      ]
    }
  };

  const incidentHistory = [
    {
      date: "2024-01-15",
      type: "Performance Degradation",
      severity: "Medium",
      duration: "23 minutes",
      impact: "Slower response times for 0.3% of users",
      resolution: "Database optimization and resource scaling",
      status: "Resolved"
    },
    {
      date: "2023-12-08",
      type: "Planned Maintenance",
      severity: "Low",
      duration: "2 hours",
      impact: "Scheduled maintenance window",
      resolution: "Security updates and infrastructure improvements",
      status: "Completed"
    },
    {
      date: "2023-11-22",
      type: "Network Issue",
      severity: "High",
      duration: "45 minutes",
      impact: "Service unavailable for EU region",
      resolution: "ISP routing issue resolved, failover activated",
      status: "Resolved"
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'text-error bg-error/10 border-error/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Security Incident Response & Business Continuity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive incident response procedures and business continuity planning to ensure maximum uptime and rapid recovery.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-soft border border-border">
            <button
              onClick={() => setActiveTab('response')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'response' ?'bg-primary text-white shadow-soft' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Incident Response
            </button>
            <button
              onClick={() => setActiveTab('continuity')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'continuity' ?'bg-primary text-white shadow-soft' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Business Continuity
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'history' ?'bg-primary text-white shadow-soft' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Incident History
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'response' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-soft border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                5-Step Incident Response Process
              </h3>
              
              <div className="space-y-6">
                {responseSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    {index < responseSteps.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {step.title}
                          </h4>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {step.timeframe}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-center space-x-2">
                              <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact Information */}
            <div className="bg-error/5 rounded-xl p-8 border border-error/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-error" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    24/7 Emergency Response
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our security team is available around the clock to respond to incidents and provide immediate assistance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-error" />
                      <span className="text-sm font-medium">+1 (555) 123-SECURITY</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-error" />
                      <span className="text-sm font-medium">security@sopintelligence.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'continuity' && (
          <div className="space-y-8">
            {/* Uptime Guarantees */}
            <div className="bg-white rounded-xl shadow-soft border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {businessContinuity.uptime.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {businessContinuity.uptime.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">
                      {metric.service}
                    </h4>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {metric.sla}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.downtime}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disaster Recovery */}
            <div className="bg-white rounded-xl shadow-soft border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {businessContinuity.recovery.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessContinuity.recovery.objectives.map((objective, index) => (
                  <div key={index} className="p-6 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">
                        {objective.metric}
                      </h4>
                      <span className="text-lg font-bold text-secondary">
                        {objective.value}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {objective.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backup Strategy */}
            <div className="bg-secondary/5 rounded-xl p-8 border border-secondary/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="HardDrive" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Multi-Tier Backup Strategy
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive backup strategy ensures your data is protected with multiple layers of redundancy and geographic distribution.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-secondary" />
                      <span className="text-sm font-medium">Real-time replication</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-secondary" />
                      <span className="text-sm font-medium">Geographic distribution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-secondary" />
                      <span className="text-sm font-medium">Automated testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-xl shadow-soft border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">
                Incident History & Transparency Report
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Complete transparency about past incidents and our response effectiveness
              </p>
            </div>
            
            <div className="divide-y divide-border">
              {incidentHistory.map((incident, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {incident.type}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {incident.date} • Duration: {incident.duration}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                      {incident.severity.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-1">Impact</h5>
                      <p className="text-sm text-muted-foreground">{incident.impact}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-1">Resolution</h5>
                      <p className="text-sm text-muted-foreground">{incident.resolution}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-sm font-medium text-success">{incident.status}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-muted/30 border-t border-border">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  View our complete incident history and status updates
                </p>
                <button className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80">
                  <span>Visit Status Page</span>
                  <Icon name="ExternalLink" size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SecurityIncidentResponse;