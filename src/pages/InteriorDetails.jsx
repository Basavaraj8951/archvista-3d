import { Link, useParams, useNavigate } from 'react-router-dom'
import { getInterior, PALETTES, ROOM_DESIGNS } from '../data/interiors'
import { ROOMS } from '../data/rooms'
import { useExperience } from '../context/ExperienceContext'
import InteriorPackageCard, { packagePatch } from '../components/interiors/InteriorPackageCard'
import EmptyState from '../components/common/EmptyState'
export default function InteriorDetails() {
  const p = getInterior(useParams().id); const { state, set } = useExperience(); const nav = useNavigate()
  if (!p) return <EmptyState title="Package not found" text="That interior package does not exist." to="/interiors" cta="All packages" />
  const open = () => { set({ ...packagePatch(p), room: 'living' }); nav(`/experience/${state.house || 'house-1'}?mode=interior`) }
  return <div className="mx-auto max-w-5xl px-4 py-10"><h1 className="text-4xl">{p.name}</h1><p className="mt-2 text-ink/75">{p.blurb}</p>
    <div className="mt-5 max-w-md"><InteriorPackageCard pkg={p} /></div><button onClick={open} className="mt-5 bg-ink px-5 py-3 text-paper hover:bg-moss">View in 3D</button>
    <h2 className="mt-10 text-2xl">Room designs in this package</h2><ul className="mt-3 grid gap-2 sm:grid-cols-2">{p.rooms.map((r) => <li key={r} className="border-t border-ink/20 pt-2"><p>{ROOMS.find((x) => x.id === r)?.name}</p><p className="text-sm text-ink/60">{ROOM_DESIGNS[r][p.design % ROOM_DESIGNS[r].length]}</p></li>)}</ul>
    <Link to="/furniture" className="mt-8 inline-block text-sm underline">Browse the furniture used</Link></div>
}
