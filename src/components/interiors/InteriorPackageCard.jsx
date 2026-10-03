import { Link } from 'react-router-dom'
import { PALETTES } from '../../data/interiors'
import { PAINTS, FLOORING } from '../../data/materials'
import FavoriteButton from '../favorites/FavoriteButton'
export const packagePatch = (p) => ({ interiorPackage: p.id, wallColor: PAINTS.find((x) => x.id === p.wall)?.color, flooring: p.flooring, lighting: p.lighting, curtains: p.curtains,
  furniture: Object.fromEntries(['living', 'dining', 'kitchen', 'master', 'bedroom2', 'bedroom3', 'bathroom'].map((r) => [r, undefined])), materials: {}, packageDesign: p.design })
export default function InteriorPackageCard({ pkg, onApply, active }) {
  const pal = PALETTES[pkg.design]
  return <article className={`border p-4 ${active ? 'border-brass bg-white' : 'border-ink/20 bg-white/50'}`}>
    <div className="mb-3 flex h-14 overflow-hidden">{[PAINTS.find((x) => x.id === pkg.wall).color, FLOORING.find((x) => x.id === pkg.flooring).color, pal.sofa, pal.wood, pal.accent].map((c, i) => <i key={i} className="flex-1" style={{ background: c }} />)}</div>
    <div className="flex items-start justify-between"><h3 className="text-lg">{pkg.name}</h3><FavoriteButton type="interior" id={pkg.id} /></div>
    <p className="text-sm text-ink/70">{pkg.blurb}</p>
    <div className="mt-3 flex gap-2 text-xs">{onApply && <button onClick={() => onApply(pkg)} className="bg-ink px-3 py-2 text-paper">{active ? 'Applied' : 'Apply package'}</button>}<Link to="/houses" className="border border-ink/30 px-3 py-2">Pick a home</Link></div></article>
}
