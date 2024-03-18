import "./productlist.scss";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { NavLink, useAsyncValue } from 'react-router-dom';
import axios from "axios"
import { sidebarItems } from '../../data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SideBar from "../sidebar/Sidebar";
import { addProduct } from "../../redux/cardSlice";


export default function ProductList({ products, setProducts }) {
    const [active, setActive] = useState("all");
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    // 
    useEffect(() => {
        AOS.init();
    }, []);
    const handleAdd = (item) => {
        dispatch(addProduct({ ...item }))
    }
    return (
        <div className='productContainer'>

            <div className='productleft' >
                <SideBar active={active} setActive={setActive} open={open} setOpen={setOpen} setProducts={setProducts} />
            </div>
            <div className='productright' data-aos="fade-left">
                {products?.lenght < 1 ? <h1>Empty Product Lists</h1> : <div className="products">
                    {
                        products?.map((item) => {
                            return (
                                <div  data-aos="flip-right" key={item._id} className='productitem' >
                                    <NavLink to={`/details/${item._id}`} title={item?.title}>
                                        <img src={item.images[0]} className='itemimg' />
                                    </NavLink>
                                    <div className='contents' data-aos="flip-left">
                                        <h3>{item?.title.slice(0, 30)}...</h3>
                                        <span>SAR-{item?.price}</span>
                                        <i className="fa-solid fa-plus" title="ADD TO CARD" onClick={() => handleAdd(item)}></i>
                                        <NavLink to={`/details/${item._id}`}>
                                            <i className="fa-regular fa-eye" title="SEE MORE."></i>
                                        </NavLink>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>}
                {/* pagination */}

                {/* pagination end here */}
            </div>
        </div>
    );
}