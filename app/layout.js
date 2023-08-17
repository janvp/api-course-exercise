import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Webshop',
  description: 'Webshop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="refresh" content="5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
