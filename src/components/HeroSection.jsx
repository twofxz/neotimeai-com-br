import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import DataAtom from './DataAtom';

const sentence = "Nós Construímos a Sua Própria Força de Trabalho com Inteligência Artificial.";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.8 }
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505] py-32">
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      ></div>
      
      {/* Subtle Top Gradient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* Átomo de Dados 3D Modular (Procedural WebGL) */}
      <DataAtom />

      {/* Navigation */}
      <motion.nav 
        className="absolute top-0 left-0 right-0 h-24 flex justify-between items-center z-20 px-6 md:px-12 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex items-center gap-3 font-display font-semibold text-xl text-white">
          <img src="/NeoTime.png" alt="NeoTime AI Logo" className="h-8 w-auto rounded-full" />
          <span>NeoTime</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          <a href="#gargalo" className="text-gray-400 hover:text-white transition-colors text-sm">O Desafio</a>
          <a href="#solucao" className="text-gray-400 hover:text-white transition-colors text-sm">Agentes</a>
          <a href="#roi" className="text-gray-400 hover:text-white transition-colors text-sm">Análise de ROI</a>
        </div>

        <button 
          className="bg-white/[0.02] border border-white/[0.05] text-white px-6 py-2.5 rounded-xl text-sm font-medium backdrop-blur-xl hover:bg-white/[0.04] transition-colors"
          onClick={() => document.getElementById('auditoria').scrollIntoView({ behavior: 'smooth' })}
        >
          Solicitar Auditoria
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6 pt-16">
        <motion.div 
          className="inline-flex items-center gap-2 px-5 py-2 bg-white/[0.02] border border-white/[0.05] rounded-full text-gray-400 text-sm font-medium mb-12 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <span className="w-1.5 h-1.5 bg-[#4f86f7] rounded-full shadow-[0_0_8px_rgba(79,134,247,0.8)]"></span>
          SISTEMAS E AGENTES DE INTELIGÊNCIA ARTIFICIAL SOB MEDIDA
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-body font-medium tracking-tight leading-[1.1] mb-10 text-white"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.02, delayChildren: 0.4 } },
          }}
        >
          {sentence.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            )
          })}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          De agentes de vendas (SDRs) e atendimento a CRMs personalizados. Substitua o custo de operações manuais lentas e o aluguel de softwares genéricos por uma infraestrutura de IA 100% sua, projetada para maximizar o seu ROI.
        </motion.p>
        
        <motion.div 
          className="relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button 
            className="bg-white text-black px-8 py-4 rounded-full text-base font-semibold flex items-center gap-3 transition-all duration-500 hover:scale-[1.02] hover:bg-white/90 shadow-[inset_0_-2px_0_rgba(0,0,0,0.1),0_10px_40px_rgba(255,255,255,0.1)]"
            onClick={() => document.getElementById('auditoria').scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Auditoria de Implementação <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
