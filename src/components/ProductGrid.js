import Link from 'next/link'
import { BsStars } from 'react-icons/bs'
import { RxComponent1 } from 'react-icons/rx'

const ProductGrid = ({ data, handlerBuilder = false }) => {
  return (
    <div className="product shadow hover:shadow-lg p-5 relative">
      <Link href={`/products/${data?._id}`} className="after:absolute after:inset-0"></Link>
      <div className="h-full flex flex-col justify-between">
        <div>
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
        </div>
        {handlerBuilder && (
          <div className="mt-2 z-10">
            <button onClick={() => handlerBuilder(data)} className="btn btn-primary btn-sm w-full">
              Add to Builder
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductGrid
