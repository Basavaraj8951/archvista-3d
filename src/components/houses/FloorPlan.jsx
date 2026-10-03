import { useState } from 'react'
const SETS = [['Living Room', 'Dining', 'Kitchen', 'Bedroom 2', 'Bathroom', 'Foyer'], ['Master Bedroom', 'Bedroom 3', 'Bathroom', 'Balcony', 'Study', 'Lounge'], ['Terrace', 'Bedroom 4', 'Bathroom', 'Gym', 'Store', 'Lounge']]
const SINGLE = ['Living Room', 'Dining', 'Kitchen', 'Master Bedroom', 'Bedroom 2', 'Bathroom']
// Uses /images/floorplans/<house>-<n>.png when it exists; otherwise draws a clean SVG plan.
export default function FloorPlan({ house }) {
  const [i, setI] = useState(0); const [broken, setBroken] = useState({})
  const names = house.floors === 1 ? SINGLE : SETS[i]; const src = `/images/floorplans/${house.id}-${i + 1}.png`
  return <div><div className="mb-3 flex gap-2">{house.floorPlans.map((f, k) => <button key={f} aria-pressed={i === k} onClick={() => setI(k)} className={`px-3 py-1.5 text-sm ${i === k ? 'bg-ink text-paper' : 'border border-ink/30'}`}>{f}</button>)}</div>
    {!broken[src] ? <img src={src} alt={`${house.name} ${house.floorPlans[i]}`} onError={() => setBroken({ ...broken, [src]: true })} className="max-h-96 w-full object-contain" />
      : <svg viewBox="0 0 372 192" role="img" aria-label={`${house.floorPlans[i]} plan`} className="w-full max-w-2xl border border-ink/20 bg-white/60"><rect x="6" y="6" width="360" height="180" fill="none" stroke="#0f1a17" strokeWidth="4" />
        {names.map((n, k) => { const x = 6 + (k % 3) * 120, y = 6 + Math.floor(k / 3) * 90; return <g key={n + k}><rect x={x} y={y} width="120" height="90" fill={k % 2 ? '#e8ece9' : '#f4f1ea'} stroke="#0f1a17" strokeWidth="1.5" /><text x={x + 60} y={y + 50} textAnchor="middle" fontSize="11" fill="#0f1a17">{n}</text></g> })}
        <rect x="150" y="182" width="36" height="8" fill="#b8924f" /></svg>}</div>
}
