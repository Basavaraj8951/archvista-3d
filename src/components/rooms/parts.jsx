import { useExperience } from '../../context/ExperienceContext'
import { designIndex } from './furnitureSlots'
import { PALETTES } from '../../data/interiors'
import { FLOORING } from '../../data/materials'
import { LIGHTING } from '../../data/lighting'
export const B = ({ p, s, c = '#ccc', r = 0.7, m = 0, ...x }) => <mesh position={p} castShadow receiveShadow {...x}><boxGeometry args={s} /><meshStandardMaterial color={c} roughness={r} metalness={m} /></mesh>
export function usePalette(room) { const { state } = useExperience(); return PALETTES[designIndex(state, room) % PALETTES.length] }
export function Curtain({ id, z, w = 2.6 }) {
  const y = 1.6
  if (id === 'wooden-blind') return <group>{Array.from({ length: 10 }, (_, i) => <B key={i} p={[0, 2.3 - i * 0.14, z]} s={[w, 0.1, 0.03]} c="#a37a52" />)}</group>
  if (id === 'roller-blind') return <B p={[0, 2.15, z]} s={[w, 0.9, 0.03]} c="#e8e4da" />
  const dark = id === 'dark-gray'; const col = dark ? '#4b4e52' : id === 'beige-luxury' ? '#cdb590' : '#ffffff'
  return <group>{[-1, 1].map((sd) => <mesh key={sd} position={[sd * (w / 2 - 0.25), y, z]} castShadow><boxGeometry args={[0.55, 2.4, 0.08]} /><meshStandardMaterial color={col} transparent={id === 'sheer-white'} opacity={id === 'sheer-white' ? 0.55 : 1} roughness={1} /></mesh>)}</group>
}
export function RoomLight({ id, h }) {
  const L = LIGHTING.find((l) => l.id === id) || LIGHTING[0]; const glow = <meshStandardMaterial color="#fff" emissive={L.color} emissiveIntensity={2} />
  return <group>
    <pointLight position={[0, h - 0.5, 0]} intensity={L.intensity * 6} color={L.color} distance={12} castShadow />
    {id === 'luxury-chandelier' && <group position={[0, h - 0.6, 0]}>{[0, 1, 2, 3, 4, 5].map((i) => <mesh key={i} position={[Math.cos(i) * 0.4, (i % 2) * 0.2, Math.sin(i) * 0.4]}><sphereGeometry args={[0.1]} />{glow}</mesh>)}<B p={[0, 0.5, 0]} s={[0.04, 0.5, 0.04]} c="#b8924f" m={1} /></group>}
    {id === 'pendant' && <group>{[-1.2, 1.2].map((x) => <group key={x} position={[x, h - 0.6, 0]}><B p={[0, 0.3, 0]} s={[0.03, 0.6, 0.03]} c="#222" /><mesh><coneGeometry args={[0.3, 0.3, 24]} />{glow}</mesh></group>)}</group>}
    {id === 'modern-cove' && <><B p={[0, h - 0.05, -2.3]} s={[5.8, 0.08, 0.1]} c="#fff" /><mesh position={[0, h - 0.1, -2.35]}><boxGeometry args={[5.8, 0.04, 0.05]} />{glow}</mesh></>}
    {id === 'premium-spotlights' && [-1.8, 0, 1.8].map((x) => <mesh key={x} position={[x, h - 0.03, 0]}><cylinderGeometry args={[0.08, 0.08, 0.05]} />{glow}</mesh>)}
    {id === 'minimal' && <mesh position={[0, h - 0.03, 0]}><boxGeometry args={[1.6, 0.04, 0.6]} />{glow}</mesh>}
    {id === 'warm-ambient' && <group position={[2.3, 0, 1]}><B p={[0, 0.7, 0]} s={[0.04, 1.4, 0.04]} c="#222" /><mesh position={[0, 1.5, 0]}><sphereGeometry args={[0.2]} />{glow}</mesh></group>}
  </group>
}
// Shared room shell: floor, walls, ceiling, window + curtain, feature wall, lighting. Front side stays open for the camera.
export default function RoomShell({ room, w = 6, d = 5, h = 3, children, window: win = true }) {
  const { state } = useExperience(); const pal = usePalette(room); const fl = FLOORING.find((f) => f.id === state.flooring) || FLOORING[0]
  const wall = state.wallColor; const polished = /marble|tiles/.test(fl.id)
  return <group>
    <ambientLight intensity={0.55} />
    <B p={[0, -0.05, 0]} s={[w, 0.1, d]} c={fl.color} r={polished ? 0.15 : 0.75} m={polished ? 0.1 : 0} />
    <B p={[0, h / 2, -d / 2]} s={[w, h, 0.12]} c={wall} /><B p={[-w / 2, h / 2, 0]} s={[0.12, h, d]} c={wall} /><B p={[w / 2, h / 2, 0]} s={[0.12, h, d]} c={wall} />
    <B p={[0, h + 0.05, 0]} s={[w, 0.1, d]} c={state.materials.ceiling || '#f4f2ee'} />
    {win && <><B p={[1.6, 1.6, -d / 2 + 0.07]} s={[2.2, 1.5, 0.03]} c="#bfe1ee" r={0.1} m={0.3} /><Curtain id={state.curtains} z={-d / 2 + 0.2} w={2.8} x={0} /></>}
    <B p={[-1.6, 1.4, -d / 2 + 0.08]} s={[2, 2.2, 0.05]} c={state.materials.accent || pal.wood} r={0.5} />
    <RoomLight id={state.lighting} h={h} />
    {children}
  </group>
}
