import { Link } from "react-router-dom"
import estilo from "../appMutual/AppMutual.module.css"


const AppMutual = () => {

  return (
    <div className={estilo.principal}>
      <div className={estilo.boton}>
        <Link to="/CartMenu" className={estilo.botonPpal}>empezar</Link>
      </div>
    </div>
  )
}

export default AppMutual;