import React from 'react';
import { motion } from 'framer-motion';
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0B1120]">
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] animate-blob"
      />
      <motion.div 
        className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[150px] animate-blob animation-delay-2000"
      />
      <motion.div 
        className="absolute bottom-[-10%] left-[20%] w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[130px] animate-blob animation-delay-4000"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />
    </div>
  );
}