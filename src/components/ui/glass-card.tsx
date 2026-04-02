import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function GlassCard({ children, className, delay = 0, ...props }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.2)'
      }}
      className={cn(
        "glass-panel rounded-2xl p-6 transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}