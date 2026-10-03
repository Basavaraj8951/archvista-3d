const B = ({ p, s, c, r = 0.7, m = 0, o = 1, ...x }) => <mesh position={p} castShadow receiveShadow {...x}><boxGeometry args={s} /><meshStandardMaterial color={c} roughness={r} metalness={m} transparent={o < 1} opacity={o} /></mesh>
const Legs = ({ pts, h, c }) => pts.map(([x, z], i) => <B key={i} p={[x, h / 2, z]} s={[0.06, h, 0.06]} c={c} />)
function Sofa({ color, wood, v }) {
  const w = v === 'sectional' ? 3.2 : v === 'plain' ? 2.1 : 2.5; const n = Math.round(w / 0.8)
  return <group><B p={[0, 0.3, 0]} s={[w, 0.4, 0.9]} c={color} r={1} />
    {v === 'curved' ? [-2, -1, 0, 1, 2].map((i) => <B key={i} p={[i * 0.5, 0.72, -0.35 + Math.abs(i) * 0.1]} s={[0.52, 0.5, 0.2]} c={color} r={1} rotation={[0, -i * 0.12, 0]} />) : <B p={[0, 0.72, -0.35]} s={[w, 0.5, 0.2]} c={color} r={1} />}
    {[-1, 1].map((s) => <B key={s} p={[s * (w / 2 + 0.1), 0.45, 0]} s={[0.2, 0.6, 0.9]} c={color} r={1} />)}
    {Array.from({ length: n }, (_, i) => <B key={i} p={[-w / 2 + (w / n) * (i + 0.5), 0.56, 0.05]} s={[w / n - 0.04, 0.16, 0.75]} c={color} r={1} />)}
    {v === 'l' && <B p={[w / 2 - 0.45, 0.3, 0.9]} s={[0.9, 0.4, 0.9]} c={color} r={1} />}
    <Legs pts={[[-w / 2, -0.4], [w / 2, -0.4], [-w / 2, 0.4], [w / 2, 0.4]]} h={0.1} c={wood} /></group>
}
function Dining({ color, wood, v }) {
  const L = v === 4 ? 1.4 : v === 6 ? 1.9 : 2.5; const n = v / 2
  return <group><B p={[0, 0.75, 0]} s={[L, 0.07, 0.9]} c={color} r={0.25} /><Legs pts={[[-L / 2 + 0.1, -0.35], [L / 2 - 0.1, -0.35], [-L / 2 + 0.1, 0.35], [L / 2 - 0.1, 0.35]]} h={0.75} c={wood} />
    {Array.from({ length: n }, (_, i) => [-1, 1].map((s) => { const x = -L / 2 + (L / n) * (i + 0.5); return <group key={i + '' + s} position={[x, 0, s * 0.7]}><B p={[0, 0.45, 0]} s={[0.45, 0.06, 0.45]} c={wood} /><B p={[0, 0.7, s * 0.22]} s={[0.45, 0.5, 0.05]} c={wood} /><Legs pts={[[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]} h={0.45} c="#222" /></group> }))}</group>
}
function Bed({ color, wood, v }) {
  const hh = { platform: 0.9, uph: 1.5, wood: 1.15, king: 1.25, designer: 1.7 }[v] || 1.2
  return <group><B p={[0, 0.2, 0]} s={[1.9, 0.4, 2.1]} c={wood} /><B p={[0, 0.5, 0.05]} s={[1.8, 0.2, 2]} c={color} r={1} /><B p={[0, hh / 2 + 0.2, -1.05]} s={[2.0, hh, 0.12]} c={v === 'uph' || v === 'designer' ? color : wood} r={v === 'uph' ? 1 : 0.6} />
    {v === 'designer' && [-1, 1].map((s) => <B key={s} p={[s * 1.05, 0.9, -0.95]} s={[0.08, 1.4, 0.3]} c={wood} m={0.8} />)}
    {[-0.5, 0.5].map((x) => <B key={x} p={[x, 0.68, -0.8]} s={[0.65, 0.16, 0.4]} c="#fff" r={1} />)}<B p={[0, 0.64, 0.5]} s={[1.8, 0.04, 1]} c={wood} r={1} /></group>
}
function Wardrobe({ color, wood, v }) {
  const w = v === 'walkin' ? 3 : v === 'sliding' ? 2.4 : 1.9; const n = Math.round(w / 0.6); const glass = v === 'glass'
  return <group><B p={[0, 1.1, 0]} s={[w, 2.2, 0.55]} c={wood} />{Array.from({ length: n }, (_, i) => { const x = -w / 2 + (w / n) * (i + 0.5); return <group key={i}>
    <B p={[x, 1.1, 0.29]} s={[w / n - 0.03, 2.1, 0.03]} c={color} o={glass ? 0.55 : 1} r={glass ? 0.1 : 0.6} m={glass ? 0.4 : 0} />{v !== 'sliding' && <B p={[x + 0.12, 1.1, 0.33]} s={[0.02, 0.4, 0.03]} c="#b8924f" m={1} r={0.2} />}</group> })}</group>
}
function TV({ color, wood, v }) {
  const fl = v === 'floating'; const mar = v === 'marble' || v === 'luxury'
  return <group>{!fl && <B p={[0, 1.2, -0.18]} s={[2.4, 2.4, 0.05]} c={color} r={mar ? 0.15 : 0.7} m={mar ? 0.1 : 0} />}
    <B p={[0, fl ? 0.55 : 0.25, 0]} s={[2, fl ? 0.3 : 0.5, 0.4]} c={fl ? color : wood} /><B p={[0, 1.5, -0.1]} s={[1.4, 0.8, 0.04]} c="#111" r={0.2} />
    {v === 'luxury' && <B p={[0, 1.2, -0.14]} s={[0.04, 2.4, 0.04]} c="#b8924f" m={1} />}</group>
}
const KINDS = { sofa: Sofa, dining: Dining, bed: Bed, wardrobe: Wardrobe, tv: TV }
// Front of every model faces +z. look = { color, wood, v }
export default function ProceduralFurniture({ kind, look }) { const K = KINDS[kind]; return K ? <K {...look} /> : null }
