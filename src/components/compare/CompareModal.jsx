import Modal from '../common/Modal'
import useCompare from '../../hooks/useCompare'
import { HOUSES } from '../../data/houses'
import { FURNITURE } from '../../data/furniture'
import { INTERIORS } from '../../data/interiors'
import { formatPrice } from '../../utils/formatPrice'
const CFG = {
  house: { title: 'Houses', list: HOUSES, rows: [['Style', 'style'], ['Location', 'location'], ['Bedrooms', 'bedrooms'], ['Bathrooms', 'bathrooms'], ['Floors', 'floors'], ['Plot (sq ft)', 'plotSize'], ['Built-up (sq ft)', 'builtUpArea'], ['Budget', (h) => formatPrice(h.budget)]] },
  product: { title: 'Products', list: FURNITURE, rows: [['Category', 'category'], ['Material', 'material'], ['Colour', 'color'], ['Dimensions', 'dimensions'], ['Price', (p) => formatPrice(p.price)]] },
  interior: { title: 'Interior packages', list: INTERIORS, rows: [['Mood', 'blurb'], ['Walls', 'wall'], ['Flooring', 'flooring'], ['Lighting', 'lighting'], ['Curtains', 'curtains']] } }
export function CompareTable({ type = 'house' }) {
  const { items } = useCompare(); const c = CFG[type]; const sel = c.list.filter((x) => items[type].includes(x.id)); if (!sel.length) return null
  return <div className="mb-8 overflow-x-auto"><h2 className="mb-2 text-xl">{c.title}</h2><table className="w-full text-left text-sm"><thead><tr><th />{sel.map((x) => <th key={x.id} className="p-2 font-display text-base">{x.name}</th>)}</tr></thead>
    <tbody>{c.rows.map(([l, k]) => <tr key={l} className="border-t border-ink/10"><td className="p-2 text-ink/60">{l}</td>{sel.map((x) => <td key={x.id} className="p-2">{typeof k === 'function' ? k(x) : String(x[k]).replace(/-/g, ' ')}</td>)}</tr>)}</tbody></table></div>
}
export const CompareAll = () => <>{Object.keys(CFG).map((t) => <CompareTable key={t} type={t} />)}</>
export default function CompareModal({ open, onClose }) { return <Modal open={open} onClose={onClose} title="Compare"><CompareAll /></Modal> }
