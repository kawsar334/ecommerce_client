import React, { useEffect, useState } from 'react'
import ProductList from '../../features/productlist/ProductLists'
import Navbar from '../../features/navbar/Navbar'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Footer from '../../features/footer/Footer'
import Recomended from '../../features/Recomended/Recomended'
import Categories from '../../features/category/Categories'
import Annoucement from '../../features/annnoucement/Annoucement'

const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`/product`);
                setProducts(res.data.products);
            } catch (err) {
                console.log(err);
            }
        }
        getProducts()
    }, [])
   
  return (
      <div style={{ background:"white", fontWeight:"700"}} >
        <Navbar/>
        <Annoucement/>
          <ProductList products={products} setProducts={setProducts }/>
        <Categories/>
        <Recomended/>
        <Footer/>
    </div>
  )
}

export default Products