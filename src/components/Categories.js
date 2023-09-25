import CategoryGrid from './CategoryGrid'

const Categories = ({ title, data }) => {
  return (
    <div className="container py-14">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {data.map(category => (
          <CategoryGrid key={category._id} data={category} />
        ))}
      </div>
    </div>
  )
}

export default Categories
