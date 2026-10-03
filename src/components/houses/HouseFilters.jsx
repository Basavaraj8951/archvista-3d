import { STYLES } from '../../data/categories'
const sel = 'border border-ink/30 bg-transparent px-2 py-2 text-sm'
export default function HouseFilters({ f, setF }) {
  const n = (k) => (e) => setF({ ...f, [k]: e.target.value === '' ? '' : isNaN(e.target.value) ? e.target.value : +e.target.value })
  return <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-7">
    <input className={sel + ' col-span-2'} placeholder="Search name, style, location, feature" value={f.q} onChange={n('q')} />
    <select className={sel} value={f.style} onChange={n('style')}><option value="">Any style</option>{STYLES.map((s) => <option key={s}>{s}</option>)}</select>
    <select className={sel} value={f.bedrooms} onChange={n('bedrooms')}><option value="">Bedrooms</option>{[2, 3, 4, 5].map((b) => <option key={b} value={b}>{b === 5 ? '5+' : b}</option>)}</select>
    <select className={sel} value={f.floors} onChange={n('floors')}><option value="">Floors</option>{[1, 2, 3].map((b) => <option key={b}>{b}</option>)}</select>
    <select className={sel} value={f.maxBudget} onChange={n('maxBudget')}><option value="">Any budget</option>{[1e7, 2.5e7, 5e7, 1e8].map((b) => <option key={b} value={b}>Up to {b / 1e7} Cr</option>)}</select>
    <select className={sel} value={f.sort} onChange={n('sort')}><option value="popular">Popular</option><option value="newest">Newest</option><option value="low">Budget low to high</option><option value="high">Budget high to low</option><option value="area">Area</option></select>
  </div>
}
