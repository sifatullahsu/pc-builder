import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div>
      <div>Header</div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default Header
