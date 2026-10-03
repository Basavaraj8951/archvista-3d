import { X } from 'lucide-react'
import { useEffect } from 'react'
export default function Modal({ open, onClose, title, children }) {
  useEffect(() => { const f = (e) => e.key === 'Escape' && onClose(); if (open) window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f) }, [open, onClose])
  if (!open) return null
  return <div className="fixed inset-0 z-50 grid place-items-center bg-ink/60 p-4" onClick={onClose}>
    <div role="dialog" aria-label={title} className="max-h-[90vh] w-full max-w-4xl overflow-auto bg-paper p-6" onClick={(e) => e.stopPropagation()}>
      <div className="mb-4 flex items-center justify-between"><h2 className="text-2xl">{title}</h2><button aria-label="Close" onClick={onClose}><X /></button></div>{children}</div></div>
}
