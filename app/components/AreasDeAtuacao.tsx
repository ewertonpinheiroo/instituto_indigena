"use client";

import { useState } from "react";
import Link from "next/link";

const areas = [
  { 
    id: "cidadania",
    title: "Cidadania e Inclusão",
    description: "Promovemos ações de cidadania e inclusão digital através de doação de computadores e capacitação tecnológica.",
    initiatives: [
      "Doação de equipamentos",
      "Capacitação digital",
      "Acesso a direitos básicos",
      "Inclusão tecnológica"
    ]
  },
  { 
    id: "cultura",
    title: "Cultura Indígena",
    description: "Preservação e promoção das tradições culturais ancestrais, fortalecendo a identidade dos povos originários.",
    initiatives: [
      "Preservação de tradições",
      "Eventos culturais",
      "Valorização de línguas nativas",
      "Documentação cultural"
    ]
  },
  { 
    id: "ambiente",
    title: "Meio Ambiente",
    description: "Proteção ambiental na Amazônia com foco em desenvolvimento sustentável e conservação da biodiversidade.",
    initiatives: [
      "Reflorestamento",
      "Educação ambiental",
      "Desenvolvimento sustentável",
      "Conservação da biodiversidade"
    ]
  },
  { 
    id: "habitacao",
    title: "Habitação",
    description: "Apoio para garantir moradias dignas com infraestrutura básica nas comunidades indígenas.",
    initiatives: [
      "Reforma de moradias",
      "Infraestrutura básica",
      "Saneamento",
      "Construção sustentável"
    ]
  },
  { 
    id: "saude",
    title: "Saúde Indígena",
    description: "Assistência médica e prevenção, integrando saúde tradicional com práticas modernas de medicina.",
    initiatives: [
      "Atendimento médico",
      "Medicina preventiva",
      "Saúde materno-infantil",
      "Saberes tradicionais"
    ]
  },
  { 
    id: "social",
    title: "Assistência Social",
    description: "Atendimento integral a famílias em vulnerabilidade com programas de apoio comunitário.",
    initiatives: [
      "Apoio emergencial",
      "Segurança alimentar",
      "Fortalecimento familiar",
      "Desenvolvimento comunitário"
    ]
  },
];

export default function AreasDeAtuacao() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="areas" className="py-16 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#31572c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#90a955] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-[#31572c]/10 border border-[#31572c]/30 rounded-full mb-4">
            <span className="text-sm font-medium text-[#ecf39e]">
              Nossas Frentes de Trabalho
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Áreas de Atuação
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Seis áreas fundamentais para o bem-estar dos povos originários
          </p>
        </div>

        {/* Compact Navigation Tabs */}
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex gap-2 mx-auto">
              {areas.map((area, index) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-[#31572c] to-[#90a955] text-white shadow-lg shadow-[#31572c]/30 scale-105'
                      : 'bg-white/5 text-white/70 border border-white/10 hover:border-[#90a955]/40 hover:bg-white/10'
                  }`}
                >
                  {area.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Content Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/10 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            
            {/* Title & Description */}
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {areas[activeTab].title}
              </h3>
              <p className="text-base text-white/70 leading-relaxed">
                {areas[activeTab].description}
              </p>
            </div>

            {/* Compact Initiatives Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {areas[activeTab].initiatives.map((initiative, idx) => (
                <div
                  key={idx}
                  className="bg-[#31572c]/10 rounded-xl p-4 border border-[#31572c]/20 hover:border-[#90a955]/40 hover:bg-[#31572c]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ecf39e] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-sm text-white/80 leading-relaxed">
                      {initiative}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {[
                { number: "6", label: "Áreas" },
                { number: "35+", label: "Etnias" },
                { number: "253", label: "Comunidades" },
                { number: "15+", label: "Anos" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecf39e] to-[#90a955] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/50 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact CTA */}
        <div className="mt-8 bg-gradient-to-r from-[#31572c] to-[#90a955] rounded-2xl p-6 lg:p-8 shadow-xl shadow-[#31572c]/20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Faça Parte Dessa Transformação
            </h3>
            <p className="text-base text-white/90 mb-6">
              Sua contribuição fortalece nossas ações e amplia o impacto positivo
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/doacoes"
                className="px-8 py-3 bg-white text-[#31572c] font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Apoie Nossos Projetos
              </Link>
              <Link
                href="/voluntario"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Seja Voluntário
              </Link>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}