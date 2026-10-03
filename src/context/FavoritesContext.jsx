import { createContext, useCallback } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
export const FavoritesContext = createContext(null)
export function FavoritesProvider({ children }) {
  const [favs, setFavs] = useLocalStorage('av_favorites', { house: [], interior: [], furniture: [], product: [] })
  const isFav = useCallback((t, id) => (favs[t] || []).includes(id), [favs])
  const toggle = useCallback((t, id) => setFavs((f) => {
    const l = f[t] || []
    return { ...f, [t]: l.includes(id) ? l.filter((x) => x !== id) : [...l, id] }
  }), [setFavs])
  const count = Object.values(favs).reduce((n, l) => n + l.length, 0)
  return <FavoritesContext.Provider value={{ favs, isFav, toggle, count }}>{children}</FavoritesContext.Provider>
}
