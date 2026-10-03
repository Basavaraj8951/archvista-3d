export const PALETTES = [{ sofa: '#2f3b36', wood: '#7a5233', accent: '#b8924f' }, { sofa: '#b08968', wood: '#9a6b43', accent: '#c9a27a' }, { sofa: '#d9d6cf', wood: '#cdb892', accent: '#8f9392' },
  { sofa: '#8a3b2e', wood: '#5b3a22', accent: '#d19a2e' }, { sofa: '#6b5d4a', wood: '#3e2d20', accent: '#b8924f' }, { sofa: '#2c3e5c', wood: '#8b5e3c', accent: '#d8c3a0' }]
export const ROOM_DESIGNS = {
  living: ['Modern Luxury', 'Warm Contemporary', 'Minimal', 'Indian Contemporary', 'Premium Classic'],
  dining: ['4-Seater Modern', '6-Seater Contemporary', '8-Seater Luxury', 'Marble Dining', 'Wooden Dining', 'Indian Contemporary'],
  kitchen: ['Modern Modular', 'Luxury Kitchen', 'Minimal White', 'Wooden Kitchen', 'Dark Contemporary', 'Premium Indian Kitchen'],
  master: ['Modern', 'Luxury', 'Minimal', 'Warm Wooden', 'Contemporary', 'Indian Modern'],
  bedroom2: ['Modern', 'Luxury', 'Minimal', 'Warm Wooden', 'Contemporary', 'Indian Modern'],
  bedroom3: ['Modern', 'Luxury', 'Minimal', 'Warm Wooden', 'Contemporary', 'Indian Modern'],
  bathroom: ['Modern', 'Luxury Marble', 'Minimal', 'Contemporary'], balcony: ['Modern'], garden: ['Modern'] }
// Each package sets wall, flooring, lighting, curtains and a design index for every room.
export const INTERIORS = [
  ['modern-luxury', 'Modern Luxury', 'Dark marble, brass and statement lighting', 'luxury-cream', 'dark-marble', 'luxury-chandelier', 'beige-luxury', 0],
  ['warm-contemporary', 'Warm Contemporary', 'Wood, sand tones and soft light', 'sand-beige', 'wood', 'warm-ambient', 'sheer-white', 1],
  ['minimal-scandinavian', 'Minimal Scandinavian', 'Pale surfaces, clean lines, daylight', 'warm-white', 'concrete', 'minimal', 'roller-blind', 2],
  ['indian-contemporary', 'Indian Contemporary', 'Rich terracotta with brass accents', 'terracotta', 'premium-beige-tiles', 'pendant', 'beige-luxury', 3],
  ['premium-classic', 'Premium Classic', 'Cream walls, light marble, chandelier', 'luxury-cream', 'light-marble', 'luxury-chandelier', 'dark-gray', 4]
].map(([id, name, blurb, wall, flooring, lighting, curtains, design]) => ({ id, name, blurb, wall, flooring, lighting, curtains, design, rooms: ['living', 'dining', 'kitchen', 'master', 'bathroom'] }))
export const getInterior = (id) => INTERIORS.find((p) => p.id === id)
