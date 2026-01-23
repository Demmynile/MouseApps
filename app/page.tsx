import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Journey from '@/components/Journey';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Journey />
      <Projects />
      <Community />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
