import './globals.css'
import { Press_Start_2P } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const pressStart2P = Press_Start_2P({ weight: '400', subsets: ['latin'] })

export const metadata = {
    title: 'Your Name - Retro Gaming Portfolio',
    description: 'Software developer portfolio with a retro gaming twist',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="retro">
        <body className={`${pressStart2P.className} bg-base-200 text-base-content`}>
        {children}
        <Analytics />
        </body>
        </html>
    )
}

