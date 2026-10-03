import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Html } from '@react-three/drei'
import ModelLoader from '../three/ModelLoader'
import ProceduralFurniture from '../three/ProceduralFurniture'
import ErrorBoundary from '../common/ErrorBoundary'
import Loader from '../common/Loader'
export default function FurnitureViewer({ product, className = 'h-72 w-full' }) {
  return <div className={`bg-gradient-to-b from-mist to-paper ${className}`}><ErrorBoundary fallback={<p className="p-6 text-sm">3D preview unavailable.</p>}>
    <Canvas shadows camera={{ position: [3.2, 2, 3.6], fov: 40 }} style={{ touchAction: 'none' }}><ambientLight intensity={0.8} /><directionalLight position={[4, 6, 3]} intensity={1.6} castShadow />
      <Suspense fallback={<Html center><Loader label="Loading model" /></Html>}><group position={[0, 0, 0]}><ModelLoader url={product.model} fallback={<ProceduralFurniture kind={product.kind} look={product.look} />} /></group></Suspense>
      <ContactShadows opacity={0.4} scale={8} blur={2.5} far={4} /><OrbitControls makeDefault autoRotate autoRotateSpeed={1.2} target={[0, 0.7, 0]} minDistance={1.5} maxDistance={8} maxPolarAngle={Math.PI / 2.05} /></Canvas></ErrorBoundary></div>
}
