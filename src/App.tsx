import { useLocation, Routes, Route } from "react-router-dom"
import CartMenu from "./components/cartMenu/CartMenu.tsx"
import AppMutual from "./components/appMutual/AppMutual.tsx"
import SuperMercado from "./components/superMercado/SuperMercado.tsx";
import ItemDetailSuperm from "./components/itemDetailSuperMer/ItemDetailSuperMer.tsx";
import MenuCompleto from "./components/CartaMenuCompleto/CartaMenuCompleto.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import CartView from "./components/cartView/CartView.tsx";
import ItemDetail from "./components/itemDetail/ItemDetail.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Menulist from "./components/Menu/Menulist.tsx";





const App = () => {
  const location = useLocation();
  const noMostrarHeader = location.pathname === "/";


  return (
    <CartProvider>
       {!noMostrarHeader && <Header />}
       {!noMostrarHeader && <Menulist />}
        <Routes>
          <Route path="/" element={<AppMutual />} />
          <Route path="/AppMutual" element={<AppMutual />} />
          <Route path="/CartMenu" element={<CartMenu />} />
          <Route path="/menu-completo" element={<MenuCompleto />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/product/:id" element={<ItemDetailSuperm />} />
          <Route path="/SuperMercado" element={<SuperMercado />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      
      {!noMostrarHeader && <Footer />}
    </CartProvider>
  );
};

export default App 