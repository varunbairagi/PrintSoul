import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"
import Home from "./Component/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Cart from "./Component/Cart";
import ItemDetails from "./Component/ItemDetails";
import Items from "./Component/Items";
import OrderPlace from "./Component/OrderPlace";
import Login from "./Component/Login";
const App=()=>{
    
  

  return(
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/item" element={<ItemDetails/>}/>
    <Route path="/items" element={<Items/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/placeorder" element={<OrderPlace/>}/>
    
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;