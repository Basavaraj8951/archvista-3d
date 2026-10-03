import { Link, useParams, useNavigate } from 'react-router-dom'
import { getHouse } from '../data/houses'
import { formatPrice } from '../utils/formatPrice'
import FavoriteButton from '../components/favorites/FavoriteButton'
import SimilarHouses from '../components/houses/SimilarHouses'
import RequestDesignForm from '../components/forms/RequestDesignForm'
import useCompare from '../hooks/useCompare'
import FloorPlan from '../components/houses/FloorPlan'
import ThreeDViewer from '../components/three/ThreeDViewer'
import { INTERIORS } from '../data/interiors'
import InteriorPackageCard from '../components/interiors/InteriorPackageCard'
import EmptyState from '../components/common/EmptyState'
export default function HouseDetails() {
  const { id } = useParams(); const h = getHouse(id); const nav = useNavigate(); const { inCompare, toggle } = useCompare()
  if (!h) return <EmptyState title="House not found" text="That home is not in the catalog." to="/houses" cta="Browse homes" />
  const spec = [['Style', h.style], ['Location', h.location], ['Bedrooms', h.bedrooms], ['Bathrooms', h.bathrooms], ['Floors', h.floors], ['Plot', h.plotSize + ' sq ft'], ['Built-up', h.builtUpArea + ' sq ft'], ['Budget', formatPrice(h.budget)]]
  return <div className="mx-auto max-w-7xl px-4 py-10">
    <div className="flex items-start justify-between"><h1 className="text-4xl">{h.name}</h1><FavoriteButton type="house" id={h.id} /></div>
    <p className="mt-2 max-w-2xl text-ink/75">{h.description}</p>
    <ThreeDViewer house={h} compact className="my-6 h-[320px] w-full" />
    <div className="my-6 flex flex-wrap gap-2 text-sm">
      <button className="bg-ink px-4 py-2 text-paper" onClick={() => nav(`/experience/${h.id}`)}>Enter 3D</button>
      <Link className="border border-ink/30 px-4 py-2" to={`/experience/${h.id}?mode=interior`}>View interior</Link>
      <a className="border border-ink/30 px-4 py-2" href="#plans">View floor plan</a>
      <button className="border border-ink/30 px-4 py-2" onClick={() => toggle('house', h.id)}>{inCompare('house', h.id) ? 'Remove from compare' : 'Compare'}</button>
      <a className="border border-ink/30 px-4 py-2" href="#request">Request design</a></div>
    <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">{spec.map(([k, v]) => <div key={k} className="border-t border-ink/20 pt-2"><dt className="text-xs text-ink/60">{k}</dt><dd>{v}</dd></div>)}</dl>
    <h2 className="mt-10 text-2xl">Features</h2><p className="mt-2">{h.features.join(', ')}</p>
    <h2 id="plans" className="mt-10 text-2xl">Floor plans</h2>
    <div className="mt-3"><FloorPlan house={h} /></div>
    <h2 className="mt-10 text-2xl">Interior packages</h2><div className="mt-3 grid gap-3 md:grid-cols-3">{INTERIORS.slice(0, 3).map((p) => <InteriorPackageCard key={p.id} pkg={p} />)}</div>
    <div id="request" className="mt-12"><RequestDesignForm house={h} /></div><SimilarHouses house={h} /></div>
}
