import { useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Color, Fog } from 'three'
// Animates levelRef.current from 0 (day) to 1 (night) and tints sky + fog.
export default function DayNightController({ night, levelRef }) {
  const { scene } = useThree()
  const c = useMemo(() => ({ day: new Color('#cfe3ee'), night: new Color('#0a1020'), tmp: new Color() }), [])
  useFrame((_, dt) => {
    levelRef.current += ((night ? 1 : 0) - levelRef.current) * Math.min(1, dt * 2.5)
    c.tmp.copy(c.day).lerp(c.night, levelRef.current)
    scene.background = c.tmp
    scene.fog = scene.fog || new Fog(c.tmp, 30, 80)
    scene.fog.color.copy(c.tmp)
  })
  return null
}
