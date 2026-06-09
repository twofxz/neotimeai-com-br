import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Database, ArrowRightLeft } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.8 }
  }
};

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      className={`relative overflow-hidden glass-card group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-2xl"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
};

const SolucaoSection = () => {
  return (
    <section id="solucao" className="relative z-10 bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
        >
          <h2 className="text-3xl md:text-5xl font-body font-medium tracking-tight leading-tight text-white mb-6">
            Sistemas Proprietários. Sem mensalidades abusivas.
          </h2>
          <p className="text-xl text-gray-400">
            Nós não alugamos software. Nós construímos a sua força de trabalho autônoma.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <SpotlightCard className="md:col-span-2">
            <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:scale-110">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-2xl font-body font-semibold text-white mb-4 tracking-tight">Agentes de Comunicação (SDRs)</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              IAs treinadas com o seu playbook de vendas. Elas qualificam leads, quebram objeções complexas e agendam reuniões 24 horas por dia, 7 dias por semana, via WhatsApp, de forma indistinguível de um humano de alta performance.
            </p>
          </SpotlightCard>

          <SpotlightCard className="md:col-span-1">
            <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:scale-110">
              <Database size={28} />
            </div>
            <h3 className="text-2xl font-body font-semibold text-white mb-4 tracking-tight">CRMs Proprietários</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              O fim do aluguel de plataformas genéricas. Desenvolvemos o seu próprio CRM integrado com inteligência artificial, feito sob medida para o seu processo.
            </p>
          </SpotlightCard>

          <SpotlightCard className="md:col-span-1">
            <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:scale-110">
              <Bot size={28} />
            </div>
            <h3 className="text-2xl font-body font-semibold text-white mb-4 tracking-tight">Automação de Back-office</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Agentes invisíveis que processam contratos, emitem faturas, conferem documentos e geram relatórios sem intervenção manual.
            </p>
          </SpotlightCard>

          <SpotlightCard className="md:col-span-2">
            <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:scale-110">
              <ArrowRightLeft size={28} />
            </div>
            <h3 className="text-2xl font-body font-semibold text-white mb-4 tracking-tight">Orquestração de APIs</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Conectamos todos os sistemas que você já usa (ERPs, gateways de pagamento, plataformas de marketing) em um único cérebro central. Dados fluem perfeitamente, sem perda de informações.
            </p>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default SolucaoSection;
