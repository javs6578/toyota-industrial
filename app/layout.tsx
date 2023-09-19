import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Toyota | Equipos industriales',
  description: 'Contamos con Venta y Renta de Equipos Industriales para el manejo de materiales, accesorios, refacciones y servicios de mantenimiento en montacargas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
