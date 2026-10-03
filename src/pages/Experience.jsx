import { useEffect } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { getHouse } from '../data/houses'
import { INTERIORS } from '../data/interiors'
import { useExperience } from '../context/ExperienceContext'
import EmptyState from '../components/common/EmptyState'
import ThreeDViewer from '../components/three/ThreeDViewer'
import WalkthroughController from '../components/three/WalkthroughController'
import RoomNavigator from '../components/rooms/RoomNavigator'
import DesignOptions from '../components/interiors/DesignOptions'
import PaintSelector from '../components/interiors/PaintSelector'
import FlooringSelector from '../components/interiors/FlooringSelector'
import CeilingSelector from '../components/interiors/CeilingSelector'
import LightingSelector from '../components/interiors/LightingSelector'
import CurtainSelector from '../components/interiors/CurtainSelector'
import MaterialSelector from '../components/interiors/MaterialSelector'
import ShopThisRoom from '../components/products/ShopThisRoom'
import InteriorPackageCard, { packagePatch } from '../components/interiors/InteriorPackageCard'
export default function Experience() {
  const { id } = useParams(); const [sp] = useSearchParams(); const h = getHouse(id); const { state, set } = useExperience()
  useEffect(() => { if (h) set({ house: h.id, cameraMode: sp.get('mode') === 'interior' ? 'interior' : 'exterior' }) }, [h, set, sp])
  if (!h) return <EmptyState title="House not found" text="Pick a home to explore." to="/houses" cta="Browse homes" />
  const interior = state.cameraMode === 'interior'
  return <div className="mx-auto max-w-7xl px-4 py-6"><div className="mb-3 flex items-baseline justify-between"><h1 className="text-2xl">{h.name}</h1><Link to={`/houses/${h.id}`} className="text-sm underline">Details</Link></div>
    <ThreeDViewer key={h.id} house={h} className="h-[60vh] min-h-[380px] w-full" />
    {interior ? <div className="mt-4"><div className="mb-3 flex flex-wrap items-center justify-between gap-2"><RoomNavigator /><WalkthroughController /></div>
      <div className="grid gap-6 lg:grid-cols-2"><div><h2 className="mb-2 text-lg">Interior package</h2><div className="grid gap-2 sm:grid-cols-2">{INTERIORS.map((p) => <InteriorPackageCard key={p.id} pkg={p} active={state.interiorPackage === p.id} onApply={(x) => set(packagePatch(x))} />)}</div></div>
        <div><h2 className="mb-2 text-lg">Customize this room</h2><DesignOptions /><PaintSelector /><FlooringSelector /><CeilingSelector /><LightingSelector /><CurtainSelector /><MaterialSelector /></div></div><ShopThisRoom /></div>
      : <p className="mt-2 text-xs text-ink/60">Drag to rotate, scroll or pinch to zoom, two fingers to pan. Press Enter home to walk inside.</p>}</div>
}
