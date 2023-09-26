const { createContext, useContext, useState } = require('react')

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [builder, setBuilder] = useState({})

  const pass = {
    builder,
    setBuilder
  }

  return <DataContext.Provider value={pass}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)
export default DataProvider
