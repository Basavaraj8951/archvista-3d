import FurnitureGrid from './FurnitureGrid'
import { byCategory } from '../../data/furniture'
export default function TVWallOptions({ q }) { return <FurnitureGrid items={byCategory('TV Units')} q={q} /> }
