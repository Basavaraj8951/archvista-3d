import RoomShell, { B, usePalette } from './parts'
import { Slot } from './furnitureSlots'
export default function LivingRoom() {
  const p = usePalette('living')
  return <RoomShell room="living"><B p={[0, 0.01, 0.4]} s={[3.2, 0.02, 2.4]} c={p.accent} r={1} />
    <Slot room="living" category="Sofas" pos={[0, 0, 1.3]} rot={Math.PI} /><Slot room="living" category="TV Units" pos={[-1.6, 0, -2.2]} />
    <B p={[0, 0.2, 0.1]} s={[1.1, 0.4, 0.6]} c={p.wood} />
    {[[-2.6, 0, 0.5], [2.7, 0, 1.5]].map((q, i) => <group key={i} position={q}><B p={[0, 0.2, 0]} s={[0.4, 0.4, 0.4]} c="#d8d4cc" /><mesh position={[0, 0.8, 0]}><sphereGeometry args={[0.35]} /><meshStandardMaterial color="#3f6b45" /></mesh></group>)}</RoomShell>
}
