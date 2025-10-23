"use client"
import { useSearchParams } from 'next/navigation'


export default function Confirm({ params }) {
  const searchParams = useSearchParams()
  const registrationId = searchParams.get('registrationId')

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Confirmation</h1>
      <p className="text-gray-700">Your registration is received. Registration ID: {registrationId}</p>

      <div className="space-y-2">
        <a href="#" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">Add to Calendar</a>
        <a href={`/${params.doctor}/thank-you?registrationId=${registrationId}`} className="inline-block px-4 py-2 border rounded">Continue</a>
      </div>
    </div>
  )
}
