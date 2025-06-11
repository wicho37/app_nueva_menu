import React from "react"
import Menulist from "../Menu/Menulist"
import style from "./Header.module.css"
import RedesSociales from "../redesSociales/RedesSociales"



const Header = () => {

  return (
      <div className={style.header}>
        <p className={style.cabecero}>comida para todos sus gustos</p>
        <div>
          <Menulist />
        </div>
        <div>
          <RedesSociales />
        </div>
      </div>
  )
}

export default React.memo (Header)



