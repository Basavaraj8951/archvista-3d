import { Link } from 'react-router-dom'
export default function EmptyState({ title, text, to, cta }) { return <div className="mx-auto max-w-md py-20 text-center"><h2 className="text-2xl">{title}</h2><p className="mt-2 text-ink/70">{text}</p>{to && <Link to={to} className="mt-5 inline-block bg-ink px-4 py-2 text-sm text-paper">{cta}</Link>}</div> }
