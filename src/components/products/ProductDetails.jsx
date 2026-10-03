import ProductViewer from './ProductViewer'
import ViewInRoom from './ViewInRoom'
import FavoriteButton from '../favorites/FavoriteButton'
import { formatPrice } from '../../utils/formatPrice'
import { ROOMS } from '../../data/rooms'
export default function ProductDetails({ product: p }) {
  const spec = [['Category', p.category], ['Material', p.material], ['Colour', p.color], ['Dimensions', p.dimensions], ['Designed for', ROOMS.find((r) => r.id === p.room)?.name]]
  return <div className="grid gap-8 lg:grid-cols-2"><ProductViewer product={p} /><div><div className="flex items-start justify-between"><h1 className="text-3xl">{p.name}</h1><FavoriteButton type="product" id={p.id} /></div>
    <p className="mt-1 text-2xl font-semibold text-moss">{formatPrice(p.price)}</p><p className="mt-3 text-ink/75">{p.description}</p>
    <dl className="mt-5 grid grid-cols-2 gap-3">{spec.map(([k, v]) => <div key={k} className="border-t border-ink/20 pt-2"><dt className="text-xs text-ink/60">{k}</dt><dd>{v}</dd></div>)}</dl>
    <ViewInRoom product={p} className="mt-6 bg-ink px-5 py-3 text-paper hover:bg-moss" /></div></div>
}
