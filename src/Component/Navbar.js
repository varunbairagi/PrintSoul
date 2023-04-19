import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./css/header.css"
import LoginButton from "./LoginButton";
import UserLogin from "./UserLogin";
const Navbar=()=>{
  const cartData=useSelector(state=>state.cartData.cartData)

    return(
        <>
        <header>
        <section>
            <div id="container">
            <div id="shopName">
            <Link to="/">
             <b>Print</b>Soul
            </Link>
             </div>
                    <div id="collection">
                    <Link to="/products">
                    <div id="clothing">CLOTHING</div>
                    </Link>
                    <Link to="/">
                    <div id="accessories">NEW LAUNCHES</div>
                    </Link>
                    </div>
                    
                    <div id="search">
                        <i className="fas fa-search search"></i>
                        <input type="text" id="input" name="searchBox" placeholder="Search for Clothing "/>
                    </div>
                    <div id="user">
                    <Link to="/cart">
                    <i className="fas fa-shopping-cart addedToCart"><div id="badge">{cartData.length}</div></i>
                    </Link>
                    {/* <UserLogin/> */}
                    <LoginButton/>
                    </div>
            </div>

        </section>
    </header>
        </>
    )
}
export default Navbar;