import Link from 'next/link'
export default function WebinarCard({ webinar, doctorId }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{webinar.title}</h3>
      <p className="text-sm text-gray-500">{webinar.date}</p>
      <div className="mt-2 flex gap-2">
        <Link href={`/${doctorId}/register?webinar=${webinar.id}`} className="px-3 py-2 bg-green-600 text-white rounded">Register</Link>
        <a href="#" className="px-3 py-2 border rounded">Details</a>
      </div>
    </div>
  )
}
