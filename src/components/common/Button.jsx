const V = { primary: 'bg-ink text-paper hover:bg-moss', ghost: 'border border-ink/30 hover:bg-ink hover:text-paper', brass: 'bg-brass text-ink hover:brightness-110' }
export default function Button({ variant = 'primary', className = '', as: As = 'button', ...p }) {
  return <As className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition ${V[variant]} ${className}`} {...p} />
}
