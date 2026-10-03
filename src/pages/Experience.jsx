import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getHouse } from '../data/houses'
import { useExperience } from '../context/ExperienceContext'
import EmptyState from '../components/common/EmptyState'
export default function Experience() {
  const { id } = useParams(); const h = getHouse(id); const { set } = useExperience()
  useEffect(() => { if (h) set({ house: h.id }) }, [h, set])
  if (!h) return <EmptyState title="House not found" text="Pick a home to explore." to="/houses" cta="Browse homes" />
  return <div className="mx-auto max-w-7xl px-4 py-16 text-center"><h1 className="text-3xl">{h.name}</h1><p className="mt-3 text-ink/70">The 3D viewer arrives in Phase 2. This route and the experience state are already wired.</p><Link to={`/houses/${h.id}`} className="mt-4 inline-block underline">Back to details</Link></div>
}
