import FurnitureGrid from './FurnitureGrid'
import { byCategory } from '../../data/furniture'
export default function DiningOptions({ q }) { return <FurnitureGrid items={byCategory('Dining Tables')} q={q} /> }
