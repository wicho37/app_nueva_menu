import { useEffect, useState } from "react";
import style from "../cartMenu/CartMenu.module.css"
import { Link } from "react-router-dom";
import Header from "../header/Header";



function SuperMercado() {
  const [data, setData] = useState([])
  console.log(data)
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, [])


  return (
    <div>
      <Header />
      <h2>SuperMercado</h2>
      <div>
        {/*        slice(0, 10) solo mustra los primeros diez productos del listado */}
        <ul>
          {
            data?.slice(0, 10).map((item) => {
              
              const shortDescription = item.description.split(".")[0] + "."; // Mostrar solo el primer párrafo
              const shortTitle = item.title.split(".")[0] + ".";
              return(
              <li key={item.id} className={style.Cart}>
                <Link to={`/product/${item.id}`}>
                  <p>ID:{item.id}</p>
                  <img src={item.image} alt={item.title} width={100} />
                  <p>{shortTitle}</p>
                  <p>{item.category}</p>
                  <strong>{shortDescription}</strong>
                  <p>precio: {item.price}</p>
                </Link>
                <button>añadir al carrito</button>
              </li>
              )
           })}
        </ul>
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