import { useParams, Link } from "react-router-dom";
import { menu } from "../../assets/MOCK_DATA/dataMenu";

const ItemDetail = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const data = menu.find((item) => item.id === parseInt(id)); // Busca el producto por ID


  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Precio: ${data.price}</p>
      <Link to="/CartMenu">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
