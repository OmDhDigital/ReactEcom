import {useState} from "react";
function Product({products,cartItems, setCartItems}) {
// RENDER PRODUCTS USING .map()

  return (
    <div> 
        <h2>Products</h2>
{/* 👉 map() always returns a new array */}
        {products.map((product)=>(
            <div key={product.id} style={{marginBottom: "10px"}}>
                <span>{product.name}</span>
                <button
                style={{marginLeft: "10px"}}
                onClick={()=> setCartItems([...cartItems,product])}>
                    Add Product to Cart 
                    </button>
                </div>
        ))}

        
        <p>total Items in Cart : {cartItems.length}</p>
    </div>
  );
}

export default Product;
