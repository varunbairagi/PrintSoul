import React, { useContext } from "react";
import Item from "./Item";
import "./css/content.css";
import { contextApp } from "../ContextApi";
// import {data} from "./Data1";
const Items = () => {
  const {data} =useContext(contextApp)
  // console.log(data)

  
  return (
    <div id="mainContainer">
      <h1>Tending Section</h1>
      <div id="containerClothing">
      { data&&(
        data.map((i)=>
        <Item   val={i} key={i.c[0].v} /> ))
      }
  
      </div>
      <h1> New Design </h1>
      <div id="containerAccessories">
      { data&&(
        data.map((i)=>
        <Item  val={i} key={i.c[0].v} /> ))
      }
      </div>
    </div>
  );
};

export default Items;
