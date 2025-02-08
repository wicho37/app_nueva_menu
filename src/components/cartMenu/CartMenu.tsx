//import { useEffect } from "react";
import { Link } from "react-router-dom";
 // import {data} from "../../assets/MOCK_DATA/dataMenu"
 import style from "./CartMenu.module.css"


const CartMenu = () => {
 /* useEffect (() => {
    
  }, [])

   const [productos, setProductos] = useState([])
    console.log(productos)
  const producto = data.find(item => item.id === 1); */

  return (
    <div  className={style.imgPpal}>
      <h1>Información del producto</h1>
      <Link to="/AppMutual">volver</Link>
    </div>
  )
}

export default CartMenu;


