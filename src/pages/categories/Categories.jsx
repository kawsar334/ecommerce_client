import { useEffect, useState } from "react"
import Footer from "../../features/footer/Footer";
import Navbar from "../../features/navbar/Navbar"
import ProductList from "../../features/productlist/ProductLists"
import "./categories.scss"
import { NavLink, useLocation } from "react-router-dom"
import axios from "axios";

const Categories = () => {
    const cat = useLocation().pathname.split("/")[2]
    console.log(cat)

    const [products, setProducts] = useState([]);
      useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`/product/cat?cat=${cat}`);
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts()
  }, [])

  return (
    <>
        <Navbar/>
    
          {products.length < 1 ?
           <div className="empty">
            <h1 >Empty product lists</h1>
            <NavLink to="/" > go to Home</NavLink>
          </div> :
          <ProductList products={products } setProducts={setProducts}/>
    }

        <Footer/>
    </>
  )
}

export default Categories