import { useExperience } from '../../context/ExperienceContext'
import { FLOORING } from '../../data/materials'
import OptionChips from './OptionChips'
export default function FlooringSelector() { const { state, set } = useExperience(); return <OptionChips label="Flooring" options={FLOORING} value={state.flooring} onChange={(o) => set({ flooring: o.id })} /> }
