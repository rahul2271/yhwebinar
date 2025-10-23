import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, doctor, webinar } = body
    if (!name || !email || !phone) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
    }

    const registrationId = crypto.randomBytes(6).toString('hex')

    return NextResponse.json({ registrationId, message: 'Registered' })
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
