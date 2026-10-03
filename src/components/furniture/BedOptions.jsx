import FurnitureGrid from './FurnitureGrid'
import { byCategory } from '../../data/furniture'
export default function BedOptions({ q }) { return <FurnitureGrid items={byCategory('Beds')} q={q} /> }
