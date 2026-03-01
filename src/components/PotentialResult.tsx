import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PotentialResultProps {
  onContinue: () => void;
}

export function PotentialResult({ onContinue }: PotentialResultProps) {
  return (
    <div className="space-y-8 p-4 max-w-2xl mx-auto text-center">
      <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-green-800 mb-2">PARABÉNS!</h2>
        <p className="text-green-700 font-medium">SEU TESTE IDENTIFICOU UM BOM POTENCIAL DE EMAGRECIMENTO</p>
      </div>

      <p className="text-gray-700 text-lg">
        Com base nas suas respostas você pode eliminar <span className="font-bold text-rose-600">2 kg por semana</span>, após ativar a reposição natural hormonal.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-6">Sua estimativa de emagrecimento</h3>
        
        <div className="relative pt-8 pb-4 px-4">
          {/* Scale Line */}
          <div className="h-2 bg-gray-200 rounded-full w-full relative">
             {/* Markers */}
             <div className="absolute top-0 left-0 w-full h-full flex justify-between px-[10%]">
                <div className="w-0.5 h-4 bg-gray-300 -mt-1"></div>
                <div className="w-0.5 h-4 bg-gray-300 -mt-1"></div>
                <div className="w-0.5 h-4 bg-gray-300 -mt-1"></div>
             </div>
          </div>
          
          {/* Labels */}
          <div className="flex justify-between mt-2 text-xs text-gray-500 px-[5%]">
             <span>1.0kg/sem</span>
             <span>1.5kg/sem</span>
             <span>2.0kg/sem</span>
          </div>

          {/* Indicator */}
          <div className="absolute top-0 right-[5%] -translate-x-1/2 flex flex-col items-center">
            <div className="bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded mb-1 whitespace-nowrap">
              Você está aqui
            </div>
            <div className="w-4 h-4 bg-rose-600 rotate-45 transform translate-y-1"></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Resultados Reais</h3>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <img src="https://media.inlead.cloud/uploads/1310/2025-11-01/lg-B0A3g-copia-de-copia-de-copia-de-copia-de-5kg-em-30-dias-2.jpg" alt="Resultado 1" className="w-full h-auto rounded-lg shadow-sm border border-gray-100" referrerPolicy="no-referrer" />
          <img src="https://media.inlead.cloud/uploads/1310/2025-11-01/lg-AUzXq-copia-de-copia-de-copia-de-copia-de-copia-de-5kg-em-30-dias-1.jpg" alt="Resultado 2" className="w-full h-auto rounded-lg shadow-sm border border-gray-100" referrerPolicy="no-referrer" />
          <img src="https://media.inlead.cloud/uploads/1310/2025-11-01/lg-COLI8-copia-de-copia-de-5kg-em-30-dias-1.jpg" alt="Resultado 3" className="w-full h-auto rounded-lg shadow-sm border border-gray-100" referrerPolicy="no-referrer" />
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-bold text-gray-900">VOCÊ DESEJA ELIMINAR 2 KG POR SEMANA?</h3>
        <button 
          onClick={onContinue}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 uppercase"
        >
          SIM, PRECISO MUITO
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
