import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Heart, Scale, Search, Menu } from 'lucide-react'
import useFavorites from '../../hooks/useFavorites'
import useCompare from '../../hooks/useCompare'
import MobileMenu from './MobileMenu'
export const LINKS = [['/', 'Home'], ['/houses', 'Houses'], ['/interiors', 'Interiors'], ['/furniture', 'Furniture'], ['/materials', 'Materials'], ['/experience/house-1', '3D Experience'], ['/about', 'About']]
export default function Navbar() {
  const [open, setOpen] = useState(false); const [q, setQ] = useState(''); const [s, setS] = useState(false)
  const { count: fc } = useFavorites(); const { count: cc } = useCompare(); const nav = useNavigate()
  const go = (e) => { e.preventDefault(); nav('/houses?q=' + encodeURIComponent(q)); setS(false) }
  return <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3">
      <Link to="/" className="font-display text-xl font-semibold">ARCHVISTA 3D</Link>
      <nav className="hidden flex-1 gap-5 text-sm lg:flex">{LINKS.map(([to, l]) => <NavLink key={l} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'text-brass' : 'hover:text-moss'}>{l}</NavLink>)}</nav>
      <div className="ml-auto flex items-center gap-3">
        {s && <form onSubmit={go}><input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search houses" className="w-40 border border-ink/30 bg-transparent px-2 py-1 text-sm" /></form>}
        <button aria-label="Search" onClick={() => setS(!s)}><Search size={18} /></button>
        <Link to="/favorites" aria-label="Favorites" className="relative"><Heart size={18} />{fc > 0 && <b className="absolute -right-2 -top-2 text-[10px]">{fc}</b>}</Link>
        <Link to="/compare" aria-label="Compare" className="relative"><Scale size={18} />{cc > 0 && <b className="absolute -right-2 -top-2 text-[10px]">{cc}</b>}</Link>
        <Link to="/contact" className="hidden text-sm underline sm:block">Contact</Link>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(true)}><Menu /></button>
      </div></div><MobileMenu open={open} onClose={() => setOpen(false)} /></header>
}
