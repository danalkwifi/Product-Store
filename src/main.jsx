import './index.css'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProductPage from './components/ProductPage'
import Header from './components/Header'

export default function App() {
  return(
    <BrowserRouter>
        <Header />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='page/:index' element={<ProductPage />}  />
      </Routes>
      
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)