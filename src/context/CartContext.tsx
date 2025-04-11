import { createContext } from "react"
import { useState } from "react";




export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
      };


   return(
    <CartContext.Provider value={{
        carrito,
        agregarAlCarrito
    }} >
        {children}
    </CartContext.Provider>
   )
}

// Hook personalizado para usar el contexto
//export const useCart = () => useContext(CartContext);