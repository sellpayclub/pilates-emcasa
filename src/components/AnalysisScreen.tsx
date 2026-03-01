import React from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface AnalysisScreenProps {
  text: string;
}

export function AnalysisScreen({ text }: AnalysisScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="mb-8"
      >
        <Loader2 className="w-16 h-16 text-rose-500" />
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold text-gray-800"
      >
        {text}
      </motion.h2>
      <motion.div 
        className="mt-4 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Verificando respostas...
      </motion.div>
    </div>
  );
}
