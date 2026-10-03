import { useExperience } from '../../context/ExperienceContext'
import { PAINTS } from '../../data/materials'
import OptionChips from './OptionChips'
export default function PaintSelector() {
  const { state, set } = useExperience(); const cur = PAINTS.find((p) => p.color === state.wallColor)?.id
  return <OptionChips label="Wall paint" options={PAINTS} value={cur} onChange={(o) => set({ wallColor: o.color })} />
}
