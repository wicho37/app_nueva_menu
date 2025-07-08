import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './SuperMercado.module.css';
import { useCart } from '../../context/CartContext';

function SupermercadoCompleto() {
  const { agregarAlCarrito } = useCart();
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtros, setFiltros] = useState({
    categoria: 'todas',
    precioMinimo: 0,
  });

  // Cargar productos al montar el componente
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  // Extraer categorías únicas
  const categorias = ['todas', ...new Set(data.map((item) => item.category || 'sin categoría'))];

  // Filtrar productos según búsqueda y categoría
  const productosFiltrados = data.filter((item) =>
    (filtros.categoria === 'todas' || item.category === filtros.categoria) &&
    item.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1 className={style.titulo}>Supermercado Completo</h1>

      {/* Filtros */}
      <div className={style.filtros}>
        <label>
          Categoría:
          <select
            value={filtros.categoria}
            onChange={(e) => setFiltros({ ...filtros, categoria: e.target.value })}
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
      </div>

      {/* Lista de productos */}
      <ul className={style.listSuperMerCompl}>
        {productosFiltrados.map((item) => (
          <li key={item.id} className={style.Cart}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} width={100} />
              <p className={style.tituloCorto}>
                {item.title}...
              </p>
              <p>{item.category}</p>
              <p className={style.descripcionCorta}>
                {item.description}...
              </p>
              <p>Precio: ${item.price}</p>
            </Link>
            <button onClick={() => agregarAlCarrito(item)}>
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
      <div>
                  <Link to="/SuperMercado" className={style.return}>Volver</Link>

      </div>
    </div>
  );
}

export default SupermercadoCompleto;
