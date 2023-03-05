import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>

      <Navbar />

      <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </div>
      
    </BrowserRouter>
  )
}

export default App
