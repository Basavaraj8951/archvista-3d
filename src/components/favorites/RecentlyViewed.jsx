import { Link } from 'react-router-dom'
import useRecentlyViewed from '../../hooks/useRecentlyViewed'
import { HOUSES } from '../../data/houses'
import { FURNITURE } from '../../data/furniture'
import { ROOMS } from '../../data/rooms'
import HouseCard from '../houses/HouseCard'
import ProductCard from '../products/ProductCard'
export default function RecentlyViewed() {
  const { items, clear } = useRecentlyViewed(); if (!items.length) return null
  const houses = items.filter((i) => i.type === 'house').map((i) => HOUSES.find((h) => h.id === i.id)).filter(Boolean).slice(0, 3)
  const prods = items.filter((i) => i.type === 'product').map((i) => FURNITURE.find((p) => p.id === i.id)).filter(Boolean).slice(0, 3)
  const rooms = items.filter((i) => i.type === 'room').map((i) => ROOMS.find((r) => r.id === i.id)).filter(Boolean).slice(0, 6)
  if (!houses.length && !prods.length && !rooms.length) return null
  return <section className="mx-auto max-w-7xl px-4 py-10"><div className="mb-4 flex items-baseline justify-between"><h2 className="text-2xl">Recently viewed</h2><button onClick={clear} className="text-xs underline">Clear</button></div>
    {rooms.length > 0 && <div className="mb-4 flex flex-wrap gap-2">{rooms.map((r) => <Link key={r.id} to={`/rooms/${r.id}`} className="border border-ink/30 px-3 py-1.5 text-sm hover:border-ink">{r.name}</Link>)}</div>}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{houses.map((h) => <HouseCard key={h.id} house={h} />)}{prods.map((p) => <ProductCard key={p.id} product={p} />)}</div></section>
}
