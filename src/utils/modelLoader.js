export const modelUrl = (p) => (p ? (p.startsWith('/') ? p : '/' + p) : null)
export const isModelFile = (p) => /\.(glb|gltf)$/i.test(p || '')
