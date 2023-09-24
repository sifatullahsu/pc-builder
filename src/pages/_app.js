import '@/styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <style jsx global>{`
        :root {
          --font-roboto: ${roboto.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
