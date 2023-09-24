import Link from 'next/link'

const ProductGrid = ({ data }) => {
  return (
    <div className="shadow p-5 relative">
      <span className="absolute top-3 right-3 bg-primary text-white text-[12px] rounded-full px-2">
        {data?.status}
      </span>
      <img src={data.image} className="shadow" alt="" />
      <div className="mt-3">
        <Link href={`/categories/${data?.category?._id}`} className="text-primary hover:underline">
          {data?.category?.title}
        </Link>
      </div>
      <div className="space-y-3">
        <h3 className="font-medium truncate">{data?.title}</h3>
        <div>৳ {data.price}</div>
        <div className="flex justify-between items-center">
          <div>{data?.avg_rating} out of 5</div>
          <Link href={`/products/${data?._id}`} className="btn btn-primary btn-sm">
            See Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductGrid
