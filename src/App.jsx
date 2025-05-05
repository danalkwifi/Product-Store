import { useState } from "react"
import ProductCard from "./components/ProductCard"

function App() {
  const [search, setSearch] = useState('')

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-indigo-600 text-center p-8">Product Store</h1>
      {/* Search Bar */}
      <div className="flex justify-center items-center">
        <input className="border-2 rounded-xl px-4 py-2 w-sm md:w-lg border-indigo-300 hover:border-3 focus:outline-none" 
              type="text" 
              placeholder="Search..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Product Cards */}
      <div>
        <ProductCard search={search} />
      </div>
    </div>
  )
}

export default App
