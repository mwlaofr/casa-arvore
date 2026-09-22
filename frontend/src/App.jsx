import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cardapio" element={<Cardapio />} />

            </Routes>
            <Footer />
        </>
    )
}

export default App