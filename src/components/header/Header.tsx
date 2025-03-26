import Filters from "../filter/Filter"

const Header = ({changeFilters}) => {

  return (
    <header>
         <div>  store Shop</div>
            <Filters  onChange={changeFilters}  />
    </header>
   
  )
}

export default Header



