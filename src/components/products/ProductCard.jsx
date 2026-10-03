import { Link } from 'react-router-dom'
import FavoriteButton from '../favorites/FavoriteButton'
import ViewInRoom from './ViewInRoom'
import useCompare from '../../hooks/useCompare'
import { formatPrice } from '../../utils/formatPrice'
export default function ProductCard({ product: p }) {
  const { inCompare, toggle, isFull } = useCompare(); const on = inCompare('product', p.id)
  return <article className="flex flex-col bg-white/60"><div className="relative aspect-[4/3]" style={{ background: p.look.color }}>
    <img src={p.image} alt={p.name} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} className="h-full w-full object-cover" /><FavoriteButton type="product" id={p.id} className="absolute right-1 top-1 bg-paper/80" /></div>
    <div className="flex flex-1 flex-col gap-1 p-4"><h3 className="text-lg leading-tight">{p.name}</h3><p className="text-sm text-ink/70">{p.material} · {p.color}</p><p className="text-xs text-ink/60">{p.dimensions}</p><p className="font-semibold text-moss">{formatPrice(p.price)}</p>
      <div className="mt-auto grid grid-cols-2 gap-2 pt-2 text-xs"><Link to={`/products/${p.id}`} className="border border-ink/30 px-2 py-2 text-center hover:bg-ink hover:text-paper">View product</Link><ViewInRoom product={p} />
        <button onClick={() => toggle('product', p.id)} disabled={!on && isFull('product')} className="col-span-2 border border-ink/30 px-2 py-2 disabled:opacity-40">{on ? 'In comparison' : isFull('product') ? 'Compare is full (3)' : 'Compare'}</button></div></div></article>
}
