import treeIcon from '../assets/arvore-branca.png'
import archPhoto from '../assets/arvore-background.png'
import PratosShowcase from '../components/PratosShowcase'
import Apresentacao from '../components/Apresentation';

// pequeno componente pras linhas decorativas (3 traços, larguras diferentes)
function DecorLines({ align = 'left' }) {
    const widths = align === 'left' ? ['w-10', 'w-16', 'w-24'] : ['w-24', 'w-16', 'w-10']
    return (
        <div className="flex flex-col gap-1.5">
            {widths.map((w, i) => (
                <div key={i} className={`h-px bg-[#277B6B] ${w} ${align === 'right' ? 'ml-auto' : ''}`} />
            ))}
        </div>
    )
}

function Home() {
    return (

        <>

            <section className="relative min-h-screen bg-[#F3EBDD] flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center gap-1 px-4 w-full">
                    

                <div className="flex items-center w-full max-w-6xl">
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="h-0.5 bg-[#277B6B]" />
                        <div className="h-0.5 bg-[#277B6B]" />
                        <div className="h-0.5 bg-[#277B6B]" />
                    </div>

                    <div className="w-60 sm:w-89 shrink-0" /> 

                    <div className="flex-1 flex flex-col gap-2">
                        <div className="h-0.5 bg-[#277B6B]" />
                        <div className="h-0.5 bg-[#277B6B]" />
                        <div className="h-0.5 bg-[#277B6B]" />
                    </div>
                </div>
                {/* título com imagem atrás */}
                <div className="relative flex items-center justify-center py-4">
                    <h1 className="relative z-10 font-['Cormorant',serif] font-semibold text-[#277B6B] text-2xl sm:text-[10rem] whitespace-nowrap tracking-wide">
                        A Casa Arvore
                    </h1>

                    {/* imagem em arco, atrás do texto e um pouco pra cima */}
                    <div className="absolute z-0 w-64 h-80 sm:w-80 sm:h-[28rem] rounded-t-full overflow-hidden -translate-y-4 sm:-translate-y-5">
                        <img
                            src={archPhoto}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <img
                            src={treeIcon}
                            className="absolute left-0 right-0 top-0 -translate-y-19 w-full h-full object-contain p-1"
                        />
                    </div>
                    <div className="absolute z-0 w-64 h-80 sm:w-80 sm:h-[28rem] rounded-t-full overflow-hidden -translate-y-4 sm:-translate-y-5">
                        <img
                            src={archPhoto}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <img
                            src={treeIcon}
                            className="absolute left-0 right-0 top-0 -translate-y-19 w-full h-full object-contain p-1"
                        />
                    </div>
                </div>

                {/* linha dupla de baixo */}
                <div className="flex z-8 flex-col gap-2 w-full max-w-6xl">
                    <div className="h-0.5 bg-[#277B6B]" />
                    <div className="h-0.5 bg-[#277B6B]" />
                    <div className="h-0.5 bg-[#277B6B]" />
                        </div>
                    </div>




        </section>

            <div id="pratos">
                <PratosShowcase />
            </div>

            <div id="sobre">
                <Apresentacao />
            </div>
    </>


    )
}

export default Home