import HeroSection from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import MainLayout from '@/layouts/MainLayout'

const HomePage = ({ products, categories }) => {
  console.log('products', products)
  console.log('categories', categories)

  return (
    <>
      <HeroSection />
      <div className="container py-14">
        <div className="grid grid-cols-4 gap-5">
          {products.map(product => (
            <ProductGrid key={product._id} data={product} />
          ))}
        </div>
      </div>
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
