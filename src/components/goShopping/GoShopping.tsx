
import style from "./GoShopping.module.css"
import imgcafe1 from "../../assets/img/cafe expreso.png"
import imgcafe2 from "../../assets/img/cafeConLeche.png"
import imgcafe3 from "../../assets/img/cafe americano.png"
import imgPastaPpal from "../../assets/img/alimento2.png"




const GoShopping = () => {
  return (
    <div className={style.container}>
        
          <img src={imgPastaPpal} alt="" className={style.imgPastaPpal}/>
        
          <div className={style.container2}>
            <img src={imgcafe3} alt="" />
            <img src={imgcafe2} alt="" />
            <img src={imgcafe1} alt="" />
          </div>
          <h1 className={style.comprar}>comprar aqui</h1>
        </div>

    
  )
}


export default GoShopping