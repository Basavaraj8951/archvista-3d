import RoomShell, { B, usePalette } from './parts'
import { useExperience } from '../../context/ExperienceContext'
export default function Kitchen() {
  const p = usePalette('kitchen'); const { state } = useExperience(); const cab = state.materials.accent || p.wood
  return <RoomShell room="kitchen" window={false}><B p={[0, 0.45, -2.1]} s={[5.4, 0.9, 0.6]} c={cab} /><B p={[0, 0.93, -2.1]} s={[5.4, 0.06, 0.65]} c="#e6e3dd" r={0.2} /><B p={[0, 1.4, -2.3]} s={[5.4, 0.5, 0.02]} c={p.accent} r={0.3} />
    <B p={[0, 2.2, -2.2]} s={[5.4, 0.8, 0.35]} c={cab} /><B p={[0, 0.45, 0.3]} s={[2.4, 0.9, 0.9]} c={p.sofa} /><B p={[0, 0.93, 0.3]} s={[2.5, 0.06, 1]} c="#e6e3dd" r={0.2} />
    <B p={[2.2, 1, -2.1]} s={[0.7, 2, 0.62]} c="#9ca0a3" m={0.6} r={0.3} /></RoomShell>
}
