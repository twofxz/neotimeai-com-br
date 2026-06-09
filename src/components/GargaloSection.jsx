import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutTemplate } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.8 }
  }
};

const GargaloSection = () => {
  return (
    <section id="gargalo" className="relative z-10 bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
        >
          <h2 className="text-3xl md:text-5xl font-body font-medium tracking-tight leading-tight text-white mb-6">
            Sua empresa está presa entre gargalos humanos e softwares que não se falam.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Humano */}
          <motion.div 
            className="glass-card flex flex-col items-start relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <div className="absolute -inset-32 bg-red-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-8 z-10">
              <Users size={28} />
            </div>
            
            <h3 className="text-2xl font-body font-semibold text-white mb-4 z-10 tracking-tight">O Limite do Capital Humano</h3>
            <p className="text-gray-400 text-lg leading-relaxed z-10">
              Contratar mais pessoas para funções repetitivas não escala. Humanos cansam, cometem erros, ficam doentes e custam caro em encargos e treinamento. Seu time de elite gasta 70% do tempo preenchendo planilhas em vez de fechar negócios.
            </p>
          </motion.div>

          {/* Card SaaS */}
          <motion.div 
            className="glass-card flex flex-col items-start relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <div className="absolute -inset-32 bg-[#4f86f7]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="w-14 h-14 bg-[#4f86f7]/10 border border-[#4f86f7]/20 rounded-xl flex items-center justify-center text-[#4f86f7] mb-8 z-10">
              <LayoutTemplate size={28} />
            </div>
            
            <h3 className="text-2xl font-body font-semibold text-white mb-4 z-10 tracking-tight">A Armadilha do SaaS</h3>
            <p className="text-gray-400 text-lg leading-relaxed z-10">
              Você assina 5 ferramentas diferentes que prometem automação. Nenhuma delas se comunica perfeitamente. Você fica refém de APIs limitadas, paga por usuário ativo e não tem controle sobre os seus próprios dados. O software engessa a sua operação.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GargaloSection;
