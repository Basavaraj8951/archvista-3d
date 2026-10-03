import { useState } from 'react'
import useCompare from '../../hooks/useCompare'
import CompareModal from './CompareModal'
export default function CompareBar() {
  const { items, clear } = useCompare(); const [open, setOpen] = useState(false); const n = items.house.length
  if (!n) return null
  return <><div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between bg-ink px-4 py-3 text-sm text-paper"><span>{n}/3 houses selected</span>
    <span className="flex gap-3"><button onClick={() => clear('house')} className="underline">Clear</button><button disabled={n < 2} onClick={() => setOpen(true)} className="bg-brass px-3 py-1 text-ink disabled:opacity-40">Compare</button></span></div>
    <CompareModal open={open} onClose={() => setOpen(false)} /></>
}
