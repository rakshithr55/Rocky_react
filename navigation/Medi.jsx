import React from "react";
import STYLE from "./medi.module.css"

const Medi =()=>{
    return(
        <nav className={STYLE.mainBlock}>
                <ul  >
                    <img src="https://th.bing.com/th/id/R.686bbc03b830a5c2ac540961b3d4c99c?rik=qpTVZKZnF5VihQ&riu=http%3a%2f%2ffc09.deviantart.net%2ffs71%2ff%2f2012%2f208%2f5%2f2%2f3d_medical_symbol_new__clear_background__by_benbobby-d58szba.png&ehk=kKffRpikYvkE5QJFQul9%2bvx8mUBQZ1b9xl%2fmXgUlGAI%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <li className={STYLE.block}><a href="">MEDI 24*7</a></li>
            </ul>
                <ul className={STYLE.main}>
                    <li><a href="">Consult</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Help</a></li>
                </ul>
        </nav>
    )
}

export default Medi