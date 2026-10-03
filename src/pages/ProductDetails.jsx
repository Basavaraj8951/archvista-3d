import { useParams } from 'react-router-dom'
import { getProduct } from '../data/products'
import ProductDetailsView from '../components/products/ProductDetails'
import EmptyState from '../components/common/EmptyState'
export default function ProductDetails() {
  const p = getProduct(useParams().id)
  return <div className="mx-auto max-w-7xl px-4 py-10">{p ? <ProductDetailsView product={p} /> : <EmptyState title="Product not found" text="That item is not in the catalog." to="/furniture" cta="Browse furniture" />}</div>
}
