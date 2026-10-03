import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { RotateCw, Maximize, Minimize, Sun, Moon, RefreshCw } from 'lucide-react'
import { useExperience } from '../../context/ExperienceContext'
import { CAMERA_PRESETS } from '../../utils/camera'
import ErrorBoundary from '../common/ErrorBoundary'
import Loader from '../common/Loader'
import DayNightController from './DayNightController'
import LightingSystem from './LightingSystem'
import ExteriorScene from './ExteriorScene'
import CameraController from './CameraController'
import CameraPresets from './CameraPresets'
const Btn = ({ on, label, ...p }) => <button aria-label={label} title={label} aria-pressed={on} className={`p-2 ${on ? 'bg-brass text-ink' : 'bg-ink/70 text-paper hover:bg-moss'}`} {...p} />
export default function ThreeDViewer({ house, compact = false, className = '' }) {
  const { state, set } = useExperience(); const night = state.dayNight === 'night'
  const [auto, setAuto] = useState(compact); const [preset, setPreset] = useState(null); const [active, setActive] = useState('isometric'); const [full, setFull] = useState(false)
  const wrap = useRef(); const controls = useRef(); const level = useRef(night ? 1 : 0)
  const go = (k) => { setActive(k); setPreset({ ...CAMERA_PRESETS[k], k: Date.now() }) }
  const fs = async () => { try { if (document.fullscreenElement) { await document.exitFullscreen(); setFull(false) } else { await wrap.current.requestFullscreen(); setFull(true) } } catch { /* unsupported */ } }
  return <div ref={wrap} className={`relative bg-ink ${className}`}>
    <ErrorBoundary fallback={<div className="grid h-full place-items-center p-6 text-center text-paper">The 3D view could not start on this device.</div>}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: CAMERA_PRESETS.isometric.pos, fov: 45 }} style={{ touchAction: 'none' }}>
        <Suspense fallback={<Html center><Loader label="Loading 3D" /></Html>}>
          <DayNightController night={night} levelRef={level} /><LightingSystem levelRef={level} /><ExteriorScene house={house} levelRef={level} />
        </Suspense>
        <OrbitControls ref={controls} makeDefault enableDamping autoRotate={auto} autoRotateSpeed={0.9} maxPolarAngle={Math.PI / 2.05} minDistance={4} maxDistance={40} />
        <CameraController preset={preset} controlsRef={controls} />
      </Canvas></ErrorBoundary>
    <div className="absolute right-2 top-2 flex gap-1">
      <Btn label="Auto rotate" on={auto} onClick={() => setAuto(!auto)}><RotateCw size={16} /></Btn>
      <Btn label={night ? 'Switch to day' : 'Switch to night'} on={night} onClick={() => set({ dayNight: night ? 'day' : 'night' })}>{night ? <Moon size={16} /> : <Sun size={16} />}</Btn>
      <Btn label="Reset view" onClick={() => go('isometric')}><RefreshCw size={16} /></Btn>
      <Btn label="Fullscreen" on={full} onClick={fs}>{full ? <Minimize size={16} /> : <Maximize size={16} />}</Btn></div>
    {!compact && <div className="absolute inset-x-2 bottom-2"><CameraPresets onSelect={go} active={active} /></div>}
  </div>
}
