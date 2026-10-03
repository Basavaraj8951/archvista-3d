import { HOUSES } from '../../data/houses'
import { FURNITURE } from '../../data/furniture'
import { INTERIORS } from '../../data/interiors'
import { ROOMS } from '../../data/rooms'
export default function Stats() {
  const s = [[HOUSES.length, 'designed homes'], [INTERIORS.length, 'interior packages'], [ROOMS.length, 'explorable rooms'], [FURNITURE.length, 'curated products']]
  return <section className="bg-moss text-paper"><dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">{s.map(([n, l]) => <div key={l}><dt className="font-display text-4xl">{n}</dt><dd className="text-sm text-paper/75">{l}</dd></div>)}</dl></section>
}
