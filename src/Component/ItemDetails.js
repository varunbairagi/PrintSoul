import React from "react";
import "./css/contetDetails.css";
import { Link, useParams } from "react-router-dom";
import { addAmount, addCart } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const ItemDetails = () => {
  const dispatch = useDispatch();
  const {id}=useParams();
  const singleData = useSelector((state) => state.productData.singleData);
  let imgUrl = `https://drive.google.com/uc?export=view&id=${singleData.img}`;
  const cartData=useSelector(state=>state.cartData.cartData);
  // let id = singleData.c[0].v;
  let Title = singleData.name;
  let Brand = singleData.category;
  let price = singleData.price;

  const handleClick = (id) => {
    
    let check=cartData.filter((val)=>val.id===id)
    if(check.length===0){
    dispatch(
      addCart({ id: id, img: imgUrl, price: price, title: Title, count: 1 })
    );
    dispatch(addAmount(price))
    }

  };
  return (
    <>
      <div id="containerProduct">
        <div id="containerD">
          <div id="imageSection">
            <img id="imgDetails" src={imgUrl} alt="img" />
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
              <img id="previewImg" src={imgUrl} alt="img" />
              <img id="previewImg" src={imgUrl} alt="img" />
              <img id="previewImg" src={imgUrl} alt="img" />
              <img id="previewImg" src={imgUrl} alt="img" />
            </div>
            <div id="button">
              <button onClick={() => handleClick(id)}>Add to Cart</button>
              <Link to="/cart">
                <button
                  style={{ margin: "5px" }}
                  onClick={() => handleClick(id)}
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
