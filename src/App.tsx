import React, { useState } from 'react';
import { quizSteps, type Question, type Option } from './data/quizData';
import { ProgressBar } from './components/ProgressBar';
import { AnalysisScreen } from './components/AnalysisScreen';
import { DiagnosisResult } from './components/DiagnosisResult';
import { PotentialResult } from './components/PotentialResult';
import { TestimonialInterstitial } from './components/TestimonialInterstitial';
import { VSLPage } from './components/VSLPage';
import { ScaleInput } from './components/ScaleInput';
import { ImageCarousel } from './components/ImageCarousel';
import { resultImages } from './data/images';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Initialize default values for scales if not set
  if (!answers['current_weight']) answers['current_weight'] = 70.0;
  if (!answers['height']) answers['height'] = 1.65;

  const currentStep = quizSteps[currentStepIndex];
  const isLastStep = currentStepIndex === quizSteps.length - 1;

  const handleNext = () => {
    if (currentStepIndex < quizSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleOptionSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentStep.id]: optionId }));
    
    // Auto advance for single select questions
    if (currentStep.type === 'single') {
      handleNext();
    }
  };

  const handleMultiSelect = (optionId: string) => {
    const currentSelected = (answers[currentStep.id] as string[]) || [];
    const newSelected = currentSelected.includes(optionId)
      ? currentSelected.filter(id => id !== optionId)
      : [...currentSelected, optionId];
    
    setAnswers(prev => ({ ...prev, [currentStep.id]: newSelected }));
  };

  const handleInput = (value: string | number) => {
    setAnswers(prev => ({ ...prev, [currentStep.id]: value }));
  };

  // Handle Analysis Steps
  React.useEffect(() => {
    if (currentStep.type === 'analysis') {
      const timer = setTimeout(() => {
        handleNext();
      }, currentStep.delay || 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex]);

  // Render different screen types
  if (currentStep.id === 'vsl') {
    return <VSLPage />;
  }

  if (currentStep.type === 'analysis') {
    return <AnalysisScreen text={currentStep.question || 'Analisando...'} />;
  }

  if (currentStep.id === 'result_hormonal') {
    return <DiagnosisResult onContinue={handleNext} />;
  }

  if (currentStep.id === 'result_potential') {
    return <PotentialResult onContinue={handleNext} />;
  }

  if (currentStep.id === 'testimonial_1') {
    return <TestimonialInterstitial onContinue={handleNext} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4 font-sans overflow-x-hidden">
      {/* Header */}
      <div className="w-full max-w-md mb-6 flex justify-center items-center">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
             <span className="text-white font-bold text-lg">P</span>
           </div>
           <span className="text-xl font-black text-gray-800 tracking-tight">
             PILATES <span className="text-rose-500">EM CASA</span>
           </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-8">
        <ProgressBar current={currentStepIndex + 1} total={quizSteps.length} />
      </div>

      {/* Question Card */}
      <motion.div 
        key={currentStep.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
      >
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
          {currentStep.id === 'start' ? (
            <>
              ELIMINE <span className="text-rose-600">2KG POR SEMANA</span> E TONIFIQUE OS MÚSCULOS NA MENOPAUSA COM APENAS 10 MINUTOS POR DIA DE PILATES EM CASA
            </>
          ) : (
            currentStep.question
          )}
        </h1>

        {currentStep.id === 'start' && (
          <div className="mb-6 -mx-6 md:-mx-8">
            <ImageCarousel images={resultImages} />
          </div>
        )}

        {currentStep.image && currentStep.id !== 'start' && (
          <div className="mb-6 rounded-xl overflow-hidden shadow-md">
            <img 
              src={currentStep.image} 
              alt="Quiz illustration" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        
        {currentStep.subtitle && (
          <p className="text-gray-500 mb-6 text-sm">{currentStep.subtitle}</p>
        )}

        <div className="space-y-3 mt-6">
          {/* Single Select Options */}
          {currentStep.type === 'single' && currentStep.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-rose-500 hover:bg-rose-50 transition-all duration-200 flex items-center gap-3 group"
            >
              {option.icon && <span className="text-2xl shrink-0">{typeof option.icon === 'string' ? option.icon : <option.icon className="w-6 h-6" />}</span>}
              <span className="font-medium text-gray-700 group-hover:text-rose-700">{option.label}</span>
              <div className="ml-auto w-5 h-5 shrink-0 rounded-full border border-gray-300 group-hover:border-rose-500 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}

          {/* Multi Select Options */}
          {currentStep.type === 'multi' && currentStep.options?.map((option) => {
            const isSelected = (answers[currentStep.id] as string[])?.includes(option.id);
            return (
              <button
                key={option.id}
                onClick={() => handleMultiSelect(option.id)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3",
                  isSelected 
                    ? "border-rose-500 bg-rose-50" 
                    : "border-gray-200 hover:border-rose-300"
                )}
              >
                {option.icon && <span className="text-2xl shrink-0">{typeof option.icon === 'string' ? option.icon : <option.icon className="w-6 h-6" />}</span>}
                <span className={cn("font-medium", isSelected ? "text-rose-700" : "text-gray-700")}>{option.label}</span>
                <div className={cn(
                  "ml-auto w-5 h-5 shrink-0 rounded border flex items-center justify-center transition-colors",
                  isSelected ? "bg-rose-500 border-rose-500" : "border-gray-300"
                )}>
                  {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                </div>
              </button>
            );
          })}

          {/* Input Type - Scale */}
          {currentStep.id === 'current_weight' && (
             <ScaleInput 
               value={answers['current_weight']} 
               onChange={handleInput} 
               min={40} 
               max={150} 
               unit="kg" 
               label="Arraste para selecionar seu peso"
             />
          )}

          {currentStep.id === 'height' && (
             <ScaleInput 
               value={answers['height']} 
               onChange={handleInput} 
               min={1.40} 
               max={2.00} 
               step={0.01}
               unit="m" 
               label="Arraste para selecionar sua altura"
             />
          )}

          {/* Input Type - Text (Fallback) */}
          {currentStep.type === 'input' && currentStep.id !== 'current_weight' && currentStep.id !== 'height' && (
            <div className="space-y-4">
              <input
                type={currentStep.inputType || 'text'}
                placeholder={currentStep.inputPlaceholder}
                className="w-full p-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                onChange={(e) => handleInput(e.target.value)}
                value={answers[currentStep.id] || ''}
                autoFocus
              />
            </div>
          )}

          {/* Navigation Button for Multi/Input/Info */}
          {(currentStep.type === 'multi' || currentStep.type === 'input' || currentStep.type === 'info') && (
            <button
              onClick={handleNext}
              disabled={currentStep.type !== 'info' && (!answers[currentStep.id] && answers[currentStep.id] !== 0)}
              className="w-full mt-6 bg-rose-600 hover:bg-rose-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {currentStep.nextLabel || 'Continuar'}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Start Screen Footer */}
        {currentStep.id === 'start' && (
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 py-2 rounded-lg">
            <Clock className="w-4 h-4" />
            <span>TEMPO ESTIMADO: 49 SEGUNDOS</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
