import { CompareAll } from '../components/compare/CompareModal'
import useCompare from '../hooks/useCompare'
import EmptyState from '../components/common/EmptyState'
export default function Compare() {
  const { items } = useCompare()
  if (!Object.values(items).some((l) => l.length >= 2)) return <EmptyState title="Pick two or three to compare" text="Use Compare on a house, product or interior package." to="/houses" cta="Browse homes" />
  return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="mb-6 text-4xl">Compare</h1><CompareAll /></div>
}
