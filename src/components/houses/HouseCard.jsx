import { Link, useNavigate } from 'react-router-dom'
import FavoriteButton from '../favorites/FavoriteButton'
import useCompare from '../../hooks/useCompare'
import { formatPrice } from '../../utils/formatPrice'
export default function HouseCard({ house: h }) {
  const { inCompare, toggle, isFull } = useCompare(); const nav = useNavigate(); const on = inCompare('house', h.id)
  return <article className="flex flex-col bg-white/60">
    <div className="relative aspect-[4/3] bg-gradient-to-br from-moss to-ink">
      <img src={h.image} alt={h.name} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} className="h-full w-full object-cover" />
      <FavoriteButton type="house" id={h.id} className="absolute right-1 top-1 bg-paper/80" /></div>
    <div className="flex flex-1 flex-col gap-2 p-4">
      <h3 className="text-lg leading-tight">{h.name}</h3><p className="text-sm text-ink/70">{h.style} · {h.location}</p>
      <p className="text-sm">{h.bedrooms} bed · {h.bathrooms} bath · {h.floors} floor{h.floors > 1 && 's'} · {h.builtUpArea} sq ft</p>
      <p className="font-semibold text-moss">{formatPrice(h.budget)}</p>
      <div className="mt-auto grid grid-cols-2 gap-2 pt-2 text-xs">
        <Link to={`/houses/${h.id}`} className="border border-ink/30 px-2 py-2 text-center hover:bg-ink hover:text-paper">View details</Link>
        <button onClick={() => nav(`/experience/${h.id}`)} className="bg-ink px-2 py-2 text-paper hover:bg-moss">Enter 3D</button>
        <button onClick={() => toggle('house', h.id)} disabled={!on && isFull('house')} className={`col-span-2 border px-2 py-2 disabled:opacity-40 ${on ? 'bg-brass border-brass' : 'border-ink/30'}`}>{on ? 'In comparison' : isFull('house') ? 'Compare is full (3)' : 'Compare'}</button>
      </div></div></article>
}
