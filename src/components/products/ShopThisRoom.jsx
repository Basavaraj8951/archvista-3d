import { Link } from 'react-router-dom'
import { useExperience } from '../../context/ExperienceContext'
import { pickProduct } from '../rooms/furnitureSlots'
import ViewInRoom from './ViewInRoom'
import { PAINTS, FLOORING, CEILINGS, CURTAINS } from '../../data/materials'
import { LIGHTING } from '../../data/lighting'
import { formatPrice } from '../../utils/formatPrice'
const CATS = { living: ['Sofas', 'TV Units'], dining: ['Dining Tables'], master: ['Beds', 'Wardrobes'], bedroom2: ['Beds', 'Wardrobes'], bedroom3: ['Beds', 'Wardrobes'] }
export default function ShopThisRoom() {
  const { state } = useExperience(); const products = (CATS[state.room] || []).map((c) => pickProduct(state, state.room, c))
  const fin = [['Wall paint', PAINTS.find((x) => x.color === state.wallColor)?.name || 'Custom'], ['Flooring', FLOORING.find((x) => x.id === state.flooring)?.name], ['Lighting', LIGHTING.find((x) => x.id === state.lighting)?.name],
    ['Curtains', CURTAINS.find((x) => x.id === state.curtains)?.name], ['Ceiling', CEILINGS.find((x) => x.color === state.materials.ceiling)?.name || 'Plain White']]
  return <section className="mt-8 border-t border-ink/20 pt-5"><h2 className="mb-3 text-xl">Shop this room</h2>
    <ul className="divide-y divide-ink/10">{products.map((p) => <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm"><span>{p.name} <span className="text-ink/60">· {formatPrice(p.price)}</span></span>
      <span className="flex gap-2"><Link to={`/products/${p.id}`} className="border border-ink/30 px-3 py-1.5 text-xs">View product</Link><ViewInRoom product={p} className="bg-ink px-3 py-1.5 text-xs text-paper">View in room</ViewInRoom></span></li>)}
      {fin.map(([k, v]) => <li key={k} className="flex justify-between py-2 text-sm"><span className="text-ink/60">{k}</span><span>{v}</span></li>)}</ul>
    <Link to="/materials" className="mt-2 inline-block text-xs underline">Browse all materials</Link></section>
}
