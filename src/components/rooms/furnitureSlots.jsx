import ModelLoader from '../three/ModelLoader'
import ProceduralFurniture from '../three/ProceduralFurniture'
import { FURNITURE } from '../../data/furniture'
import { ROOM_DESIGNS } from '../../data/interiors'
import { useExperience } from '../../context/ExperienceContext'
export const designIndex = (state, room) => { const l = ROOM_DESIGNS[room] || []; return state.furniture[room] ? Math.max(0, l.indexOf(state.furniture[room])) : (state.packageDesign || 0) % Math.max(1, l.length) }
// The product shown in a room slot: the customer's pick if it fits this room, otherwise the designer's default for the current design.
export function pickProduct(state, room, category) {
  const sel = FURNITURE.find((p) => p.id === state.selectedProduct)
  if (sel && sel.category === category && sel.rooms.includes(room)) return sel
  const list = FURNITURE.filter((p) => p.category === category); return list[designIndex(state, room) % list.length]
}
export function Slot({ room, category, pos, rot = 0 }) {
  const { state } = useExperience(); const p = pickProduct(state, room, category)
  return <group position={pos} rotation={[0, rot, 0]}><ModelLoader url={p.model} fallback={<ProceduralFurniture kind={p.kind} look={p.look} />} /></group>
}
