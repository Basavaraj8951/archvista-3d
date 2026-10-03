import { useNavigate } from 'react-router-dom'
import { useExperience } from '../../context/ExperienceContext'
// Places the product in its predefined slot in the matching room and opens the 3D interior. Customers inspect; they never drag it.
export default function ViewInRoom({ product, className = 'bg-ink px-3 py-2 text-xs text-paper hover:bg-moss', children = 'View in room' }) {
  const { state, set } = useExperience(); const nav = useNavigate()
  return <button className={className} onClick={() => { set({ selectedProduct: product.id, room: product.room, cameraMode: 'interior' }); nav(`/experience/${state.house || 'house-1'}?mode=interior`) }}>{children}</button>
}
