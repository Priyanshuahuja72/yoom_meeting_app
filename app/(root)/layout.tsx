import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'
import { Toaster } from '@/components/ui/toaster'
const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <StreamVideoProvider>
        {children}
        <Toaster/>
    </StreamVideoProvider>
  )
}

export default RootLayout