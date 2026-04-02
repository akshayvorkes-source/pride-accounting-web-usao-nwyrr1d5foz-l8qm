import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Trusted Mauritius Accounting Firm
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Accounting & Bookkeeping Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">You Can Trust.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            Empowering businesses with precision accounting, tax compliance, and payroll management from the strategic hub of Mauritius.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button className="btn-emerald h-14 px-8 text-lg group w-full sm:w-auto">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm w-full sm:w-auto">
                Speak to an Expert
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block w-1/2 h-[600px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full h-full"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[400px] glass-panel rounded-3xl rotate-[-6deg] flex flex-col justify-between p-8">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <div className="h-6 w-6 rounded bg-emerald-500" />
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs">Financial Health</p>
                <p className="text-white font-bold text-xl">+24.5%</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5, delay: 1 }} className="h-full bg-emerald-500" />
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ duration: 1.5, delay: 1.2 }} className="h-full bg-teal-500" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 right-20 w-[350px] h-[250px] glass-panel rounded-3xl rotate-[4deg] p-6">
            <div className="flex items-center gap-4 mb-6">
               <div className="h-10 w-10 rounded-full bg-slate-700 animate-pulse" />
               <div>
                 <div className="h-3 w-32 bg-slate-700 rounded mb-2" />
                 <div className="h-2 w-20 bg-slate-800 rounded" />
               </div>
            </div>
            <div className="space-y-3">
              {[1,2,3].map(i => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                  <div className="h-2 w-24 bg-white/5 rounded" />
                  <ChevronRight className="h-4 w-4 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}