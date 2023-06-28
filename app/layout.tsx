import '@styles/globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: '1',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
