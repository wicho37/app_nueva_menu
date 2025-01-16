
import imgDE from "../../assets/drogueria especifica.jpg"
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.header}>
      <img src={imgDE} alt="drogeria especfica" />
      <nav  className={style.lista}>
        <li>mensajeros</li>
        <li>manuales</li>
      </nav>
    </div>
  )
}

export default Navbar