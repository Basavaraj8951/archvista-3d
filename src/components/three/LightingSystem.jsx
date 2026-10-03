import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { lerp } from '../../utils/camera'
export function Lamp({ position, levelRef, color = '#ffd9a0', max = 6 }) {
  const l = useRef(); const m = useRef()
  useFrame(() => { const v = levelRef.current; if (l.current) l.current.intensity = v * max; if (m.current) m.current.emissiveIntensity = 0.2 + v * 3 })
  return <group position={position}><mesh><sphereGeometry args={[0.12, 12, 12]} /><meshStandardMaterial ref={m} color="#fff" emissive={color} /></mesh><pointLight ref={l} color={color} distance={7} intensity={0} /></group>
}
export default function LightingSystem({ levelRef }) {
  const amb = useRef(); const sun = useRef()
  useFrame(() => { const v = levelRef.current; amb.current.intensity = lerp(0.45, 0.15, v); sun.current.intensity = lerp(2.4, 0.2, v); sun.current.color.set(v > 0.5 ? '#8fa8ff' : '#fff4e0') })
  return <>
    <ambientLight ref={amb} />
    <directionalLight ref={sun} position={[12, 16, 8]} castShadow shadow-mapSize={[2048, 2048]} shadow-camera-left={-20} shadow-camera-right={20} shadow-camera-top={20} shadow-camera-bottom={-20} />
    <Environment resolution={128}><Lightformer intensity={2} position={[0, 8, 0]} scale={[20, 20, 1]} rotation-x={Math.PI / 2} /><Lightformer intensity={1} position={[-10, 3, 6]} scale={[10, 6, 1]} /></Environment>
  </>
}
