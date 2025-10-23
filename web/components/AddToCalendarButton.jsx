export default function AddToCalendarButton({ title = 'Webinar', start = new Date().toISOString() }) {
  const startStr = new Date(start).toISOString().replace(/-|:|\.\d{3}Z/g, '')
  const href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startStr}/${startStr}`
  return (
    <a href={href} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded">Add to Google Calendar</a>
  )
}
