/* import { useState } from "react"
import style from "./Filter.module.css"


const Filters = ({onChange}) => {
  const [minPrice, setMinPrice] = useState (0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <div>
        <section className={style.filters}>
          <div>
            <label htmlFor="price">Precio</label>
            <input 
               type="range"
               id='price'
               min="0"
               max="1000"
               onChange={handleChangeMinPrice}
             />
             <span>{minPrice}</span>
          </div>
          <div>
            <label htmlFor="category">Categoria</label>
            <select id="category" onChange={ handleChangeCategory }>
               <option value="all">todas</option>
               <option value="men's clothing">ropa hombre</option>
               <option value="jewelery">joyeria</option>
               <option value="electronics">electronica</option>
               <option value="women's clothing">ropa mujer</option>
            </select>
          </div>
        </section>
    </div>
  )
}

export default Filters */