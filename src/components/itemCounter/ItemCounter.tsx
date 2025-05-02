import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const BotonCantidad = ({ id, cantidad }) => {
  const { aumentarCantidad, disminuirCantidad } = useContext(CartContext);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={() => disminuirCantidad(id)}>-</button>
      <span>{cantidad}</span>
      <button onClick={() => aumentarCantidad(id)}>+</button>
    </div>
  );
};

export default BotonCantidad;
