import React from "react"
const UseState = () => {
    const product = {
        name : "iPhone 15",
        price : 79999,
        category : "Mobiles"
    }
    return(
        <>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.category}</p>
        </>
    )
}
export default UseState;