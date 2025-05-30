
import { createContext, useContext, useState, useEffect } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

  const [carrito, setCarrito] = useState(() => {
    const storedCarrito = localStorage.getItem("carrito");
      return storedCarrito ? JSON.parse(storedCarrito) : [];
  });
  console.log(carrito)

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
  
    if (productoExistente) {
      // Si ya existe, aumenta cantidad
      const carritoActualizado = carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(carritoActualizado);
    } else {
      // Si no existe, lo añade con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };
  
  // Aumentar cantidad
const aumentarCantidad = (id) => {
  setCarrito(product =>
    product.map(item =>
      item.id === id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    )
  );
};

// Disminuir cantidad
const disminuirCantidad = (id) => {
  setCarrito(product =>
    product.map(item =>
      item.id === id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    )
  );
};


  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalCantidad = () => {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const totalCompra = () => {
    return carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0)
  }





  return (
    <CartContext.Provider
      value={{ 
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        totalCantidad,
        totalCompra, 
        aumentarCantidad,
        disminuirCantidad    }}>
       {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);
