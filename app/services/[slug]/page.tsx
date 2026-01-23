import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const servicesData: Record<string, any> = {
  data: {
    title: 'Data Solutions',
    description:
      'Transform raw data into actionable insights with our comprehensive data engineering and analytics services.',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Data Pipeline Architecture',
      'Business Intelligence & Analytics',
      'Machine Learning Models',
      'Real-time Analytics',
      'Data Warehousing',
      'ETL Processes',
    ],
    benefits: [
      'Make data-driven decisions',
      'Improve operational efficiency',
      'Predict trends and patterns',
      'Automate reporting',
    ],
    process: [
      'Data Assessment & Strategy',
      'Infrastructure Setup',
      'Pipeline Development',
      'Model Training & Testing',
      'Deployment & Monitoring',
    ],
  },
  'software-engineering': {
    title: 'Software Engineering',
    description:
      'Build scalable, maintainable software solutions with cutting-edge technologies and best practices.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Full-Stack Development',
      'Microservices Architecture',
      'RESTful & GraphQL APIs',
      'Code Review & Optimization',
      'Legacy System Modernization',
      'Technical Documentation',
    ],
    benefits: [
      'Faster time to market',
      'Scalable architecture',
      'Reduced technical debt',
      'Improved code quality',
    ],
    process: [
      'Requirements Analysis',
      'Architecture Design',
      'Development & Testing',
      'Code Review',
      'Deployment & Support',
    ],
  },
  'cloud-deployment': {
    title: 'Cloud Deployment',
    description:
      'Deploy and scale your applications with confidence using modern cloud infrastructure.',
    color: 'from-orange-500 to-yellow-500',
    features: [
      'AWS, Azure & GCP',
      'Kubernetes & Docker',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Auto-scaling & Load Balancing',
      'Disaster Recovery',
    ],
    benefits: [
      'Reduce infrastructure costs',
      'Improve reliability',
      'Scale on demand',
      'Global availability',
    ],
    process: [
      'Cloud Strategy Planning',
      'Infrastructure Design',
      'Migration Execution',
      'Optimization',
      'Continuous Monitoring',
    ],
  },
  security: {
    title: 'Security',
    description:
      'Protect your digital assets with comprehensive security audits and implementation.',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Management',
      'Incident Response',
      'Security Training',
      'Vulnerability Assessment',
    ],
    benefits: [
      'Protect sensitive data',
      'Meet compliance requirements',
      'Prevent security breaches',
      'Build customer trust',
    ],
    process: [
      'Security Assessment',
      'Risk Analysis',
      'Implementation',
      'Testing & Validation',
      'Ongoing Monitoring',
    ],
  },
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge className="glass-card">{service.title}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span
                className={`bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
              >
                {service.title}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/#contact">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/#services">
                <Button size="lg" variant="outline" className="glass">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature: string) => (
              <Card key={feature} className="glass-card border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit: string) => (
                    <li key={benefit} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Our Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {service.process.map((step: string, index: number) => (
                    <li key={step} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full glass-strong flex items-center justify-center text-sm font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-strong border-border/50">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our {service.title.toLowerCase()} services can
                help transform your business.
              </p>
              <Link href="/#contact">
                <Button size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
