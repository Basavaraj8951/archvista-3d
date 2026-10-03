import { Box, DoorOpen, Palette, Armchair, LayoutGrid, Maximize } from 'lucide-react'
const TABS = [['3d', '3D', Box], ['rooms', 'Rooms', DoorOpen], ['interior', 'Interior', Palette], ['products', 'Products', Armchair], ['plan', 'Floor plan', LayoutGrid], ['full', 'Fullscreen', Maximize]]
export default function MobileControls({ panel, onSelect }) {
  return <nav aria-label="3D controls" className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-ink/20 bg-paper lg:hidden">{TABS.map(([id, label, Icon]) =>
    <button key={id} onClick={() => onSelect(id)} aria-pressed={panel === id} className={`flex flex-col items-center gap-0.5 py-2 text-[10px] ${panel === id ? 'text-brass' : ''}`}><Icon size={18} />{label}</button>)}</nav>
}
