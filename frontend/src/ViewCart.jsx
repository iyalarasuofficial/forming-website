import React, { useEffect, useState, useContext } from 'react';
import './cart.css';
import { cartContext } from './App';
import Menu from "./Menu";



const ViewCart = () => {
  const { cart, setCart } = useContext(cartContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart])

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <> <Menu  />

      <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-container'>
        {
          cart.map((product) => (
            <div className='cart-product'>
              <div className='img'>
                <img src={product.pic} alt='image' />
              </div>
              <div className='cart-product-details'>
                <h3>{product.name}</h3>
                <p>Price Rs: {product.amt}</p>
              </div>
              <div className='remove-btn'>
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </div>
            </div>
          ))
        }
      </div>
      <h2 className='cart-amt'>Total Amount Rs:{total}</h2>

    </>

  )
}
export default ViewCart;

