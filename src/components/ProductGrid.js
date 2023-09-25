import Link from 'next/link'
import { BsStars } from 'react-icons/bs'
import { RxComponent1 } from 'react-icons/rx'

const ProductGrid = ({ data }) => {
  return (
    <Link href={`/products/${data?._id}`} className="product shadow hover:shadow-lg p-5 relative">
      <span className="absolute top-3 right-3 bg-primary text-white text-[12px] rounded-full px-2">
        {data?.status}
      </span>
      <img src={data.image} className="shadow" alt="" />
      <div className="mt-5 mb-2 flex justify-between">
        <div>
          <RxComponent1 className="inline mb-1" /> {data?.category?.title}
        </div>
        <div>
          <BsStars className="inline mb-1" /> {data?.avg_rating}/5
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-medium ">{data?.title}</h3>
        <div>৳ {data.price}</div>
      </div>
    </Link>
  )
}

export default ProductGrid
