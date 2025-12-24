import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Product from './Components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Routes>
      <Route path = {"/"} element = {<Home/>}></Route>
    </Routes>
    <Routes>
      <Route path = {"/cart"} element = {<Cart/>}></Route>
    </Routes>
    <Routes>
      <Route path = {"/product"} element = {<Product/>}></Route>
    </Routes>
   </div>
  )
}

export default App
