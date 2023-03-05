import React from "react";
import STYLE from "./food.module.css"

const Foodi =()=>{
    return(
        <nav className={STYLE.main}>
            <ul>
                <img src="https://th.bing.com/th/id/OIP.XX1FMPzrXCq8oBnH8h-b3QHaHa?pid=ImgDet&rs=1" alt="" />
                <li className={STYLE.li}><a href="">Foody</a></li>
            </ul>
            <ul className={STYLE.block}>
                <li><a href="">Delivery</a></li>
                <li><a href="">Dining</a></li>
                <li><a href="">Offers</a></li>
                <li><a href="">Wallet</a></li>

            </ul>
        </nav>
    )
}
export default Foodi