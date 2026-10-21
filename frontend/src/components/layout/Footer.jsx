import React from 'react';

export default function Footer() {
    const WHATSAPP_NUMBER = "5515991111194";
    const msgHorarios = encodeURIComponent("Olá! Gostaria de consultar sobre a possibilidade de atendimento ou reserva em um horário alternativo no bistrô.");

    return (
        <footer id="contato" className="bg-[#277B6B] text-[#F3EBDD] px-6 sm:px-12 py-10 border-t border-[#F3EBDD]/10 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-center md:text-left items-start">

                {/* Coluna 1: Funcionamento */}
                <div>
                    <h4 className="font-['Cormorant',serif] italic text-2xl mb-3 tracking-wide text-[#F3EBDD]">
                        Funcionamento
                    </h4>
                    <ul className="text-base space-y-1 text-[#F3EBDD]/90 tracking-wide">
                        <li className="font-semibold">Terça a Sábado</li>
                        <li>Das 20h às 23h</li>
                        <li className="text-xs uppercase tracking-wider text-[#F3EBDD]/70 font-medium pt-1 block">
                            Atendimento exclusivo sob reserva
                        </li>
                    </ul>
                </div>

                {/* Coluna 2: Outros Horários & Eventos */}
                <div className="md:text-center">
                    <h4 className="font-['Cormorant',serif] italic text-2xl mb-3 tracking-wide text-[#F3EBDD]">
                        Horários Especiais
                    </h4>
                    <p className="text-base text-[#F3EBDD]/90 leading-relaxed mb-3 max-w-xs mx-auto">
                        Precisa de um horário alternativo ou deseja realizar um evento privado?
                    </p>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msgHorarios}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm uppercase tracking-widest border-b-2 border-[#F3EBDD]/40 hover:border-[#F3EBDD] pb-0.5 transition-all font-semibold text-[#F3EBDD]"
                    >
                        Fale conosco no WhatsApp
                    </a>
                </div>

                {/* Coluna 3: Redes & Localização */}
                <div className="md:text-right">
                    <h4 className="font-['Cormorant',serif] italic text-2xl mb-3 tracking-wide text-[#F3EBDD]">
                        Acompanhe-nos
                    </h4>
                    <div className="flex justify-center md:justify-end gap-6 text-base tracking-wide text-[#F3EBDD]/90 mb-3">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-[#F3EBDD] transition-colors border-b border-transparent hover:border-[#F3EBDD] font-medium"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-[#F3EBDD] transition-colors border-b border-transparent hover:border-[#F3EBDD] font-medium"
                        >
                            Facebook
                        </a>
                    </div>
                    <p className="text-sm text-[#F3EBDD]/70 font-medium uppercase tracking-wider">
                        Sorocaba, SP
                    </p>
                </div>

            </div>

            {/* Linha de Direitos Autorais Inferior */}
            <div className="max-w-6xl mx-auto border-t border-[#F3EBDD]/10 mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F3EBDD]/60 tracking-wider">
                <p>© {new Date().getFullYear()} A Casa Árvore. Todos os direitos reservados.</p>
                <p className="mt-1 sm:mt-0 uppercase tracking-[0.2em] font-semibold text-[#F3EBDD]/70">Bistrô Intimista</p>
            </div>
        </footer>
    );
}
