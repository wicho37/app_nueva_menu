import { Link } from "react-router-dom"
import shoppingCart from "../../assets/img/cart-shopping-solid (2).svg"
import estilo from "./ShoppingCart.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"




const ShoppingCart = () => {
  const {totalCantidad} = useContext(CartContext)

  return (
    <Link to="/cart" >
      <img src={shoppingCart} className={estilo.shoppingCart} alt="" />
      <span>{totalCantidad()}</span>
    </Link>
  )
}


export default ShoppingCart