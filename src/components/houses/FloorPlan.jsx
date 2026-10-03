import { useState } from 'react'
const ground = ['Living', 'Dining', 'Kitchen', 'Bedroom', 'Bath', 'Porch']
const upper = (n) => ['Master Bed', ...Array.from({ length: Math.max(0, n - 1) }, (_, i) => `Bedroom ${i + 2}`), 'Bath', 'Balcony', 'Lounge'].slice(0, 6)
// Uses /images/floorplans/<house>-<n>.png when present, otherwise draws a schematic SVG (not to scale).
export default function FloorPlan({ house }) {
  const [i, setI] = useState(0); const [img, setImg] = useState(true)
  const names = i === 0 ? ground : upper(house.bedrooms)
  return <div><div className="mb-3 flex gap-2">{house.floorPlans.map((f, k) => <button key={f} aria-pressed={i === k} onClick={() => { setI(k); setImg(true) }} className={`px-3 py-1.5 text-sm ${i === k ? 'bg-ink text-paper' : 'border border-ink/30'}`}>{f}</button>)}</div>
    {img && <img key={i} src={`/images/floorplans/${house.id}-${i + 1}.png`} alt={`${house.name} ${house.floorPlans[i]}`} onError={() => setImg(false)} className="max-h-96 w-full object-contain" />}
    {!img && <svg viewBox="0 0 440 230" role="img" aria-label={`Schematic ${house.floorPlans[i]} plan`} className="w-full max-w-2xl border border-ink/30 bg-white/60">
      {names.map((n, k) => { const x = 10 + (k % 3) * 140, y = 10 + Math.floor(k / 3) * 110; return <g key={n}><rect x={x} y={y} width="130" height="100" fill="none" stroke="#0f1a17" strokeWidth="2" /><text x={x + 65} y={y + 55} textAnchor="middle" fontSize="13" fill="#0f1a17">{n}</text></g> })}</svg>}
    <p className="mt-1 text-xs text-ink/60">{img ? '' : 'Schematic layout. Add images to public/images/floorplans to show the real plan.'}</p></div>
}
