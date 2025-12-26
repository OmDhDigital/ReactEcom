function Cart({cartItems , setCartItems}) {
    const removeItem= (id)=> {
        const updatedCart = cartItems.filter(item=> item.id !== id);
        setCartItems(updatedCart);
    };

  return (

    <div>
        <h2>Cart</h2>

        {cartItems.length === 0 && <p>Cart is Empty</p>}

        {cartItems.map(item => (
            <div key={item.id} style = {{ marginBottom: "10px"}}>
                <span>{item.name}</span>

                <button
                    style={{marginLeft: "10px"}}
                    onClick={()=> removeItem(item.id)}
                >
                    Remove
                    </button>
                </div>
        ))}
        </div>

  );
}

export default Cart;


