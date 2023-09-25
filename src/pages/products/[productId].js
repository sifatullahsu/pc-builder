import MainLayout from '@/layouts/MainLayout'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { BsStars } from 'react-icons/bs'
import { RxComponent1 } from 'react-icons/rx'

const ProductSingle = ({ data, reviews }) => {
  const { data: session } = useSession()
  const myRating = reviews.find(review => review.uid === session?.user?.email)

  return (
    <div className="container py-14">
      <div className="md:grid grid-cols-3 gap-5">
        <div>
          <img src={data?.image} alt="" className="shadow w-full mb-10" />
        </div>
        <div className="col-span-2">
          <Link href={`/categories/${data?.category?._id}`} className="text-primary hover:underline">
            <RxComponent1 className="inline mb-1 mr-2" />
            {data?.category?.title}
          </Link>
          <h1 className="text-3xl font-bold mt-3 mb-5">{data?.title}</h1>
          <div className="font-medium mb-5">{data?.key_features}</div>
          <div className="space-y-3">
            <p>{data?.description}</p>
            <div className="font-bold text-xl">৳ {data.price}</div>
            <div>{data?.status}</div>
            <div>
              <BsStars className="inline mb-1" /> {data?.avg_rating}/5 Rating
            </div>
            {myRating ? (
              <div>
                <BsStars className="inline mb-1" /> {myRating}/5 My Rating
              </div>
            ) : (
              <p className="text-xs">You did not submit any ratings.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
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

  const res1 = await fetch(`${process.env.API_URL}/products/${id}`)
  const data = await res1.json()

  const res2 = await fetch(`${process.env.API_URL}/reviews/products/${id}`)
  const reviews = await res2.json()

  return { props: { data, reviews } }
}
