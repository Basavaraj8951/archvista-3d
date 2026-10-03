import { useEffect, useState } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { getHouse } from '../data/houses'
import { INTERIORS } from '../data/interiors'
import { ROOMS } from '../data/rooms'
import { useExperience } from '../context/ExperienceContext'
import { useTrackView } from '../hooks/useRecentlyViewed'
import useLocalStorage from '../hooks/useLocalStorage'
import EmptyState from '../components/common/EmptyState'
import ThreeDViewer from '../components/three/ThreeDViewer'
import WalkthroughController from '../components/three/WalkthroughController'
import MobileControls from '../components/three/MobileControls'
import RoomNavigator from '../components/rooms/RoomNavigator'
import FavoriteButton from '../components/favorites/FavoriteButton'
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
  const roomParam = sp.get('room'); const wantInterior = sp.get('mode') === 'interior' || !!roomParam
  useEffect(() => { if (h) set({ house: h.id, cameraMode: wantInterior ? 'interior' : 'exterior', ...(roomParam ? { room: roomParam } : {}) }) }, [h, set, wantInterior, roomParam])
  useTrackView('house', h?.id); useTrackView('room', state.cameraMode === 'interior' ? state.room : null)
  if (!h) return <EmptyState title="House not found" text="Pick a home to explore." to="/houses" cta="Browse homes" />
  const interior = state.cameraMode === 'interior'; const show = (t) => (panel === t ? '' : 'hidden md:block'); const room = ROOMS.find((r) => r.id === state.room)
  const pick = (t) => {
    if (t === 'full') { document.getElementById('viewer')?.requestFullscreen?.().catch(() => {}); return }
    if (['rooms', 'interior', 'products'].includes(t) && !interior) set({ cameraMode: 'interior' })
    setPanel(t)
  }
  const saveDesign = () => {
    const { house, room: r, interiorPackage, furniture, wallColor, flooring, lighting, curtains, materials, selectedProduct, packageDesign } = state
    setDesigns([...designs, { at: Date.now(), name: `${h.name}: ${interiorPackage.replace(/-/g, ' ')}`, state: { house, room: r, interiorPackage, furniture, wallColor, flooring, lighting, curtains, materials, selectedProduct, packageDesign, cameraMode: 'interior' } }]); setSaved(true)
  }
  return <div className="mx-auto max-w-7xl px-4 py-6 pb-24 md:pb-6"><div className="mb-3 flex items-baseline justify-between"><h1 className="text-2xl">{h.name}</h1><Link to={`/houses/${h.id}`} className="text-sm underline">Details</Link></div>
    <ThreeDViewer key={h.id} house={h} className="h-[60vh] min-h-[380px] w-full" />
    <div className="mt-3"><WalkthroughController /></div>
    {interior ? <div className="mt-4">
      <div className={`mb-3 flex-wrap items-center justify-between gap-2 ${panel === 'rooms' ? 'flex' : 'hidden md:flex'}`}><RoomNavigator /></div>
      <div className="mb-3 flex items-center gap-3"><FavoriteButton type="room" id={state.room} /><span className="text-sm">{room?.name}</span><button onClick={saveDesign} className="border border-ink/30 px-3 py-1.5 text-sm hover:border-ink">Save design</button><a href="#request-design" className="text-sm underline">Request design</a>{saved && <span role="status" className="text-sm text-moss">Saved to Favorites</span>}</div>
      <div className={`grid gap-6 lg:grid-cols-2 ${show('interior')}`}>
        <div><h2 className="mb-2 text-lg">Interior package</h2><div className="grid gap-2 sm:grid-cols-2">{INTERIORS.map((p) => <InteriorPackageCard key={p.id} pkg={p} active={state.interiorPackage === p.id} onApply={(x) => set(packagePatch(x))} />)}</div></div>
        <div><h2 className="mb-2 text-lg">Customize this room</h2><DesignOptions /><PaintSelector /><FlooringSelector /><CeilingSelector /><LightingSelector /><CurtainSelector /><MaterialSelector /></div></div>
      <div className={show('products')}><ShopThisRoom /></div></div>
      : <p className="mt-2 text-xs text-ink/60">Rooms, interior options and products unlock once you enter the home. Drag to rotate, scroll or pinch to zoom, two fingers to pan.</p>}
    <section className={`mt-8 ${show('plan')}`}><h2 className="mb-2 text-lg">Floor plan</h2><FloorPlan house={h} /></section>
    <div id="request-design" className="mt-10 hidden md:block"><RequestDesignForm house={h} /></div>
    <MobileControls panel={panel} onSelect={pick} /></div>
}
