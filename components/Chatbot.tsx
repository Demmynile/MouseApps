'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m here to help you learn about MouseApps and our services. Ask me anything about what we do!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const response = getResponse(userMessage);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const getResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('service') || lowerQuestion.includes('what do you do')) {
      return 'We offer expert consulting in Data Science, Software Engineering, Cloud Deployment, and Security. We help businesses transform their digital infrastructure with cutting-edge solutions.';
    } else if (lowerQuestion.includes('data') || lowerQuestion.includes('analytics')) {
      return 'Our Data Science services include analytics dashboards, predictive modeling, ETL pipelines, and data visualization. We process millions of transactions daily and deliver actionable insights.';
    } else if (lowerQuestion.includes('cloud') || lowerQuestion.includes('deployment')) {
      return 'We provide cloud deployment solutions using AWS, Azure, and GCP. Our services include containerization with Docker/Kubernetes, CI/CD pipelines, and infrastructure automation.';
    } else if (lowerQuestion.includes('security') || lowerQuestion.includes('secure')) {
      return 'Security is our priority. We offer penetration testing, vulnerability assessments, secure architecture design, and compliance consulting to keep your systems safe.';
    } else if (lowerQuestion.includes('community') || lowerQuestion.includes('learn')) {
      return 'Join our thriving tech community with 10K+ members! We offer tutorials, workshops, networking events, and access to our LMS platform for continuous learning.';
    } else if (lowerQuestion.includes('project') || lowerQuestion.includes('work')) {
      return 'We\'ve delivered 500+ projects for 250+ happy clients, including predictive maintenance systems, computer vision platforms, AI chatbots, and scalable microservices with 99.9% uptime.';
    } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('meeting') || lowerQuestion.includes('consultation')) {
      return 'You can schedule a free 30-minute consultation through our Calendly widget in the contact section, or reach out directly through our contact form!';
    } else {
      return 'I can help you learn about our services in Data Science, Software Engineering, Cloud Deployment, and Security. We also have a thriving tech community you can join. What would you like to know more about?';
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-16 h-16 rounded-full shadow-2xl bg-gradient-to-br from-primary to-accent hover:scale-110 transition-transform"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-50 w-[90vw] sm:w-96 max-h-[600px]"
          >
            <Card className="glass-strong border-border/50 shadow-[0_20px_80px_rgba(0,0,0,0.5)] bg-background/95 backdrop-blur-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary/20 to-accent/20 border-b border-border/50 shadow-lg">
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span>MouseApps Assistant</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4 flex flex-col h-[400px] bg-background/95">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-hide">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg'
                            : 'glass-card border border-border/50 dark:bg-card dark:text-foreground bg-background/80 shadow-md'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="glass-card border border-border/50 px-4 py-2 rounded-2xl dark:bg-card bg-background/80">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="glass-card border-border/50 shadow-lg"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-br from-primary to-accent"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
