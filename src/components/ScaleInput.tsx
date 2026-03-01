import React from 'react';
import { motion } from 'motion/react';

interface ScaleInputProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit: string;
  label: string;
}

export function ScaleInput({ value, onChange, min, max, step = 0.1, unit, label }: ScaleInputProps) {
  return (
    <div className="w-full space-y-6 py-4">
      <div className="text-center space-y-2">
        <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</label>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-black text-rose-600">
            {value.toFixed(step < 1 ? 1 : 0)}
          </span>
          <span className="text-xl font-bold text-gray-400">{unit}</span>
        </div>
      </div>

      <div className="relative w-full h-12 flex items-center">
        {/* Track */}
        <div className="absolute w-full h-2 bg-gray-100 rounded-full overflow-hidden">
           <div 
             className="h-full bg-rose-200" 
             style={{ width: `${((value - min) / (max - min)) * 100}%` }}
           />
        </div>

        {/* Slider Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer z-20"
        />

        {/* Custom Thumb (Visual only, follows position) */}
        <motion.div
          className="absolute h-8 w-8 bg-white border-4 border-rose-500 rounded-full shadow-lg z-10 pointer-events-none flex items-center justify-center"
          style={{ 
            left: `calc(${((value - min) / (max - min)) * 100}% - 16px)` 
          }}
        >
          <div className="w-2 h-2 bg-rose-500 rounded-full" />
        </motion.div>
      </div>

      <div className="flex justify-between text-xs text-gray-400 font-medium px-1">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}
