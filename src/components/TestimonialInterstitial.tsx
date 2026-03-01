import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

interface TestimonialInterstitialProps {
  onContinue: () => void;
}

export function TestimonialInterstitial({ onContinue }: TestimonialInterstitialProps) {
  return (
    <div className="space-y-6 p-4 max-w-2xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">Sua meta é super possível de alcançar</h2>
        <p className="text-gray-600">em menos tempo que você imagina.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 text-rose-100">
          <Quote size={120} />
        </div>
        
        <div className="relative z-10 space-y-6">
          <div className="w-full aspect-[3/4] md:aspect-square rounded-xl overflow-hidden border-2 border-rose-100 shadow-sm">
            <img 
              src="https://media.inlead.cloud/uploads/1310/2025-10-23/lg-V4gQd-img-8173-7.jpg" 
              alt="Carol Fonseca" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-gray-900 text-lg">Carol Fonseca</h3>
              <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full font-bold">Verificado</span>
            </div>
            <p className="text-gray-700 italic leading-relaxed text-lg">
              "Depois da gestação e após os 40 anos, meu corpo não respondia. No desafio eu eliminei 10kg nos primeiros 2 meses."
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <p className="text-center text-sm text-gray-500 mb-4">Na próxima etapa você irá descobrir o que está travando seus resultados</p>
        <button 
          onClick={onContinue}
          className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          CONTINUAR TESTE GRATUITO
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
