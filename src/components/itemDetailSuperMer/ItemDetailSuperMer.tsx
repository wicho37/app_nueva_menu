import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <p>ID:{product.id}</p>
      <img src={product.image} alt={product.title} width={100} />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <button>añadir al carrito</button>
    </div>
  )
}

export default ItemDetailSuperm