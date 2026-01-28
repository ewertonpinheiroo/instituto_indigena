"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  // Dados estatísticos principais
  const mainStats = [
    { 
      number: "35+", 
      label: "Etnias Atendidas",
      description: "Povos originários em toda Amazônia",
      color: "from-[#ecf39e] to-[#90a955]"
    },
    { 
      number: "253", 
      label: "Comunidades",
      description: "Aldeias e territórios indígenas",
      color: "from-[#90a955] to-[#4f772d]"
    },
    { 
      number: "29.506", 
      label: "Indígenas Impactados",
      description: "Vidas transformadas positivamente",
      color: "from-[#ecf39e] to-[#c8d99e]"
    },
    { 
      number: "14", 
      label: "Anos de Atuação",
      description: "Desde 2011 na linha de frente",
      color: "from-[#4f772d] to-[#90a955]"
    },
  ];

  // Dados adicionais
  const additionalStats = [
    {
      number: "100%",
      label: "Transparência",
      description: "Prestação de contas pública e auditada"
    },
    {
      number: "9",
      label: "Estados",
      description: "Cobertura na região amazônica"
    },
    {
      number: "50+",
      label: "Projetos",
      description: "Iniciativas ativas"
    },
    {
      number: "85%",
      label: "Equipe Indígena",
      description: "Liderados por povos originários"
    }
  ];

  // Áreas de atuação
  const institutionalAreas = [
    {
      title: "Defesa de Direitos",
      description: "Proteção jurídica e advocacy"
    },
    {
      title: "Sustentabilidade",
      description: "Desenvolvimento sustentável"
    },
    {
      title: "Cidadania",
      description: "Acesso a direitos e políticas"
    }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1]
      } 
    }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1]
      } 
    }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1]
      } 
    }
  };

  const fadeInScale: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#1a1a1a] overflow-hidden pt-20 md:pt-24">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#1a1a1a]/60 to-[#1a1a1a]/80"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      {/* --- CONTENT LAYER - GRID HORIZONTAL --- */}
      <div className="relative z-10 w-full min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)]">
        <div className="h-full grid lg:grid-cols-2 gap-0">
          
          {/* ========== COLUNA ESQUERDA: LOGO E IDENTIDADE ========== */}
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col items-center justify-center px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 border-r border-white/5"
          >
            {/* Efeito de glow sutil no background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4f772d]/5 to-transparent"></div>
            
            <div className="relative z-10 w-full max-w-2xl space-y-8 md:space-y-10">
              
              {/* LOGO - Clean e Profissional */}
              <div className="space-y-5 md:space-y-6">
                <div className="relative w-full">
                  {/* Logo Banner */}
                  <div className="relative w-full h-24 sm:h-32 md:h-40 lg:h-48 xl:h-52">
                    <Image
                      src="/images/logo_herobanner.png"
                      alt="IAPOAM - Instituto de Apoio aos Povos Originários da Amazônia"
                      fill
                      className="object-contain filter brightness-110 drop-shadow-2xl"
                      priority
                    />
                  </div>
                  
                  {/* Linha decorativa minimalista */}
                  <div className="mt-5 md:mt-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#90a955]/30 to-[#90a955]/30"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ecf39e] shadow-lg shadow-[#ecf39e]/50"></div>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#90a955]/30 to-[#90a955]/30"></div>
                  </div>
                </div>

                {/* Badge Institucional */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2.5 md:gap-3 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-white/5 border border-[#90a955]/20 backdrop-blur-sm">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#90a955] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ecf39e]"></span>
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-[#ecf39e] tracking-wide uppercase">
                      Instituto Indígena • Desde 2011
                    </span>
                  </div>
                </div>
              </div>

              {/* MISSÃO - Texto centralizado elegante */}
              <div className="text-center space-y-4 md:space-y-5">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight px-4">
                  Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecf39e] to-[#90a955]">Missão</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mx-auto px-4">
                  Promovemos <span className="text-[#ecf39e] font-semibold">cidadania</span>, <span className="text-[#ecf39e] font-semibold">defesa de direitos</span> e <span className="text-[#ecf39e] font-semibold">sustentabilidade</span> para povos indígenas da Amazônia com <span className="text-[#90a955] font-semibold">transparência</span> e <span className="text-[#90a955] font-semibold">autonomia</span>.
                </p>

                {/* Indicador de transparência */}
                <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#4f772d]/10 border border-[#ecf39e]/20">
                  <div className="w-2 h-2 rounded-full bg-[#ecf39e]"></div>
                  <span className="text-xs md:text-sm text-white/70">
                    <span className="text-[#ecf39e] font-semibold">Transparência certificada</span> • Prestação de contas pública
                  </span>
                </div>
              </div>

              {/* PILARES - Grid horizontal compacto */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 px-4 sm:px-0">
                {institutionalAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="group text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#90a955]/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-sm font-bold text-white mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 px-4 sm:px-0">
                <Link
                  href="/doacoes"
                  className="group relative flex-1 px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-[#4f772d] to-[#90a955] text-white font-bold text-base md:text-lg rounded-full transition-all duration-300 shadow-lg shadow-[#4f772d]/30 hover:shadow-xl hover:shadow-[#4f772d]/50 hover:scale-105 flex items-center justify-center overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                  <span className="relative flex items-center gap-2">
                    Doar Agora
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  href="/institucional"
                  className="flex-1 px-6 md:px-8 py-3.5 md:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-[#ecf39e]/60 font-semibold text-base md:text-lg rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </div>

            </div>
          </motion.div>

          {/* ========== COLUNA DIREITA: IMPACTO E DADOS ========== */}
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20"
          >
            {/* Efeito de glow sutil no background */}
            <div className="absolute inset-0 bg-gradient-to-bl from-[#4f772d]/5 to-transparent"></div>
            
            <div className="relative z-10 w-full max-w-2xl space-y-6 md:space-y-8">
              
              {/* Header do Impacto */}
              <div className="text-center space-y-2 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecf39e] to-[#90a955]">Impacto</span>
                </h2>
                <p className="text-white/60 text-xs md:text-sm">
                  Dados consolidados • 14 anos de atuação dedicada
                </p>
              </div>

              {/* ESTATÍSTICAS PRINCIPAIS - Grid 2x2 - DESTAQUE MÁXIMO */}
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 px-4 sm:px-0"
              >
                {mainStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInScale}
                    className="group relative"
                  >
                    <div className="relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-[#90a955]/40 transition-all duration-300 overflow-hidden">
                      
                      {/* Glow effect no hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f772d]/0 to-[#90a955]/0 group-hover:from-[#4f772d]/10 group-hover:to-[#90a955]/5 transition-all duration-500"></div>
                      
                      <div className="relative text-center space-y-2">
                        {/* Número - MUITO GRANDE */}
                        <div className={`text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                          {stat.number}
                        </div>

                        {/* Label */}
                        <div className="text-sm sm:text-base md:text-lg font-bold text-white/95">
                          {stat.label}
                        </div>

                        {/* Descrição */}
                        <div className="text-xs text-white/60 leading-relaxed">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* ESTATÍSTICAS ADICIONAIS - Grid 4 colunas */}
              <div className="space-y-4 md:space-y-5 px-4 sm:px-0">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                  Dados Complementares
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  {additionalStats.map((stat, index) => (
                    <div 
                      key={index}
                      className="group text-center p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#90a955]/40 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1.5 md:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-[#ecf39e] to-[#90a955] group-hover:scale-105 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-white/90 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-[10px] md:text-xs text-white/60 leading-tight">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LIDERANÇA */}
              <div className="relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm overflow-hidden mx-4 sm:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f772d]/5 to-transparent"></div>
                
                <div className="relative text-center space-y-2.5 md:space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 md:px-4 py-1.5 md:py-2 rounded-full bg-[#4f772d]/20 border border-[#ecf39e]/30">
                    <span className="text-[10px] md:text-xs font-semibold text-[#ecf39e] uppercase tracking-wider">
                      Liderança Indígena
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecf39e] to-[#90a955]">
                      Kamila Silva Prestes
                    </span>
                  </h3>
                  
                  <p className="text-sm md:text-base text-white/90">
                    Fundadora e Presidente
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3.5 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#90a955]"></div>
                    <span className="text-[10px] md:text-xs text-white/70">
                      Etnia Mura • IAPOAM
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-white/60 leading-relaxed max-w-md mx-auto">
                    Liderança comprometida com a defesa dos direitos territoriais, culturais e sociais dos povos originários da Amazônia.
                  </p>
                </div>
              </div>

              {/* Indicador de Confiança */}
              <div className="flex items-center justify-center gap-2 md:gap-3 text-white/60 text-[10px] md:text-xs border-t border-white/5 pt-4 md:pt-5 mx-4 sm:mx-0">
                <div className="w-2 h-2 rounded-full bg-[#90a955]"></div>
                <span>Organização certificada com <span className="text-[#ecf39e] font-semibold">transparência total</span></span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}