import React from "react";
import web from "../src/images/img1.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
     <Commom  
        name="Grow your business with" 
        imgsrc={web}
        visit="/service"
        btname="Get Strated"/>  
    </>
  );
};

export default Home;
