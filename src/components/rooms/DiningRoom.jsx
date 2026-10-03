import RoomShell, { B, usePalette } from './parts'
import { Slot } from './furnitureSlots'
export default function DiningRoom() { const p = usePalette('dining'); return <RoomShell room="dining"><Slot room="dining" category="Dining Tables" pos={[0, 0, -0.2]} /><B p={[-2.6, 0.9, -2.2]} s={[1.2, 1.8, 0.4]} c={p.wood} /></RoomShell> }
