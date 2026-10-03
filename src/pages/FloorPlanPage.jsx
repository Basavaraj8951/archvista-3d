import { useState } from 'react'
import { HOUSES } from '../data/houses'
import FloorPlan from '../components/houses/FloorPlan'
import { Link } from 'react-router-dom'
export default function FloorPlanPage() {
  const [id, setId] = useState(HOUSES[0].id); const h = HOUSES.find((x) => x.id === id)
  return <div className="mx-auto max-w-5xl px-4 py-10"><h1 className="mb-4 text-4xl">Floor plans</h1>
    <select value={id} onChange={(e) => setId(e.target.value)} className="mb-5 border border-ink/30 bg-transparent px-2 py-2" aria-label="House">{HOUSES.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</select>
    <FloorPlan key={id} house={h} /><Link to={`/experience/${h.id}`} className="mt-5 inline-block bg-ink px-4 py-2 text-sm text-paper">View in 3D</Link></div>
}
