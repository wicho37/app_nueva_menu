import { useParams, Link } from "react-router-dom";
import { menu } from "../../assets/MOCK_DATA/dataMenu";
import Header from "../header/Header";
import GoShopping from "../goShopping/GoShopping";

const ItemDetail = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const data = menu.find((item) => item.id === parseInt(id)); // Busca el producto por ID


  return (
    <div>
      <Header />
      <Link to="/SuperMercado">
        <GoShopping />
      </Link>
      <img src={data.image} alt="" width={200}/>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Precio: ${data.price}</p>
      <button>añadir al carrito</button>
      <Link to="/CartMenu">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
