import { Link } from "react-router-dom";
import { menu } from "../../assets/MOCK_DATA/dataMenu";
import style from "../cartMenu/CartMenu.module.css";
import GoShopping from "../goShopping/GoShopping";
import Header from "../header/Header";
import { useState} from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function MenuCompleto() {
  const { agregarAlCarrito,carrito } = useContext(CartContext)

  const [filtros, setFiltros] = useState({
    categoria: "todas",
    precioMinimo: 0
  });
  
    // Categorías únicas del menú
  const categorias = ["todas", ...new Set(menu.map(item => item.category || "sin categoría"))];
  
  // Aplicar filtros al menú
  const productosFiltrados = menu.filter(item =>
    item.price >= filtros.precioMinimo &&
    (filtros.categoria === "todas" || item.category === filtros.categoria)
  );

  return (
    <div>
      <Header />
      <Link to="/SuperMercado">
        <GoShopping />
      </Link>

      <div>
        {/* Lista filtrada */}
        <ul>
          <h1>Menú Completo</h1>

          {/* Filtros */}
          <div className={style.labels}>
            <label>
              Categoría:
              <select
                value={filtros.categoria}
                onChange={(e) =>
                  setFiltros({ ...filtros, categoria: e.target.value })
                }
              >
                {categorias.map((categ, index) => (
                  <option key={index} value={categ}>
                    {categ}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Precio apartir de:
              <input
                type="text"
                value={filtros.precioMinimo}
                onChange={(e) => setFiltros({ ...filtros, precioMinimo: Number(e.target.value) })}
              />
            </label>

          </div>
          {productosFiltrados.map((menuItem) => (
            <li key={menuItem.id} className={style.Cart}>
              <Link to={`/item/${menuItem.id}`}>
              <h3>{menuItem.name}</h3>
              <img src={menuItem.image} alt={menuItem.name} width={150} />
              <p>{menuItem.description}</p>
              <p>Precio: ${menuItem.price}</p>
              </Link>
              <button onClick={() => agregarAlCarrito(menuItem)}>añadir al carrito</button>

            </li>
          ))}
        </ul>
      </div>

      <Link to="/cartmenu">Volver</Link>
    </div>
  );
};

export default MenuCompleto;
