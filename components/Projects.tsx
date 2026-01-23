'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
  Database,
  Brain,
  Cpu,
  Sparkles,
  Code2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const projects = [
  {
    title: 'Customer Analytics Dashboard',
    domain: 'Data Science',
    icon: Database,
    description: 'Real-time analytics platform processing 10M+ daily transactions with predictive insights',
    tags: ['Python', 'Pandas', 'SQL', 'Tableau'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Predictive Maintenance System',
    domain: 'Machine Learning',
    icon: Brain,
    description: 'ML model reducing equipment downtime by 40% through anomaly detection',
    tags: ['Scikit-learn', 'TensorFlow', 'AWS SageMaker'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Computer Vision Platform',
    domain: 'Deep Learning',
    icon: Cpu,
    description: 'Object detection system achieving 98% accuracy for quality control automation',
    tags: ['PyTorch', 'OpenCV', 'YOLO', 'Docker'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'AI Chatbot Assistant',
    domain: 'Artificial Intelligence',
    icon: Sparkles,
    description: 'Natural language chatbot handling 100K+ customer queries with 95% satisfaction',
    tags: ['GPT-4', 'LangChain', 'FastAPI', 'Redis'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'E-Commerce Microservices',
    domain: 'Software Engineering',
    icon: Code2,
    description: 'Scalable platform handling 50K+ concurrent users with 99.9% uptime',
    tags: ['Node.js', 'React', 'Kubernetes', 'PostgreSQL'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Real-time Fraud Detection',
    domain: 'Artificial Intelligence',
    icon: Sparkles,
    description: 'AI-powered fraud prevention system saving $2M+ annually',
    tags: ['TensorFlow', 'Kafka', 'MongoDB', 'Python'],
    color: 'from-green-500 to-teal-500',
  },
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="glass-card dark:text-white">Our Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming businesses with cutting-edge solutions
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-6 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-8 scrollbar-hide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[380px]"
              >
                <Card className="glass-card border-border/50 h-full hover:glass-strong transition-all duration-300 group dark:bg-card/90 bg-background/80">
                  <CardContent className="p-6 space-y-4">
                    {/* Domain Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="glass-card">
                        {project.domain}
                      </Badge>
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center space-x-2 text-primary text-sm font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gradient Overlays for Scroll Hint */}
        <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="text-center mt-8 space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-sm text-muted-foreground">← Scroll to explore more projects →</p>
        
        {/* Scroll Arrows */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            className="glass-card hover:glass-strong"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            className="glass-card hover:glass-strong"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
