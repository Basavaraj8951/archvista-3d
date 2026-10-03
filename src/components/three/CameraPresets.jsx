import { CAMERA_PRESETS } from '../../utils/camera'
const LABELS = { front: 'Front', back: 'Back', left: 'Left', right: 'Right', top: 'Top', isometric: 'Isometric', entrance: 'Entrance', garden: 'Garden', terrace: 'Terrace' }
export default function CameraPresets({ onSelect, active }) {
  return <div className="flex gap-1 overflow-x-auto pb-1" role="group" aria-label="Camera views">{Object.keys(CAMERA_PRESETS).map((k) =>
    <button key={k} onClick={() => onSelect(k)} className={`shrink-0 px-3 py-1 text-xs ${active === k ? 'bg-brass text-ink' : 'bg-ink/70 text-paper hover:bg-moss'}`}>{LABELS[k]}</button>)}</div>
}
