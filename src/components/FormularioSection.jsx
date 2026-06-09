import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Lock } from 'lucide-react';

const FormularioSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    empresa: '',
    segmento: '',
    gargalo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://n8n.neotimeai.com/webhook/site', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Auditoria solicitada com sucesso. Nossa equipe entrará em contato em breve.');
        setFormData({ nome: '', telefone: '', empresa: '', segmento: '', gargalo: '' });
      } else {
        alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro de conexão. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="auditoria" className="relative z-10 bg-[#050505] py-32 px-6 border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        <motion.div 
          className="flex-1 lg:pr-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-body font-medium tracking-tight leading-tight text-white mb-8">
            Sua empresa está pronta para o próximo nível de eficiência?
          </h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              A NeoTime AI opera sob um modelo estritamente <strong className="text-white font-medium">consultivo</strong>. Nosso tempo é investido na criação de infraestruturas densas, o que significa que selecionamos criteriosamente os projetos em que entramos.
            </p>
            <p>
              Se você busca parar de terceirizar sua operação, quer cortar custos com ineficiência e construir a sua própria inteligência artificial para escalar o seu negócio, preencha a aplicação.
            </p>
            <p className="p-6 bg-white/[0.02] border-l-2 border-[#4f86f7] rounded-r-xl text-white/90 text-base">
              Nossa equipe fará uma pré-análise da sua estrutura e, havendo aderência técnica, agendaremos uma reunião estratégica para desenhar a sua nova infraestrutura — e mostrar exatamente onde o seu ROI está escondido.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.8, delay: 0.15 }}
        >
          <div className="glass-card">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f86f7]/10 rounded-full text-[#4f86f7] text-xs font-semibold uppercase tracking-wider mb-8">
              <Lock size={14} /> Aplicação Segura & Confidencial
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8 font-mono text-sm">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-gray-400 uppercase tracking-widest text-xs">Nome Completo</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#4f86f7] transition-colors placeholder:text-gray-600" 
                  placeholder="_"
                  value={formData.nome}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="telefone" className="text-gray-400 uppercase tracking-widest text-xs">WhatsApp Corporativo</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  name="telefone" 
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#4f86f7] transition-colors placeholder:text-gray-600" 
                  placeholder="_"
                  value={formData.telefone}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="empresa" className="text-gray-400 uppercase tracking-widest text-xs">Empresa</label>
                  <input 
                    type="text" 
                    id="empresa" 
                    name="empresa" 
                    className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#4f86f7] transition-colors placeholder:text-gray-600" 
                    placeholder="_"
                    value={formData.empresa}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="segmento" className="text-gray-400 uppercase tracking-widest text-xs">Segmento</label>
                  <input 
                    type="text" 
                    id="segmento" 
                    name="segmento" 
                    className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#4f86f7] transition-colors placeholder:text-gray-600" 
                    placeholder="_"
                    value={formData.segmento}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="gargalo" className="text-gray-400 uppercase tracking-widest text-xs">Descreva sua operação e maior gargalo</label>
                <textarea 
                  id="gargalo" 
                  name="gargalo" 
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#4f86f7] transition-colors placeholder:text-gray-600 resize-none" 
                  placeholder="_"
                  rows="3"
                  value={formData.gargalo}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-white text-black py-4 rounded-xl font-sans font-semibold flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-[1.02] mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
                {isSubmitting ? 'PROCESSANDO...' : 'INICIAR ANÁLISE'} {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormularioSection;
