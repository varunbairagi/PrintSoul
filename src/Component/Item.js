import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextApp } from "../ContextApi";
import "./css/content.css"
// import img from "./major/img.jpg"
const Item = ({val}) => {
  const {setShowData}=useContext(contextApp);
  // console.log(val.c[3]);
  let imgUrl=`https://drive.google.com/uc?export=view&id=${val.c[4].v}`;
  let Title=val.c[1].v;
  let Brand=val.c[2].v;
  let price=val.c[3].v;
  const handle=()=>{
    
    setShowData(val);
  }
  return (
    <>
      <div id="box" style={{"margin":"10px"}}>
        
          <img src={imgUrl} alt="img" />
          <div id="details">
            <h3>{Title}</h3>
            <h4>{Brand}</h4>
            <h2>rs {price}</h2>
            <Link to="/item">
            <button onClick={handle}>See Details</button>
            </Link>
          </div>
        
      </div>
    </>
  );
};

export default Item;
