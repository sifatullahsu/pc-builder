import MainLayout from '@/layouts/MainLayout'

const ProductSingle = ({ data }) => {
  console.log(data)
  return <div></div>
}

export default ProductSingle

ProductSingle.getLayout = page => <MainLayout>{page}</MainLayout>

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/products`)
  const data = await res.json()

  const paths = data.map(post => ({
    params: { productId: post._id }
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async context => {
  const id = context.params.productId

  const res = await fetch(`${process.env.API_URL}/products/${id}`)
  const data = await res.json()
  return { props: { data } }
}
