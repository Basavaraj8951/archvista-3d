import { useState } from 'react'
import SofaOptions from '../components/furniture/SofaOptions'
import DiningOptions from '../components/furniture/DiningOptions'
import BedOptions from '../components/furniture/BedOptions'
import TVWallOptions from '../components/furniture/TVWallOptions'
import WardrobeOptions from '../components/furniture/WardrobeOptions'
const TABS = [['Sofas', SofaOptions], ['Beds', BedOptions], ['Dining Tables', DiningOptions], ['TV Units', TVWallOptions], ['Wardrobes', WardrobeOptions]]
export default function Furniture() {
  const [tab, setTab] = useState(0); const [q, setQ] = useState(''); const Active = TABS[tab][1]
  return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="mb-5 text-4xl">Furniture</h1>
    <div className="mb-5 flex flex-wrap items-center gap-2">{TABS.map(([n], i) => <button key={n} aria-pressed={tab === i} onClick={() => setTab(i)} className={`px-3 py-1.5 text-sm ${tab === i ? 'bg-ink text-paper' : 'border border-ink/30'}`}>{n}</button>)}
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="ml-auto border border-ink/30 bg-transparent px-2 py-1.5 text-sm" /></div><Active q={q} /></div>
}
