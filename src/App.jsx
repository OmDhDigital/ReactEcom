import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Product from "./Components/Product.jsx";
import Cart from "./Components/Cart.jsx";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import { useState} from "react";


function App() {
// We’ll store products as an array of objects.

  const products= [
    {id:1 , name: "Laptop"},
    {id:2 , name: "phone"},
    {id:3 , name: "Headphones"},
  ];


const [cartItems , setCartItems] = useState([]);

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product 
            products= {products}
            cartItems={cartItems}
            setCartItems={setCartItems}/>} />
      <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems= {setCartItems}/>} />
    </Routes>
    </>
  );
}

export default App;
