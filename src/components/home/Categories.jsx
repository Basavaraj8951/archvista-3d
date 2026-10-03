import { Link } from 'react-router-dom'
import { HOUSE_CATEGORIES } from '../../data/categories'
import { HOUSES } from '../../data/houses'
export default function Categories() {
  return <section className="mx-auto max-w-7xl px-4 py-8"><h2 className="mb-4 text-3xl">Browse by type</h2><div className="grid grid-cols-2 gap-3 md:grid-cols-5">{HOUSE_CATEGORIES.map((c) =>
    <Link key={c} to={`/houses?q=${c}`} className="border border-ink/20 p-4 hover:border-ink"><p className="font-display text-xl">{c}</p><p className="text-sm text-ink/60">{HOUSES.filter((h) => h.category === c).length} homes</p></Link>)}</div></section>
}
