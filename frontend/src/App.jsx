import { createContext,  useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import Shop from './Shop';
import  ViewCart from './ViewCart';
import "./App.css";
import Gallery from './Gallery';
import { About } from './About';

import { Contact } from './Contact';
import Menu from "./Menu";


export const cartContext=createContext();

function App() {
  const [cart, setCart] = useState([]);
  
  return (
<div className='App'>

    <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
      {/* {['/', '/shop', '/cart','/gallery','/about','/contact'].includes(window.location.pathname) && (
          
        )} */}

        <Routes>
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/shop" element={<Shop  />} />
          <Route exact path="/cart" element={<ViewCart />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/menu" element={<Menu   />}/>
          
        </Routes>
      

        
      </BrowserRouter>


    </cartContext.Provider>
    </div>
  );
 
}

export default App;
