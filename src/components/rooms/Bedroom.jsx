import RoomShell, { B, usePalette } from './parts'
import { Slot } from './furnitureSlots'
import { useExperience } from '../../context/ExperienceContext'
export function BedroomLayout({ room }) {
  const p = usePalette(room)
  return <RoomShell room={room}><Slot room={room} category="Beds" pos={[-0.8, 0, -1.3]} /><Slot room={room} category="Wardrobes" pos={[2.65, 0, -0.3]} rot={-Math.PI / 2} />
    {[-2.1, 0.5].map((x) => <B key={x} p={[x, 0.25, -2.2]} s={[0.4, 0.5, 0.4]} c={p.wood} />)}</RoomShell>
}
export default function Bedroom() { const { state } = useExperience(); return <BedroomLayout room={state.room} /> }
