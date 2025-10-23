import Link from 'next/link'

export default function DoctorPage({ params }) {
  const doctorId = params.doctor
  const map = {
    'dr-suhas': 'Dr. Suhas',
    'dr-manpreet': 'Dr. Manpreet',
    'dr-yashasvi': 'Dr. Yashasvi',
  }
  const name = map[doctorId] || 'Doctor'

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-gray-600">Choose an option</p>

      <div className="flex gap-4 flex-col sm:flex-row">
        <Link href={`/${doctorId}/upcoming`} className="px-4 py-3 bg-white rounded shadow">Upcoming Webinars</Link>
        <Link href={`/${doctorId}/past`} className="px-4 py-3 bg-white rounded shadow">Past Webinars</Link>
        <Link href={`/${doctorId}/register`} className="px-4 py-3 bg-white rounded shadow">Register for Webinar</Link>
      </div>
    </div>
  )
}
