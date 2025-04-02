import style from "./Menu.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import logoRest from "../../assets/img/restaurante.png"


 const Menulist = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar menú

  return (
    <nav className={style.navbar}>
      <img src={logoRest} alt="" className={style.img}/>
      <div className={style.logo}>Mi Tienda</div>

      {/* Botón de menú hamburguesa */}
      <button className={style.menuButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menú de enlaces */}
      <ul className={`${style.navLinks} ${isOpen ? style.show : ""}`}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/SuperMercado">Supermercado</Link>
        </li>
        <li>
          <Link to="/CartMenu">Menú</Link>
        </li>
      </ul>
    </nav>
  );
}

 export default Menulist
