import HeroSection from '@/components/Hero'
import MainLayout from '@/layouts/MainLayout'

const HomePage = ({ products, categories }) => {
  console.log('products', products)
  console.log('categories', categories)

  return (
    <>
      <HeroSection />
    </>
  )
}

export default HomePage

HomePage.getLayout = page => <MainLayout>{page}</MainLayout>

export const getStaticProps = async () => {
  const res1 = await fetch(`${process.env.API_URL}/products`)
  const products = await res1.json()

  const res2 = await fetch(`${process.env.API_URL}/categories`)
  const categories = await res2.json()

  return { props: { products, categories } }
}
