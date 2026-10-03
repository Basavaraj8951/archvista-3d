import useFavorites from '../../hooks/useFavorites'
import { HOUSES } from '../../data/houses'
import { FURNITURE } from '../../data/furniture'
import { INTERIORS } from '../../data/interiors'
import HouseGrid from '../houses/HouseGrid'
import ProductGrid from '../products/ProductGrid'
import InteriorPackageCard from '../interiors/InteriorPackageCard'
import EmptyState from '../common/EmptyState'
export default function FavoritesList() {
  const { favs } = useFavorites(); const h = HOUSES.filter((x) => favs.house.includes(x.id)); const p = FURNITURE.filter((x) => favs.product.includes(x.id)); const i = INTERIORS.filter((x) => favs.interior.includes(x.id))
  if (!h.length && !p.length && !i.length) return <EmptyState title="Nothing saved yet" text="Tap the heart on any home, package or product to keep it here." to="/houses" cta="Browse homes" />
  return <div className="space-y-10">{h.length > 0 && <section><h2 className="mb-4 text-2xl">Houses</h2><HouseGrid houses={h} /></section>}
    {i.length > 0 && <section><h2 className="mb-4 text-2xl">Interior packages</h2><div className="grid gap-4 md:grid-cols-3">{i.map((x) => <InteriorPackageCard key={x.id} pkg={x} />)}</div></section>}
    {p.length > 0 && <section><h2 className="mb-4 text-2xl">Products</h2><ProductGrid products={p} /></section>}</div>
}
