import MainLayout from '@/layouts/MainLayout'

const PcBuilderSingle = ({ data }) => {
  console.log(data)
  return <div></div>
}

export default PcBuilderSingle

PcBuilderSingle.getLayout = page => <MainLayout>{page}</MainLayout>

export const getServerSideProps = async context => {
  const id = context.query.builderCatId

  const res = await fetch(`${process.env.API_URL}/products/category/${id}`)
  const data = await res.json()

  return {
    props: { data }
  }
}
