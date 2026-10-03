import { useExperience } from '../../context/ExperienceContext'
import { CEILINGS } from '../../data/materials'
import OptionChips from './OptionChips'
export default function CeilingSelector() {
  const { state, set } = useExperience(); const cur = CEILINGS.find((c) => c.color === state.materials.ceiling)?.id || 'plain-white'
  return <OptionChips label="Ceiling" options={CEILINGS} value={cur} onChange={(o) => set({ materials: { ...state.materials, ceiling: o.color } })} />
}
