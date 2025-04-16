import { Link } from "react-router-dom"
import shoppingCart from "../../assets/img/cart-shopping-solid (2).svg"
import estilo from "./ShoppingCart.module.css"




const ShoppingCart = () => {

  return (
    <Link to="/cart" className={estilo.shoppingCart}>
      <img src={shoppingCart} alt="" />
    </Link>
  )
}


export default ShoppingCart