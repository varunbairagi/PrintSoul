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
import Contact from "./Component/formvalidation/Contact";
import LoginPage from "./Component/LoginPage";
import SignUp from "./Component/SignUp";
const App=()=>{
    
  

  return(
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/itemInfo/:id" element={<ItemDetails/>}/>
    <Route path="/products" element={<Items/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/placeorder" element={<OrderPlace/>}/>
    <Route path="/contactus" element={<Contact/>}/>
    {/* <Route path="/Login" element={<LoginPage/>}/> */}
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/yourOrder" element={<SignUp/>}/>
    <Route path="/addProduct" element={<SignUp/>}/>

    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;