import { Suspense, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import use3DModel from '../../hooks/use3DModel'
import ErrorBoundary from '../common/ErrorBoundary'
function GLB({ url, scale }) {
  const { scene } = useGLTF(url)
  const obj = useMemo(() => { const c = scene.clone(true); c.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true } }); return c }, [scene])
  return <primitive object={obj} scale={scale} />
}
// Loads a GLB/GLTF when it exists; otherwise (missing, loading, or failed) renders `fallback`. Never throws to the app.
export default function ModelLoader({ url, fallback = null, scale = 1 }) {
  const { status } = use3DModel(url)
  if (status !== 'ready') return fallback
  return <ErrorBoundary fallback={fallback || <group />}><Suspense fallback={fallback}><GLB url={url} scale={scale} /></Suspense></ErrorBoundary>
}
