import React from "react";
import STYLE from "./tripsi.module.css"

const Tripsi =()=>{
    return(
        <nav className={STYLE.main}>
            <ul>
                <img src="https://i.pinimg.com/originals/e0/31/b5/e031b50ad6b7a33a4239e471054d8f9f.png" alt="" />
                <li className={STYLE.li}><a href="">Tripsi</a></li>
            </ul>
            <ul className={STYLE.block}>
                <li><a href="">Flights</a></li>
                <li><a href="">Trains</a></li>
                <li><a href="">Hotels</a></li>
                <li><a href="">Packages</a></li>

            </ul>
        </nav>
    )
}
export default Tripsi