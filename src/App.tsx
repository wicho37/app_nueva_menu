import style from "./App.module.css"
import Navbar from "./components/navbar/Navbar.tsx"
import ApiExito from "./components/ApiExito/ApiExito.tsx"

const App = () => {

  return (
    <div className={style.home}>
      <Navbar />
      <ApiExito />
      {/* <Card /> */}
    </div>
  )
}

export default App