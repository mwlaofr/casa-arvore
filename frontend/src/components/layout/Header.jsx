import { useState, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link } from 'react-router-dom'

function Header() {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)
    const lastY = useRef(0)

    useMotionValueEvent(scrollY, 'change', (current) => {
        const previous = lastY.current
        const diff = current - previous

        // Verifica se está exatamente no topo para controle estético da borda/sombra
        setIsAtTop(current < 20)

        // Ignora micro-movimentos e esconde apenas se rolar para baixo após passar do Hero
        if (Math.abs(diff) > 5) {
            setHidden(diff > 0 && current > 120)
        }
        lastY.current = current
    })

    return (
        <motion.header
            animate={{ y: hidden ? '-100%' : '0%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-5 flex items-center justify-between font-sans transition-all duration-300 ${isAtTop
                    ? 'bg-[#F3EBDD]/40 backdrop-blur-sm border-b border-transparent'
                    : 'bg-[#F3EBDD]/90 backdrop-blur-md shadow-sm border-b border-[#277B6B]/5'
                }`}
        >
            {/* Logo / Nome do Restaurante à Esquerda */}
            <Link
                to="/"
                className="font-['Cormorant',serif] font-semibold text-[#277B6B] text-xl sm:text-2xl tracking-wide transition-opacity hover:opacity-80"
            >
                A Casa Árvore
            </Link>

            {/* Navegação Principal à Direita */}
            <nav className="flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-sans tracking-[0.2em] uppercase text-[#277B6B]/80">
                <Link to="/" className="hover:text-[#277B6B] transition-colors duration-300 font-medium">
                    Início
                </Link>

                {/* Link para a página interna separada */}
                <Link to="/cardapio" className="hover:text-[#277B6B] transition-colors duration-300">
                    Cardápio
                </Link>

                {/* Links que apontam para as seções (IDs) dentro da Home */}
                <a href="/#sobre" className="hover:text-[#277B6B] transition-colors duration-300">
                    Sobre
                </a>

                <a href="/#contato" className="hover:text-[#277B6B] transition-colors duration-300">
                    Contato
                </a>
            </nav>
        </motion.header>
    )
}

export default Header
