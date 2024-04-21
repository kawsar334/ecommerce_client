
import Navbar from "../../features/navbar/Navbar";
import Footer from "../../features/footer/Footer";
import "./details.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { addProduct } from "../../redux/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import Annoucement from "../../features/annnoucement/Annoucement";

const Details = () => {
    // const cart = useSelector((item)=>item.cart);
    const cart = useSelector((state) => state.cart);

    const id = useLocation().pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [colors, setColors] = useState(null)
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const cat = product?.category?.map((i) => { return i });
    // getting product detials from backend
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`/product/find/${id}`)
                setProduct(res.data.product)
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [id]);

    // handling quantity  
    const handleQuantity = (operation) => {
        operation === "i" ? setQuantity(quantity + 1) : setQuantity(quantity - 1)
    }
    // handling add product functionality 
    const handleAdd = () => {
        const existingProductIndex = cart?.products?.findIndex((item)=>item?._id === product?._id);
        if(existingProductIndex === -1){
            dispatch(addProduct({ id: product.id, quantity: 1 }));
        }else{

            dispatch(addProduct({ ...product, quantity: 1 }))
        }
    }
    // getting related product from database . by category 
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
    }, [cat]);

    return (
        <>
            <div className="details">
                <Navbar />
                <Annoucement />

                <div className="details_container">

                    <div className="detailsLeft">

                        {
                            product?.images?.slice(0, 1).map((img) => (
                                <img src={img || "https://images.pexels.com/photos/14353079/pexels-photo-14353079.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"} alt="Loading..." className="detailsImg" />
                            ))}

                    </div>
                    <div className="detailsRight">
                        <div className="detiailsInfo">
                            <h2 className="title">{product?.title}</h2>
                            <p>{product?.description}</p>
                            <h2 style={{ fontSize: "20px" }}>Price:<b>${product?.price}</b></h2>
                            <div className="colors">
                                <h3>colors:</h3>
                                {product?.colors?.length > 0 && product?.colors?.map((c) => (
                                    <span key={c} className="color" onClick={(e) => setColors(c)} style={{ background: c }}></span>
                                ))}

                            </div>
                            {
                                product?.sizes && <> <div className="sizes">
                                    <h3>size:</h3>
                                    {product?.sizes.map((i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </div>
                                </>
                            }

                            <div className="counterDiv" >
                                <button className="span" onClick={() => handleQuantity("i")}> +</button>
                                <button className="span"> {quantity}</button>
                                <button className="span" onClick={() => handleQuantity("d")} disabled={quantity === 1}>-</button>

                            </div>
                            <button onClick={handleAdd}>Add to cart</button>

                        </div>
                    </div>
                </div>


                <div className="detailscategorycontainer">
                    <h2>Related Products..</h2>
                    <div className="detailsItems">

                        {products?.map((item) => (<NavLink to={`/cat/${item?.category}`} className="detailsitem">
                            <img src={item?.images[0]} alt="Loading..." />
                            <button>See more</button>
                        </NavLink >))}

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Details