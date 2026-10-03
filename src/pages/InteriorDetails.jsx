import { useParams, useNavigate } from 'react-router-dom'
import { getInterior, PALETTES } from '../data/interiors'
import { PAINTS, FLOORING, CURTAINS } from '../data/materials'
import { LIGHTING } from '../data/lighting'
import { ROOMS } from '../data/rooms'
import { useExperience } from '../context/ExperienceContext'
import { packagePatch } from '../components/interiors/InteriorPackageCard'
import FavoriteButton from '../components/favorites/FavoriteButton'
import useCompare from '../hooks/useCompare'
import EmptyState from '../components/common/EmptyState'
export default function InteriorDetails() {
  const p = getInterior(useParams().id); const { state, set } = useExperience(); const nav = useNavigate(); const { inCompare, toggle } = useCompare()
  if (!p) return <EmptyState title="Package not found" text="That package is not available." to="/interiors" cta="Browse packages" />
  const pal = PALETTES[p.design]; const nm = (l, id) => l.find((x) => x.id === id)?.name
  const rows = [['Walls', nm(PAINTS, p.wall)], ['Flooring', nm(FLOORING, p.flooring)], ['Lighting', nm(LIGHTING, p.lighting)], ['Curtains', nm(CURTAINS, p.curtains)]]
  return <div className="mx-auto max-w-5xl px-4 py-10"><div className="flex items-start justify-between"><h1 className="text-4xl">{p.name}</h1><FavoriteButton type="interior" id={p.id} /></div>
    <p className="mt-2 text-ink/75">{p.blurb}</p>
    <div className="my-5 flex h-20 overflow-hidden">{[PAINTS.find((x) => x.id === p.wall).color, FLOORING.find((x) => x.id === p.flooring).color, pal.sofa, pal.wood, pal.accent].map((c, i) => <i key={i} className="flex-1" style={{ background: c }} />)}</div>
    <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">{rows.map(([k, v]) => <div key={k} className="border-t border-ink/20 pt-2"><dt className="text-xs text-ink/60">{k}</dt><dd>{v}</dd></div>)}</dl>
    <h2 className="mt-8 text-2xl">Rooms designed</h2><p className="mt-2">{p.rooms.map((r) => ROOMS.find((x) => x.id === r)?.name).join(', ')}</p>
    <div className="mt-6 flex flex-wrap gap-2 text-sm"><button className="bg-ink px-4 py-2 text-paper" onClick={() => { set({ ...packagePatch(p), cameraMode: 'interior' }); nav(`/experience/${state.house || 'house-1'}?mode=interior`) }}>Explore in 3D</button>
      <button className="border border-ink/30 px-4 py-2" onClick={() => toggle('interior', p.id)}>{inCompare('interior', p.id) ? 'Remove from compare' : 'Compare'}</button></div></div>
}
