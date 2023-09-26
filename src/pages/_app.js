import DataProvider from '@/contexts/DataProvider'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Roboto } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['latin']
})

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <SessionProvider session={session}>
      <DataProvider>
        <style jsx global>{`
          :root {
            --font-roboto: ${roboto.style.fontFamily};
          }
        `}</style>
        {getLayout(<Component {...pageProps} />)}
        <Toaster />
      </DataProvider>
    </SessionProvider>
  )
}
