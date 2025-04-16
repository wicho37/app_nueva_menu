
import { createContext, useContext, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  console.log(carrito)

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{ 
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito
     }}>
       {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);
