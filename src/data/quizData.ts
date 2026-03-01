import { type LucideIcon, Turtle, Flame, Frown, Coffee, AlertCircle, ThumbsDown, Smile, Home, Car, Battery, Thermometer, Zap, Angry, Utensils, Beer, Wine, Salad, ShoppingBag, Shirt, Heart, Activity } from 'lucide-react';
import React from 'react';

export type Option = {
  id: string;
  label: string;
  icon?: LucideIcon | string; // Can be a Lucide component or an emoji string
  value?: string;
};

export type Question = {
  id: string;
  type: 'single' | 'multi' | 'info' | 'input' | 'analysis' | 'result';
  question?: string;
  subtitle?: string;
  image?: string; // Added image property
  options?: Option[];
  inputType?: 'text' | 'number';
  inputPlaceholder?: string;
  nextLabel?: string;
  component?: React.ReactNode; // For custom interstitial components
  delay?: number; // For analysis screens
};

export const quizSteps: Question[] = [
  {
    id: 'start',
    type: 'single',
    question: 'ELIMINE 2KG POR SEMANA E TONIFIQUE OS MÚSCULOS NA MENOPAUSA COM APENAS 10 MINUTOS POR DIA DE PILATES EM CASA',
    image: 'https://media.inlead.cloud/uploads/1310/2026-02-27/lg-MSmjn-dia-01.png',
    subtitle: 'Desafio específico para sua idade e objetivo. Escolha uma opção abaixo:',
    options: [
      { id: '30-40', label: '30-40 anos' },
      { id: '41-50', label: '41-50 anos' },
      { id: '51-60', label: '51-60 anos' },
      { id: '61-70', label: '61-70 anos' },
    ],
    nextLabel: 'INICIAR TESTE GRATUITO'
  },
  {
    id: 'body_type',
    type: 'single',
    question: 'Como você classifica seu corpo hoje?',
    options: [
      { id: 'muito_acima', label: 'Muito acima do peso' },
      { id: 'pouco_acima', label: 'Um pouco acima do peso' },
      { id: 'falsa_magra', label: 'Falsa magra' },
      { id: 'magra', label: 'Magra' },
    ]
  },
  {
    id: 'metabolism',
    type: 'single',
    question: 'Como é seu metabolismo?',
    options: [
      { id: 'lento', label: 'Lento - Difícil para perder e fácil para ganhar peso', icon: '🐢' },
      { id: 'acelerado', label: 'Acelerado - Fácil de perder e difícil para ganhar peso', icon: '🔥' },
    ]
  },
  {
    id: 'weight_goal',
    type: 'single',
    question: 'Quantos quilos você gostaria de eliminar?',
    options: [
      { id: '0-5', label: '0-5kg' },
      { id: '6-10', label: '6-10kg' },
      { id: '11-15', label: '11-15kg' },
      { id: '16-20', label: '16-20kg' },
      { id: '21+', label: 'Mais de 21kg' },
    ]
  },
  {
    id: 'testimonial_1',
    type: 'info',
    question: 'Sua meta é super possível de alcançar, em menos tempo que você imagina.',
    subtitle: 'Olha esse exemplo real:',
    nextLabel: 'CONTINUAR TESTE GRATUITO'
  },
  {
    id: 'other_goals',
    type: 'multi',
    question: 'Além de emagrecer, quais são seus outros objetivos?',
    subtitle: 'Pode marcar vários:',
    options: [
      { id: 'barriga', label: 'Perder barriga/gordura localizada' },
      { id: 'flacidez', label: 'Melhorar flacidez' },
      { id: 'dores', label: 'Melhorar dores' },
      { id: 'disposicao', label: 'Mais disposição e energia' },
      { id: 'saude', label: 'Melhorar a saúde' },
    ],
    nextLabel: 'Continuar'
  },
  {
    id: 'desired_body',
    type: 'single',
    question: 'Qual é o corpo que você gostaria de ter?',
    options: [
      { id: 'bem_magro', label: 'Bem magro' },
      { id: 'pouco_magro', label: 'Um pouco mais magro' },
      { id: 'definido', label: 'Definido' },
    ]
  },
  {
    id: 'life_impact',
    type: 'multi',
    question: 'Como o seu peso tem impactado a sua vida?',
    subtitle: 'Pode escolher várias opções:',
    options: [
      { id: 'autoestima', label: 'Minha autoestima e confiança estão baixas', icon: '😟' },
      { id: 'cansaco', label: 'Me sinto cansada e com pouca disposição ao longo do dia', icon: '😴' },
      { id: 'saude_prob', label: 'Tenho problemas de saúde: Dores, pressão, exames alterados, etc…', icon: '😰' },
      { id: 'invisivel', label: 'Me sinto invísivel e pouco atraente', icon: '👎' },
    ],
    nextLabel: 'Continuar'
  },
  {
    id: 'body_response',
    type: 'single',
    question: 'Percebe que seu corpo não responde mesmo fazendo exercícios, dietas ou outras estratégias de emagrecimento?',
    options: [
      { id: 'nao_responde', label: 'Sim, meu corpo não responde', icon: '🥲' },
      { id: 'responde_lento', label: 'Mais ou menos, responde bem lento', icon: '🥺' },
    ]
  },
  {
    id: 'belly_fat',
    type: 'single',
    question: 'Você acumula gordura na barriga com facilidade? A famosa barriga da menopausa',
    options: [
      { id: 'sim_principal', label: 'Sim, é o principal lugar', icon: '😫' },
      { id: 'outros_locais', label: 'Acumulo mais em outros locais', icon: '😞' },
    ]
  },
  {
    id: 'analysis_1',
    type: 'analysis',
    question: 'Analisando suas respostas...',
    delay: 3000
  },
  {
    id: 'result_hormonal',
    type: 'result',
    question: '⚠️ CAUSA RAIZ IDENTIFICADA ⚠️',
    nextLabel: 'CONTINUAR PARA SOLUÇÃO'
  },
  {
    id: 'routine',
    type: 'single',
    question: 'Como é seu dia a dia?',
    options: [
      { id: 'fora', label: 'Trabalho fora e tenho uma rotina corrida', icon: '🚗' },
      { id: 'casa', label: 'Trabalho em casa e tenho uma rotina flexível', icon: '🏠' },
      { id: 'nao_trabalho', label: 'Atualmente não trabalho', icon: '😊' },
    ]
  },
  {
    id: 'current_weight',
    type: 'input',
    question: 'Qual seu peso atual (kg)?',
    inputType: 'number',
    inputPlaceholder: 'Ex: 70.5',
    nextLabel: 'Continuar'
  },
  {
    id: 'exercise_freq',
    type: 'single',
    question: 'Quantas vezes por semana você faz/pretende fazer exercícios?',
    options: [
      { id: '1-2', label: '1-2x na semana' },
      { id: '3-4', label: '3-4x na semana' },
      { id: '5+', label: '5x ou mais na semana' },
    ]
  },
  {
    id: 'menopause_symptoms',
    type: 'multi',
    question: 'Quais desses sintomas da menopausa vc sente?',
    subtitle: 'Pode escolher várias opções:',
    options: [
      { id: 'calorao', label: 'Calorão', icon: '🔥' },
      { id: 'cansaco', label: 'Cansaço e falta de energia', icon: '😴' },
      { id: 'dores', label: 'Dores no corpo', icon: '😰' },
      { id: 'irritabilidade', label: 'Irritabilidade/alteração do humor', icon: '😡' },
      { id: 'ansiedade', label: 'Ansiedade', icon: '😫' },
    ],
    nextLabel: 'Continuar'
  },
  {
    id: 'analysis_2',
    type: 'analysis',
    question: 'Calculando seu potencial metabólico...',
    delay: 3000
  },
  {
    id: 'result_potential',
    type: 'result',
    question: 'PARABÉNS, SEU TESTE IDENTIFICOU UM BOM POTENCIAL DE EMAGRECIMENTO',
    nextLabel: 'SIM, PRECISO MUITO'
  },
  {
    id: 'height',
    type: 'input',
    question: 'Qual sua altura (em metros)?',
    inputType: 'number',
    inputPlaceholder: 'Ex: 1.65',
    nextLabel: 'Continuar'
  },
  {
    id: 'eating_habits',
    type: 'multi',
    question: 'Como são seus hábitos alimentares atualmente?',
    subtitle: 'Pode escolher várias opções:',
    options: [
      { id: 'doces', label: 'Amo comer doces', icon: '🍫' },
      { id: 'praticidade', label: 'Prefiro práticidade e coisas do dia a dia', icon: '✅' },
      { id: 'saudavel', label: 'Tenho uma alimentação saudável', icon: '🥗' },
      { id: 'refrigerantes', label: 'Bebo refrigerantes', icon: '🥤' },
      { id: 'frituras', label: 'Gosto de frituras e coisas salgadas', icon: '🍟' },
      { id: 'alcool', label: 'Consumo bebidas alcoólicas', icon: '🍻' },
    ],
    nextLabel: 'Continuar'
  },
  {
    id: 'protocol_belief',
    type: 'single',
    question: 'Você acredita que um protocolo com treinos fáceis de 10 minutos, sem impacto e no conforto da sua casa, te ajudaria?',
    options: [
      { id: 'sim', label: 'Sim, é exatamente o que eu preciso', icon: '😀' },
      { id: 'teste', label: 'Vale o teste', icon: '💪🏽' },
    ]
  },
  {
    id: 'benefits',
    type: 'multi',
    question: 'Quais benefícios você quer ter ao emagrecer?',
    subtitle: 'Pode escolher várias opções:',
    options: [
      { id: 'bonita', label: 'Me sentir mais bonita e atraente', icon: '👙' },
      { id: 'roupa', label: 'Poder colocar uma roupa e ela vestir bem', icon: '👗' },
      { id: 'espelho', label: 'Olhar no espelho e se sentir bem comigo', icon: '🪞' },
      { id: 'elogios', label: 'Receber elogios das pessoas próximas', icon: '👏' },
      { id: 'energia', label: 'Ter energia e disposição', icon: '🏃‍♀️' },
    ],
    nextLabel: 'Continuar'
  },
  {
    id: 'commitment',
    type: 'single',
    question: 'Você está disposta a dedicar 10 minutos por dias nas próximas semanas para mudar sua realidade?',
    options: [
      { id: 'sim', label: 'Sim, preciso mudar', icon: '😀' },
      { id: 'tentar', label: 'Estou disposta a pelo menos tentar', icon: '🙏🏼' },
    ]
  },
  {
    id: 'analysis_3',
    type: 'analysis',
    question: 'Gerando seu protocolo personalizado...',
    delay: 4000
  },
  {
    id: 'vsl',
    type: 'result',
    question: 'Protocolo Gerado com Sucesso!',
  }
];
