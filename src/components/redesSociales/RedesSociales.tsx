import { Link } from "react-router-dom"
import whatsapp from "../../assets/img/whatsapp.svg"
import facebook from '../../assets/img/facebook.svg'
import twitter from "../../assets/img/twitter.svg"
import style from "./RedesSociales.module.css"


const RedesSociales = () => {
  return (
    <div className={style.contentRedes}>
        <Link to="/">
           <img src={whatsapp} alt="" width={50}/>
        </Link>

        <Link to="/">
           <img src={facebook} alt="" width={50}/>
        </Link>

        <Link to="/">
           <img src={twitter} alt="" width={50}/>
        </Link>
    </div>
  )
}

export default RedesSociales