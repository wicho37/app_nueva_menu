import { Link } from "react-router-dom";
import { menu } from "../../assets/MOCK_DATA/dataMenu"
import style from "./CartMenu.module.css"
import Header from "../header/Header";
import GoShopping from "../goShopping/GoShopping";




const CartMenu = () => {


  return (
    <div className={style.imgPpal}>
      <Header />
      <Link to="/SuperMercado">
         <GoShopping />
      </Link>
      
      <ul>
        {
          menu?.map((menuItem) => (
            <li key={menuItem.id} className={style.Cart}>
              <Link to={`/item/${menuItem.id}`}>
                <div>
                  {menuItem.id}
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

            </li>
          ))
        }
      </ul>
      <Link to="/SuperMercado">ir a supermercado</Link>
    </div>
  )
}

export default CartMenu;


