
import { useState } from "react";
import { NavLink, useAsyncValue } from 'react-router-dom';
import axios from "axios"
import { sidebarItems } from '../../data';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./sidbar.scss"


const SideBar = ({ active, setActive, open, setOpen, setProducts })=>{

    // filtering product list 
    const handleCat = async (item) => {
        try {
            if (item === "all") {
                const res = await axios.get(`/product/`);
                setProducts(res.data.products)
                setActive("all")
                setOpen(!open)


            } else {
                const res = await axios.get(`/product/cat?cat=${item}`);
                setProducts(res.data.products)
                setActive(item)
                setOpen(!open)
            }

        } catch (err) {
            console.log(err);
        }

    }

    return(
        <>
            <div className="menuIcon" onClick={() => setOpen(!open)}>
                {!open ? <div className="menu"> <i className="fa-solid fa-grip" style={{ fontSize: "30px" }}></i> <span>Categories</span>.</div> :
                    <span className='close'><i className="fa-solid fa-xmark"></i></span>}
            </div>
            {open && <ul>
                <li data-aos="fade-up" onClick={() => handleCat("all")} className={active === "all" && "activelist"}> <label htmlFor="all">
                    {/* <input type="checkbox" name="all" id="all" /> */}
                    <span>All</span></label></li>
                {sidebarItems.map((item) => (
                    <li data-aos="fade-up" key={item?.id} className={active === item.name && "activelist"} onClick={() => handleCat(item.name)}>
                        <label htmlFor={item?.name}>
                            {/* <input type="checkbox" name={item?.name} id={item?.name} /> */}
                            <span>{item?.name}</span></label>
                    </li>))}
            </ul>}
        
        </>
    )
}

export default SideBar;