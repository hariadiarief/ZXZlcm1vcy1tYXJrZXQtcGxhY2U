import { AOSInit } from '@/components/aos'
import PageLoader from '@/components/page-loader'
import QueryProvider from '@/components/query-provider'
import SiteFooter from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-slate-900 antialiased dark:bg-gray-900 dark:text-slate-50`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <QueryProvider>
            <PageLoader />
            <AOSInit />

            <div className='mx-auto flex min-h-screen flex-col'>
              <SiteHeader />
              <main className='flex grow flex-col'>{children}</main>
              <SiteFooter />
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
