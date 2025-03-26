import { useEffect, useState} from "react";
import style from "../cartMenu/CartMenu.module.css"
import { Link } from "react-router-dom";



function SuperMercado () {
    const [ data, setData ] = useState (null)
    console.log(data)
    
    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json ())
        .then((data) => setData (data))
    },[])
       

  return (
    <div>
        <h2>SuperMercado</h2>
       <div>
       <Link to="/CartMenu">volver</Link>
{/*        slice(0, 10) solo mustra los primeros diez productos del listado */}
          {
            data?.map((item) => ( 
            <li key={item.id} className={style.Cart}>
              <p>{item.id}</p>
              <p>{item.category}</p>
              <strong>{item.description}</strong>
               <p>precio: {item.price}</p>
            </li>
            ))
          }
       </div> 
       <Link to="/CartMenu">volver</Link>
    </div>
  )
}

export default SuperMercado 





/* function SuperMercado ({menu}) {
  console.log(menu)
  return (
    <div> 
      <h1>supermercado online</h1>
     <div>
     <Link to="/CartMenu">volver</Link>
      <ul>
        {
          menu?.map(menu => 
            <li className={style.Cart}>
              {menu.id}
              {menu.name}
              {menu.description}
              {menu.bebida}
            </li>
          )
        }
      </ul>
     </div>
     <Link to="/CartMenu">volver</Link>
    </div>
  )
}

export default SuperMercado */