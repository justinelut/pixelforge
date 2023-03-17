"use client"
import './globals.css'
import { Navbar, Footer } from '../components'


export default function RootLayout({ children }) {
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
