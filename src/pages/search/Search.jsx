import { NavLink, useLocation } from "react-router-dom"
import "./search.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductList from "../../features/productlist/ProductLists"
import Annoucement from "../../features/annnoucement/Annoucement"
import Footer from "../../features/footer/Footer"

const Search = () => {
    const cat = useLocation().search
   const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`/product/search${cat}`)
              setProducts(res.data.products)
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();

    }, [cat])
  return (
    <div className="search">
        <Annoucement/>
        {
            products.length ===0 ? <div className="emptysearch">sorry Not found any  products ! <br/> <NavLink to={"/"}>Go to Home</NavLink> </div>:
            <>

            <h1 className="searchheader">{products?.length} products found..</h1>
      <ProductList products={products} setProducts={setProducts}/>
            </>
        }
      <Footer/>

    </div>
  )
}

export default Search