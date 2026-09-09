'use client';

import Link from 'next/link';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card border-t-2 border-border/80 mt-20 bg-background/50 dark:bg-card/80 dark:border-border shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-1">
              <div
                role="img"
                aria-label="MouseLabs."
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-foreground via-primary to-accent"
                style={{
                  WebkitMaskImage: 'url(/mouselabs-icon.png)',
                  maskImage: 'url(/mouselabs-icon.png)',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
                MouseLabs.
              </span>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-200">
              Empowering businesses with cutting-edge digital solutions in data,
              software engineering, cloud, and security.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:glass-strong transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:glass-strong transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:glass-strong transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4 dark:text-white">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-200">
              <li>
                <Link
                  href="/services/data"
                  className="hover:text-primary transition-colors"
                >
                  Data Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-engineering"
                  className="hover:text-primary transition-colors"
                >
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-deployment"
                  className="hover:text-primary transition-colors"
                >
                  Cloud Deployment
                </Link>
              </li>
              <li>
                <Link
                  href="/services/security"
                  className="hover:text-primary transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4 dark:text-white">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-200">
              <li>
                <Link
                  href="/community"
                  className="hover:text-primary transition-colors"
                >
                  Join Community
                </Link>
              </li>
              <li>
                <Link
                  href="/community#lms"
                  className="hover:text-primary transition-colors"
                >
                  LMS Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/community#resources"
                  className="hover:text-primary transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/community#events"
                  className="hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4 dark:text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground dark:text-gray-200">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@linttech.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@linttech.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground dark:text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} MouseLabs. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors dark:text-gray-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors dark:text-gray-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors dark:text-gray-200">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
