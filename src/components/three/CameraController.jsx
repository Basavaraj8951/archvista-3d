import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { ease, lerpVec } from '../../utils/camera'
// Smoothly flies the camera and orbit target to `preset` ({pos, target, k}) over ~1.4s.
export default function CameraController({ preset, controlsRef, duration = 1.4 }) {
  const { camera } = useThree(); const a = useRef(null)
  useEffect(() => {
    if (!preset || !controlsRef.current) return
    a.current = { t: 0, p0: camera.position.toArray(), t0: controlsRef.current.target.toArray(), to: preset }
  }, [preset, camera, controlsRef])
  useFrame((_, dt) => {
    const s = a.current; if (!s || !controlsRef.current) return
    s.t = Math.min(1, s.t + dt / duration); const e = ease(s.t)
    camera.position.set(...lerpVec(s.p0, s.to.pos, e)); controlsRef.current.target.set(...lerpVec(s.t0, s.to.target, e)); controlsRef.current.update()
    if (s.t >= 1) { a.current = null; s.to.onDone?.() }
  })
  return null
}
