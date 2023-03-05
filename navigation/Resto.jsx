import React from "react";
import STYLE from "./resto.module.css"

const Resto =()=>{
    return(
        <nav className={STYLE.main}>
            <ul>
                <img src="https://photo.designxel.com/static/vector/2015/3/27/facegfx-vector-creative-restaurant-logo-design-vector.jpg" alt="" />
                <li className={STYLE.li}><a href="">Restaurantly</a></li>
            </ul>
            <ul className={STYLE.block}>
                <li><a href="">Menu</a></li>
                <li><a href="">Chefs</a></li>
                <li><a href="">Specials</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
    )
}
export default Resto