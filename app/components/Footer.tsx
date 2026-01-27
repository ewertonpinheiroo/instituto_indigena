"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Início" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/o-que-fazemos", label: "O Que Fazemos" },
    { href: "/onde-atuamos", label: "Onde Atuamos" },
  ];

  const supportLinks = [
    { href: "/doacoes", label: "Doações" },
    { href: "/transparencia", label: "Transparência" },
    { href: "/ouvidoria", label: "Ouvidoria" },
    { href: "/noticias", label: "Notícias" },
  ];

  const legalLinks = [
    { href: "/cultura", label: "Cultura Indígena" },
    { href: "/politica-privacidade", label: "Política de Privacidade" },
    { href: "/termos-uso", label: "Termos de Uso" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/institutoindigenaiapoam/",
      label: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      href: "https://www.facebook.com/povosindigenasiapoam",
      label: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      href: "https://youtube.com/iapoam",
      label: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-[#4f772d] border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 - Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#90a955] to-[#ecf39e] rounded-xl flex items-center justify-center">
                <span className="text-[#132a13] font-bold text-xl">IA</span>
              </div>
              <span className="text-xl font-bold text-white">
                IAPOAM
              </span>
            </Link>
            <h3 className="text-lg font-bold text-white mb-3">
              Instituto de Apoio aos Povos Originários da Amazônia
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Desde 2011 promovendo inclusão, defesa de direitos e sustentabilidade para etnias indígenas e quilombolas da Amazônia.
            </p>
            
            {/* Certification Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/30 rounded-xl px-4 py-3 mb-4">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#4f772d] font-bold text-sm">
                ✓
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Utilidade Pública</div>
                <div className="text-xs text-white/80">Municipal e Estadual</div>
              </div>
            </div>

            {/* CNPJ */}
            <p className="text-sm text-white/90">
              <span className="font-semibold">CNPJ:</span> 13.955.659/0001-43
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/50 rounded-full group-hover:w-2 group-hover:bg-white transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Apoie & Participe
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/50 rounded-full group-hover:w-2 group-hover:bg-white transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Legal */}
          <div>
            <h4 className="text-sm font-bold text-[#ecf39e] uppercase tracking-wider mb-6">
              Contato
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a 
                  href="https://maps.google.com/?q=Aldeia+Uka+Anama+Manaus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#ecf39e]/70 hover:text-[#90a955] transition-colors duration-200 group"
                >
                  <span className="text-[#90a955] text-lg flex-shrink-0">📍</span>
                  <span className="text-sm">Aldeia Uka Anamã, Manaus/AM</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5592999999999" 
                  className="flex items-center gap-3 text-[#ecf39e]/70 hover:text-[#90a955] transition-colors duration-200"
                >
                  <span className="text-[#90a955] text-lg">📞</span>
                  <span className="text-sm">(92) 9999-9999</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@iapoam.org.br" 
                  className="flex items-center gap-3 text-[#ecf39e]/70 hover:text-[#90a955] transition-colors duration-200"
                >
                  <span className="text-[#90a955] text-lg">✉️</span>
                  <span className="text-sm">contato@iapoam.org.br</span>
                </a>
              </li>
            </ul>

            {/* Legal Links */}
            <div>
              <h5 className="text-xs font-semibold text-[#ecf39e]/60 uppercase tracking-wider mb-3">
                Informações
              </h5>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-[#ecf39e]/60 hover:text-[#ecf39e] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/90 text-sm">
                © {currentYear} IAPOAM. Todos os direitos reservados.
              </p>
              <p className="text-white/70 text-xs mt-1">
                Desenvolvido com{" "}
                <span className="text-red-400">❤️</span>{" "}
                para os povos originários
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <span className="text-white/80 text-sm mr-2">Siga-nos:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 bg-white/10 text-white hover:bg-white hover:text-[#4f772d] rounded-xl transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-200 group"
            >
              Voltar ao topo
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        </div>

        {/* Trust Seal Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Organização Sem Fins Lucrativos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Apartidária</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Não Religiosa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Transparência Total</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}