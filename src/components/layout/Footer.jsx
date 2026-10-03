import { Link } from 'react-router-dom'
import { Instagram, Youtube, Linkedin } from 'lucide-react'
export default function Footer() {
  return <footer className="mt-20 bg-ink text-paper"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
    <div><h3 className="text-xl">ARCHVISTA 3D</h3><p className="mt-2 text-sm text-paper/70">See your home. Experience the space.</p>
      <div className="mt-4 flex gap-3"><Instagram size={18} /><Youtube size={18} /><Linkedin size={18} /></div></div>
    <div><h4 className="mb-2 font-medium">Explore</h4><ul className="space-y-1 text-sm text-paper/80">{[['/houses', 'Houses'], ['/interiors', 'Interiors'], ['/furniture', 'Furniture'], ['/materials', 'Materials']].map(([t, l]) => <li key={t}><Link to={t}>{l}</Link></li>)}</ul></div>
    <div><h4 className="mb-2 font-medium">Company</h4><ul className="space-y-1 text-sm text-paper/80"><li><Link to="/about">About</Link></li><li><Link to="/contact">Contact</Link></li></ul></div>
  </div></footer>
}
