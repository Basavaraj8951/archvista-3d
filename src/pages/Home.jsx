import { Link } from 'react-router-dom'
import { HOUSES } from '../data/houses'
import ThreeDViewer from '../components/three/ThreeDViewer'
import HouseGrid from '../components/houses/HouseGrid'
export default function Home() {
  return <><section className="bg-ink text-paper"><div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2"><div>
    <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">Experience your future home in 3D</h1>
    <p className="mt-5 max-w-xl text-paper/75">Explore professionally designed homes, immersive interiors and curated products before you build.</p>
    <div className="mt-8 flex flex-wrap gap-3"><Link to="/houses" className="bg-brass px-5 py-3 text-ink">Explore homes</Link><Link to="/experience/house-1" className="border border-paper/40 px-5 py-3">Start 3D experience</Link></div></div><ThreeDViewer house={HOUSES[0]} compact className="h-[360px] w-full lg:h-[460px]" /></div></section>
    <section className="mx-auto max-w-7xl px-4 py-12"><h2 className="mb-5 text-3xl">Featured homes</h2><HouseGrid houses={HOUSES.slice(0, 3)} /></section></>
}
