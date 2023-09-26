import Link from 'next/link'

const HeroSection = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Link href="/pc-builder" className="btn btn-primary">
              Build Your Pc
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
