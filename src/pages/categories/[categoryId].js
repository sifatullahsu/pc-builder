import Products from '@/components/Products'
import MainLayout from '@/layouts/MainLayout'

const CategorySingle = ({ data }) => {
  return <Products title={data?.title} data={data?.products} />
}

export default CategorySingle

CategorySingle.getLayout = page => <MainLayout>{page}</MainLayout>

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/categories`)
  const data = await res.json()

  const paths = data.map(post => ({
    params: { categoryId: post._id }
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async context => {
  const id = context.params.categoryId

  const res = await fetch(`${process.env.API_URL}/categories/products/${id}`)
  const data = await res.json()
  return { props: { data } }
}
