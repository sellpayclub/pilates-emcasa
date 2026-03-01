import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-rose-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}
