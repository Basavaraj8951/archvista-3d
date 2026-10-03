import RoomShell, { B, usePalette } from './parts'
export default function Bathroom() {
  const p = usePalette('bathroom')
  return <RoomShell room="bathroom" window={false}><B p={[-1.2, 0.8, -2.1]} s={[1.4, 0.15, 0.55]} c="#f4f4f2" r={0.2} /><B p={[-1.2, 0.4, -2.1]} s={[1.3, 0.8, 0.5]} c={p.wood} /><B p={[-1.2, 1.7, -2.3]} s={[1, 1.1, 0.03]} c="#cfe5ee" r={0.05} m={0.9} />
    <B p={[1.7, 0.3, -1.6]} s={[0.8, 0.6, 1.6]} c="#f4f4f2" r={0.2} /><B p={[-2.5, 1.1, 0.8]} s={[0.04, 2.2, 1.4]} c="#bfe1ee" r={0.05} m={0.4} /></RoomShell>
}
