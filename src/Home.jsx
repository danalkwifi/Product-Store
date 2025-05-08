import { useState } from "react"
import ProductCard from "./components/ProductCard"
import ProductPage from "./components/ProductPage"

function Home() {
  const [search, setSearch] = useState('')

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-center items-center">
        <input className="border-2 rounded-xl px-4 py-2 w-sm md:w-lg border-indigo-300 hover:cursor-pointer focus:outline-none focus:border-sky-400" 
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

export default Home
