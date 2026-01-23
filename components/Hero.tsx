'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      {/* <Hero3D /> */}
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full backdrop-blur-xl bg-background/60 shadow-2xl">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium drop-shadow-lg dark:text-white">
                Empowering Digital Innovation
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-2xl px-4 leading-tight"
            style={{ lineHeight: '1.3' }}
            {...fadeInUp}
          >
            <span className="block text-foreground drop-shadow-2xl mb-4" style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }}>
              Transform Your
            </span>
            <span className="block bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent" style={{ 
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              fontWeight: '900'
            }}>
              Digital Future
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="max-w-3xl mx-auto text-xl md:text-2xl font-medium backdrop-blur-sm bg-background/30 dark:bg-background/50 px-8 py-4 rounded-2xl shadow-sm text-foreground"
            {...fadeInUp}
          >
            Expert consulting in Data, Software Engineering, Cloud Deployment,
            and Security. Join our thriving tech community.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            {...fadeInUp}
          >
            <Link href="/#services">
              <Button size="lg" className="group shadow-2xl text-lg px-8 py-6 h-auto">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/community">
              <Button size="lg" variant="outline" className="shadow-2xl backdrop-blur-xl bg-background/60 text-lg px-8 py-6 h-auto">
                Join Community
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {[
              { label: 'Projects Delivered', value: '500+' },
              { label: 'Happy Clients', value: '250+' },
              { label: 'Community Members', value: '10K+' },
              { label: 'Success Rate', value: '99%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-background/70 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/80 mt-1 drop-shadow-md">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
