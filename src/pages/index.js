import Categories from '@/components/Categories'
import HeroSection from '@/components/Hero'
import Products from '@/components/Products'
import MainLayout from '@/layouts/MainLayout'

const HomePage = ({ products, categories }) => {
  return (
    <>
      <HeroSection />
      <Products title="Featured Products" data={products} />
      <Categories title="Featured Categories" data={categories} />
    </>
  )
}

export default HomePage

HomePage.getLayout = page => <MainLayout>{page}</MainLayout>

export const getStaticProps = async () => {
  const res1 = await fetch(`${process.env.API_URL}/products?page=1&size=6`)
  const products = await res1.json()

  const res2 = await fetch(`${process.env.API_URL}/categories?page=1&size=6`)
  const categories = await res2.json()

  return { props: { products, categories } }
}
