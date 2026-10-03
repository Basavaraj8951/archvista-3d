import { useState } from 'react'
import Button from '../common/Button'
import useLocalStorage from '../../hooks/useLocalStorage'
export default function ContactForm({ title = 'Send a message', subject = '' }) {
  const [msgs, setMsgs] = useLocalStorage('av_messages', []); const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); const d = Object.fromEntries(new FormData(e.target)); setMsgs([...msgs, { ...d, subject, at: Date.now() }]); setSent(true); e.target.reset() }
  const c = 'w-full border border-ink/30 bg-transparent p-2'
  return <form onSubmit={submit} className="grid max-w-lg gap-3"><h2 className="text-2xl">{title}</h2>
    <input required name="name" placeholder="Name" className={c} /><input required type="email" name="email" placeholder="Email" className={c} />
    <input name="phone" placeholder="Phone" className={c} /><textarea required name="message" rows={4} placeholder="How can we help?" className={c} />
    <Button type="submit">Send</Button>{sent && <p role="status" className="text-sm text-moss">Message saved. We will get back to you.</p>}</form>
}
