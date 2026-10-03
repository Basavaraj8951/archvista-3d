import { useCallback } from 'react'
import { ROOMS } from '../data/rooms'
import { useExperience } from '../context/ExperienceContext'
export default function useRoomNavigation() {
  const { state, set } = useExperience()
  const i = Math.max(0, ROOMS.findIndex((r) => r.id === state.room))
  const goTo = useCallback((id) => set({ room: id }), [set])
  return { rooms: ROOMS, current: ROOMS[i], goTo,
    next: () => goTo(ROOMS[(i + 1) % ROOMS.length].id), prev: () => goTo(ROOMS[(i - 1 + ROOMS.length) % ROOMS.length].id) }
}
