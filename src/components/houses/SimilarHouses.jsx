import { HOUSES } from '../../data/houses'
import HouseGrid from './HouseGrid'
export default function SimilarHouses({ house }) {
  const l = HOUSES.filter((h) => h.id !== house.id && (h.style === house.style || h.category === house.category)).slice(0, 3)
  return <section className="mt-12"><h2 className="mb-4 text-2xl">Similar homes</h2><HouseGrid houses={l} /></section>
}
