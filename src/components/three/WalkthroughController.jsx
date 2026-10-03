import { useEffect } from 'react'
import { Play, Pause, Square } from 'lucide-react'
import { useExperience } from '../../context/ExperienceContext'
import { ROOMS } from '../../data/rooms'
const ROUTE = ['living', 'dining', 'kitchen', 'master', 'bedroom2', 'bathroom', 'balcony', 'garden']
export default function WalkthroughController({ stepMs = 4500 }) {
  const { state, set } = useExperience(); const w = state.walkthrough
  useEffect(() => {
    if (w !== 'playing') return
    const t = setInterval(() => { const i = ROUTE.indexOf(state.room); if (i >= ROUTE.length - 1) set({ walkthrough: 'stopped' }); else set({ room: ROUTE[i + 1] }) }, stepMs)
    return () => clearInterval(t)
  }, [w, state.room, set, stepMs])
  const start = () => set({ walkthrough: 'playing', room: ROUTE[0], cameraMode: 'interior' })
  const B = ({ onClick, children }) => <button onClick={onClick} className="flex items-center gap-1 border border-ink/30 px-3 py-1.5 text-sm hover:border-ink">{children}</button>
  return <div className="flex items-center gap-2"><span className="text-xs text-ink/60">Walkthrough{w !== 'stopped' && `: ${ROOMS.find((r) => r.id === state.room)?.name}`}</span>
    {w === 'stopped' && <B onClick={start}><Play size={14} />Start</B>}{w === 'playing' && <B onClick={() => set({ walkthrough: 'paused' })}><Pause size={14} />Pause</B>}
    {w === 'paused' && <B onClick={() => set({ walkthrough: 'playing' })}><Play size={14} />Resume</B>}{w !== 'stopped' && <B onClick={() => set({ walkthrough: 'stopped' })}><Square size={14} />Stop</B>}</div>
}
