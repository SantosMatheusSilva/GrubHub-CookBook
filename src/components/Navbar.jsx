import React from "react";
import Egg from "../images/fried-egg.png";
import {FcSearch} from "react-icons/fc";
import { SiCodechef } from "react-icons/si";


function Navbar(){
    return (
        <div className = "header">
                <SiCodechef style={{width: "60px", height: "80px", color: "black"}}/>
                 
                 <h1>GrubHub.</h1>
                 
            <div className="search">
                <button><FcSearch style={{width: "30px", height: "30px"}}/></button>
            </div>
        </div>
    )
}
export default Navbar 