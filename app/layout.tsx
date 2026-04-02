import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: '楠根の里（kusune-no-sato）｜グループホーム｜大阪府寝屋川市',
  description: '楠根の里（kusune-no-sato）は大阪府寝屋川市にある認知症対応型グループホームです。社会福祉法人秋桜福祉会が運営。温かい家庭的な雰囲気の中で、安心の介護サービスを提供しています。',
  keywords: ['楠根の里', 'kusune-no-sato', 'グループホーム', '寝屋川市', '認知症対応', '介護施設', '秋桜福祉会', '大阪府'],
  openGraph: {
    title: '楠根の里（kusune-no-sato）｜グループホーム｜大阪府寝屋川市',
    description: '楠根の里は大阪府寝屋川市にある認知症対応型グループホームです。温かい家庭的な雰囲気の中で、安心の介護サービスを提供しています。',
    locale: 'ja_JP',
    type: 'website',
  },
  verification: {
    google: 'Jvzmc0MRKX95HJJp9HJYQ72EYtUjGpRKNGxG080H-RM',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
