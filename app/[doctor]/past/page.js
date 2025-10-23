export default function Past() {
  const past = [
    { id: 'p1', title: 'Digestive Care - Recording' },
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold">Past Webinars</h1>
      <div className="mt-4 grid gap-4">
        {past.map(p => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-500">Recording available</p>
            <a className="mt-2 inline-block text-blue-600" href="#">Watch Recording</a>
          </div>
        ))}
      </div>
    </div>
  )
}
