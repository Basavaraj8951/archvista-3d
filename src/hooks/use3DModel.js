import { useEffect, useState } from 'react'
export default function use3DModel(url) {
  const [status, setStatus] = useState(url ? 'loading' : 'fallback')
  useEffect(() => {
    if (!url) { setStatus('fallback'); return }
    let live = true
    fetch(url, { method: 'HEAD' }).then((r) => {
      const ok = r.ok && !(r.headers.get('content-type') || '').includes('text/html')
      if (live) setStatus(ok ? 'ready' : 'fallback')
    }).catch(() => live && setStatus('fallback'))
    return () => { live = false }
  }, [url])
  return { status, useFallback: status === 'fallback' }
}
