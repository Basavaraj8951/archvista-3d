import { Link } from 'react-router-dom'
import { INTERIORS } from '../../data/interiors'
import InteriorPackageCard from '../interiors/InteriorPackageCard'
export default function FeaturedInteriors() { return <section className="mx-auto max-w-7xl px-4 py-12"><div className="mb-5 flex items-baseline justify-between"><h2 className="text-3xl">Interior packages</h2><Link to="/interiors" className="text-sm underline">See all</Link></div><div className="grid gap-4 md:grid-cols-3">{INTERIORS.slice(0, 3).map((p) => <InteriorPackageCard key={p.id} pkg={p} />)}</div></section> }
