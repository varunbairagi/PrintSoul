import React, { useContext } from "react";
import "./css/contetDetails.css";
import { contextApp } from "../ContextApi";
import { Link } from "react-router-dom";
const ItemDetails = () => {
  const {ShowData,setCartCount,CartCount,setCartData,setAmount,Amount,cartData}=useContext(contextApp);
  // console.log(ShowData)
  let imgUrl=`https://drive.google.com/uc?export=view&id=${ShowData.c[4].v}`;
  let Title=ShowData.c[1].v;
  let Brand=ShowData.c[2].v;
  let price=ShowData.c[3].v;

  const handleClick=()=>{
    setCartCount(CartCount+1);
    setAmount((prev)=>Amount+price)
    setCartData((prev,obj)=>{return([...prev,{"img":imgUrl,"price":price,"title":Title}])})
    console.log(Amount,cartData)

  }
  return (
    <>
      <div id="containerProduct">
        <div id="containerD">
          <div id="imageSection">
            <img id="imgDetails" src={imgUrl} alt="img"/>
          </div>
          <div id="productDetails">
            <h1>{Title}</h1>
            <h4>{Brand}</h4>
            <div id="details">
              <h3>Rs {price}</h3>
              <h3>Description</h3>
              <p>
                Navy solid sweatshirt with patchwork, has a round neck, long
                sleeves, straight hem
              </p>
            </div>
            <div id="productPreview">
              <h3>Product Preview</h3>
              <img id="previewImg" src={imgUrl} alt="img" />
              <img id="previewImg" src={imgUrl} alt="img"/>
              <img id="previewImg" src={imgUrl} alt="img"/>
              <img id="previewImg" src={imgUrl} alt="img"/>
              <img id="previewImg" src={imgUrl} alt="img"/>
            </div>
            <div id="button">
            <button onClick={handleClick}>Add to Cart</button>
            <Link to="/cart">
            <button style={{"margin":"5px"}} onClick={handleClick}>Buy Now</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
