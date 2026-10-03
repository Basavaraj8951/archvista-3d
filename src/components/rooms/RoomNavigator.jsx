import useRoomNavigation from '../../hooks/useRoomNavigation'
export default function RoomNavigator() {
  const { rooms, current, goTo } = useRoomNavigation()
  return <div role="group" aria-label="Rooms" className="flex gap-1.5 overflow-x-auto pb-2">{rooms.map((r) =>
    <button key={r.id} aria-pressed={current.id === r.id} onClick={() => goTo(r.id)} className={`shrink-0 px-3 py-1.5 text-sm ${current.id === r.id ? 'bg-ink text-paper' : 'border border-ink/30 hover:border-ink'}`}>{r.name}</button>)}</div>
}
