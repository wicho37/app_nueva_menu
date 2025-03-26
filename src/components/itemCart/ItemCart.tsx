//import { useState,useEffect } from "react"


const ItemCart = (menu) => {
    /* const [ data, setData ] = useState (null)
 
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then((response) => response.json ())
      .then((data) => setData (data))
  },[]) */

  return (
    <div>
        <p>{menu.category}</p>
        <p>precio: {menu.price}</p>
        <p>{menu.description}</p>
    </div>
  )
}


export default ItemCart


