import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  MessageSquare,
  Lightbulb,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge className="glass-card">Community</Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
                Join Our Tech Community
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with 10,000+ tech professionals, access exclusive
              resources, and accelerate your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="group">
                Join Now - It's Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: Users,
                title: 'Networking',
                description:
                  'Connect with professionals, mentors, and industry leaders from around the world.',
                count: '10,000+',
                label: 'Members',
              },
              {
                icon: BookOpen,
                title: 'Learning Resources',
                description:
                  'Access tutorials, documentation, code samples, and best practices.',
                count: '500+',
                label: 'Resources',
              },
              {
                icon: GraduationCap,
                title: 'Courses & Workshops',
                description:
                  'Structured learning paths with hands-on projects and certifications.',
                count: '100+',
                label: 'Courses',
              },
              {
                icon: Calendar,
                title: 'Events & Webinars',
                description:
                  'Regular meetups, tech talks, and live coding sessions.',
                count: '50+',
                label: 'Monthly Events',
              },
              {
                icon: MessageSquare,
                title: 'Discussion Forums',
                description:
                  'Ask questions, share knowledge, and collaborate on projects.',
                count: '1000+',
                label: 'Active Threads',
              },
              {
                icon: Lightbulb,
                title: 'Project Showcases',
                description:
                  'Share your projects, get feedback, and inspire others.',
                count: '200+',
                label: 'Projects',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="glass-card border-border/50 hover:glass-strong transition-all"
                >
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
                      <span className="text-2xl font-bold text-primary">
                        {item.count}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* LMS Platform Section */}
          <div id="lms" className="scroll-mt-20">
            <Card className="glass-strong border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 glass-card px-3 py-1.5 rounded-full">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">LMS Platform</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Access Our Learning Management System
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Dive into our comprehensive learning platform with
                    structured courses, certifications, and hands-on projects
                    designed by industry experts.
                  </p>

                  {/* LMS Features */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Platform Features</h3>
                    <div className="grid gap-3">
                      {[
                        'Self-paced learning paths',
                        'Industry-recognized certifications',
                        'Interactive coding challenges',
                        'Live mentorship sessions',
                        'Project-based learning',
                        'Progress tracking & analytics',
                        'Peer code reviews',
                        'Career guidance & resources',
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="https://mouse-apps-lms.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="group">
                      Launch LMS Platform
                      <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  {/* Course Categories */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">
                      Popular Learning Paths
                    </h3>
                    {[
                      {
                        title: 'Full-Stack Development',
                        courses: 25,
                        students: '5K+',
                      },
                      {
                        title: 'Data Science & Analytics',
                        courses: 18,
                        students: '3K+',
                      },
                      {
                        title: 'Cloud Engineering',
                        courses: 20,
                        students: '4K+',
                      },
                      {
                        title: 'Cybersecurity',
                        courses: 15,
                        students: '2K+',
                      },
                    ].map((path) => (
                      <Card
                        key={path.title}
                        className="glass-card border-border/50"
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{path.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {path.courses} courses • {path.students}{' '}
                                students
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-primary" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Community Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                Our community is built on respect, collaboration, and continuous
                learning. Here are our core principles:
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {[
                  'Be respectful and inclusive',
                  'Share knowledge generously',
                  'Give constructive feedback',
                  'Help others grow',
                  'Stay curious and open-minded',
                  'Credit others work',
                  'Keep discussions professional',
                  'Embrace diversity',
                ].map((guideline) => (
                  <div
                    key={guideline}
                    className="flex items-center space-x-2 p-3 rounded-lg glass"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{guideline}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-strong border-border/50">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Join Our Community?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start connecting with tech professionals, access exclusive
                resources, and accelerate your career growth today.
              </p>
              <Button size="lg">
                Join the Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
