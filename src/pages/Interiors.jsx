import { INTERIORS } from '../data/interiors'
import InteriorPackageCard from '../components/interiors/InteriorPackageCard'
export default function Interiors() { return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="mb-6 text-4xl">Interior packages</h1><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{INTERIORS.map((p) => <InteriorPackageCard key={p.id} pkg={p} />)}</div></div> }
