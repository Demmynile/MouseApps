import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  User,
  CalendarClock,
  CalendarDays,
  Clock3,
  Activity,
} from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/');
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 dark:text-white">
              Welcome back,{' '}
              <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                {user.firstName || 'User'}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage your account and stay on top of your scheduled meeting
              time.
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Profile Card */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2 dark:text-white">
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </CardTitle>
                  <Badge variant="outline" className="glass">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">
                    {user.emailAddresses[0]?.emailAddress}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Member since</p>
                  <p className="font-medium">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <Button variant="outline" className="w-full glass">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Meeting Schedule Card */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 dark:text-white">
                  <CalendarClock className="w-5 h-5" />
                  <span>Meeting Time Scheduled</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Next Meeting</p>
                  <p className="font-medium text-lg">Not scheduled yet</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Pick a time that works best for your next session
                  </p>
                </div>
                <Link href="/community">
                  <Button className="w-full">
                    Schedule Meeting Time
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Activity Card */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 dark:text-white">
                  <Activity className="w-5 h-5" />
                  <span>Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Meetings Scheduled
                  </span>
                  <span className="font-bold text-primary">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Total Meeting Time
                  </span>
                  <span className="font-bold text-primary">0h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Upcoming This Week
                  </span>
                  <span className="font-bold text-primary">0</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Meetings Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Upcoming Meetings */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 dark:text-white">
                  <CalendarDays className="w-5 h-5" />
                  <span>Upcoming Meetings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 space-y-4">
                  <p className="text-muted-foreground">
                    No upcoming meetings scheduled yet
                  </p>
                  <Link href="/community">
                    <Button variant="outline" className="glass">
                      Choose a Meeting Time
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Meeting History */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 dark:text-white">
                  <Clock3 className="w-5 h-5" />
                  <span>Meeting History</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 space-y-4">
                  <p className="text-muted-foreground">
                    Your completed sessions will appear here
                  </p>
                  <Link href="/community">
                    <Button variant="outline" className="glass">
                      Schedule Your First Meeting
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
