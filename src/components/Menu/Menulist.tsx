import style from "./Menu.module.css"
import { useState } from "react";
import logoRest from "../../assets/img/restaurante.png"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { Link } from "react-router-dom";


const Menulist = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar menú

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={style.navbar}>
      <img src={logoRest} alt="" className={style.img} />
      <div className={style.logo}>Mi Tienda</div>

      <div className={style.shoppingCart}>
        <ShoppingCart />
      </div>

      {/* Botón de menú hamburguesa */}
      <button className={style.menuButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menú de enlaces */}
      <div className={`${style.navLinks} ${isOpen ? style.show : ""}`}>
        <ul className={style.Menulis}>
          <li className={style.itemLink}>
            <Link to="/"   onClick={closeMenu}>Inicio</Link>
          </li>
          <li  className={style.itemLink}>
            <Link to="/SuperMercado"  onClick={closeMenu}>Supermercado</Link>
          </li>
          <li  className={style.itemLink}>
            <Link to="/CartMenu"  onClick={closeMenu}>Menú</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menulist
