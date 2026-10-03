import FurnitureGrid from './FurnitureGrid'
import { byCategory } from '../../data/furniture'
export default function SofaOptions({ q }) { return <FurnitureGrid items={byCategory('Sofas')} q={q} /> }
