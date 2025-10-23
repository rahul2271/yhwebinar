import Link from 'next/link'

export default function Upcoming({ params }) {
  const webinars = [
    { id: 'w1', title: 'Gut Health Essentials', date: '2025-11-20' },
    { id: 'w2', title: 'IBS Management', date: '2025-12-05' },
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold">Upcoming Webinars</h1>
      <div className="mt-4 grid gap-4">
        {webinars.map(w => (
          <div key={w.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{w.title}</h3>
              <p className="text-sm text-gray-500">{w.date}</p>
            </div>
            <Link href={`/${params.doctor}/register?webinar=${w.id}`} className="px-3 py-2 bg-blue-600 text-white rounded">Register</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
