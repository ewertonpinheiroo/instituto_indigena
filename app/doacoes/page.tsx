"use client";

import { useState } from "react";
import { Copy, Check, CreditCard, Building2, QrCode, Heart, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

export default function Doacoes() {
  const [copiado, setCopiado] = useState("");
  const [valorSelecionado, setValorSelecionado] = useState<number | null>(null);
  const [valorCustom, setValorCustom] = useState("");

  const handleCopy = (texto: string, tipo: string) => {
    navigator.clipboard.writeText(texto);
    setCopiado(tipo);
    setTimeout(() => setCopiado(""), 2000);
  };

  const valoresSugeridos = [
    { valor: 50, impacto: "Material escolar para 5 crianças" },
    { valor: 100, impacto: "Kit alimentação para 1 família" },
    { valor: 200, impacto: "Consulta médica completa" },
    { valor: 500, impacto: "Equipamento de inclusão digital" }
  ];

  const beneficios = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Transparência Total"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Impacto Direto"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Certificado Oficial"
    }
  ];

  return (
    <div className="min-h-screen bg-[#132a13]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-[#132a13] overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4f772d] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#31572c] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#31572c]/50 backdrop-blur-sm border border-[#4f772d]/30 rounded-full mb-6">
                <span className="text-sm font-medium text-[#f8f9fa]">
                  Faça Parte da Transformação
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[#f8f9fa] mb-6 tracking-tight">
                Faça sua Doação
              </h1>
              
              <p className="text-xl md:text-2xl text-[#f8f9fa]/80 leading-relaxed mb-8">
                Sua contribuição apoia diretamente povos indígenas e quilombolas da Amazônia. 
                Toda doação é usada com transparência e responsabilidade.
              </p>

              {/* Benefits Pills */}
              <div className="flex flex-wrap justify-center gap-4">
                {beneficios.map((beneficio, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-[#31572c]/60 backdrop-blur-sm border border-[#4f772d]/40 rounded-full px-5 py-3 text-[#f8f9fa] hover:bg-[#31572c] hover:border-[#4f772d] transition-all duration-300"
                  >
                    {beneficio.icon}
                    <span className="font-medium text-sm">{beneficio.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Valores Sugeridos */}
        <section className="py-20 bg-[#132a13] relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4f772d] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#31572c] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#31572c]/50 backdrop-blur-sm border border-[#4f772d]/30 rounded-full mb-4">
                <span className="text-sm font-medium text-[#f8f9fa]">
                  Valores Sugeridos
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f8f9fa] mb-4 tracking-tight">
                Escolha um Valor
              </h2>
              <p className="text-lg text-[#f8f9fa]/70 max-w-2xl mx-auto">
                Selecione o valor da sua doação ou defina um valor personalizado
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {valoresSugeridos.map((item) => (
                  <button
                    key={item.valor}
                    onClick={() => {
                      setValorSelecionado(item.valor);
                      setValorCustom("");
                    }}
                    className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 ${
                      valorSelecionado === item.valor
                        ? "bg-gradient-to-br from-[#4f772d] to-[#31572c] text-[#f8f9fa] shadow-2xl shadow-[#4f772d]/30 scale-105"
                        : "bg-[#31572c]/40 backdrop-blur-sm text-[#f8f9fa] border-2 border-[#4f772d]/30 hover:border-[#4f772d] hover:bg-[#31572c]/60 hover:shadow-xl hover:shadow-[#4f772d]/20"
                    }`}
                  >
                    <div className="relative z-10">
                      <p className="text-4xl md:text-5xl font-bold mb-2">
                        R$ {item.valor}
                      </p>
                      <p className={`text-sm mb-3 ${valorSelecionado === item.valor ? 'text-[#f8f9fa]/80' : 'text-[#f8f9fa]/60'}`}>
                        doação única
                      </p>
                      <div className={`h-px w-full mb-3 ${valorSelecionado === item.valor ? 'bg-[#f8f9fa]/20' : 'bg-[#4f772d]/30'}`}></div>
                      <p className={`text-xs leading-relaxed ${valorSelecionado === item.valor ? 'text-[#f8f9fa]/90' : 'text-[#f8f9fa]/70'}`}>
                        {item.impacto}
                      </p>
                    </div>
                    
                    {valorSelecionado === item.valor && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2 className="w-6 h-6 text-[#f8f9fa]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <input
                  type="number"
                  placeholder="Ou digite outro valor (R$)"
                  value={valorCustom}
                  onChange={(e) => {
                    setValorCustom(e.target.value);
                    setValorSelecionado(null);
                  }}
                  className="px-6 py-4 rounded-xl bg-[#31572c]/40 backdrop-blur-sm border-2 border-[#4f772d]/30 text-[#f8f9fa] placeholder-[#f8f9fa]/40 w-full max-w-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#4f772d] focus:border-[#4f772d] shadow-lg transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Métodos de Doação */}
        <section className="py-20 bg-[#132a13] relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#31572c] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4f772d] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#31572c]/50 backdrop-blur-sm border border-[#4f772d]/30 rounded-full mb-4">
                <span className="text-sm font-medium text-[#f8f9fa]">
                  Formas de Pagamento
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f8f9fa] mb-4 tracking-tight">
                Como Doar
              </h2>
              <p className="text-lg text-[#f8f9fa]/70 max-w-2xl mx-auto">
                Escolha a forma de pagamento mais conveniente para você
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* PIX */}
              <div className="bg-[#31572c]/40 backdrop-blur-sm rounded-3xl border border-[#4f772d]/30 hover:border-[#4f772d] hover:bg-[#31572c]/60 hover:shadow-2xl hover:shadow-[#4f772d]/20 transition-all duration-300 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-2xl flex items-center justify-center shadow-lg shadow-[#4f772d]/30">
                    <QrCode className="w-7 h-7 text-[#f8f9fa]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f8f9fa]">PIX</h3>
                    <p className="text-sm text-[#f8f9fa]/60">Transferência instantânea</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-4 border border-[#4f772d]/30">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-[#f8f9fa]/70 font-semibold">Chave PIX (CNPJ)</p>
                      <button
                        onClick={() => handleCopy("13.955.659/0001-43", "pix")}
                        className="text-[#4f772d] hover:text-[#f8f9fa] transition-colors"
                      >
                        {copiado === "pix" ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-[#f8f9fa] font-mono text-sm font-bold break-all">
                      13.955.659/0001-43
                    </p>
                  </div>

                  <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-4 border border-[#4f772d]/30">
                    <p className="text-xs text-[#f8f9fa]/70 mb-3 text-center font-semibold">QR Code PIX</p>
                    <div className="w-full h-48 flex items-center justify-center bg-[#31572c]/80 backdrop-blur-sm rounded-lg border border-[#4f772d]/30">
                      <QrCode className="w-20 h-20 text-[#f8f9fa]/20" />
                    </div>
                    <p className="text-xs text-[#f8f9fa]/50 text-center mt-2">Escaneie com seu app bancário</p>
                  </div>
                </div>
              </div>

              {/* Depósito Bancário */}
              <div className="bg-[#31572c]/40 backdrop-blur-sm rounded-3xl border border-[#4f772d]/30 hover:border-[#4f772d] hover:bg-[#31572c]/60 hover:shadow-2xl hover:shadow-[#4f772d]/20 transition-all duration-300 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-2xl flex items-center justify-center shadow-lg shadow-[#4f772d]/30">
                    <Building2 className="w-7 h-7 text-[#f8f9fa]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f8f9fa]">Depósito</h3>
                    <p className="text-sm text-[#f8f9fa]/60">Transferência bancária</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-3 border border-[#4f772d]/30">
                    <p className="text-xs text-[#f8f9fa]/70 font-semibold mb-1">Banco</p>
                    <p className="text-[#f8f9fa] font-bold">Caixa Econômica Federal</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-3 border border-[#4f772d]/30">
                      <p className="text-xs text-[#f8f9fa]/70 font-semibold mb-1">Agência</p>
                      <p className="text-[#f8f9fa] font-mono font-bold">1549</p>
                    </div>
                    <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-3 border border-[#4f772d]/30">
                      <p className="text-xs text-[#f8f9fa]/70 font-semibold mb-1">Operação</p>
                      <p className="text-[#f8f9fa] font-mono font-bold">1292</p>
                    </div>
                  </div>

                  <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-3 border border-[#4f772d]/30">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-[#f8f9fa]/70 font-semibold">Conta Corrente</p>
                      <button
                        onClick={() => handleCopy("000573362875-4", "conta")}
                        className="text-[#4f772d] hover:text-[#f8f9fa] transition-colors"
                      >
                        {copiado === "conta" ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-[#f8f9fa] font-mono text-sm font-bold break-all">
                      000573362875-4
                    </p>
                  </div>

                  <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-3 border border-[#4f772d]/30">
                    <p className="text-xs text-[#f8f9fa]/70 font-semibold mb-2">Favorecido</p>
                    <p className="text-[#f8f9fa] text-xs leading-relaxed font-medium">
                      Instituto de Apoio aos Povos Originários da Amazônia - IAPOAM
                    </p>
                  </div>

                  <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-3 border border-[#4f772d]/30">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-[#f8f9fa]/70 font-semibold">CNPJ</p>
                      <button
                        onClick={() => handleCopy("13.955.659/0001-43", "cnpj")}
                        className="text-[#4f772d] hover:text-[#f8f9fa] transition-colors"
                      >
                        {copiado === "cnpj" ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-[#f8f9fa] font-mono text-sm font-bold">
                      13.955.659/0001-43
                    </p>
                  </div>
                </div>
              </div>

              {/* Cartão de Crédito - Em Breve */}
              <div className="bg-[#31572c]/40 backdrop-blur-sm rounded-3xl border border-[#4f772d]/30 p-8 opacity-70 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center px-3 py-1 bg-[#4f772d]/80 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-[#f8f9fa]">Em breve</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[#31572c]/60 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-[#4f772d]/30">
                    <CreditCard className="w-7 h-7 text-[#f8f9fa]/50" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f8f9fa]/70">Cartão</h3>
                    <p className="text-sm text-[#f8f9fa]/50">Crédito e débito</p>
                  </div>
                </div>

                <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-8 text-center border border-[#4f772d]/30">
                  <CreditCard className="w-16 h-16 text-[#f8f9fa]/30 mx-auto mb-4" />
                  <p className="text-[#f8f9fa]/60 text-sm leading-relaxed">
                    Pagamento via cartão estará disponível em breve através de plataforma segura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparência Section */}
        <section className="py-20 bg-[#132a13] relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4f772d] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#31572c] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#31572c]/40 backdrop-blur-sm rounded-3xl border border-[#4f772d]/30 shadow-2xl shadow-[#4f772d]/20 p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4f772d] to-[#31572c] rounded-2xl flex items-center justify-center shadow-lg shadow-[#4f772d]/30 shrink-0">
                    <Shield className="w-7 h-7 text-[#f8f9fa]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f8f9fa] mb-2">
                      Transparência e Prestação de Contas
                    </h3>
                    <div className="inline-flex items-center px-3 py-1 bg-[#4f772d]/80 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-semibold text-[#f8f9fa]">Certificado de Utilidade Pública</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#f8f9fa]/80 leading-relaxed mb-6">
                  Todas as doações recebidas são utilizadas exclusivamente para apoiar projetos 
                  voltados aos povos indígenas e quilombolas da Amazônia. Publicamos relatórios 
                  periódicos de prestação de contas para garantir total transparência no uso dos recursos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-4 border border-[#4f772d]/30">
                    <CheckCircle2 className="w-8 h-8 text-[#4f772d] mb-2" />
                    <h4 className="font-bold text-[#f8f9fa] mb-1">100% Transparente</h4>
                    <p className="text-sm text-[#f8f9fa]/70">Todos os relatórios são públicos</p>
                  </div>
                  <div className="bg-[#31572c]/60 backdrop-blur-sm rounded-xl p-4 border border-[#4f772d]/30">
                    <CheckCircle2 className="w-8 h-8 text-[#4f772d] mb-2" />
                    <h4 className="font-bold text-[#f8f9fa] mb-1">Auditoria Externa</h4>
                    <p className="text-sm text-[#f8f9fa]/70">Contas verificadas anualmente</p>
                  </div>
                </div>

                <div className="text-center">
                  <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#4f772d] to-[#31572c] hover:from-[#31572c] hover:to-[#4f772d] text-[#f8f9fa] rounded-xl font-semibold shadow-lg shadow-[#4f772d]/30 transition-all duration-300 hover:scale-105">
                    Ver Relatórios de Transparência
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}