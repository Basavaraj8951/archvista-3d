import { HOUSES } from '../../data/houses'
import { FURNITURE } from '../../data/furniture'
import { INTERIORS } from '../../data/interiors'
export default function Stats() {
  const s = [[HOUSES.length, 'designed homes'], [INTERIORS.length, 'interior packages'], [FURNITURE.length, 'furniture pieces'], [9, 'rooms to walk through']]
  return <section className="bg-moss text-paper"><dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">{s.map(([n, l]) => <div key={l}><dd className="font-display text-4xl">{n}</dd><dt className="text-sm text-paper/75">{l}</dt></div>)}</dl></section>
}
