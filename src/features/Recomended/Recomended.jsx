import { sidebarItems } from "../../data"
import "./recomended.scss"
import { NavLink } from 'react-router-dom'

const Recomended = () => {
  return (
    <div className="recomendedcontainer">
    <h4>Recomended For You</h4>
    <div className='recomended'>
        <div className="recomenditems">
            <NavLink to={`/cat/mobile`} className="recomentditem">
                      <img src={"/imgs/1.png" ||"https://images.pexels.com/photos/5717892/pexels-photo-5717892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Loading..." />
                <button>See More</button>
            </NavLink>
                  <NavLink to={`/cat/jeans`} className="recomentditem">
                      <img src={"/imgs/5.png" ||"https://images.pexels.com/photos/5717892/pexels-photo-5717892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Loading..." />
                  <button>See More</button>
              </NavLink>
                  <NavLink to={`/cat/jeans`} className="recomentditem">
                      <img src={"/imgs/3.png" ||"https://images.pexels.com/photos/5717892/pexels-photo-5717892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Loading..." />
                  <button>See More</button>
              </NavLink>
                  <NavLink to={`/cat/cloths`} className="recomentditem">
                      <img src={"/imgs/4.png" || "https://images.pexels.com/photos/5717892/pexels-photo-5717892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Loading..." />
                  <button>See More</button>
              </NavLink>
        </div>

{/* recomend bottom */}
        <div className="recomendedbottom">
                  <NavLink to={`/cat/${sidebarItems[4].name}`} >
                      <img src={"http://res.cloudinary.com/dmvmzwqkw/image/upload/v1695915593/ecommerce/wwmc06h17clvzpqlhepz.png" ||"https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Loading..." />
                      <button>See More</button>
                  </NavLink>
                  <NavLink to={`/cat/${sidebarItems[5].name}`} >
                      <img src={"http://res.cloudinary.com/dmvmzwqkw/image/upload/v1695919541/ecommerce/ad2jtdwdah8ilxwzmlqs.png" ||"https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Loading..." />
                      <button>See More</button>
                  </NavLink>
        </div>
        {/* recomend bottom */}
    </div>
    </div>
  )
}

export default Recomended