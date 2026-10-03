import Modal from '../common/Modal'
import useCompare from '../../hooks/useCompare'
import { HOUSES } from '../../data/houses'
import { FURNITURE } from '../../data/furniture'
import { INTERIORS } from '../../data/interiors'
import { formatPrice } from '../../utils/formatPrice'
function Table({ title, list, rows }) {
  if (!list.length) return null
  return <div className="mb-8 overflow-x-auto"><h2 className="mb-2 text-xl">{title}</h2><table className="w-full text-left text-sm"><thead><tr><th />{list.map((x) => <th key={x.id} className="p-2 font-display text-base">{x.name}</th>)}</tr></thead>
    <tbody>{rows.map(([l, f]) => <tr key={l} className="border-t border-ink/10"><td className="p-2 text-ink/60">{l}</td>{list.map((x) => <td key={x.id} className="p-2">{f(x)}</td>)}</tr>)}</tbody></table></div>
}
const HR = [['Style', (h) => h.style], ['Location', (h) => h.location], ['Bedrooms', (h) => h.bedrooms], ['Bathrooms', (h) => h.bathrooms], ['Floors', (h) => h.floors], ['Plot (sq ft)', (h) => h.plotSize], ['Built-up (sq ft)', (h) => h.builtUpArea], ['Budget', (h) => formatPrice(h.budget)]]
const PR = [['Category', (p) => p.category], ['Material', (p) => p.material], ['Colour', (p) => p.color], ['Dimensions', (p) => p.dimensions], ['Price', (p) => formatPrice(p.price)]]
const IR = [['Look', (p) => p.blurb], ['Wall', (p) => p.wall.replace(/-/g, ' ')], ['Flooring', (p) => p.flooring.replace(/-/g, ' ')], ['Lighting', (p) => p.lighting.replace(/-/g, ' ')], ['Curtains', (p) => p.curtains.replace(/-/g, ' ')]]
export function CompareTable() {
  const { items } = useCompare(); const pick = (all, k) => all.filter((x) => items[k].includes(x.id))
  return <div><Table title="Houses" list={pick(HOUSES, 'house')} rows={HR} /><Table title="Products" list={pick(FURNITURE, 'product')} rows={PR} /><Table title="Interior packages" list={pick(INTERIORS, 'interior')} rows={IR} /></div>
}
export default function CompareModal({ open, onClose }) { return <Modal open={open} onClose={onClose} title="Compare"><CompareTable /></Modal> }
