import type { Metadata } from 'next'
import './ui/css/index.css'

export const metadata: Metadata = {
  title: 'Animal Tunes',
  description: 'Make animal loops by bashing the keyboard.',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
          <body>
              <div id="root">{children}</div>
          </body>
      </html>
  )
}