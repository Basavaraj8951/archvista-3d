import { useExperience } from '../../context/ExperienceContext'
import { LIGHTING } from '../../data/lighting'
import OptionChips from './OptionChips'
export default function LightingSelector() { const { state, set } = useExperience(); return <OptionChips label="Lighting" options={LIGHTING} value={state.lighting} onChange={(o) => set({ lighting: o.id })} /> }
