import { useExperience } from '../../context/ExperienceContext'
import { CURTAINS } from '../../data/materials'
import OptionChips from './OptionChips'
export default function CurtainSelector() { const { state, set } = useExperience(); return <OptionChips label="Curtains" options={CURTAINS} value={state.curtains} onChange={(o) => set({ curtains: o.id })} /> }
