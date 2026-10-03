export const ROOMS = [
  { id: 'living', name: 'Living Room' }, { id: 'dining', name: 'Dining Room' }, { id: 'kitchen', name: 'Kitchen' },
  { id: 'master', name: 'Master Bedroom' }, { id: 'bedroom2', name: 'Bedroom 2' }, { id: 'bedroom3', name: 'Bedroom 3' },
  { id: 'bathroom', name: 'Bathroom' }, { id: 'balcony', name: 'Balcony' }, { id: 'garden', name: 'Garden' }]
// Walkthrough route: outside, entrance, then each room in a logical order.
const ORDER = ['living', 'dining', 'kitchen', 'bedroom2', 'master', 'bathroom', 'balcony', 'garden']
export const WALK_STEPS = [{ id: 'exterior', type: 'exterior', name: 'Exterior' }, { id: 'entrance', type: 'entrance', name: 'Entrance' },
  ...ORDER.map((r) => ({ id: r, type: 'room', room: r, name: ROOMS.find((x) => x.id === r).name }))]
