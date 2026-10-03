import FurnitureCard from './FurnitureCard'
import EmptyState from '../common/EmptyState'
import { filterProducts } from '../../utils/filters'
export default function FurnitureGrid({ items, q = '' }) {
  const l = filterProducts(items, { q }); if (!l.length) return <EmptyState title="Nothing matches" text="Try another search." />
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{l.map((i) => <FurnitureCard key={i.id} item={i} />)}</div>
}
