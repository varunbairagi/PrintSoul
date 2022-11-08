import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextApp } from "../ContextApi";
import "./css/header.css"
const Navbar=()=>{
    const {CartCount}=useContext(contextApp);

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
                    <Link to="/items">
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
                    <i className="fas fa-shopping-cart addedToCart"><div id="badge">{CartCount}</div></i>
                    </Link>
                    <Link to="/login">
                    <i className="fas fa-user-circle userIcon"></i> 
                    </Link>
                    </div>
            </div>

        </section>
    </header>
        </>
    )
}
export default Navbar;