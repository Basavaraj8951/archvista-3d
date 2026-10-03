import { useEffect, useState } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { getHouse } from '../data/houses'
import { INTERIORS } from '../data/interiors'
import { useExperience } from '../context/ExperienceContext'
import useLocalStorage from '../hooks/useLocalStorage'
import EmptyState from '../components/common/EmptyState'
import ThreeDViewer from '../components/three/ThreeDViewer'
import WalkthroughController from '../components/three/WalkthroughController'
import MobileControls from '../components/three/MobileControls'
import RoomNavigator from '../components/rooms/RoomNavigator'
import FloorPlan from '../components/houses/FloorPlan'
import RequestDesignForm from '../components/forms/RequestDesignForm'
import ShopThisRoom from '../components/products/ShopThisRoom'
import DesignOptions from '../components/interiors/DesignOptions'
import PaintSelector from '../components/interiors/PaintSelector'
import FlooringSelector from '../components/interiors/FlooringSelector'
import CeilingSelector from '../components/interiors/CeilingSelector'
import LightingSelector from '../components/interiors/LightingSelector'
import CurtainSelector from '../components/interiors/CurtainSelector'
import MaterialSelector from '../components/interiors/MaterialSelector'
import InteriorPackageCard, { packagePatch } from '../components/interiors/InteriorPackageCard'
export default function Experience() {
  const { id } = useParams(); const [sp] = useSearchParams(); const h = getHouse(id); const { state, set } = useExperience()
  const [panel, setPanel] = useState('3d'); const [designs, setDesigns] = useLocalStorage('av_designs', []); const [saved, setSaved] = useState(false)
  useEffect(() => { if (h) set({ house: h.id, cameraMode: sp.get('mode') === 'interior' ? 'interior' : 'exterior' }) }, [h, set, sp])
  if (!h) return <EmptyState title="House not found" text="Pick a home to explore." to="/houses" cta="Browse homes" />
  const interior = state.cameraMode === 'interior'
  const show = (t) => (panel === t ? '' : 'hidden lg:block')
  const pick = (t) => {
    if (t === 'full') { document.getElementById('viewer')?.requestFullscreen?.().catch(() => {}); return }
    if (['rooms', 'interior', 'products'].includes(t) && !interior) set({ cameraMode: 'interior' })
    setPanel(t)
  }
  const saveDesign = () => {
    const { house, room, interiorPackage, furniture, wallColor, flooring, lighting, curtains, materials, selectedProduct, packageDesign } = state
    setDesigns([...designs, { at: Date.now(), name: `${h.name}: ${interiorPackage.replace(/-/g, ' ')}`, state: { house, room, interiorPackage, furniture, wallColor, flooring, lighting, curtains, materials, selectedProduct, packageDesign, cameraMode: 'interior' } }]); setSaved(true)
  }
  return <div className="mx-auto max-w-7xl px-4 py-6 pb-24 lg:pb-6"><div className="mb-3 flex items-baseline justify-between"><h1 className="text-2xl">{h.name}</h1><Link to={`/houses/${h.id}`} className="text-sm underline">Details</Link></div>
    <ThreeDViewer key={h.id} house={h} className="h-[60vh] min-h-[380px] w-full" />
    {interior ? <div className="mt-4">
      <div className={`mb-3 flex-wrap items-center justify-between gap-2 ${panel === 'rooms' ? 'flex' : 'hidden lg:flex'}`}><RoomNavigator /><WalkthroughController /></div>
      <div className="mb-3 flex items-center gap-3"><button onClick={saveDesign} className="border border-ink/30 px-3 py-1.5 text-sm hover:border-ink">Save design</button><a href="#request-design" className="text-sm underline">Request design</a>{saved && <span role="status" className="text-sm text-moss">Saved to Favorites</span>}</div>
      <div className={`grid gap-6 lg:grid-cols-2 ${show('interior')}`}>
        <div><h2 className="mb-2 text-lg">Interior package</h2><div className="grid gap-2 sm:grid-cols-2">{INTERIORS.map((p) => <InteriorPackageCard key={p.id} pkg={p} active={state.interiorPackage === p.id} onApply={(x) => set(packagePatch(x))} />)}</div></div>
        <div><h2 className="mb-2 text-lg">Customize this room</h2><DesignOptions /><PaintSelector /><FlooringSelector /><CeilingSelector /><LightingSelector /><CurtainSelector /><MaterialSelector /></div></div>
      <div className={show('products')}><ShopThisRoom /></div></div>
      : <p className="mt-2 text-xs text-ink/60">Rooms, interior options and products unlock once you enter the home. Drag to rotate, scroll or pinch to zoom, two fingers to pan.</p>}
    <section className={`mt-8 ${show('plan')}`}><h2 className="mb-2 text-lg">Floor plan</h2><FloorPlan house={h} /></section>
    <div id="request-design" className="mt-10 hidden lg:block"><RequestDesignForm house={h} /></div>
    <MobileControls panel={panel} onSelect={pick} /></div>
}
