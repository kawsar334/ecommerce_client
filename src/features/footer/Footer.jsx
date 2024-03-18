import { sidebarItems } from "../../data"
import "./footer.scss"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="footer bg-gray-900 footercontainer py-10 footercontainer">
                <div className="footertop">
                    <div className="playstore">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" />
                        <p >Download on </p>
                        <p > Apple Store </p>

                    </div>
                    <div className="applestore">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" />
                        <p >Download on </p>
                        <p className=""> Google Play Store </p>

                    </div>
                    <div className="aboutus">
                        <NavLink to="/">About us</NavLink>
                        <NavLink to="/">Contact us</NavLink>
                        <NavLink to="/">Privacy Policy</NavLink>
                    </div>
                </div>
                <div className="footerbottom">
                    <div className="footeritem">
                        <h2>Our Products</h2>
                        <ul>

                            {
                                sidebarItems.map((item) => (

                                    <li key={item?.id}><NavLink to={`/cat/${item.name}`}>{item?.name} </NavLink></li>
                                ))
                            }

                        </ul>
                    </div>

                    <div className="footeritem">
                        <h2>Go to </h2>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/contact">contact</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                            <li><a href="/">blog</a></li>
                            <li><NavLink to="/">about us</NavLink></li>

                        </ul>
                    </div>
                    <div className="footeritem">
                        <h2>Our social links</h2>
                        <ul>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Instragram</a></li>

                            <li><a href="/">Linkdin</a></li>
                            <li><a href="/">twitter</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">message</a></li>
                        </ul>
                    </div>
                    <div className="footeritem">
                        <h2> Location</h2>
                        <ul>
                            <li>
                                <a href="https://goo.gl/maps/HrWGwSBY5gdcqq1u6" target='_blank'>
                                    <i className="fa-solid fa-location-dot"></i><span> Taif 26513 /saudi arabia,</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer