import { useEffect, useState } from "react";
import style from "../cartMenu/CartMenu.module.css"
import { Link } from "react-router-dom";
import GoShopping from "../goShopping/GoShopping";
import { useCart } from "../../context/CartContext";
import styles from "./SuperMercado.module.css"




function SuperMercado() {
  const { agregarAlCarrito, carrito } = useCart()
  const [data, setData] = useState([])
  console.log(data)
  // Categorías únicas del menú
  const categorias = ["todas", ...new Set(data.map(item => item.category || "sin categoría"))];

  const [busqueda, setBusqueda] = useState("");



  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, [])

  const [filtros, setFiltros] = useState({
    categoria: "todas",
    precioMinimo: 0
  });

  // Aplicar filtros al menú
  const productosFiltrados = data.filter(item =>
    /*  item.price >= filtros.precioMinimo && */
    (filtros.categoria === "todas" || item.category === filtros.categoria) &&
    item.title.toLowerCase().includes(busqueda.toLowerCase())
  );


  return (
    <div className={style.listContentSuperm}>
      {/*  <Link to="/SuperMercado">
        <GoShopping />
      </Link> */}

      {/* slice(0, 10) solo mustra los primeros diez productos del listado */}
      {/* <ul className={style.listContentSuperm}> */}
      <h2 className={styles.titlePpal}>SuperMercado</h2>


      <div className={styles.labels}>
        <label className={style.filterSM}>
          Categoría:
          <select
            value={filtros.categoria}
            onChange={(e) =>
              setFiltros({ ...filtros, categoria: e.target.value })
            }
          >
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </label>

        <label>
          Buscar por nombre:
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Ej: camiseta, joya, etc."
          />
        </label>

        {/* <label>
              Precio a partir de:
              <input
                type="text"
                value={filtros.precioMinimo}
                onChange={(e) =>
                  setFiltros({ ...filtros, precioMinimo: Number(e.target.value) })
                }
              />
            </label> */}
      </div>

      <ul className={style.listSuperMerc}>
        {
          productosFiltrados.slice(0, 5).map((item) => (
            <li key={item.id} className={style.Cart}>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} width={100} />
                <p>{item.title.slice(0, 30)}...</p>

                <p>{item.category}</p>
                <p>{item.description.slice(0, 50)}...</p>
                <p>precio: {item.price}</p>
              </Link>
              <button onClick={() => agregarAlCarrito(item)}>
                añadir al carrito
              </button>
            </li>
          ))
        }
      </ul>

      <div className={styles.volver}>
        <div>
        <Link to="/SupermercadoCompleto" className={styles.volver2}>tienda completa</Link>

        </div>
        <div>
        <Link to="/CartMenu" className={styles.volver2}>volver</Link>

        </div>
      </div>
      {/*  </ul> */}

    </div>
  )
}

export default SuperMercado
