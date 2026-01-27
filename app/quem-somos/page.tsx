"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-[#244A32]">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#C9C85E] text-center mb-8">
          Título da Página
        </h1>
        <p className="text-lg text-[#A8DADC] max-w-4xl mx-auto text-center">
          TESTE DE DEPLOY
        </p>
        {/* Adicione mais conteúdo, imagens, cards etc. */}
      </main>
      <Footer />
    </div>
  );
}