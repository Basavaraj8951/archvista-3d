import { Link, useNavigate } from 'react-router-dom'
import useFavorites from '../../hooks/useFavorites'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useExperience } from '../../context/ExperienceContext'
import { HOUSES } from '../../data/houses'
import { FURNITURE } from '../../data/furniture'
import { INTERIORS } from '../../data/interiors'
import HouseGrid from '../houses/HouseGrid'
import ProductGrid from '../products/ProductGrid'
import InteriorPackageCard from '../interiors/InteriorPackageCard'
import EmptyState from '../common/EmptyState'
export default function FavoritesList() {
  const { favs } = useFavorites(); const [designs, setDesigns] = useLocalStorage('av_designs', []); const { set } = useExperience(); const nav = useNavigate()
  const houses = HOUSES.filter((h) => favs.house.includes(h.id)); const prods = FURNITURE.filter((p) => favs.product.includes(p.id) || favs.furniture.includes(p.id)); const pk = INTERIORS.filter((p) => favs.interior.includes(p.id))
  if (!houses.length && !prods.length && !pk.length && !designs.length) return <EmptyState title="Nothing saved yet" text="Tap the heart on any home, package or product, or save a design in the 3D experience." to="/houses" cta="Browse homes" />
  const H = ({ children }) => <h2 className="mb-3 mt-8 text-2xl">{children}</h2>
  return <div>{houses.length > 0 && <><H>Houses</H><HouseGrid houses={houses} /></>}
    {pk.length > 0 && <><H>Interior packages</H><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{pk.map((p) => <InteriorPackageCard key={p.id} pkg={p} />)}</div></>}
    {prods.length > 0 && <><H>Products</H><ProductGrid products={prods} /></>}
    {designs.length > 0 && <><H>Saved designs</H><ul className="divide-y divide-ink/10">{designs.map((d) => <li key={d.at} className="flex items-center justify-between py-2 text-sm"><span>{d.name}</span>
      <span className="flex gap-3"><button className="underline" onClick={() => { set(d.state); nav(`/experience/${d.state.house}?mode=interior`) }}>Open</button><button className="text-ink/60" onClick={() => setDesigns(designs.filter((x) => x.at !== d.at))}>Delete</button></span></li>)}</ul></>}</div>
}
