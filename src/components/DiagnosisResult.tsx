import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { motion } from 'motion/react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

interface DiagnosisResultProps {
  onContinue: () => void;
}

export function DiagnosisResult({ onContinue }: DiagnosisResultProps) {
  const metabolismData = [
    { name: 'Used', value: 27 },
    { name: 'Unused', value: 73 },
  ];
  const COLORS = ['#f43f5e', '#e5e7eb']; // Rose-500, Gray-200

  return (
    <div className="space-y-8 p-4 max-w-2xl mx-auto">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
          <div>
            <h3 className="text-lg font-bold text-yellow-800">CAUSA RAIZ IDENTIFICADA</h3>
            <p className="text-yellow-700 font-semibold">SEU PROBLEMA É: BAIXA HORMONAL</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">1. Seu metabolismo está trabalhando em apenas 27% da sua capacidade:</h4>
        <div className="h-48 relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={metabolismData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {metabolismData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-rose-500">27%</span>
            <span className="text-xs text-gray-500">Capacidade</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2 px-8">
          <span>Lento</span>
          <span className="font-bold text-rose-500">Você está aqui</span>
          <span>Acelerado</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">2. Seus hormônios estão em baixa, aproximadamente apenas 32% da produção máxima.</h4>
        <div className="space-y-4">
            <div className="relative pt-6 pb-2">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-rose-600 bg-rose-200">
                            Nível Hormonal
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-rose-600">
                            32%
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-rose-200">
                    <div style={{ width: "32%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-rose-500"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                    <span>Baixa Hormonal</span>
                    <span>Mínimo Ideal</span>
                    <span>Alta Hormonal</span>
                </div>
            </div>
        </div>
      </div>

      <div className="bg-rose-50 p-6 rounded-xl text-center space-y-4">
        <h3 className="text-xl font-bold text-rose-900">Mas isso tem solução!</h3>
        <p className="text-rose-800">Você precisa ativar a <span className="font-black">REPOSIÇÃO HORMONAL NATURAL</span></p>
        <p className="text-sm text-rose-700">AGORA É HORA DE PERSONALIZAR A SOLUÇÃO PARA VOCÊ 👇🏽</p>
        
        <button 
          onClick={onContinue}
          className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          CONTINUAR PARA SOLUÇÃO
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
