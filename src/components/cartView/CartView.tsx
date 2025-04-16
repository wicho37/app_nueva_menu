import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import style from "./CartView.module.css"




const CartView = () => {
    const {carrito, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)

    return (
        < div className={style.contentCart}>
            <h2>Tu compra</h2>
            <div>
                {
                    carrito.map((prod) => (
                        <li>
                            <h6>{prod.name}</h6>
                            <img src={prod.image} alt="" />
                            <p>precio: ${prod.price}</p>
                            <p>{prod.description}</p>
                            <button onClick={() => eliminarDelCarrito(prod.id)}>Eliminar</button>

                        </li>
                    ))
                }
            </div>
             <div>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default CartView