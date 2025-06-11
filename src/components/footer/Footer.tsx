import logoRestaurante from "../../assets/img/restaurante.png"
import style from "./Footer.module.css"


const Footer = () => {
  return (
    <div className={style.contentFooter}>
        <div>
            <img src={logoRestaurante} alt="" className={style.logoRestaurante} />
          </div>  
          <div>
              <ul className={style.listFooter}>
                  <h2>conocenos</h2>
                  <li>
                      <p>carta del restaurante</p>
                      <p>servicio al cliente</p>
                      <p>contacto</p>
                      <p>promociones - terminos y condiciones</p>
                      <p>politicas y tiempo de devoluciones</p>
                  </li>
              </ul>
          </div>

          <div>
              <ul className={style.listFooter}>
                  <h2>redes sociales</h2>
                 <li>
                    <p>instagram</p>
                    <p>facebook</p>
                    <p>X</p>
                 </li>
              </ul>
          </div>
        
          <div>
              <ul className={style.listFooter}>
                <h2>mi cuenta</h2>
                <li>
                  <p>pedir</p>
                  <p>iniciar sesión</p>
                </li>
              </ul>
          </div>
          <div className={style.autor}>
            <p>powered by wicho</p>
          </div>
    </div>
        
  
  )
}

export default Footer