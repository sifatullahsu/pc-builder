import Products from '@/components/Products'
import { useData } from '@/contexts/DataProvider'
import MainLayout from '@/layouts/MainLayout'
import { useRouter } from 'next/router'

const PcBuilderSingle = ({ data }) => {
  const { builder, setBuilder } = useData()
  const router = useRouter()

  const handlerBuilder = product => {
    // eslint-disable-next-line no-unused-vars
    const { description, key_features, ...restData } = product

    setBuilder({ ...builder, [data._id]: restData })
    router.push('/pc-builder')
  }

  return <Products title={data?.title} data={data?.products} handlerBuilder={handlerBuilder} />
}

export default PcBuilderSingle

PcBuilderSingle.getLayout = page => <MainLayout>{page}</MainLayout>

export const getServerSideProps = async context => {
  const id = context.query.builderCatId

  const res = await fetch(`${process.env.API_URL}/categories/products/${id}`)
  const data = await res.json()
  return { props: { data } }
}
