export default function OptionChips({ label, options, value, onChange }) {
  return <div className="mb-3"><p className="mb-1 text-xs text-ink/60">{label}</p><div className="flex flex-wrap gap-1.5">{options.map((o) =>
    <button key={o.id} aria-pressed={value === o.id} onClick={() => onChange(o)} className={`flex items-center gap-1.5 border px-2.5 py-1 text-xs ${value === o.id ? 'border-ink bg-ink text-paper' : 'border-ink/30 hover:border-ink'}`}>
      {o.color && <i className="inline-block h-3 w-3 border border-ink/30" style={{ background: o.color }} />}{o.name}</button>)}</div></div>
}
