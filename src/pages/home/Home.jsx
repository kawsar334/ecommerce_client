import React, { useEffect, useState } from 'react'
import Navbar from '../../features/navbar/Navbar'
import ProductList from '../../features/productlist/ProductLists'
import Footer from '../../features/footer/Footer'
import Slider from '../../features/slider/Slider'
import axios from 'axios'
import Categories from '../../features/category/Categories'
import Recomended from '../../features/Recomended/Recomended'
import { productlist, sidebarItems } from '../../data';
import LogoBorderAnimation from '../../features/animation/Animation'
import NavbarTow from '../../features/navbar/navbarTow'
import LoginComponent from '../../features/auth/components/Login'
// import Test from "./Test"


const Home = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen]= useState(false)

  // gett productlist  from backend ... 
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`/product/`);
        setProducts(res.data.products);
       
      } catch (err) {
        console.log(err); 
      }
    }
    getProducts();
  }, []);

  useEffect(()=>{

    if(products.length ===0){
      setProducts(productlist);
    }
  }, [productlist]);
  
  return (
    <div >
      <Navbar products={products} setProducts={setProducts} />
      <NavbarTow open={open} setOpen={setOpen} />
      <Slider products={products} />
      <Categories  open={open} setOpen={setOpen}/>
      <ProductList products={products} setProducts={setProducts} />
      <Recomended />
      <Footer />
    </div>
  )
}

export default Home