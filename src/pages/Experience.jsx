import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getHouse } from '../data/houses'
import { useExperience } from '../context/ExperienceContext'
import EmptyState from '../components/common/EmptyState'
import ThreeDViewer from '../components/three/ThreeDViewer'
export default function Experience() {
  const { id } = useParams(); const h = getHouse(id); const { set } = useExperience()
  useEffect(() => { if (h) set({ house: h.id, cameraMode: 'exterior' }) }, [h, set])
  if (!h) return <EmptyState title="House not found" text="Pick a home to explore." to="/houses" cta="Browse homes" />
  return <div className="mx-auto max-w-7xl px-4 py-6"><div className="mb-3 flex items-baseline justify-between"><h1 className="text-2xl">{h.name}</h1><Link to={`/houses/${h.id}`} className="text-sm underline">Details</Link></div>
    <ThreeDViewer key={h.id} house={h} className="h-[70vh] min-h-[420px] w-full" />
    <p className="mt-2 text-xs text-ink/60">Drag to rotate, scroll or pinch to zoom, two fingers to pan. Interior mode arrives in Phase 3.</p></div>
}
