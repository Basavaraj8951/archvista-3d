import FurnitureGrid from './FurnitureGrid'
import { byCategory } from '../../data/furniture'
export default function WardrobeOptions({ q }) { return <FurnitureGrid items={byCategory('Wardrobes')} q={q} /> }
