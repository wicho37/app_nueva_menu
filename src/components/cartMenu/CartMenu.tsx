import { Link } from "react-router-dom";
import { menu } from "../../assets/MOCK_DATA/dataMenu"
import style from "./CartMenu.module.css"
import GoShopping from "../goShopping/GoShopping";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";





const CartMenu = () => {
  
   const {agregarAlCarrito, carrito} = useContext(CartContext)


  return (
    <div>
      <Link to="/SuperMercado">
        <GoShopping />
      </Link>
      <ul>
        <h4>menu diario</h4>
        {
          menu?.slice(0, 4).map((menuItem) => (
            <li key={menuItem.id} className={style.Cart}>
              <Link to={`/item/${menuItem.id}`} className={style.textPpal}>
                <div>
                  <img src={menuItem.image} alt={menuItem.name} width={100} />
                </div>
                <div>
                  {menuItem.name}
                </div>
                <div>
                  {menuItem.description}
                </div>
                <div>
                  precio: ${menuItem.price}
                </div>
              </Link>
              <button onClick={() => agregarAlCarrito(menuItem)}>añadir al carrito</button>
              
            </li>
          ))
        }
        <div className={style.btnContainer}>
          <Link to="/menu-completo" className={style.btnVerTodo}>
            Ver Todo el Menú
          </Link>
        </div>
        <div className={style.btnContainer}>
           <Link to="/SuperMercado" className={style.btnVerTodo}>
              ir a supermercado
           </Link>
        </div>
      </ul>
    </div>
  )
}

export default CartMenu;


