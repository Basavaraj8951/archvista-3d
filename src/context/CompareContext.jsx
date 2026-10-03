import { createContext, useCallback } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
export const CompareContext = createContext(null)
export const MAX_COMPARE = 3
export function CompareProvider({ children }) {
  const [items, setItems] = useLocalStorage('av_compare', { house: [], product: [], interior: [] })
  const inCompare = useCallback((t, id) => (items[t] || []).includes(id), [items])
  const toggle = useCallback((t, id) => setItems((c) => {
    const l = c[t] || []
    if (l.includes(id)) return { ...c, [t]: l.filter((x) => x !== id) }
    return l.length >= MAX_COMPARE ? c : { ...c, [t]: [...l, id] }
  }), [setItems])
  const isFull = (t) => (items[t] || []).length >= MAX_COMPARE
  const clear = (t) => setItems((c) => ({ ...c, [t]: [] }))
  const count = Object.values(items).reduce((n, l) => n + l.length, 0)
  return <CompareContext.Provider value={{ items, inCompare, toggle, isFull, clear, count }}>{children}</CompareContext.Provider>
}
