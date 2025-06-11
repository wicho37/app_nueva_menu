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
    <div>
      <Link to="/SuperMercado">
        <GoShopping />
      </Link>

      <div>
        {/* slice(0, 10) solo mustra los primeros diez productos del listado */}
        <ul className={style.containerSupermer}>
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
          {
            productosFiltrados.slice(0, 10).map((item) => {

              const shortDescription = item.description.split(".")[0] + "."; // Mostrar solo el primer párrafo
              const shortTitle = item.title.split(".")[0] + ".";
              return (
                <li key={item.id} className={style.Cart}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.title} width={100} />
                    <p>{shortTitle}</p>
                    <p>{item.category}</p>
                    <strong>{shortDescription}</strong>
                    <p>precio: {item.price}</p>
                  </Link>
                  <button onClick={() => agregarAlCarrito(item)}>
                    añadir al carrito
                  </button>
                </li>
              )
            })}
            <div className={styles.volver}>
              <Link to="/CartMenu" className={styles.volver2}>volver</Link>
            </div>
        </ul>
      </div>
    </div>
  )
}

export default SuperMercado
