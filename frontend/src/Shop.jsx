import React, { useState } from 'react';
import data from "./assets/product.json";
import { Product } from "./Product";
import "./shop.css";
import { Footer } from "./Footer";
import Menu from "./Menu";




const Shop = () => {
  const [products] = useState(data);
  return (
    <>
     <Menu  />
      <div className="about-section">
        <h1>Welcome To Shop</h1>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default Shop;
