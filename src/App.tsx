import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartMenu from "./components/cartMenu/CartMenu.tsx"
import AppMutual from "./components/appMutual/AppMutual.tsx"
import SuperMercado from "./components/superMercado/SuperMercado.tsx";


const App = () => {

  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<AppMutual />} />
          <Route path="/CartMenu" element={<CartMenu/>} />
          <Route path="/AppMutual" element={<AppMutual />} />
          <Route path="/SuperMercado" element={<SuperMercado />}/>
       </Routes>
    </BrowserRouter>
   
  );
};

export default App 