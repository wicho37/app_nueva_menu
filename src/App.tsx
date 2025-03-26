import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartMenu from "./components/cartMenu/CartMenu.tsx"
import AppMutual from "./components/appMutual/AppMutual.tsx"
import SuperMercado from "./components/superMercado/SuperMercado.tsx";
import {menu as initialProducts} from "../src/assets/MOCK_DATA/dataMenu.ts"
import { useState } from "react";
import Header from "./components/header/Header.tsx";


const App = () => {
  const [menu] = useState (initialProducts)
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  })

  const filterMenus = (menus) => {
    return menu.filter(menu => {
      return (
        menu.price > filters.minPrice && 
        (
        filters.category === "all" ||
        menus.category === filters.category
        )
      )
    })
  }

const filteredMenu = filterMenus(menu)
  

  return (
    <BrowserRouter>
      <Header changeFilters={setFilters} />
       <Routes>
          <Route path="/" element={<AppMutual />} />
          <Route path="/AppMutual" element={<AppMutual />} />
          {<Route path="/CartMenu" element={<CartMenu/>} />}
          
          <Route path="/SuperMercado" element={<SuperMercado menu={filteredMenu} />}/>
       </Routes>
    </BrowserRouter>
   
  );
};

export default App 