import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { LINKS } from './Navbar'
export default function MobileMenu({ open, onClose }) {
  if (!open) return null
  return <div className="fixed inset-0 z-50 bg-ink p-6 text-paper"><button aria-label="Close menu" onClick={onClose} className="mb-6"><X /></button>
    <nav className="grid gap-4 text-2xl font-display">{[...LINKS, ['/favorites', 'Favorites'], ['/compare', 'Compare'], ['/contact', 'Contact']].map(([to, l]) => <Link key={l} to={to} onClick={onClose}>{l}</Link>)}</nav></div>
}
