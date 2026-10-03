export const CAMERA_PRESETS = {
  front: { pos: [0, 3, 14], target: [0, 2, 0] }, back: { pos: [0, 3, -14], target: [0, 2, 0] },
  left: { pos: [-14, 3, 0], target: [0, 2, 0] }, right: { pos: [14, 3, 0], target: [0, 2, 0] },
  top: { pos: [0, 20, 0.1], target: [0, 0, 0] }, isometric: { pos: [10, 9, 10], target: [0, 1.5, 0] },
  entrance: { pos: [0, 1.6, 8], target: [0, 1.6, 0] }, garden: { pos: [-8, 2, 8], target: [0, 1, 0] },
  terrace: { pos: [4, 6, 6], target: [0, 5, 0] }
}
export const lerp = (a, b, t) => a + (b - a) * t
export const lerpVec = (a, b, t) => a.map((v, i) => lerp(v, b[i], t))
export const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
const rc = (x = 0, z = 2.3, y = 1.5) => ({ pos: [x, y, z], target: [x * 0.4, 1.1, -2] })
export const ROOM_CAMS = { living: rc(0.8), dining: rc(-0.8), kitchen: rc(0.5, 2.6), master: rc(-0.6, 2.4), bedroom2: rc(0.6, 2.4), bedroom3: rc(-0.4, 2.2),
  bathroom: rc(0, 2.2), balcony: rc(0, 3, 1.7), garden: { pos: [0, 2.2, 4.5], target: [0, 0.8, -2] } }
