import {
  ClerkProvider
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import Header from '@/components/Header'
import { currentUser } from '@clerk/nextjs/server'
import { fetchProfile } from '@/actions'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Job Portal',
  description: 'Job portal created by Ishika Singhal',
}

export default async function RootLayout({children }) {
const user = await currentUser();
const profileInfo = await fetchProfile(user?.id)

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased container px-6`} suppressHydrationWarning>
          <Suspense  fallback={<Loading/>}>
          <Header user={JSON.parse(JSON.stringify(user))} profileInfo={profileInfo}/>
          {children}
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  )
}