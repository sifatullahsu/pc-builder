import Link from 'next/link'
import { RxCrossCircled } from 'react-icons/rx'

const BuilderGrid = ({ catId, data, handlerRemove }) => {
  if (!data) return <></>

  return (
    <div className="flex items-center space-x-3">
      <RxCrossCircled
        fontSize={18}
        className="text-lg font-medium hover:text-primary"
        onClick={() => handlerRemove(catId)}
      />
      <div className="product relative flex items-center space-x-3">
        <img src={data?.image} width={50} height={50} alt="" />
        <div>
          <Link href={`/products/${data?._id}`} className="after:absolute after:inset-0"></Link>
          <h3 className="font-medium">{data?.title}</h3>
          <div>৳ {data?.price}</div>
        </div>
      </div>
    </div>
  )
}

export default BuilderGrid
