import { MATERIALS, PAINTS, FLOORING } from '../data/materials'
const Sw = ({ c, n }) => <div><div className="aspect-square border border-ink/20" style={{ background: c }} /><p className="mt-1 text-xs">{n}</p></div>
export default function Materials() {
  return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="text-4xl">Materials</h1>
    <h2 className="mt-8 mb-3 text-2xl">Designer materials</h2><div className="grid grid-cols-3 gap-4 md:grid-cols-7">{MATERIALS.map((m) => <Sw key={m.id} c={m.color} n={m.name} />)}</div>
    <h2 className="mt-8 mb-3 text-2xl">Wall paints</h2><div className="grid grid-cols-4 gap-4 md:grid-cols-8">{PAINTS.map((m) => <Sw key={m.id} c={m.color} n={m.name} />)}</div>
    <h2 className="mt-8 mb-3 text-2xl">Flooring</h2><div className="grid grid-cols-3 gap-4 md:grid-cols-6">{FLOORING.map((m) => <Sw key={m.id} c={m.color} n={m.name} />)}</div></div>
}
