import { useExperience } from '../../context/ExperienceContext'
import { ROOM_DESIGNS } from '../../data/interiors'
import OptionChips from './OptionChips'
export default function DesignOptions() {
  const { state, set } = useExperience(); const list = ROOM_DESIGNS[state.room] || []; const cur = state.furniture[state.room] || list[0]
  return <OptionChips label="Professional design for this room" options={list.map((n) => ({ id: n, name: n }))} value={cur} onChange={(o) => set({ furniture: { ...state.furniture, [state.room]: o.id } })} />
}
