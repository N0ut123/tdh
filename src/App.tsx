import React, { useState } from 'react';
import { ChevronDown, BookOpen, Mic, LayoutDashboard, Users, ShieldCheck, ArrowRight, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-cream text-graphite font-sans selection:bg-bronze selection:text-navy">
      {/* Hero Section */}
      <section className="relative bg-navy text-cream overflow-hidden py-24 lg:py-32 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 bg-architectural opacity-50"></div>
        {/* Subtle RM Monogram Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif font-bold text-white/[0.02] select-none pointer-events-none leading-none tracking-tighter">
          RM
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-bronze/30 rounded-full mb-8 bg-white/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-bronze uppercase">Mentoria Legado de Autoridade</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-garamond leading-[1.1] mb-6 font-light">
              O erro invisível na sua imagem que <span className="italic text-bronze">afasta clientes de alto valor</span> e mantém seus honorários estagnados.
            </h1>
            <p className="text-lg text-cream/80 mb-10 font-light leading-relaxed max-w-xl">
              Descubra como o Método de Autoridade Tridimensional transforma advogados comuns em referências de mercado inquestionáveis – sem ferir a ética da OAB.
            </p>
            <button className="bg-bronze text-navy px-8 py-4 flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300 font-medium tracking-widest uppercase text-xs w-full sm:w-auto">
              Aplicar para a Mentoria
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative hidden lg:block h-[600px]">
            <div className="absolute inset-0 bg-graphite/50 border border-white/10 overflow-hidden rounded-sm">
               <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Rafael Monteiro" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity" 
                referrerPolicy="no-referrer"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Seal */}
      <section className="bg-navy border-t border-white/5 py-12 relative z-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-bronze font-sans text-[10px] tracking-[0.3em] uppercase mb-8">A visão estratégica reconhecida pelo mercado</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            <div className="text-xl font-serif font-bold tracking-widest">FORBES</div>
            <div className="text-xl font-serif font-bold tracking-widest">EXAME</div>
            <div className="text-xl font-serif font-bold tracking-widest">VALOR</div>
            <div className="text-xl font-serif font-bold tracking-widest">INFOMONEY</div>
          </div>
        </div>
      </section>

      {/* Context + Pain */}
      <section className="py-24 bg-cream relative">
        <div className="absolute inset-0 bg-architectural-dark opacity-30"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-metropolis mb-8 text-navy leading-tight">Você não estudou anos para ser <br/><span className="italic text-bronze">"apenas mais um"</span>.</h2>
          <div className="space-y-6 text-lg text-graphite/80 font-light leading-relaxed">
            <p>
              Você atingiu o <strong>"Platô da Indicação"</strong>. Você é excelente tecnicamente, ganha causas complexas, mas seu crescimento depende quase exclusivamente do boca a boca.
            </p>
            <p>
              Enquanto isso, você vê profissionais com metade do seu conhecimento ganhando destaque digital e cobrando honorários muito maiores, simplesmente porque possuem uma "embalagem" melhor.
            </p>
            <p className="text-xl text-navy font-medium mt-8 pt-8 border-t border-graphite/10 inline-block">
              A dor de sentir que sua imagem não faz justiça ao valor real da sua hora acaba aqui.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-px h-24 bg-bronze/30 mx-auto"></div>

      {/* The Engineering behind Authority (Split Layout) */}
      <section className="bg-navy text-cream">
        <div className="grid lg:grid-cols-2">
          <div className="h-[500px] lg:h-auto relative order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
              alt="Estrategista" 
              className="w-full h-full object-cover grayscale opacity-60" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent lg:hidden"></div>
          </div>
          <div className="p-12 lg:p-24 flex flex-col justify-center order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-architectural opacity-30 pointer-events-none"></div>
            <div className="relative z-10">
              <span className="text-bronze text-[10px] tracking-[0.2em] uppercase mb-4 block">Quem é Rafael Monteiro?</span>
              <h2 className="text-4xl md:text-5xl font-metropolis mb-8 leading-tight">O Arquiteto da <br/><span className="italic text-bronze">Autoridade Jurídica.</span></h2>
              <div className="space-y-6 text-cream/80 font-light leading-relaxed">
                <p>
                  Rafael Monteiro não é um "vendedor de cursos" ou um generalista do marketing digital. Com 38 anos e uma carreira pautada pela sobriedade, ele se consolidou como a mente por trás do posicionamento de grandes bancas e sócios de elite.
                </p>
                <p>
                  Sua filosofia ignora as fórmulas barulhentas da internet. Rafael aplica os princípios do <strong>Quiet Luxury</strong> (Luxo Silencioso) e da <strong>Estratégia Anti-Commodity</strong> ao Direito, transformando o intelecto técnico do advogado em um ativo visual e narrativo impenetrável.
                </p>
                <p className="text-xl text-bronze font-serif italic pt-6 mt-6 border-t border-white/10">
                  "Ele não ensina a atrair atenção; ele ensina a impor respeito."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-bronze text-[10px] tracking-[0.2em] uppercase mb-4 block">A Engenharia</span>
            <h2 className="text-4xl md:text-5xl font-metropolis text-navy mb-6">O Método Tridimensional</h2>
            <p className="text-graphite/70 max-w-2xl mx-auto font-light leading-relaxed">A engenharia exata para construir uma percepção de alto valor e se distanciar da massa jurídica, sem ferir a ética da OAB.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pilar Visual",
                subtitle: "Semiótica e Estética",
                desc: "Uso de códigos visuais, cores e estética que comunicam autoridade e sofisticação antes mesmo de você abrir a boca. É o fim da imagem 'genérica'.",
                icon: <BookOpen size={28} strokeWidth={1} />
              },
              {
                title: "Pilar Verbal",
                subtitle: "Tom de Voz e Narrativa",
                desc: "Refinamento do tom de voz e da retórica. Você deixa de 'tentar vender' para se posicionar como a escolha óbvia, o especialista que o cliente teme perder.",
                icon: <Mic size={28} strokeWidth={1} />
              },
              {
                title: "Pilar Digital",
                subtitle: "Arquitetura de Presença",
                desc: "Uma presença digital estratégica que atrai clientes de alto ticket organicamente, focando em densidade intelectual e distanciamento da 'massa' jurídica.",
                icon: <LayoutDashboard size={28} strokeWidth={1} />
              }
            ].map((pillar, i) => (
              <div key={i} className="border border-graphite/10 p-10 hover:border-bronze/50 transition-colors bg-white relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-bronze transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="text-bronze mb-8">{pillar.icon}</div>
                <h3 className="text-2xl font-serif text-navy mb-2">{pillar.title}</h3>
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-graphite/50 mb-4">{pillar.subtitle}</h4>
                <p className="text-graphite/70 font-light leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-[#F0EDE5] border-y border-graphite/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-metropolis text-navy text-center mb-16 italic font-light">
            Seu Passaporte para o Padrão Ouro de Posicionamento
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dossier de Semiótica Visual",
                desc: "Uma análise profunda e um guia personalizado de códigos visuais, cores e vestimenta para comunicar poder e sobriedade instantaneamente.",
                icon: <BookOpen size={24} strokeWidth={1} />
              },
              {
                title: "Refinamento Narrativo Individual",
                desc: "Sessões focadas em alinhar seu tom de voz, retórica e storytelling para posicioná-lo como o Conselheiro de Confiança, não o vendedor.",
                icon: <Mic size={24} strokeWidth={1} />
              },
              {
                title: "Arquitetura de Presença Digital",
                desc: "O desenho estratégico do seu ecossistema digital (LinkedIn, Instagram, Site), focado em densidade intelectual e atração de alto ticket.",
                icon: <LayoutDashboard size={24} strokeWidth={1} />
              },
              {
                title: "Mesa Estratégica Quinzenal",
                desc: "Encontros restritos com Rafael Monteiro para análise de casos, feedback de implementação e hotseats de posicionamento.",
                icon: <Users size={24} strokeWidth={1} />
              }
            ].map((item, i) => (
              <div key={i} className="bg-cream p-8 border border-graphite/5 hover:shadow-xl transition-shadow duration-500">
                <div className="text-bronze mb-6">{item.icon}</div>
                <h3 className="text-xl font-serif text-navy mb-4 leading-snug">{item.title}</h3>
                <p className="text-graphite/70 font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="py-24 bg-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-architectural opacity-30"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-metropolis mb-16 text-center leading-tight">
            O que acontece quando sua imagem <br/><span className="italic text-bronze">se alinha ao seu intelecto.</span>
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Deixar de disputar preço para ser disputado por valor.",
              "Atrair clientes que buscam um 'Conselheiro de Confiança', não apenas um operador de leis.",
              "Segurança de uma presença digital ética, elegante e altamente lucrativa."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-6 p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <ShieldCheck className="text-bronze shrink-0" size={24} strokeWidth={1} />
                <p className="text-lg font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Application */}
      <section className="py-32 bg-cream text-center relative">
        <div className="absolute inset-0 bg-architectural-dark opacity-20"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <span className="text-bronze text-[10px] tracking-[0.2em] uppercase mb-6 block">Acesso Restrito</span>
          <h2 className="text-4xl md:text-5xl font-metropolis text-navy mb-8 leading-tight">
            Este não é um curso para todos.<br/>
            <span className="italic text-bronze">É uma mesa estratégica para poucos.</span>
          </h2>
          <p className="text-graphite/70 font-light text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Devido ao nível de profundidade estratégica e acompanhamento pessoal de Rafael Monteiro, as vagas são estritamente limitadas. O acesso à Mentoria Legado de Autoridade é feito exclusivamente via aplicação.
          </p>
          <button className="bg-navy text-cream px-10 py-5 flex items-center justify-center gap-3 hover:bg-bronze hover:text-navy transition-colors duration-300 font-medium tracking-widest uppercase text-xs mx-auto w-full sm:w-auto shadow-xl">
            Preencher Formulário de Aplicação
            <ArrowRight size={16} />
          </button>
          
          {/* Guarantee */}
          <div className="mt-20 pt-12 border-t border-graphite/10 text-left max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center shrink-0 border border-bronze/20">
                <Shield className="text-bronze" size={24} strokeWidth={1} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-navy mb-3">Compromisso com a Excelência</h4>
                <p className="text-graphite/70 font-light text-sm leading-relaxed">
                  Nosso filtro de aplicação é rigoroso para garantir que apenas advogados prontos para essa transformação entrem. Se você for aprovado e sentir, na primeira sessão estratégica, que este ambiente não é para você, devolvemos 100% do seu investimento inicial. Sem letras miúdas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F0EDE5] border-t border-graphite/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-metropolis text-navy mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <FaqItem 
              question="Preciso fazer 'dancinhas' ou expor minha vida pessoal?"
              answer="Não. O foco do Método Tridimensional é o Quiet Luxury. Construímos autoridade através da densidade intelectual, estética refinada e posicionamento estratégico, sem a necessidade de superexposição ou tendências passageiras da internet."
            />
            <FaqItem 
              question="Isso fere o código de ética da OAB?"
              answer="Absolutamente não. O método é 100% baseado em posicionamento e marketing de conteúdo informativo de alto nível, respeitando rigorosamente todas as normas de publicidade e provimento da OAB."
            />
            <FaqItem 
              question="Serve para advogados em início de carreira?"
              answer="O foco principal da mentoria são advogados já estabelecidos que atingiram o 'platô de indicação' e querem ir para o próximo nível de honorários. No entanto, analisamos casos excepcionais de profissionais em início de carreira com alto potencial durante o processo de aplicação."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-cream/50 py-16 border-t border-white/10 text-center text-xs font-light tracking-wide">
        <div className="container mx-auto px-6">
          <div className="text-3xl font-serif font-bold text-white/10 mb-8 select-none">RM</div>
          <p>© {new Date().getFullYear()} Rafael Monteiro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-graphite/10 bg-cream transition-colors hover:border-bronze/50">
      <button 
        className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-xl text-navy pr-8">{question}</span>
        <ChevronDown 
          className={`text-bronze transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
          strokeWidth={1.5}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 text-graphite/70 font-light leading-relaxed text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default App;
