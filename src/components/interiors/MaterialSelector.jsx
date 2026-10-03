import { useExperience } from '../../context/ExperienceContext'
import { MATERIALS } from '../../data/materials'
import OptionChips from './OptionChips'
export default function MaterialSelector() {
  const { state, set } = useExperience(); const cur = MATERIALS.find((m) => m.color === state.materials.accent)?.id
  return <OptionChips label="Accent material (feature wall, cabinets)" options={MATERIALS} value={cur} onChange={(o) => set({ materials: { ...state.materials, accent: o.color } })} />
}
