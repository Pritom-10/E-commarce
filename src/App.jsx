import React from "react";
import Navbar from "./Component/Assets/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Footer from './Component/Footer/Footer'
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import ShopContextProvider from "./Context/ShopContext";
import men_banner from '../src/Component/Assets/data/banner_mens.png'
import women_banner from '../src/Component/Assets/data/banner_women.png'
import kid_banner from '../src/Component/Assets/data/banner_kids.png'
  

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ShopContextProvider>  
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
          <Footer/>
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
