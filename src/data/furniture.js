// [id, name, category, price INR, material, colorName, dimensions, model file, look {color, wood, v}]
const ROWS = [
['sofa-modern-l', 'Modern L-Shape Sofa', 'Sofas', 185000, 'Premium fabric', 'Charcoal', '280 x 160 x 85 cm', 'modern-sofa', { color: '#2f3b36', wood: '#222', v: 'l' }],
['sofa-premium-fabric', 'Premium Fabric Sofa', 'Sofas', 125000, 'Bouclé fabric', 'Sand', '230 x 95 x 82 cm', 'modern-sofa', { color: '#b08968', wood: '#222', v: 'plain' }],
['sofa-minimal-3', 'Minimal 3-Seater', 'Sofas', 78000, 'Linen', 'Light grey', '210 x 90 x 78 cm', 'modern-sofa', { color: '#d9d6cf', wood: '#8b5e3c', v: 'plain' }],
['sofa-luxury-sectional', 'Luxury Sectional', 'Sofas', 340000, 'Velvet', 'Deep teal', '320 x 100 x 85 cm', 'luxury-sofa', { color: '#1f4a50', wood: '#b8924f', v: 'sectional' }],
['sofa-curved', 'Contemporary Curved Sofa', 'Sofas', 265000, 'Bouclé fabric', 'Ivory', '260 x 110 x 80 cm', 'luxury-sofa', { color: '#efe8da', wood: '#222', v: 'curved' }],
['dining-4', '4-Seater Modern Dining', 'Dining Tables', 62000, 'Engineered wood', 'Walnut', '140 x 90 x 75 cm', 'dining-table', { color: '#7a5233', wood: '#3e2d20', v: 4 }],
['dining-6', '6-Seater Contemporary Dining', 'Dining Tables', 98000, 'Oak veneer', 'Natural oak', '190 x 90 x 75 cm', 'dining-table', { color: '#c8a77a', wood: '#7a5233', v: 6 }],
['dining-8', '8-Seater Luxury Dining', 'Dining Tables', 235000, 'Solid walnut', 'Dark walnut', '250 x 100 x 76 cm', 'dining-table', { color: '#4a3223', wood: '#2a1c12', v: 8 }],
['dining-wood', 'Modern Wooden Dining', 'Dining Tables', 88000, 'Teak', 'Honey teak', '180 x 90 x 75 cm', 'dining-table', { color: '#a9753f', wood: '#6b4423', v: 6 }],
['dining-marble', 'Marble Dining', 'Dining Tables', 195000, 'Marble and steel', 'White marble', '190 x 95 x 76 cm', 'dining-table', { color: '#e8e5df', wood: '#b8924f', v: 6 }],
['dining-luxury', 'Luxury Dining', 'Dining Tables', 280000, 'Marble and brass', 'Nero', '250 x 100 x 76 cm', 'dining-table', { color: '#2d2d30', wood: '#b8924f', v: 8 }],
['bed-king', 'Modern King Bed', 'Beds', 145000, 'Engineered wood', 'Walnut', '200 x 180 x 110 cm', 'bed', { color: '#6d6458', wood: '#7a5233', v: 'king' }],
['bed-uph', 'Luxury Upholstered Bed', 'Beds', 210000, 'Velvet', 'Champagne', '210 x 190 x 140 cm', 'bed', { color: '#cdb590', wood: '#b8924f', v: 'uph' }],
['bed-wood', 'Wooden Bed', 'Beds', 98000, 'Solid sheesham', 'Warm brown', '205 x 175 x 100 cm', 'bed', { color: '#e8e2d6', wood: '#8b5e3c', v: 'wood' }],
['bed-platform', 'Minimal Platform Bed', 'Beds', 72000, 'Oak veneer', 'Light oak', '200 x 170 x 85 cm', 'bed', { color: '#f0ece4', wood: '#cdb892', v: 'platform' }],
['bed-designer', 'Premium Designer Bed', 'Beds', 320000, 'Leather and brass', 'Cognac', '215 x 200 x 160 cm', 'bed', { color: '#8a4b2e', wood: '#3e2d20', v: 'designer' }],
['wardrobe-sliding', 'Sliding Wardrobe', 'Wardrobes', 110000, 'Laminate', 'Ash grey', '240 x 60 x 220 cm', 'wardrobe', { color: '#9a9c9a', wood: '#d6d3cc', v: 'sliding' }],
['wardrobe-walkin', 'Walk-in Wardrobe', 'Wardrobes', 290000, 'Plywood, matte finish', 'Warm white', '300 x 60 x 230 cm', 'wardrobe', { color: '#efe8da', wood: '#cdb892', v: 'walkin' }],
['wardrobe-wood', 'Wooden Wardrobe', 'Wardrobes', 135000, 'Solid teak', 'Teak', '180 x 60 x 220 cm', 'wardrobe', { color: '#8b5e3c', wood: '#6b4423', v: 'wood' }],
['wardrobe-glass', 'Modern Glass Wardrobe', 'Wardrobes', 175000, 'Glass and aluminium', 'Smoked glass', '210 x 60 x 220 cm', 'wardrobe', { color: '#4b5560', wood: '#2b2e31', v: 'glass' }],
['wardrobe-luxury', 'Luxury Wardrobe', 'Wardrobes', 340000, 'Veneer and brass', 'Walnut', '240 x 62 x 230 cm', 'wardrobe', { color: '#5b3a22', wood: '#b8924f', v: 'luxury' }],
['tv-modern', 'Modern TV Wall', 'TV Units', 95000, 'Laminate', 'Warm grey', '240 x 40 x 220 cm', 'tv-unit', { color: '#8f9392', wood: '#3a3f45', v: 'modern' }],
['tv-wood', 'Wooden TV Wall', 'TV Units', 120000, 'Walnut veneer', 'Walnut', '240 x 40 x 220 cm', 'tv-unit', { color: '#7a5233', wood: '#4a3223', v: 'wood' }],
['tv-marble', 'Marble TV Wall', 'TV Units', 210000, 'Italian marble', 'Statuario', '260 x 40 x 240 cm', 'tv-unit', { color: '#e8e5df', wood: '#2d2d30', v: 'marble' }],
['tv-minimal', 'Minimal TV Wall', 'TV Units', 65000, 'Matte laminate', 'White', '200 x 35 x 200 cm', 'tv-unit', { color: '#f2f0ea', wood: '#cdb892', v: 'minimal' }],
['tv-luxury', 'Luxury TV Wall', 'TV Units', 285000, 'Marble and brass', 'Nero', '280 x 40 x 250 cm', 'tv-unit', { color: '#2d2d30', wood: '#b8924f', v: 'luxury' }],
['tv-floating', 'Floating TV Unit', 'TV Units', 54000, 'Oak veneer', 'Light oak', '180 x 35 x 190 cm', 'tv-unit', { color: '#d8c3a0', wood: '#cdb892', v: 'floating' }]]
const ROOM = { Sofas: 'living', 'TV Units': 'living', 'Dining Tables': 'dining', Beds: 'master', Wardrobes: 'master' }
const KIND = { Sofas: 'sofa', 'TV Units': 'tv', 'Dining Tables': 'dining', Beds: 'bed', Wardrobes: 'wardrobe' }
export const FURNITURE = ROWS.map(([id, name, category, price, material, color, dimensions, m, look]) => ({
  id, name, category, price, material, color, dimensions, room: ROOM[category], kind: KIND[category],
  rooms: ROOM[category] === 'master' ? ['master', 'bedroom2', 'bedroom3'] : [ROOM[category]],
  model: `/models/furniture/${m}.glb`, image: `/images/furniture/${id}.jpg`, look,
  description: `${name}: ${material.toLowerCase()} in ${color.toLowerCase()}, ${dimensions}. Designed for the ${ROOM[category]} room.` }))
export const byCategory = (c) => FURNITURE.filter((f) => f.category === c)
