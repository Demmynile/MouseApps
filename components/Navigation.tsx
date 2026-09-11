'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50' : 'bg-background/80 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-1">
            <div
              role="img"
              aria-label="MouseApps."
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
              MouseApps.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#services"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-white"
            >
              Services
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-white"
            >
              Community
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-white"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-white"
            >
              Contact
            </Link>
            <ThemeToggle />
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="outline">
                  Dashboard
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/#services"
              className="block px-3 py-2 rounded-lg text-foreground font-medium hover:bg-accent hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/community"
              className="block px-3 py-2 rounded-lg text-foreground font-medium hover:bg-accent hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/#about"
              className="block px-3 py-2 rounded-lg text-foreground font-medium hover:bg-accent hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 rounded-lg text-foreground font-medium hover:bg-accent hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <div className="flex items-center justify-center py-2">
                <ThemeToggle />
              </div>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Dashboard
                  </Button>
                </Link>
                <div className="flex items-center justify-center py-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
