import { motion } from 'framer-motion'
import { pratos } from '../data/pratos'

function PratosShowcase() {
    return (
        <section className="bg-[#F3EBDD] px-6 sm:px-12 pt-12 pb-24">
            {/* cabeçalho da seção */}
            <div className="max-w-6xl mx-auto text-center mb-20">
                <p className="text-[#277B6B] uppercase tracking-[0.3em] text-sm mb-4">
                    Cardápio do mês
                </p>
                <h2 className="font-['Cormorant',serif] font-semibold text-[#277B6B] text-5xl sm:text-7xl">
                    Sugestões do chef
                </h2>
                <div className="flex flex-col gap-1.5 w-32 mx-auto mt-6">
                    <div className="h-0.5 bg-[#277B6B]" />
                    <div className="h-0.5 bg-[#277B6B]" />
                </div>
            </div>

            {/* grade escalonada */}
            <div className="max-w-6.5xl mx-auto flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-16">
                {pratos.map((prato, i) => (
                    <motion.figure
                        key={prato.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8 }} // <--- ADICIONE ESTA LINHA (Faz o card subir 8px no hover)
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{
                            type: 'spring', // Deixa o efeito de subida muito mais fluido e natural
                            stiffness: 300,
                            damping: 20,
                            delay: (i % 4) * 0.12
                        }}
                        className={`w-[calc(50%-12px)] sm:w-[calc(50%-20px)] lg:w-[calc(25%-30px)] cursor-pointer ${i % 2 === 1 ? 'lg:mt-16' : ''}`}
                    >

                        <div className="aspect-[3/4] rounded-t-full overflow-hidden">
                            <img
                                src={prato.foto}
                                alt={prato.nome}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        <figcaption className="mt-4 text-center">
                            <p className="text-[#277B6B]/70 uppercase tracking-[0.25em] text-[10px]">
                                {prato.categoria}
                            </p>
                            <h3 className="font-['Cormorant',serif] italic text-[#277B6B] text-2xl sm:text-3xl mt-1">
                                {prato.nome}
                            </h3>
                        </figcaption>
                    </motion.figure>
                ))}
            </div>

            <div className="w-full flex justify-center mt-16 ">
                <a
                    href="/cardapio" // Mude para o link correto da sua página de menu
                    className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-['Cormorant',serif] italic text-lg text-[#277B6B] border border-[#277B6B]/40 rounded-full transition-all duration-300 hover:border-[#277B6B] tracking-wider"
                >
                    {/* Efeito sutil de preenchimento no hover */}
                    <span className="absolute inset-0 w-full h-full bg-[#277B6B] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />

                    {/* Conteúdo do botão */}
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#F3EBDD]">
                        Conhecer o cardápio completo
                        <svg
                            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </a>
            </div>

        </section>
    )
}

export default PratosShowcase