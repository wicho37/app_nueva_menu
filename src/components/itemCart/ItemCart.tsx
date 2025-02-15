import { useState,useEffect } from "react"


const ItemCart = (item) => {
    const [ data, setData ] = useState (null)
 
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then((response) => response.json ())
      .then((data) => setData (data))
  },[])

  return (
    <div>
        <p>{item.category}</p>
        <p>precio: {item.price}</p>
        <p>{item.description}</p>
    </div>
  )
}


export default ItemCart


