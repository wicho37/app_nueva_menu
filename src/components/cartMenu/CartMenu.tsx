import { Link } from "react-router-dom";
import { menu } from "../../assets/MOCK_DATA/dataMenu"
 import style from "./CartMenu.module.css"



const CartMenu = () => {
  

  return (
    <div  className={style.imgPpal}>
      <h1>tipos de menu</h1>
        <Link to="/AppMutual">volver</Link>
      <div>
        {
          menu?.map( menu => (
            <li key={menu.id}>
              {menu.id}
              {menu.name}
              {menu.description}
            </li>
          ))
        }
        <Link to="/SuperMercado">ir a supermercado</Link>
      </div>
    </div>
  )
}

export default CartMenu;


