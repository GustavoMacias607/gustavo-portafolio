import './globals.css'

export const metadata = {
  title: 'Portafolio - Gustavo',
  description: 'Portafolio personal de Gustavo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}