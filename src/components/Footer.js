import Link from 'next/link'
import { BiLogoFacebook, BiLogoFirebase, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi'

const Footer = () => {
  return (
    <section className="border-t border-b">
      <div className="container">
        <footer className="footer grid-cols-3 py-4 px-2">
          <aside className="items-center grid-flow-col col-span-2">
            <BiLogoFirebase fontSize={30} />
            <p>
              PC Builder Ltd. <br />
              Providing service since 1992
            </p>
          </aside>
          <nav className="place-self-center justify-self-end">
            <div className="grid grid-flow-col gap-4 text-xl">
              <Link href="/">
                <BiLogoFacebook />
              </Link>
              <Link href="/">
                <BiLogoYoutube />
              </Link>
              <Link href="/">
                <BiLogoInstagram />
              </Link>
            </div>
          </nav>
        </footer>
      </div>
    </section>
  )
}

export default Footer
