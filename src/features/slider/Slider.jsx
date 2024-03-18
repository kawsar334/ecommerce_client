import "./slider.scss";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Slider = ({ products }) => {
    // 
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className="slider">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="mySwiper">
                {products?.map((product) => (
                    <SwiperSlide className="slideItem">
                        <img src={product.images[0]} alt="Loading..." />
                        <NavLink to={`/cat/${product?.category[0]}`} data-aos="flip-right" className="slidercontents">
                            <h4>{product?.title.slice(0, 25)} ...</h4>
                            <p>{product?.description.slice(0, 150)}...</p>
                            <button>See Now</button>
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider