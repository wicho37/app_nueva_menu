import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../header/Header";
import GoShopping from "../goShopping/GoShopping";

function ItemDetailSuperm() {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [product, setProduct] = useState([]);
  console.log(product)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error al obtener el producto:", error));
  }, [id]);

  if (!product) {
    return <h2>Cargando...</h2>;
  }
  
  return (
    <div>
      <Header />
      <Link to="/SuperMercado">
        <GoShopping />
      </Link>
      <p>ID:{product.id}</p>
      <img src={product.image} alt={product.title} width={100} />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <button>añadir al carrito</button>
      <Link to="/supermercado">
        <button>Volver</button>
      </Link>
    </div>
  )
}

export default ItemDetailSuperm