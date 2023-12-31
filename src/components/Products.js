import ProductGrid from './ProductGrid'

const Products = ({ title, data, handlerBuilder = false }) => {
  return (
    <div className="container py-14">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {data.map(product => (
          <ProductGrid key={product._id} data={product} handlerBuilder={handlerBuilder} />
        ))}
      </div>
    </div>
  )
}

export default Products
