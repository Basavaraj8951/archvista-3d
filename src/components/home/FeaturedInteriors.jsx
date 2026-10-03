import { INTERIORS } from '../../data/interiors'
import InteriorPackageCard from '../interiors/InteriorPackageCard'
export default function FeaturedInteriors() { return <section className="mx-auto max-w-7xl px-4 py-12"><h2 className="mb-5 text-3xl">Interior packages</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{INTERIORS.slice(0, 3).map((p) => <InteriorPackageCard key={p.id} pkg={p} />)}</div></section> }
