export default function Garden() {
  return <group><ambientLight intensity={0.8} /><directionalLight position={[5, 8, 4]} intensity={1.6} castShadow />
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[12, 8]} /><meshStandardMaterial color="#6f8f5c" roughness={1} /></mesh>
    <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[1.2, 8]} /><meshStandardMaterial color="#bdb7ab" /></mesh>
    {[[-3, -2], [3, -1.5], [-4, 1], [4, 1.5]].map(([x, z], i) => <group key={i} position={[x, 0, z]}><mesh position={[0, 0.7, 0]} castShadow><cylinderGeometry args={[0.1, 0.15, 1.4]} /><meshStandardMaterial color="#5a4030" /></mesh><mesh position={[0, 2, 0]} castShadow><sphereGeometry args={[1]} /><meshStandardMaterial color="#3f6b45" /></mesh></group>)}
    <mesh position={[2, 0.25, 0.5]} castShadow><boxGeometry args={[1.4, 0.1, 0.5]} /><meshStandardMaterial color="#8b5e3c" /></mesh></group>
}
