import { Link } from 'react-router-dom'
import { HOUSES } from '../../data/houses'
import HouseGrid from '../houses/HouseGrid'
export default function FeaturedHomes() { return <section className="mx-auto max-w-7xl px-4 py-12"><div className="mb-5 flex items-baseline justify-between"><h2 className="text-3xl">Featured homes</h2><Link to="/houses" className="text-sm underline">All {HOUSES.length} homes</Link></div><HouseGrid houses={HOUSES.slice(0, 3)} /></section> }
