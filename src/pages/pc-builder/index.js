import BuilderGrid from '@/components/BuilderGrid'
import { useData } from '@/contexts/DataProvider'
import MainLayout from '@/layouts/MainLayout'
import Link from 'next/link'
import toast from 'react-hot-toast'

const PcBuilderPage = ({ data }) => {
  const { builder, setBuilder } = useData()
  const isCompleted = Object.keys(builder).length <= 5

  const handlerRemove = id => {
    const updatedBuilder = { ...builder }
    delete updatedBuilder[id]

    setBuilder(updatedBuilder)
  }

  const handlerCompleteBuild = () => {
    toast.success('PC build completed.')
    setBuilder({})
  }

  return (
    <div className="container py-14">
      <h2 className="text-3xl font-bold text-center mb-10">PC Builder</h2>

      {data?.map(category => (
        <div key={category._id} className="grid md:grid-cols-5 gap-5 border p-5 mb-2">
          <div>{category.title}</div>
          <div className="md:col-span-3">
            <BuilderGrid catId={category._id} data={builder[category._id]} handlerRemove={handlerRemove} />
          </div>
          <div className="text-end">
            <Link href={`/pc-builder/${category._id}`} className="btn btn-primary btn-sm">
              Choose
            </Link>
          </div>
        </div>
      ))}

      <div className="text-right mt-10">
        <button onClick={handlerCompleteBuild} disabled={isCompleted} className="btn btn-primary">
          Complete Build
        </button>
      </div>
    </div>
  )
}

export default PcBuilderPage

PcBuilderPage.getLayout = page => <MainLayout>{page}</MainLayout>

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/categories`)
  const data = await res.json()
  return { props: { data } }
}
