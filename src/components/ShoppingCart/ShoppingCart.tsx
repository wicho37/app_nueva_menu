import shoppingCart from "../../assets/img/cart-shopping-solid (2).svg"
import estilo from "./ShoppingCart.module.css"




const ShoppingCart = () => {

  return (
    <div className={estilo.shoppingCart}>
      <img src={shoppingCart} alt="" />
    </div>
  )
}


export default ShoppingCart