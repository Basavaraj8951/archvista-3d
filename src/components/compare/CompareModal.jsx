import Modal from '../common/Modal'
import useCompare from '../../hooks/useCompare'
import { HOUSES } from '../../data/houses'
import { formatPrice } from '../../utils/formatPrice'
const ROWS = [['Style', 'style'], ['Location', 'location'], ['Bedrooms', 'bedrooms'], ['Bathrooms', 'bathrooms'], ['Floors', 'floors'], ['Plot (sq ft)', 'plotSize'], ['Built-up (sq ft)', 'builtUpArea']]
export function CompareTable() {
  const { items } = useCompare(); const hs = HOUSES.filter((h) => items.house.includes(h.id))
  return <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr><th />{hs.map((h) => <th key={h.id} className="p-2 font-display text-base">{h.name}</th>)}</tr></thead>
    <tbody>{ROWS.map(([l, k]) => <tr key={k} className="border-t border-ink/10"><td className="p-2 text-ink/60">{l}</td>{hs.map((h) => <td key={h.id} className="p-2">{h[k]}</td>)}</tr>)}
      <tr className="border-t border-ink/10"><td className="p-2 text-ink/60">Budget</td>{hs.map((h) => <td key={h.id} className="p-2 font-semibold">{formatPrice(h.budget)}</td>)}</tr></tbody></table></div>
}
export default function CompareModal({ open, onClose }) { return <Modal open={open} onClose={onClose} title="Compare houses"><CompareTable /></Modal> }
