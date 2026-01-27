"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const stats = [
    { number: "35+", label: "Etnias Atendidas" },
    { number: "253", label: "Comunidades" },
    { number: "29.506", label: "Indígenas Impactados" },
    { number: "2011", label: "Ano de Fundação" },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] // easeOut como array de bezier
      } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a] pt-32 pb-16">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a1a1a]/50 to-[#1a1a1a]"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      {/* --- ELEMENTOS DECORATIVOS --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.08, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-0 hidden lg:block"
      >
    
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.08, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-0 scale-x-[-1] hidden lg:block"
      >
        
      </motion.div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* 1. Badge Superior */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#4f772d]/10 border border-[#4f772d]/20 backdrop-blur-xl">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#90a955] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ecf39e]"></span>
              </span>
              <span className="text-sm font-medium text-[#ecf39e] tracking-wide uppercase">
                Resistência • Cultura • Direitos • Sustentabilidade
              </span>
            </div>
          </motion.div>

          {/* 2. Logo */}
          <motion.div variants={fadeInUp} className="mb-10">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-8 drop-shadow-2xl">
               <Image
                  src="/images/logo_hero.png"
                  alt="Logo IAPOAM"
                  fill
                  className="object-contain filter brightness-110"
                  priority
                />
            </div>
          </motion.div>

          {/* 3. Título Principal - Layout Elegante */}
          <motion.div variants={fadeInUp} className="mb-6 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="block text-white/90 mb-2">
                Instituto de Apoio aos
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ecf39e] via-[#90a955] to-[#4f772d] mb-2">
                Povos Originários
              </span>
              <span className="block text-white/90">
                da Amazônia
              </span>
            </h1>
          </motion.div>

          {/* 4. Subtítulo Refinado */}
          <motion.div variants={fadeInUp} className="mb-12 max-w-3xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed font-light">
              Promovemos cidadania, defesa de direitos e sustentabilidade para povos indígenas.
              <br className="hidden sm:block" />
              Atuando com{" "}
              <span className="text-[#ecf39e] font-medium">transparência e respeito</span>{" "}
              desde 2011.
            </p>
          </motion.div>

          {/* 5. CTA Buttons - Design Moderno */}
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-2xl mx-auto"
          >
            <Link
              href="/doacoes"
              className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#4f772d] to-[#90a955] text-white font-semibold text-lg rounded-full transition-all duration-300 shadow-lg shadow-[#4f772d]/30 hover:shadow-xl hover:shadow-[#4f772d]/50 hover:scale-105 flex items-center justify-center overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="relative flex items-center gap-2">
                Faça sua Doação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="/institucional"
              className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-[#ecf39e]/40 font-medium text-lg rounded-full backdrop-blur-sm transition-all duration-300"
            >
              Conheça Nossa História
            </Link>
          </motion.div>

          {/* 6. Stats Grid - Glassmorphism Elegante */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-[#4f772d]/40 transition-all duration-500 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f772d]/0 to-[#90a955]/0 group-hover:from-[#4f772d]/10 group-hover:to-[#90a955]/5 transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-[#ecf39e] to-[#90a955] group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 7. Footer Note - Tipografia Refinada */}
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <p className="text-sm text-white/50">
                Fundadora e Presidente
              </p>
              <p className="text-base md:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ecf39e] to-[#90a955]">
                Kamila Silva Prestes
              </p>
              <p className="text-xs text-white/40">
                Etnia Mura • Instituto Indígena IAPOAM
              </p>
            </div>
          </motion.div>

        </motion.div>
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