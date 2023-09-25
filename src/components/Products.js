import ProductGrid from './ProductGrid'

const Products = ({ title, data }) => {
  return (
    <div className="container py-14">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map(product => (
          <ProductGrid key={product._id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
