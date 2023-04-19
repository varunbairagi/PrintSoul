import React, { useContext,useEffect,useState } from "react";
import Item from "./Item";
import axios from "axios"
import { useSelector,useDispatch } from "react-redux";
import { fetchProductData } from "../store/productSlice";
import "./css/content.css";
import { contextApp } from "../ContextApi";
// import {data} from "./Data1";
const Items = () => {
  
  const dispatch=useDispatch();
  // const {data1} =useContext(contextApp)
  const [data1,setData1]=useState();
  const Data=useSelector(state=>state.productData.data);
  
  useEffect(()=>{
    const fetchData=async()=>{
      try{

      const {data}=await axios.get('http://localhost:8080/products')
      setData1(data)
      
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData();
    dispatch(fetchProductData())
  },[dispatch])
  console.log(data1)

  
  return (
    <div id="mainContainer">
      <h1>Tending Section</h1>
      <div id="containerClothing">
      {
        data1&&(
          data1.map((item,i)=>
            <Item val={item} key={i}/>
          )
        )
      }
      {/* { Data&&(
        Data.map((i)=>
        <Item   val={i} key={i.c[0].v} id={i.c[0].v} /> ))
      } */}
  
      </div>
      <h1> New Design </h1>
      <div id="containerAccessories">
      {/* { data1&&(
        data1.map((i)=>
        <Item  val={i} key={i.c[0].v} id={i.c[0].v}/> ))
      } */}
      {
        data1&&(
          data1.map((item,i)=>
            <Item val={item} key={i}/>
          )
        )
      }
      </div>
    </div>
  );
};

export default Items;
