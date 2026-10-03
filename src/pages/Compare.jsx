import { CompareTable } from '../components/compare/CompareModal'
import useCompare from '../hooks/useCompare'
import EmptyState from '../components/common/EmptyState'
export default function Compare() {
  const { count } = useCompare()
  if (!count) return <EmptyState title="Nothing to compare yet" text="Use Compare on a house, product or interior package (up to 3 of each)." to="/houses" cta="Browse homes" />
  return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="mb-6 text-4xl">Compare</h1><CompareTable /></div>
}
