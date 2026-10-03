import { useState, useEffect } from 'react'
import { load, save } from '../utils/storage'
export default function useLocalStorage(key, initial) {
  const [v, setV] = useState(() => load(key, initial))
  useEffect(() => save(key, v), [key, v])
  return [v, setV]
}
