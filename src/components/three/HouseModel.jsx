import { useMemo } from 'react'
import { Lamp } from './LightingSystem'
import ModelLoader from './ModelLoader'
const PALETTE = { Modern: ['#e9e6df', '#3a3f45'], Luxury: ['#f1ede4', '#6b5a42'], Contemporary: ['#d7d3cb', '#2f3b36'], Traditional: ['#d9b48a', '#7a3f2a'], Minimal: ['#9a9c9a', '#444'],
  Farmhouse: ['#f3f1ec', '#4c4a47'], Tropical: ['#e8dcc4', '#5b4a35'], Kerala: ['#f0e6d2', '#8a4b32'] }
const SLOPED = ['Traditional', 'Farmhouse', 'Tropical', 'Kerala']
const FH = 3, W = 7, D = 5
function Box({ p, s, c, ...r }) { return <mesh position={p} castShadow receiveShadow {...r}><boxGeometry args={s} /><meshStandardMaterial color={c} roughness={0.7} /></mesh> }
function Win({ p, levelRef }) { return <Box p={p} s={[1.1, 1.2, 0.08]} c="#9ec4d4" metalness={0.6} roughness={0.1} /> }
export function ProceduralHouse({ house, levelRef }) {
  const [wall, accent] = PALETTE[house.style] || PALETTE.Modern; const f = Math.min(house.floors, 3); const sloped = SLOPED.includes(house.style)
  const wins = useMemo(() => { const w = []; for (let i = 0; i < f; i++) for (const x of [-2.3, 2.3]) w.push([x, i * FH + 1.8, D / 2 + 0.03]); return w }, [f])
  const top = f * FH
  return <group>
    {Array.from({ length: f }, (_, i) => <Box key={i} p={[0, i * FH + FH / 2, 0]} s={i === 0 ? [W, FH, D] : [W - 1, FH, D]} c={i % 2 ? accent : wall} />)}
    {sloped ? <mesh position={[0, top + 1.1, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[W * 0.78, 2.2, 4]} /><meshStandardMaterial color={accent} /></mesh>
      : <Box p={[0, top + 0.15, 0]} s={[W + 0.6, 0.3, D + 0.6]} c={accent} />}
    {wins.map((p, i) => <Win key={i} p={p} levelRef={levelRef} />)}
    <Box p={[0, 1.1, D / 2 + 0.04]} s={[1.1, 2.2, 0.08]} c={accent} />
    {f > 1 && <><Box p={[0, FH, D / 2 + 0.7]} s={[2.4, 0.15, 1.4]} c="#cfcac0" /><Box p={[0, FH + 0.5, D / 2 + 1.35]} s={[2.4, 0.9, 0.05]} c="#8fb5c4" transparent opacity={0.5} /></>}
    <Box p={[W / 2 + 1.6, 1.2, 0.2]} s={[3.2, 2.4, D - 0.4]} c={wall} /><Box p={[W / 2 + 1.6, 1.0, D / 2 - 0.15]} s={[2.6, 2, 0.06]} c="#2b2e31" />
    <Lamp position={[-0.9, 2.5, D / 2 + 0.3]} levelRef={levelRef} /><Lamp position={[0.9, 2.5, D / 2 + 0.3]} levelRef={levelRef} />
    {f > 1 && <Lamp position={[0, FH + 1.2, D / 2 + 1.4]} levelRef={levelRef} color="#ffe8c0" max={4} />}
  </group>
}
export default function HouseModel({ house, levelRef }) {
  return <ModelLoader url={house.exteriorModel} fallback={<ProceduralHouse house={house} levelRef={levelRef} />} />
}
