import { useState, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link } from 'react-router-dom'

function Header() {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const lastY = useRef(0)

    useMotionValueEvent(scrollY, 'change', (current) => {
        const previous = lastY.current
        const diff = current - previous

        // ignora micro-movimentos (evita tremer perto do topo)
        if (Math.abs(diff) > 5) {
            setHidden(diff > 0 && current > 100)
        }
        lastY.current = current
    })

    return (
        <motion.header
            animate={{ y: hidden ? '-100%' : '0%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full z-50 bg-[#F3EBDD] p-4 flex gap-6 justify-center shadow-sm"
        >
            <Link to="/">Home</Link>
            <Link to="/cardapio">Cardápio</Link>
        </motion.header>
    )
}

export default Header