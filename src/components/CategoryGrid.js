import Link from 'next/link'
import { RxComponent1 } from 'react-icons/rx'

const CategoryGrid = ({ data }) => {
  return (
    <Link
      href={`/categories/${data?._id}`}
      className="shadow hover:shadow-lg p-5 hover:text-primary hover:underline space-y-2"
    >
      <RxComponent1 fontSize={22} />
      <div>{data?.title}</div>
    </Link>
  )
}

export default CategoryGrid
