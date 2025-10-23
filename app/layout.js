import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Yukti Herbs Webinars',
  description: 'Webinar platform for Yukti Herbs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">Yukti Herbs Webinars</Link>
            <nav className="space-x-4">
              <Link href="/">Home</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t py-6 text-center text-sm text-gray-600">© Yukti Herbs</footer>
      </body>
    </html>
  )
}
