import React from 'react';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Shield, Zap, Landmark, BarChart3, Receipt, Users, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function ServicesPage() {
  const deepDives = [
    {
      id: 'accounting',
      title: 'Outsourced Accounting & Bookkeeping',
      icon: BarChart3,
      description: 'Accurate, audit-ready financial records managed by Mauritius experts.',
      benefits: ['Real-time daily bookkeeping', 'Monthly management accounts', 'Annual financial statements', 'Audit preparation & coordination'],
      process: ['Discovery Call', 'System Integration', 'Daily Operations', 'Monthly Review']
    },
    {
      id: 'tax',
      title: 'Tax Compliance & Statutory Reporting',
      icon: Shield,
      description: 'Navigating complex MRA regulations in Mauritius.',
      benefits: ['Corporate income tax filing', 'VAT returns', 'Withholding tax management', 'Tax planning'],
      process: ['Compliance Audit', 'Tax Strategy', 'Periodic Filing', 'Optimization']
    },
    {
      id: 'payroll',
      title: 'Payroll Management',
      icon: Users,
      description: 'Seamless payroll processing for teams in Mauritius.',
      benefits: ['Local currency processing', 'Statutory deductions (PAYE, CSG)', 'Employee self-service portals', 'HR tool integrations'],
      process: ['Employee Setup', 'Monthly Run', 'Direct Deposits', 'Compliance Reporting']
    }
  ];
  const packages = [
    { name: 'Starter', price: '$299', features: ['Monthly Bookkeeping', 'VAT Returns', 'Standard Reporting', 'Email Support'] },
    { name: 'Growth', price: '$799', features: ['Weekly Bookkeeping', 'Management Accounts', 'Payroll (up to 10)', 'Strategy Sessions'] },
    { name: 'Enterprise', price: 'Custom', features: ['Daily Reconciliation', 'Full CFO Services', 'MRA Tax Compliance', 'Dedicated Manager'] }
  ];
  return (
    <main className="relative min-h-screen bg-[#0B1120] text-slate-50 overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-24">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Our Specialized <span className="text-emerald-500">Expertise</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto"
            >
              Precision-engineered financial solutions for enterprises operating in Mauritius.
            </motion.p>
          </section>
          {/* Deep Dives */}
          <section className="space-y-32 mb-32">
            {deepDives.map((service, idx) => (
              <div 
                key={service.id} 
                id={service.id} 
                className={`flex flex-col lg:flex-row gap-16 items-center scroll-mt-32 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-8">
                  <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                  <p className="text-lg text-slate-400">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-8">
                    <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-emerald-500" />
                      Implementation Process
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {service.process.map((step, i) => (
                        <div key={step} className="flex items-center">
                          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-slate-300">
                            {i + 1}. {step}
                          </div>
                          {i < service.process.length - 1 && <div className="hidden sm:block w-4 h-[1px] bg-white/20 mx-2" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <GlassCard className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-emerald-500/5 to-transparent">
                     <service.icon className="h-32 w-32 text-emerald-500/20" />
                  </GlassCard>
                </div>
              </div>
            ))}
          </section>
          {/* Pricing/Packages */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Service Packages</h2>
              <p className="text-slate-400">Tailored plans to suit your business stage.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <GlassCard key={pkg.name} className="flex flex-col text-center p-10">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-emerald-500 mb-8">{pkg.price}<span className="text-sm text-slate-400 font-normal">/mo</span></div>
                  <div className="space-y-4 mb-10 text-left flex-1">
                    {pkg.features.map(f => (
                      <div key={f} className="flex items-center gap-3 text-slate-400 text-sm">
                        <Check className="h-4 w-4 text-emerald-500" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className={pkg.name === 'Growth' ? 'btn-emerald w-full' : 'bg-white/10 hover:bg-white/20 text-white w-full'}>
                      Get Started
                    </Button>
                  </Link>
                </GlassCard>
              ))}
            </div>
          </section>
          {/* FAQs */}
          <section className="max-w-3xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="glass-panel px-6 rounded-xl border-none">
                <AccordionTrigger className="text-white hover:no-underline">How do you handle Mauritius specific compliance?</AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Our core team is based in Beau Bassin-Rose Hill. We handle all MRA filings, CSG/PAYE, and ensure compliance with the Companies Act 2001 and subsequent amendments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="glass-panel px-6 rounded-xl border-none">
                <AccordionTrigger className="text-white hover:no-underline">What cloud accounting software do you use?</AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  We are certified partners with Xero, QuickBooks Online, and Sage. We also integrate with modern payroll tools for Mauritius businesses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="glass-panel px-6 rounded-xl border-none">
                <AccordionTrigger className="text-white hover:no-underline">Are you available for in-person meetings?</AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Yes, our primary headquarters is at 41 Avenue Taher, Beau Bassin-Rose Hill. We welcome local clients for strategy sessions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}