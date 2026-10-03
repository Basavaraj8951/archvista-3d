import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { HOUSES } from '../data/houses'
import { filterHouses } from '../utils/filters'
import HouseFilters from '../components/houses/HouseFilters'
import HouseGrid from '../components/houses/HouseGrid'
export default function Houses() {
  const [sp] = useSearchParams()
  const [f, setF] = useState({ q: sp.get('q') || '', style: '', bedrooms: '', bathrooms: '', floors: '', plot: '', maxBudget: '', sort: 'popular' })
  const list = useMemo(() => filterHouses(HOUSES, f), [f])
  return <div className="mx-auto max-w-7xl px-4 py-10"><h1 className="mb-5 text-4xl">Houses</h1><HouseFilters f={f} setF={setF} />
    <p className="my-4 text-sm text-ink/70">{list.length} homes</p><HouseGrid houses={list} /></div>
}
