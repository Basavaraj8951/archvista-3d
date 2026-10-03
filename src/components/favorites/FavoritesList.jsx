import useFavorites from '../../hooks/useFavorites'
import { HOUSES } from '../../data/houses'
import HouseGrid from '../houses/HouseGrid'
import EmptyState from '../common/EmptyState'
export default function FavoritesList() {
  const { favs } = useFavorites(); const houses = HOUSES.filter((h) => favs.house.includes(h.id))
  const other = favs.interior.length + favs.furniture.length + favs.product.length
  if (!houses.length && !other) return <EmptyState title="Nothing saved yet" text="Tap the heart on any home to keep it here." to="/houses" cta="Browse homes" />
  return <div><h2 className="mb-4 text-2xl">Saved houses</h2>{houses.length ? <HouseGrid houses={houses} /> : <p>No houses saved.</p>}
    {other > 0 && <p className="mt-6 text-sm text-ink/70">{other} saved interior, furniture or product item(s) will list here once those catalogs ship.</p>}</div>
}
