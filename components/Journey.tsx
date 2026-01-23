'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const journeySteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals, challenges, and current infrastructure to understand your unique needs',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Together, we craft a comprehensive roadmap and technical strategy tailored to your objectives',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our expert team executes the plan with precision, keeping you informed at every milestone',
  },
  {
    number: '04',
    title: 'Growth',
    description: 'We support your success with ongoing optimization, training, and continuous improvement',
  },
];

export default function Journey() {
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
          <Badge className="glass-card dark:text-white">The Journey</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
              How We Work Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven process that ensures your success at every stage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="glass-card border-border/50 p-6 h-full hover:glass-strong transition-all duration-300 group dark:bg-card/90 bg-background/80">
                <div className="space-y-4">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent opacity-50">
                      {step.number}
                    </span>
                    {index < journeySteps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-5 h-5 text-primary/30 absolute -right-8 top-12" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold">{step.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
