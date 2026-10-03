import { useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react'
import { useExperience } from '../../context/ExperienceContext'
import { WALK_STEPS } from '../../data/rooms'
const LAST = WALK_STEPS.length - 1
export default function WalkthroughController({ stepMs = 5500 }) {
  const { state, set } = useExperience(); const w = state.walkthrough; const i = state.walkStep || 0; const active = w !== 'stopped'
  useEffect(() => {
    if (w !== 'playing') return
    const t = setTimeout(() => (i >= LAST ? set({ walkthrough: 'stopped' }) : set({ walkStep: i + 1 })), stepMs)
    return () => clearTimeout(t)
  }, [w, i, set, stepMs])
  const B = ({ label, ...p }) => <button aria-label={label} title={label} className="border border-ink/30 p-2 hover:border-ink disabled:opacity-30" {...p} />
  if (!active) return <button onClick={() => set({ walkthrough: 'playing', walkStep: 0 })} className="flex items-center gap-2 border border-ink/30 px-3 py-1.5 text-sm hover:border-ink"><Play size={14} />Start walkthrough</button>
  return <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Walkthrough">
    <div className="flex gap-1"><B label="Previous" disabled={i === 0} onClick={() => set({ walkStep: i - 1 })}><SkipBack size={14} /></B>
      <B label={w === 'playing' ? 'Pause' : 'Resume'} onClick={() => set({ walkthrough: w === 'playing' ? 'paused' : 'playing' })}>{w === 'playing' ? <Pause size={14} /> : <Play size={14} />}</B>
      <B label="Next" disabled={i === LAST} onClick={() => set({ walkStep: i + 1 })}><SkipForward size={14} /></B><B label="Exit walkthrough" onClick={() => set({ walkthrough: 'stopped' })}><X size={14} /></B></div>
    <div><p className="text-xs text-ink/60">Step {i + 1} of {WALK_STEPS.length}</p><p className="font-display text-lg leading-tight">{WALK_STEPS[i].name}</p></div>
    <div className="flex gap-1" aria-hidden>{WALK_STEPS.map((s, k) => <i key={s.id} className={`h-1.5 w-4 ${k === i ? 'bg-brass' : k < i ? 'bg-ink' : 'bg-ink/20'}`} />)}</div></div>
}
