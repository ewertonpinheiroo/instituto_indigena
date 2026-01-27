"use client";

import Link from "next/link";

export default function DonationCTA() {
  const impactCards = [
    {
      amount: "R$ 50",
      impact: "Contribui com kits de higiene para famílias indígenas"
    },
    {
      amount: "R$ 100",
      impact: "Apoia programas de capacitação tecnológica"
    },
    {
      amount: "R$ 250",
      impact: "Financia projetos de preservação cultural"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
          
          {/* Header Section */}
          <div className="relative bg-gradient-to-br from-[#31572c] to-[#4f772d] p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-white">
                  Faça a Diferença
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Apoie Nossos Projetos
              </h2>

              <p className="text-lg lg:text-xl text-white leading-relaxed max-w-3xl mx-auto">
                Sua contribuição fortalece a luta pelos direitos dos povos originários e amplia o impacto positivo nas comunidades que atendemos em toda a região amazônica.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12">
            
            {/* Video Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#132a13] mb-6 text-center">
                Nossa Missão e Causa
              </h3>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Vídeo Institucional"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-[#132a13] text-sm mt-4 opacity-80">
                Conheça nosso trabalho e o impacto que geramos nas comunidades indígenas
              </p>
            </div>

            {/* Impact Cards */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#132a13] mb-8 text-center">
                Veja o Impacto da Sua Doação
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {impactCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#31572c] to-[#4f772d] rounded-2xl p-6 border border-[#31572c] hover:border-[#4f772d] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-white mb-3">
                      {card.amount}
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      {card.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main CTA */}
            <div className="text-center mb-12">
              <Link
                href="/doacoes"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#31572c] to-[#4f772d] text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Fazer uma Doação
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <p className="text-[#132a13] text-sm mt-4 opacity-80">
                Sua doação é 100% destinada aos nossos projetos
              </p>
            </div>

            {/* Alternative Support */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-[#132a13] mb-6 text-center">
                Outras Formas de Apoiar
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/voluntario"
                  className="group flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#4f772d] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#31572c] to-[#4f772d] rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    V
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-[#132a13] mb-1 group-hover:text-[#31572c] transition-colors">
                      Seja Voluntário
                    </h5>
                    <p className="text-sm text-[#132a13] opacity-70">
                      Doe seu tempo e conhecimento
                    </p>
                  </div>
                </Link>

                <Link
                  href="/parcerias"
                  className="group flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#4f772d] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#31572c] to-[#4f772d] rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    P
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-[#132a13] mb-1 group-hover:text-[#31572c] transition-colors">
                      Seja Parceiro
                    </h5>
                    <p className="text-sm text-[#132a13] opacity-70">
                      Parcerias empresariais
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-[#132a13]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#4f772d] rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <span className="font-medium">Doações Seguras</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#4f772d] rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <span className="font-medium">Transparência Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#4f772d] rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <span className="font-medium">CNPJ: 13.955.659/0001-43</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}