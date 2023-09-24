import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { BiLogoFirebase } from 'react-icons/bi'
import { HiBars3BottomLeft } from 'react-icons/hi2'

const Header = () => {
  const { data: session } = useSession()
  console.log(session)

  const items = () => {
    return (
      <>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Categories</summary>
            <ul className="p-2">
              <li>
                <Link href="/categories/65103e75882c71a28c4fee24">Processor</Link>
              </li>
              <li>
                <Link href="/categories/65103e7c882c71a28c4fee25">Motherboard</Link>
              </li>
              <li>
                <Link href="/categories/65103e86882c71a28c4fee26">RAM</Link>
              </li>
              <li>
                <Link href="/categories/65103e91882c71a28c4fee27">PSU</Link>
              </li>
              <li>
                <Link href="/categories/65103e97882c71a28c4fee28">SSD</Link>
              </li>
              <li>
                <Link href="/categories/65103e9d882c71a28c4fee29">Monitor</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href="/pc-builder">PC Builder</Link>
        </li>
      </>
    )
  }

  return (
    <section className="border-b">
      <div className="container">
        {/* <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button> */}

        <div className="navbar">
          <div className="md:navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiBars3BottomLeft fontSize={22} />
              </label>
              <ul className="menu menu-sm dropdown-content shadow bg-base-100">{items()}</ul>
            </div>
            <Link href="/" className="text-xl">
              <BiLogoFirebase className="inline text-[30px]" />
              PC BUILDER
            </Link>
          </div>
          <div className="navbar-end hidden md:block text-right">
            <ul className="menu menu-horizontal px-1 -mr-5">{items()}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
