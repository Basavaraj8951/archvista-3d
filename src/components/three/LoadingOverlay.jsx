import { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'
export default function LoadingOverlay() {
  const { active, progress } = useProgress(); const [show, setShow] = useState(true)
  useEffect(() => { if (active) { setShow(true); return } const t = setTimeout(() => setShow(false), 700); return () => clearTimeout(t) }, [active])
  const msg = progress < 35 ? 'Loading model...' : progress < 70 ? 'Loading materials...' : 'Preparing interior...'
  return <div aria-live="polite" className={`pointer-events-none absolute inset-0 z-10 grid place-items-center bg-ink text-paper transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
    <div className="w-56 text-center"><p className="text-xs tracking-[0.25em]">LOADING YOUR SPACE...</p><div className="mt-4 h-px w-full bg-paper/20"><div className="h-px bg-brass transition-all" style={{ width: `${active ? progress : 100}%` }} /></div><p className="mt-3 text-xs text-paper/60">{msg}</p></div></div>
}
