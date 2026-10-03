import { useCallback, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
const MAX = 15
export default function useRecentlyViewed() {
  const [items, setItems] = useLocalStorage('av_recent', [])
  const add = useCallback((type, id) => setItems((l) => [{ type, id, at: Date.now() }, ...l.filter((x) => !(x.type === type && x.id === id))].slice(0, MAX)), [setItems])
  return { items, add, clear: () => setItems([]) }
}
// Records a view once per (type, id) when id is truthy.
export function useTrackView(type, id) {
  const { add } = useRecentlyViewed()
  useEffect(() => { if (id) add(type, id) }, [type, id, add])
}
