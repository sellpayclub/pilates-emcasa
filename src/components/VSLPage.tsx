import React, { useState, useEffect } from 'react';
import { Check, Lock, ShieldCheck, Clock, Star, Play, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageCarousel } from './ImageCarousel';
import { resultImages } from '../data/images';

export function VSLPage() {
  const [showSalesContent, setShowSalesContent] = useState(false);
  const [headlineClicks, setHeadlineClicks] = useState(0);
  const DELAY_MS = 339000; // 5 minutes and 39 seconds = 339 seconds = 339000 ms

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSalesContent(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleHeadlineClick = () => {
    const newCount = headlineClicks + 1;
    setHeadlineClicks(newCount);
    if (newCount >= 3) {
      setShowSalesContent(true);
    }
  };

  // For debugging/testing, you might want to uncomment this to show content immediately
  // useEffect(() => setShowSalesContent(true), []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Header / VSL Section */}
      <div className="bg-white py-8 px-4 md:py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 
              onClick={handleHeadlineClick}
              className="text-2xl md:text-4xl font-black text-gray-900 uppercase leading-tight tracking-tight cursor-pointer select-none"
            >
              ASSISTA ESSE VÍDEO RÁPIDO PARA LIBERAR SEU PROTOCOLO
            </h1>
            <p className="text-lg md:text-xl text-rose-600 font-bold">
              E ELIMINE 2KG POR SEMANA COM PILATES EM CASA
            </p>
          </div>
          
          {/* Video Player */}
          <div className="w-full max-w-[400px] mx-auto shadow-2xl rounded-2xl overflow-hidden bg-black">
             <div id="ifr_69a31a47c9fe517b6f6ebd2b_wrapper" style={{ margin: '0 auto', width: '100%' }}>
                <div style={{ position: 'relative', padding: '178.21782178217822% 0 0 0' }} id="ifr_69a31a47c9fe517b6f6ebd2b_aspect">
                  <iframe 
                    frameBorder="0" 
                    allowFullScreen 
                    src="https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69a31a47c9fe517b6f6ebd2b/v4/embed.html" 
                    id="ifr_69a31a47c9fe517b6f6ebd2b" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    referrerPolicy="origin"
                  ></iframe>
                </div>
              </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Lock className="w-4 h-4 text-green-600" />
            <span className="font-medium">Você está em um ambiente seguro</span>
          </div>
        </div>
      </div>

      {/* Delayed Sales Content */}
      <AnimatePresence>
        {showSalesContent && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 py-12 space-y-20"
          >
            
            {/* CTA Button 1 */}
            <div className="text-center animate-pulse">
              <a href="https://pay.lowify.com.br/checkout.php?product_id=F8txTo" className="block w-full md:w-auto mx-auto">
                <button className="bg-green-600 hover:bg-green-700 text-white text-xl md:text-2xl font-black py-6 px-10 rounded-2xl shadow-xl transform transition hover:scale-105 w-full uppercase tracking-wide">
                  PARTICIPAR DO PILATES EM CASA
                </button>
              </a>
            </div>

            {/* Testimonials Carousel */}
            <section className="space-y-10">
              <h2 className="text-2xl md:text-3xl font-black text-center text-gray-900 uppercase tracking-tight">
                ALGUMAS ALUNAS QUE ELIMINARAM <span className="text-rose-600">2KG POR SEMANA</span> COM PILATES EM CASA
              </h2>
              
              <div className="-mx-4 md:-mx-8">
                <ImageCarousel images={resultImages} />
              </div>
            </section>

            {/* Offer Section */}
            <section className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600"></div>
              
              <div className="p-8 md:p-12 text-center space-y-8">
                <div className="inline-block bg-rose-100 text-rose-700 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
                  Oferta Especial Limitada
                </div>

                <div className="space-y-4">
                  <p className="text-gray-400 line-through text-xl font-medium">DE R$679,00</p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    <div className="bg-green-100 text-green-700 text-sm font-black px-3 py-1 rounded-lg uppercase tracking-wide transform -rotate-2">
                      90% de Desconto
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl text-gray-600 font-medium">Por apenas</span>
                      <span className="text-6xl md:text-7xl font-black text-gray-900 tracking-tighter">R$67</span>
                    </div>
                  </div>
                  <p className="text-gray-500 font-medium">Pagamento único • Acesso imediato</p>
                </div>

                <a href="https://pay.lowify.com.br/checkout.php?product_id=F8txTo" className="block w-full">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-6 px-8 rounded-2xl shadow-xl transform transition hover:scale-[1.02] uppercase tracking-wide">
                    QUERO APROVEITAR O DESCONTO
                  </button>
                </a>

                <div className="text-left space-y-6 pt-10 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 text-xl mb-6 text-center md:text-left">O QUE VOCÊ VAI RECEBER:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "12 meses de acesso ao APP",
                      "Pagamento único (sem mensalidade)",
                      "Treinos de 10 minutos sem impacto",
                      "Alimentação prática e deliciosa",
                      "Suporte VIP no WhatsApp",
                      "Acesso ao aplicativo exclusivo",
                      "Comunidade de alunas"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                        <div className="bg-green-100 p-1 rounded-full shrink-0">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Bonuses */}
            <section className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-black text-center text-gray-900 uppercase tracking-tight">
                PRESENTES EXCLUSIVOS PARA VOCÊ 🎁
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-rose-600 text-xl mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎁</span> GUIA DE COMPRAS
                  </h3>
                  <p className="text-gray-600 leading-relaxed">Aprenda a escolher os alimentos certos no mercado e economize dinheiro enquanto elimina até 2kg por semana de forma saudável.</p>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-rose-600 text-xl mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎁</span> FIM DO COMER EMOCIONAL
                  </h3>
                  <p className="text-gray-600 leading-relaxed">Quebre o ciclo da ansiedade e descubra técnicas simples para parar de descontar suas emoções na comida.</p>
                </div>
              </div>
            </section>

            {/* Guarantee */}
            <section className="bg-white border border-gray-200 p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-green-50 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-rose-50 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <ShieldCheck className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-4">GARANTIA BLINDADA DE 7 DIAS</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Você pode entrar e testar tudo por 7 dias. Se não gostar dos treinos, do suporte ou até mesmo da cor do aplicativo, é só pedir seu dinheiro de volta.
                  <br/><br/>
                  <span className="font-bold text-gray-900">O risco é todo nosso.</span>
                </p>
              </div>
            </section>

            {/* Final CTA */}
            <div className="text-center space-y-6">
               <a href="https://pay.lowify.com.br/checkout.php?product_id=F8txTo" className="block w-full md:w-auto mx-auto">
                   <button className="w-full bg-green-600 hover:bg-green-700 text-white text-2xl font-black py-6 px-12 rounded-2xl shadow-2xl transform transition hover:scale-105 uppercase tracking-wide">
                      QUERO COMEÇAR AGORA
                   </button>
               </a>
               <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
                 <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-green-600"/> Compra 100% Segura</span>
                 <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-600"/> Garantia de 7 dias</span>
                 <span className="flex items-center gap-2"><Star className="w-4 h-4 text-green-600"/> Acesso Imediato</span>
               </div>
            </div>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto space-y-6 pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-black text-center text-gray-900 mb-8 uppercase">PERGUNTAS FREQUENTES</h2>
              {[
                { q: "Estou sedentária, posso fazer?", a: "Sim! Os treinos são projetados para iniciantes e avançam gradualmente. Cada aluna vai no seu próprio ritmo." },
                { q: "Quanto tempo dura os treinos?", a: "Apenas 10 minutos por dia. É o tempo ideal para ativar seu metabolismo sem sobrecarregar seu corpo." },
                { q: "Tem vídeos dos exercícios?", a: "Sim, todas as aulas são em vídeo guiado passo a passo pela professora, como se ela estivesse na sua sala." },
                { q: "Aonde vou receber?", a: "Você receberá o acesso ao nosso aplicativo exclusivo por e-mail imediatamente após a confirmação do pagamento." },
                { q: "A alimentação é restritiva?", a: "Não! Focamos em reeducação alimentar com alimentos simples que você já tem em casa. Nada de dietas malucas." },
                { q: "Preciso de equipamentos?", a: "Não, você usa apenas o peso do corpo e, ocasionalmente, itens domésticos como uma cadeira ou garrafa d'água." }
              ].map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 group overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-800 list-none hover:bg-gray-50 transition-colors">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-gray-50/50">
                    {faq.a}
                  </div>
                </details>
              ))}
            </section>

            <footer className="text-center text-gray-400 text-sm py-12 border-t border-gray-100 mt-12">
              <p className="font-medium">© 2025 Pilates em Casa. Todos os direitos reservados.</p>
              <p className="mt-2 text-xs">Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma.</p>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
