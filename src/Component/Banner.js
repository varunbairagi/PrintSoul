import React from 'react'
import img from "./css/banner.jpg"
import "./css/banner.css"

const Banner = () => {
  return (
    <>
    <div className="banner">
            <img src={img} alt="banner"/>
      </div>
      </>
  )
}

export default Banner