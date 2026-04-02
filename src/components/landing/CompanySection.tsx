import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { CheckCircle2 } from 'lucide-react';
export function CompanySection() {
  const approachPoints = [
    'Real-time financial visibility through cloud accounting.',
    'Proactive tax advice tailored to your growth phase in Mauritius.',
    'Dedicated account managers based locally in Rose Hill.',
    'Seamless integration with your existing Mauritius business tools.'
  ];
  return (
    <section className="py-24">
      {/* Our Approach */}
      <div id="approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">A Modern Approach to Local Excellence</h2>
            <div className="space-y-6">
              {approachPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-1" />
                  <p className="text-lg text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
              <GlassCard className="relative p-0 overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop"
                  alt="Modern accounting office"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent" />
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}