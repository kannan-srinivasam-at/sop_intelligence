import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const metrics = [
    {
      value: "87%",
      label: "Reduction in compliance errors",
      description: "Average improvement across all implementations",
      icon: "TrendingDown",
      color: "text-secondary"
    },
    {
      value: "3x",
      label: "Faster onboarding process",
      description: "New employee integration time",
      icon: "Clock",
      color: "text-primary"
    },
    {
      value: "92%",
      label: "User adoption rate",
      description: "Teams actively using the platform",
      icon: "Users",
      color: "text-accent"
    },
    {
      value: "45min",
      label: "Average time saved per SOP",
      description: "Daily operational efficiency gain",
      icon: "Zap",
      color: "text-secondary"
    }
  ];

  const clientLogos = [
    {
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
      industry: "Technology"
    },
    {
      name: "Global Manufacturing Inc",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&crop=center",
      industry: "Manufacturing"
    },
    {
      name: "HealthFirst Medical",
      logo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=100&fit=crop&crop=center",
      industry: "Healthcare"
    },
    {
      name: "Financial Services Pro",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop&crop=center",
      industry: "Finance"
    },
    {
      name: "Retail Excellence Group",
      logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop&crop=center",
      industry: "Retail"
    },
    {
      name: "Energy Solutions Ltd",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop&crop=center",
      industry: "Energy"
    }
  ];

  const testimonials = [
    {
      quote: "SOP Intelligence transformed our compliance processes from a monthly headache into a daily advantage. The AI suggestions are incredibly accurate.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "TechCorp Solutions",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      quote: "We reduced our onboarding time from 2 weeks to 5 days while improving compliance accuracy. The ROI was immediate and substantial.",
      author: "Michael Rodriguez",
      role: "Compliance Director",
      company: "Global Manufacturing Inc",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "The collaborative features and real-time updates have revolutionized how our teams work together on process improvements.",
      author: "Emily Watson",
      role: "HR Director",
      company: "HealthFirst Medical",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
          >
            <Icon name="BarChart3" size={16} className="mr-2" />
            Proven Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Transformation{' '}
            <span className="text-secondary">Metrics</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Real results from organizations that have transformed their compliance processes with SOP Intelligence.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center ${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={metric.icon} size={24} />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                  {metric.value}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground">
              Join 500+ organizations that have transformed their compliance processes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 group-hover:border-gray-200 overflow-hidden">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs text-muted-foreground">{client.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h3>
            <p className="text-muted-foreground">
              Real feedback from teams who have experienced the transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-muted/30 to-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;