"use client";

import Image from "next/image";
import { useState } from "react";

export function Institutional() {
  const [activeTab, setActiveTab] = useState<"mission" | "founder" | "values">("mission");

  const highlights = [
    {
      number: "35+",
      label: "Etnias Atendidas",
      description: "Kulina, Tikuna, Mura, Baniwa, Kokama, Apurinã e outras"
    },
    {
      number: "253",
      label: "Comunidades",
      description: "Alcançadas com nossos projetos"
    },
    {
      number: "15+",
      label: "Anos",
      description: "Desde 15 de fevereiro de 2011"
    },
    {
      number: "100%",
      label: "Transparência",
      description: "Certificações e utilidade pública"
    },
  ];

  const certifications = [
    {
      title: "Utilidade Pública Estadual",
      description: "Lei nº 4.757/2019"
    },
    {
      title: "Utilidade Pública Municipal",
      description: "Lei nº 517/2022"
    },
    {
      title: "Registro CMAS Manaus",
      description: "Nº 264"
    },
    {
      title: "Certificação Nacional",
      description: "CNEAS/SUAS"
    }
  ];

  const values = [
    {
      title: "Resistência Secular",
      description: "Honramos mais de 521 anos de resistência dos povos originários"
    },
    {
      title: "Acolhimento Intercultural",
      description: "Espaço de acolhimento para diversas etnias amazônicas"
    },
    {
      title: "Preservação Cultural",
      description: "Valorizamos conhecimento tradicional, culinária, artes e cultura viva"
    }
  ];

  return (
    <section className="py-20 bg-[#132a13] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4f772d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#31572c] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#31572c]/50 backdrop-blur-sm border border-[#4f772d]/30 rounded-full mb-4">
            <span className="text-sm font-medium text-[#f8f9fa]">
              Conheça Nossa História
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#f8f9fa] mb-4 tracking-tight">
            Sobre o IAPOAM
          </h2>
          <p className="text-lg text-[#f8f9fa]/80 max-w-3xl mx-auto leading-relaxed">
            Organização da Sociedade Civil dedicada à Cidadania Social, atuando como ponte entre os direitos fundamentais e a realidade dos povos indígenas
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-[#31572c]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4f772d]/30 hover:border-[#4f772d] hover:bg-[#31572c]/60 hover:shadow-2xl hover:shadow-[#4f772d]/20 transition-all duration-300 group"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4f772d] to-[#f8f9fa] mb-2 group-hover:scale-110 transition-transform">
                {item.number}
              </div>
              <h3 className="text-lg font-semibold text-[#f8f9fa] mb-1">
                {item.label}
              </h3>
              <p className="text-sm text-[#f8f9fa]/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "mission"
                ? "bg-gradient-to-r from-[#4f772d] to-[#31572c] text-[#f8f9fa] shadow-lg shadow-[#4f772d]/50 scale-105"
                : "bg-[#31572c]/40 backdrop-blur-sm text-[#f8f9fa]/80 border border-[#4f772d]/30 hover:border-[#4f772d] hover:bg-[#31572c]/60"
            }`}
          >
            Quem Somos
          </button>
          <button
            onClick={() => setActiveTab("values")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "values"
                ? "bg-gradient-to-r from-[#4f772d] to-[#31572c] text-[#f8f9fa] shadow-lg shadow-[#4f772d]/50 scale-105"
                : "bg-[#31572c]/40 backdrop-blur-sm text-[#f8f9fa]/80 border border-[#4f772d]/30 hover:border-[#4f772d] hover:bg-[#31572c]/60"
            }`}
          >
            Missão e Valores
          </button>
          <button
            onClick={() => setActiveTab("founder")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "founder"
                ? "bg-gradient-to-r from-[#4f772d] to-[#31572c] text-[#f8f9fa] shadow-lg shadow-[#4f772d]/50 scale-105"
                : "bg-[#31572c]/40 backdrop-blur-sm text-[#f8f9fa]/80 border border-[#4f772d]/30 hover:border-[#4f772d] hover:bg-[#31572c]/60"
            }`}
          >
            Nossa Fundadora
          </button>
        </div>

        {/* Content */}
        {activeTab === "mission" && (
          <div className="space-y-8">
            {/* Main Info Card */}
            <div className="bg-[#31572c]/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#4f772d]/30 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[#f8f9fa] mb-3 leading-tight">
                      Instituto de Apoio aos Povos Originários da Amazônia
                    </h3>
                    <div className="inline-flex items-center px-4 py-2 bg-[#4f772d]/20 border border-[#4f772d]/40 rounded-full mb-4">
                      <span className="text-sm font-medium text-[#f8f9fa]">
                        CNPJ: 13.955.659/0001-43
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-[#f8f9fa]/80 leading-relaxed">
                    <p>
                      O <span className="font-semibold text-[#f8f9fa]">IAPOAM</span> é uma Organização da Sociedade Civil (OSC) fundada em 15 de fevereiro de 2011, em Manaus. Somos uma instituição apartidária e não religiosa, dedicada à Cidadania Social, atuando como ponte entre os direitos fundamentais e a realidade dos povos indígenas que residem na capital amazonense.
                    </p>
                    <p>
                      Com uma gestão pautada pela transparência e conformidade legal, desenvolvemos projetos e ações em parceria com comunidades, instituições e organizações, promovendo o fortalecimento sociocultural, a proteção territorial, a sustentabilidade ambiental e o respeito aos saberes tradicionais.
                    </p>
                    <p>
                      Fundamentamos nossa atuação no <span className="font-semibold text-[#f8f9fa]">Estatuto do Índio</span> e na <span className="font-semibold text-[#f8f9fa]">Convenção 169 da OIT</span>, reafirmando os direitos reconhecidos internacionalmente pela ONU.
                    </p>
                    <p>
                      Com mais de uma década de atuação, o IAPOAM reafirma seu compromisso com a justiça social, a valorização dos povos indígenas e a manutenção da floresta em pé, contribuindo para um futuro mais justo, equilibrado e sustentável na Amazônia.
                    </p>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-2xl p-6 text-[#f8f9fa] shadow-lg shadow-[#4f772d]/20 hover:scale-105 transition-transform">
                    <div className="text-5xl font-bold mb-2">253</div>
                    <div className="text-sm opacity-90">Comunidades Atendidas</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#31572c] to-[#4f772d] rounded-2xl p-6 text-[#f8f9fa] shadow-lg shadow-[#31572c]/20 hover:scale-105 transition-transform">
                    <div className="text-5xl font-bold mb-2">35+</div>
                    <div className="text-sm opacity-90">Etnias Diversas</div>
                  </div>
                  <div className="col-span-2 bg-[#31572c]/60 backdrop-blur-sm border border-[#4f772d]/40 rounded-2xl p-6 hover:scale-105 transition-transform">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4f772d] to-[#f8f9fa] mb-2">
                      15+ Anos
                    </div>
                    <div className="text-sm text-[#f8f9fa]/90">De Dedicação e História</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="bg-[#31572c]/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#4f772d]/30 shadow-2xl">
              <h3 className="text-3xl font-bold text-[#f8f9fa] mb-8 text-center">
                Compromisso e Transparência
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-6 text-center border border-[#4f772d]/30 hover:border-[#4f772d] hover:bg-[#31572c]/80 transition-all duration-300 group"
                  >
                    <h4 className="font-semibold text-[#f8f9fa] mb-2 text-base">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-[#f8f9fa]/70">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "values" && (
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="bg-[#31572c]/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#4f772d]/30 shadow-2xl">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#f8f9fa] mb-6">
                  Nossa Missão
                </h3>
                <p className="text-xl text-[#f8f9fa]/90 max-w-3xl mx-auto leading-relaxed">
                  Defender os direitos dos povos originários, garantindo a aplicação da lei, a visibilidade e o respeito às suas identidades. Fundamentamos nossa atuação no Estatuto do Índio e na Convenção 169 da OIT, reafirmando os direitos reconhecidos internacionalmente pela ONU.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-3xl p-8 lg:p-12 shadow-2xl shadow-[#4f772d]/30">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#f8f9fa] mb-6">
                  Nossa Visão
                </h3>
                <p className="text-xl text-[#f8f9fa]/95 max-w-3xl mx-auto leading-relaxed">
                  Ser referência no fortalecimento intercultural, estabelecendo critérios que protejam a dignidade dos povos indígenas e promovam sua plena integração social sem a perda de suas raízes.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="bg-[#31572c]/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#4f772d]/30 shadow-2xl">
              <h3 className="text-4xl font-bold text-[#f8f9fa] mb-10 text-center">
                Nossos Valores
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-all duration-300"
                  >
                    <h4 className="text-2xl font-semibold text-[#f8f9fa] mb-3">
                      {value.title}
                    </h4>
                    <p className="text-[#f8f9fa]/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Ethnias Highlight */}
              <div className="mt-12 p-8 bg-[#31572c]/60 backdrop-blur-sm rounded-2xl border border-[#4f772d]/40">
                <h4 className="text-2xl font-semibold text-[#f8f9fa] mb-4 text-center">
                  Espaço de Acolhimento para Diversas Etnias
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Kulina", "Tikuna", "Mura", "Baniwa", "Kokama", "Apurinã"].map((etnia) => (
                    <span
                      key={etnia}
                      className="px-5 py-2 bg-[#31572c]/80 backdrop-blur-sm text-[#f8f9fa] rounded-full text-sm font-medium border border-[#4f772d]/40 hover:border-[#4f772d] hover:bg-[#31572c] transition-all"
                    >
                      {etnia}
                    </span>
                  ))}
                  <span className="px-5 py-2 bg-gradient-to-r from-[#4f772d] to-[#31572c] text-[#f8f9fa] rounded-full text-sm font-semibold shadow-lg shadow-[#4f772d]/30">
                    e muitas outras
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "founder" && (
          <div className="bg-[#31572c]/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#4f772d]/30 shadow-2xl">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#4f772d] to-[#31572c] p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f8f9fa] rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl lg:text-5xl font-bold text-[#f8f9fa] mb-3">
                  Nossa Fundadora
                </h3>
                <p className="text-[#f8f9fa]/95 text-xl">Liderança e Inspiração</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                {/* Photo */}
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-full blur-3xl opacity-40"></div>
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                      <Image
                        src="/images/Kamila_perfil.png"
                        alt="Kamila Katusawa Mura - Fundadora do IAPOAM"
                        width={320}
                        height={320}
                        className="relative rounded-full border-4 border-[#4f772d] shadow-2xl object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#4f772d] to-[#31572c] text-[#f8f9fa] px-6 py-3 rounded-2xl shadow-xl border-4 border-[#132a13]">
                      <div className="text-2xl font-bold">15 Anos</div>
                      <div className="text-xs">IAPOAM</div>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h4 className="text-4xl lg:text-5xl font-bold text-[#f8f9fa] mb-4 leading-tight">
                      Kamila Katusawa Mura
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-[#4f772d] to-[#31572c] text-[#f8f9fa] text-sm font-semibold rounded-full shadow-lg shadow-[#4f772d]/30">
                        Etnia Mura
                      </span>
                      <span className="px-4 py-2 bg-[#31572c]/60 backdrop-blur-sm text-[#f8f9fa] text-sm font-medium rounded-full border border-[#4f772d]/40">
                        Tuxaua
                      </span>
                      <span className="px-4 py-2 bg-[#31572c]/60 backdrop-blur-sm text-[#f8f9fa] text-sm font-medium rounded-full border border-[#4f772d]/40">
                        Coordenadora Social
                      </span>
                      <span className="px-4 py-2 bg-[#31572c]/60 backdrop-blur-sm text-[#f8f9fa] text-sm font-medium rounded-full border border-[#4f772d]/40">
                        Gestora Social
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-[#f8f9fa]/85">
                    <p className="text-lg leading-relaxed">
                      Liderança indígena e gestora social com <span className="font-semibold text-[#f8f9fa]">mais de 13 anos de experiência</span> na defesa dos direitos dos povos originários em contexto urbano.
                    </p>
                    
                    <p className="leading-relaxed">
                      Fundadora e atual Coordenadora Social do IAPOAM, com sólida expertise na articulação de políticas públicas, gestão de Organizações da Sociedade Civil (OSC) e implementação de ações de cidadania.
                    </p>
                    
                    <p className="leading-relaxed">
                      Atuação estratégica como <span className="font-semibold text-[#f8f9fa]">Tuxaua</span>, sendo responsável por marcos históricos de visibilidade étnica e reconhecimento institucional junto a órgãos como o IBGE e conselhos de assistência social (CMAS/SUAS).
                    </p>

                    <p className="leading-relaxed">
                      Sua liderança tem sido fundamental para estabelecer o IAPOAM como uma ponte entre os direitos fundamentais e a realidade dos povos indígenas que residem em Manaus, consolidando a organização como referência em cidadania social e defesa dos direitos dos povos originários.
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative p-8 bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-2xl shadow-xl shadow-[#4f772d]/30 overflow-hidden">
                    <div className="absolute top-4 left-4 text-8xl text-[#f8f9fa]/10 font-serif leading-none">"</div>
                    <p className="text-xl lg:text-2xl font-medium text-[#f8f9fa] italic leading-relaxed relative z-10 pl-8">
                      Fazer o bem: os povos indígenas precisam de oportunidade, renda, inclusão social e direitos para todos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}