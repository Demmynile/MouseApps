'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Database,
  Code2,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Data Solutions',
    slug: 'data',
    icon: Database,
    description:
      'Transform raw data into actionable insights with our comprehensive data engineering and analytics services.',
    features: [
      'Data Pipeline Architecture',
      'Business Intelligence',
      'Machine Learning Models',
      'Real-time Analytics',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Software Engineering',
    slug: 'software-engineering',
    icon: Code2,
    description:
      'Build scalable, maintainable software solutions with cutting-edge technologies and best practices.',
    features: [
      'Full-Stack Development',
      'Microservices Architecture',
      'API Development',
      'Code Review & Optimization',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cloud Deployment',
    slug: 'cloud-deployment',
    icon: Cloud,
    description:
      'Deploy and scale your applications with confidence using modern cloud infrastructure.',
    features: [
      'AWS, Azure & GCP',
      'Kubernetes & Docker',
      'CI/CD Pipelines',
      'Infrastructure as Code',
    ],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Security',
    slug: 'security',
    icon: Shield,
    description:
      'Protect your digital assets with comprehensive security audits and implementation.',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Management',
      'Incident Response',
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="glass-card dark:text-white">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
              What We Offer
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="glass-card border-border/50 hover:glass-strong transition-all duration-300 group h-full dark:bg-card/90 bg-background/80"
                >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
