import HouseCard from './HouseCard'
import EmptyState from '../common/EmptyState'
export default function HouseGrid({ houses }) {
  if (!houses.length) return <EmptyState title="No homes match" text="Loosen a filter or clear the search." />
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{houses.map((h) => <HouseCard key={h.id} house={h} />)}</div>
}
