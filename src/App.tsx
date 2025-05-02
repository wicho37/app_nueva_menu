import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartMenu from "./components/cartMenu/CartMenu.tsx"
import AppMutual from "./components/appMutual/AppMutual.tsx"
import SuperMercado from "./components/superMercado/SuperMercado.tsx";
import ItemDetail from "./components/itemDetail/ItemDEtail.tsx";
import ItemDetailSuperm from "./components/itemDetailSuperMer/ItemDetailSuperMer.tsx";
import MenuCompleto from "./components/CartaMenuCompleto/CartaMenuCompleto.tsx";
import Header from "./components/header/Header.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import CartView from "./components/cartView/CartView.tsx";
import Footer from "./components/footer/Footer.tsx";




const App = () => {
  
  

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Header" element={<Header/>}></Route>
          <Route path="/" element={<AppMutual />} />
          <Route path="/AppMutual" element={<AppMutual />} />
          <Route path="/CartMenu" element={<CartMenu />} />
          <Route path="/menu-completo" element={<MenuCompleto />} />
          <Route path="/item/:id" element={<ItemDetail/>}/>
          <Route path="/product/:id" element={<ItemDetailSuperm/>}/>
          <Route path="/SuperMercado" element={<SuperMercado />}/>
          <Route path="/cart" element={<CartView />} />
          <Route path="/Footer" element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App 