const hay = (h) => [h.name, h.style, h.location, h.category, ...(h.features || [])].join(' ').toLowerCase()
export function filterHouses(list, f) {
  const r = list.filter((h) =>
    (!f.q || hay(h).includes(f.q.toLowerCase())) && (!f.style || h.style === f.style) &&
    (!f.bedrooms || (f.bedrooms === 5 ? h.bedrooms >= 5 : h.bedrooms === f.bedrooms)) &&
    (!f.bathrooms || h.bathrooms >= f.bathrooms) && (!f.floors || h.floors === f.floors) &&
    (!f.plot || h.plotSize >= f.plot) && (!f.maxBudget || h.budget <= f.maxBudget))
  const s = { popular: (a, b) => b.popularity - a.popularity, newest: (a, b) => b.year - a.year,
    low: (a, b) => a.budget - b.budget, high: (a, b) => b.budget - a.budget, area: (a, b) => b.builtUpArea - a.builtUpArea }
  return r.sort(s[f.sort] || s.popular)
}
export const filterProducts = (list, { q = '', category = '' }) =>
  list.filter((p) => (!category || p.category === category) && (!q || (p.name + p.material).toLowerCase().includes(q.toLowerCase())))
