import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import "./navbar.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

export default function Navbar({ products, setProducts }) {
    const [open, setOpen] = useState(false);
    const product = useSelector((state) => state?.cart);
    const Auth = localStorage.getItem("auth");
    const [cat, setCat] = useState(null)
    const navigate = useNavigate()
    const location = useLocation().pathname;





    // aos animation 
    useEffect(() => {
        AOS.init();
    }, []);
    // getting related product from database same category
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`/product/search?search=${cat}`)
                setProducts(res.data.products)
            } catch (err) {
                console.log(err);
            }
        }
        cat && getProducts();

    }, [cat])

    // handling search functionality
    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/searchroute?search=${cat}`)
    }

    return (
        <div className='navbarContainer'>
            <NavLink to="/">
                <img src="/imgs/e.png" alt="" className='logo' />
            </NavLink>
            <div className="navwrapper">
                <NavLink to="/" className="navleft">
                    <span>Daraz</span> shoping
                </NavLink>
                {location === "/" && <form className="searchcontainer" onSubmit={handleSearch}>
                    <input type='text' required onChange={(e) => setCat(e.target.value)} placeholder='Search..' className='searchinput' />
                    {cat && <button ><i className="fa-solid fa-magnifying-glass"></i></button>}
                </form>}
                {open && <div className="navright" data-aos="flip-right">
                    <ul>
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/products">products</NavLink></li>
                        {!Auth ? <li><NavLink to="/login">Login</NavLink></li> : <li><NavLink>Logout</NavLink></li>}
                        <li><a href="https://portfolio-c34cf.firebaseapp.com/" target='_blank'>About us</a></li>
                        <li><a href="/admin">Admin pannel</a></li>
                        <li><NavLink to="/cart"><div className="counter">
                            <i className="fa-solid fa-bag-shopping"></i>
                            <span>{product?.products.length}</span>
                        </div></NavLink></li>
                    </ul>

                    <span className='close' onClick={() => setOpen(!open)}><i class="fa-solid fa-xmark"></i></span>
                </div>}
                <div className='navmenucontainer'>
                    <div className="menuIcon" onClick={() => setOpen(!open)}>
                        <i className="fa-solid fa-bars" style={{ fontSize: "30px" }}></i>
                    </div>
                    <span className=''>
                        <NavLink to="/cart">
                        <div className="counter">
                            <i className="fa-solid fa-bag-shopping"></i>
                            <span>{product?.products.length}</span>
                        </div>
                    </NavLink>
                    </span>
                </div>
            </div>
        </div>
    )
}