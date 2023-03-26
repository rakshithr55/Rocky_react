import React from "react"
 const Hero=(x)=>{
    return(
        <>
        <div>
            <h2>{x.rocky[0].name}</h2>
            <img src={x.rocky[0].image} alt="" />
        </div>
        </>
    )
 }
 export default Hero