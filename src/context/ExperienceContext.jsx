import { createContext, useContext, useReducer, useCallback, useMemo } from 'react'
const initial = { house: null, room: 'living', interiorPackage: 'modern-luxury', furniture: {}, wallColor: '#f2ede4',
  flooring: 'wood', lighting: 'warm-ambient', curtains: 'sheer-white', materials: {}, dayNight: 'day',
  cameraMode: 'exterior', walkthrough: 'stopped', selectedProduct: null }
const reducer = (s, a) => (a.type === 'set' ? { ...s, ...a.patch } : a.type === 'reset' ? initial : s)
const Ctx = createContext(null)
export function ExperienceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)
  const set = useCallback((patch) => dispatch({ type: 'set', patch }), [])
  const reset = useCallback(() => dispatch({ type: 'reset' }), [])
  const value = useMemo(() => ({ state, set, reset }), [state, set, reset])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export const useExperience = () => useContext(Ctx)
