import { NavLink } from "react-router-dom"
import "./annouce.scss"

const Annoucement = () => {
  return (
    <div className="annouce">
        <NavLink to="/">

        <p>Supper Deal Free Shipping on Orders Over $50</p>
        </NavLink>
        <div className="annouceright">

        <NavLink to="/login">Login </NavLink>
          <NavLink to="/register">Register </NavLink>
        </div>

    </div>
  )
}

export default Annoucement