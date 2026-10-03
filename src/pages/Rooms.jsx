import { Link } from 'react-router-dom'
import { ROOMS } from '../data/rooms'
import FavoriteButton from '../components/favorites/FavoriteButton'
export default function Rooms() {
  return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="mb-6 text-4xl">Rooms</h1><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{ROOMS.map((r) =>
    <article key={r.id} className="flex items-center justify-between border border-ink/20 p-4"><div><h2 className="text-xl">{r.name}</h2><Link to={`/rooms/${r.id}`} className="text-sm underline">Explore in 3D</Link></div><FavoriteButton type="room" id={r.id} /></article>)}</div></div>
}
