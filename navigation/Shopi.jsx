import React from "react";
import STYLE from "./shopi.module.css"

const Shopi =()=>{
    return(
        <nav className={STYLE.main}>
            <ul>
                <img src="https://www.xitetech.com/uploads/original/2020/03/flipkart-logo.jpg" alt="" />
                <li className={STYLE.li}><a href="">Shopi</a></li>
            </ul>
            <ul className={STYLE.block}>
                <li><a href="">Category</a></li>
                <li><a href="">Brands</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Cart</a></li>

            </ul>
        </nav>
    )
}
export default Shopi