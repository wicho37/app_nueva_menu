import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import style from "./CartView.module.css"
import BotonCantidad from "../itemCounter/ItemCounter"




const CartView = () => {
    const {carrito, vaciarCarrito, eliminarDelCarrito, totalCompra} = useContext(CartContext)

    return (
        < div className={style.contentCart}>
            <h2>Tu compra</h2>
            <div>
                {
                    carrito.map((prod) => (
                        <li key={prod.id}>
                            <h6>{prod.name}</h6>
                            <img src={prod.image} alt="" />
                            <p>precio unidad: ${prod.price}</p>
                            <p>Cantidad: {prod.cantidad}</p> {/* << Aquí ves cuántas cantidades hay */}
                            <BotonCantidad id={prod.id} cantidad={prod.cantidad} />
                            <p>{prod.description}</p>
                            <button onClick={() => eliminarDelCarrito(prod.id)}>Eliminar</button>

                        </li>
                    ))
                }
            </div>
             <div>
             <h4 className={style.compra}>Total Compra: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default CartView