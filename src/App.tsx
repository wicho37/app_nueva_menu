import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartMenu from "./components/cartMenu/CartMenu.tsx"
import AppMutual from "./components/appMutual/AppMutual.tsx"
import SuperMercado from "./components/superMercado/SuperMercado.tsx";
import Header from "./components/header/Header.tsx";
import ItemDetail from "./components/itemDetail/ItemDEtail.tsx";
import ItemDetailSuperm from "./components/itemDetailSuperMer/ItemDetailSuperMer.tsx";




const App = () => {
  
  

  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<AppMutual />} />
          <Route path="/AppMutual" element={<AppMutual />} />
          <Route path="/CartMenu" element={<CartMenu />} />
          <Route path="/item/:id" element={<ItemDetail/>}/>
          <Route path="/product/:id" element={<ItemDetailSuperm/>}/>
          <Route path="/SuperMercado" element={<SuperMercado />}/>
       </Routes>
    </BrowserRouter>
   
  );
};

export default App 