import { NavLink } from "react-router-dom"
import "./categories.scss"
import { sidebarItems } from "../../data"
import { useEffect, useState } from "react"
import axios from "axios";

const Categories = ({ open , setOpen }) => {
const [cat, setCat] = useState(sidebarItems);

  return (
    <div className={open?"categories":"hidecategory"}>
        <div className="categorywrapper">
          <ul>
            <li className="closebtn" onClick={()=>setOpen(!open)}>x</li>
           {cat?.reverse().map((item)=>(
           <li key={item.id}><NavLink to={`/cat/${item?.name}`} >
                      <img src={item?.img} alt="..." />
                <span>{item.name}</span>
                </NavLink>
             </li>)) }
          </ul>
        </div>
    </div>
  )
}

export default Categories