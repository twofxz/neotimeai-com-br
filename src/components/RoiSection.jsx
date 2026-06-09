import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.8 }
  }
};

const RoiSection = () => {
  return (
    <section id="roi" className="relative z-10 bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
        >
          <h2 className="text-3xl md:text-5xl font-body font-medium tracking-tight leading-tight text-white mb-6">
            Por que grandes operações estão construindo suas próprias IAs?
          </h2>
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
          <motion.div variants={cardVariants} className="glass-card md:col-span-2 group">
            <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:scale-110">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-body font-semibold text-white mb-4 tracking-tight">Ativo da Empresa (Data Ownership)</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Nós não terceirizamos a sua solução em plataformas alheias. O sistema é construído na sua infraestrutura. Nenhuma outra empresa vai "sequestrar" sua base de dados ou cruzar informações dos seus clientes. É tudo 100% seu.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="glass-card md:col-span-1 group">
            <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:scale-110">
              <Zap size={28} />
            </div>
            <h3 className="text-2xl font-body font-semibold text-white mb-4 tracking-tight">Escala Infinita</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Sistemas de IA absorvem picos massivos de demanda instantaneamente, sem necessidade de novas contratações ou aumento proporcional de custos operacionais.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="glass-card md:col-span-1 group">
            <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:scale-110">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-body font-semibold text-white mb-4 tracking-tight">Queda Drástica no CAC</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Atendimento 24/7 instantâneo e perfeitamente padronizado. Pare de perder leads para a concorrência por tempo de resposta.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="glass-card md:col-span-2 group">
            <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:scale-110">
              <Database size={28} />
            </div>
            <h3 className="text-2xl font-body font-semibold text-white mb-4 tracking-tight">Eficiência de Folha (Capital Humano)</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Remova imediatamente a carga de trabalho braçal e robótica dos seus colaboradores mais caros (vendedores, gestores e especialistas). Libere o capital humano da sua empresa para focar exclusivamente na construção de relacionamento e fechamento.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoiSection;
