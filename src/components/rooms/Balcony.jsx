import RoomShell, { B, usePalette } from './parts'
export default function Balcony() {
  const p = usePalette('balcony')
  return <RoomShell room="balcony" window={false}><B p={[0, 0.5, 2.4]} s={[5.8, 1, 0.05]} c="#bfe1ee" r={0.1} m={0.3} /><B p={[-1.2, 0.3, 0]} s={[0.8, 0.6, 0.8]} c={p.wood} /><B p={[1.2, 0.3, 0]} s={[0.8, 0.6, 0.8]} c={p.wood} /><B p={[0, 0.35, 0]} s={[0.9, 0.05, 0.9]} c={p.accent} /></RoomShell>
}
