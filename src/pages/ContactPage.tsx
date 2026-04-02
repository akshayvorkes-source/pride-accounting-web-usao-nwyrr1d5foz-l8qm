import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShieldCheck, Clock, Send, MapPin, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';
export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Consultation request received! We'll contact you shortly.");
    }, 1500);
  };
  return (
    <main className="relative min-h-screen bg-[#0B1120] text-slate-50 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Scale Your Business with <span className="text-emerald-500">Expert Guidance</span></h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Based in Mauritius, our experts are ready to streamline your financial operations with specialized local knowledge and global standards.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <GlassCard className="p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold">Confidentiality</p>
                  <p className="text-xs text-slate-400">100% Secure Data</p>
                </div>
              </GlassCard>
              <GlassCard className="p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold">Availability</p>
                  <p className="text-xs text-slate-400">Rose Hill HQ</p>
                </div>
              </GlassCard>
            </div>
            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <p className="text-slate-300 text-sm">41 Avenue Taher, Beau Bassin-Rose Hill, Mauritius</p>
                  <p className="text-slate-500 text-[10px] font-mono mt-1">PLUS CODE: QF26+PH</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span className="text-slate-300 text-sm">contact@prideaccounting.mu</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-emerald-500" />
                <span className="text-slate-300 text-sm">+230 5938 7068</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="bg-white/5 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Business Name</Label>
                    <Input id="company" placeholder="Acme Corp" required className="bg-white/5 border-white/10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required className="bg-white/5 border-white/10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Jurisdiction</Label>
                    <Select defaultValue="mauritius">
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mauritius">Mauritius</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Service of Interest</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="accounting">Accounting</SelectItem>
                        <SelectItem value="tax">Tax Compliance</SelectItem>
                        <SelectItem value="payroll">Payroll</SelectItem>
                        <SelectItem value="audit">Audit Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" placeholder="Tell us about your business needs..." className="min-h-[120px] bg-white/5 border-white/10" />
                </div>
                <Button type="submit" className="w-full btn-emerald h-12" disabled={isSubmitting}>
                  {isSubmitting ? "Sending Request..." : "Book Strategy Session"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-[10px] text-center text-slate-500">
                  By submitting, you agree to our privacy policy and terms.
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}