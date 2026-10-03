import { ContactShadows } from '@react-three/drei'
import HouseModel from './HouseModel'
import { Lamp } from './LightingSystem'
const Box = ({ p, s, c }) => <mesh position={p} castShadow receiveShadow><boxGeometry args={s} /><meshStandardMaterial color={c} roughness={0.8} /></mesh>
function Tree({ p, h = 3 }) { return <group position={p}><mesh position={[0, h / 4, 0]} castShadow><cylinderGeometry args={[0.12, 0.18, h / 2]} /><meshStandardMaterial color="#5a4030" /></mesh>
  <mesh position={[0, h * 0.72, 0]} castShadow><sphereGeometry args={[h * 0.32, 14, 14]} /><meshStandardMaterial color="#3f6b45" roughness={1} /></mesh></group> }
export default function ExteriorScene({ house, levelRef }) {
  const pool = house.features.some((f) => /pool/i.test(f)); const R = 12
  return <group>
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow><circleGeometry args={[40, 48]} /><meshStandardMaterial color="#6f8f5c" roughness={1} /></mesh>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} receiveShadow><planeGeometry args={[R * 2, R * 2]} /><meshStandardMaterial color="#7fa068" roughness={1} /></mesh>
    <Box p={[0, 0.03, 7.5]} s={[1.6, 0.06, 9]} c="#bdb7ab" /><Box p={[5.1, 0.03, 4.6]} s={[3.2, 0.06, 4]} c="#8d8d8d" />
    {[[0, -R, R * 2, 0.15], [-R, 0, 0.15, R * 2], [R, 0, 0.15, R * 2]].map(([x, z, w, d], i) => <Box key={i} p={[x, 0.7, z]} s={[w || 0.15, 1.4, d || 0.15]} c="#d8d4cc" />)}
    {[[-R / 2 - 1, R, R - 2], [R / 2 + 1, R, R - 2]].map(([x, z, w], i) => <Box key={i} p={[x, 0.7, z]} s={[w, 1.4, 0.15]} c="#d8d4cc" />)}
    <Box p={[-1.1, 1, R]} s={[0.4, 2, 0.4]} c="#3a3f45" /><Box p={[1.1, 1, R]} s={[0.4, 2, 0.4]} c="#3a3f45" /><Box p={[0, 0.9, R]} s={[1.8, 1.4, 0.06]} c="#2b2e31" />
    <Lamp position={[-1.1, 2.15, R]} levelRef={levelRef} max={5} /><Lamp position={[1.1, 2.15, R]} levelRef={levelRef} max={5} />
    {[[-3, 0.35, 9], [3, 0.35, 9], [-6, 0.35, 5]].map((p, i) => <Lamp key={i} position={p} levelRef={levelRef} color="#ffe0a8" max={3} />)}
    {[[-8, 0, -6], [8, 0, -7], [-9, 0, 4], [9, 0, 10], [-5, 0, -9], [0, 0, -9]].map((p, i) => <Tree key={i} p={p} h={2.8 + (i % 3) * 0.6} />)}
    {pool && <group position={[-5.5, 0, -4]}><mesh position={[0, 0.04, 0]} receiveShadow><boxGeometry args={[5, 0.08, 3]} /><meshStandardMaterial color="#d6d2c8" /></mesh>
      <mesh position={[0, 0.1, 0]}><boxGeometry args={[4.4, 0.06, 2.4]} /><meshStandardMaterial color="#47b2d6" metalness={0.3} roughness={0.1} emissive="#1d6f8c" emissiveIntensity={0.3} /></mesh></group>}
    <HouseModel house={house} levelRef={levelRef} />
    <ContactShadows position={[0, 0.05, 0]} opacity={0.4} scale={30} blur={2.5} far={10} />
  </group>
}
