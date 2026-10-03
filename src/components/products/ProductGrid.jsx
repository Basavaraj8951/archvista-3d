import ProductCard from './ProductCard'
import EmptyState from '../common/EmptyState'
export default function ProductGrid({ products }) {
  if (!products.length) return <EmptyState title="Nothing matches" text="Try another search." />
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>
}
