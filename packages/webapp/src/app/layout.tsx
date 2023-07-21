import Providers from '@/components/providers/Providers'
import '@/styles/global.css'
import RootTemplate from '@/components/templates/RootTemplate'
import React, { ReactNode } from 'react'

export interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Food Composer',
  description: 'Food Composer App',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="brand">
      <body suppressHydrationWarning={true}>
        <Providers>
          <RootTemplate>{children}</RootTemplate>
        </Providers>
      </body>
    </html>
  )
}
