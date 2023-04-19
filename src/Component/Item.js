import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSingle } from "../store/productSlice";
import "./css/content.css"
// import img from "./major/img.jpg"
const Item = ({val}) => {
  const dispatch=useDispatch();
  // console.log(val.c[3]);
  // let imgUrl=`https://drive.google.com/uc?export=view&id=${val.c[4].v}`;
  // let Title=val.c[1].v;
  // let Brand=val.c[2].v;
  // let price=val.c[3].v;
  let imgUrl=`https://drive.google.com/uc?export=view&id=${val.img}`;
  let Title=val.name;
  let Brand=val.category;
  let price=val.price;
  const handle=()=>{
    dispatch(setSingle(val))
   
  }
  return (
    <>
      <div id="box" style={{"margin":"10px"}}>
        
          <img src={imgUrl} alt="img" />
          <div id="details">
            <h3>{Title}</h3>
            <h4>{Brand}</h4>
            <h2>rs {price}</h2>
            <Link to={`/itemInfo/${val.id}`}>
            <button onClick={handle}>See Details</button>
            </Link>
          </div>
        
      </div>
    </>
  );
};

export default Item;
