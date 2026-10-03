import { useState } from 'react'
import useCompare from '../../hooks/useCompare'
import CompareModal from './CompareModal'
export default function CompareBar() {
  const { items, clear, count } = useCompare(); const [open, setOpen] = useState(false); const can = Object.values(items).some((l) => l.length >= 2)
  if (!count) return null
  return <><div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between bg-ink px-4 py-3 text-sm text-paper"><span>Compare: {items.house.length} houses, {items.product.length} products, {items.interior.length} packages</span>
    <span className="flex gap-3"><button onClick={() => Object.keys(items).forEach(clear)} className="underline">Clear</button><button disabled={!can} onClick={() => setOpen(true)} className="bg-brass px-3 py-1 text-ink disabled:opacity-40">Compare</button></span></div>
    <CompareModal open={open} onClose={() => setOpen(false)} /></>
}
