import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartMenu from "./components/cartMenu/CartMenu.tsx"
import AppMutual from "./components/appMutual/AppMutual.tsx"


const App = () => {

  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<AppMutual />} />
          <Route path="/CartMenu" element={<CartMenu/>} />
          <Route path="/AppMutual" element={<AppMutual />} />
          
       </Routes>
    </BrowserRouter>
   
  );
};

export default App 