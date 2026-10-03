import { Heart } from 'lucide-react'
import useFavorites from '../../hooks/useFavorites'
export default function FavoriteButton({ type, id, className = '' }) {
  const { isFav, toggle } = useFavorites(); const on = isFav(type, id)
  return <button aria-pressed={on} aria-label={on ? 'Remove from favorites' : 'Save to favorites'} onClick={(e) => { e.preventDefault(); toggle(type, id) }} className={`p-2 ${className}`}><Heart size={18} fill={on ? '#b8924f' : 'none'} /></button>
}
