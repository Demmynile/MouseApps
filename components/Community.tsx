'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, ArrowRight, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Community() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="glass-card dark:text-white">Community</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
              Join Our Tech Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect, learn, and grow with thousands of tech professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Users,
              title: 'Networking',
              description:
                'Connect with like-minded professionals and industry experts',
              count: '10,000+',
              label: 'Members',
            },
            {
              icon: BookOpen,
              title: 'Resources',
              description:
                'Access exclusive tutorials, courses, and documentation',
              count: '500+',
              label: 'Resources',
            },
            {
              icon: GraduationCap,
              title: 'Learning',
              description: 'Structured learning paths and hands-on workshops',
              count: '100+',
              label: 'Courses',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card border-border/50 h-full dark:bg-card/90 bg-background/80">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg glass-strong flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-primary">
                      {item.count}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </div>

        {/* LMS Integration Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="glass-strong border-border/50 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 glass-card px-3 py-1.5 rounded-full">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">LMS Platform</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Access Our Learning Management System
              </h3>
              <p className="text-lg text-muted-foreground">
                Dive into our comprehensive learning platform with structured
                courses, certifications, and hands-on projects designed by
                industry experts.
              </p>
              <ul className="space-y-3">
                {[
                  'Self-paced learning paths',
                  'Industry certifications',
                  'Interactive coding challenges',
                  'Live mentorship sessions',
                  'Project-based learning',
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/community">
                <Button size="lg" className="group">
                  Access LMS Platform
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-full min-h-[300px] glass-card rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-32 h-32 text-primary/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl" />
              </div>
            </div>
          </div>
        </Card>
        </motion.div>
      </div>
    </section>
  );
}
