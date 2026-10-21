import React from 'react';

export default function Apresention() {
    // Insira aqui o número do WhatsApp do restaurante (Apenas números com DDD)
    const WHATSAPP_NUMBER = "15991111194";

    const msgReserva = encodeURIComponent("Olá! Gostaria de verificar a disponibilidade para realizar uma reserva no bistrô.");
    const msgEvento = encodeURIComponent("Olá! Gostaria de receber mais informações e orçamentos para realizar um evento com a Casa Árvore.");
    const LINK_MAPS = "https://maps.app.goo.gl/C8k3FgqhP5mDMvrE9";

    return (
        <section className="bg-[#F3EBDD] px-6 sm:px-12 py-24 border-t border-[#277B6B]/10">
            <div className="max-w-4xl mx-auto text-center">

                {/* Selo Intimista */}
                <p className="text-[#277B6B]/70 uppercase tracking-[0.3em] text-[15px] mb-4">
                    Uma Experiência Exclusiva
                </p>

                {/* Título Conceitual */}
                <h2 className="font-['Cormorant',serif] font-medium text-[#277B6B] text-4xl sm:text-6xl mb-8 leading-tight">
                    Alta gastronomia em um ambiente intimista e acolhedor
                </h2>

                {/* Manifesto/Texto de Apresentação */}
                <p className="font-sans text-base text-[#277B6B]/80 max-w-2xl mx-auto leading-relaxed mb-12">
                    A Casa Árvore é um bistrô contemporâneo focado na essência dos ingredientes e no conforto do cliente.
                    Para garantir o frescor dos pratos e a dedicação total da nossa equipe, <strong className="font-semibold">atendemos exclusivamente sob reserva</strong>.
                    Um refúgio gastronômico desenhado para quem valoriza o tempo, o afeto e os sabores autênticos.
                </p>

                {/* Grade de Formatos de Eventos */}
                <div className="mb-16">
                    <p className="font-['Cormorant',serif] italic text-[#277B6B] text-xl mb-6">
                        Além do nosso salão, criamos momentos memoráveis para:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm font-sans tracking-wide text-[#277B6B]">
                        <div className="border border-[#277B6B]/20 rounded-full py-2.5 px-4 bg-[#277B6B]/5 cursor-default transition-all duration-300 ease-out hover:bg-[#277B6B] hover:text-[#F3EBDD] hover:scale-105 hover:shadow-md hover:border-transparent">
                            ✨ Casamentos
                        </div>
                        <div className="border border-[#277B6B]/20 rounded-full py-2.5 px-4 bg-[#277B6B]/5 cursor-default transition-all duration-300 ease-out hover:bg-[#277B6B] hover:text-[#F3EBDD] hover:scale-105 hover:shadow-md hover:border-transparent">
                            🎂 Aniversários
                        </div>
                        <div className="border border-[#277B6B]/20 rounded-full py-2.5 px-4 bg-[#277B6B]/5 cursor-default transition-all duration-300 ease-out hover:bg-[#277B6B] hover:text-[#F3EBDD] hover:scale-105 hover:shadow-md hover:border-transparent">
                            🥂 Happy Hour
                        </div>
                        <div className="border border-[#277B6B]/20 rounded-full py-2.5 px-4 bg-[#277B6B]/5 cursor-default transition-all duration-300 ease-out hover:bg-[#277B6B] hover:text-[#F3EBDD] hover:scale-105 hover:shadow-md hover:border-transparent">
                            🏡 Eventos em Casa
                        </div>
                    </div>
                </div>

                <div className="mt-10 mb-14">
                    <a
                        href={LINK_MAPS}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group text-[#277B6B]/80 hover:text-[#277B6B] transition-colors duration-300 text-sm font-sans tracking-wide"
                    >
                        <svg
                            className="w-4 h-4 text-[#277B6B] transform transition-transform duration-300 group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="border-b border-[#277B6B]/20 group-hover:border-[#277B6B] transition-colors duration-300">
                            Rua Carlito Laino, 152 — Sorocaba, SP
                        </span>
                    </a>
                </div>

                {/* Botões de Ação (CTA) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

                    {/* Botão 1: Reservar Mesa */}
                    {/* Botão 1: Reservar Mesa */}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msgReserva}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#277B6B] text-[#F3EBDD] font-sans font-medium text-sm rounded-full tracking-wider transition-all duration-300 hover:bg-[#1f5f52] hover:shadow-lg text-center"
                    >
                        Reservar uma mesa
                    </a>

                    {/* Botão 2: Organizar Evento */}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msgEvento}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3.5 border border-[#277B6B] text-[#277B6B] font-sans font-medium text-sm rounded-full tracking-wider transition-all duration-300 hover:bg-[#277B6B]/5 text-center"
                    >
                        Planejar meu evento
                    </a>

                </div>
            </div>
        </section>
    );
}
