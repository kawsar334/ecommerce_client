import React, { useEffect, useState } from 'react'
import "./cart.css"
import StripeCheckout from 'react-stripe-checkout';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../../features/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeProduct } from '../../redux/cardSlice';
import Login from '../login/Login';
import { userRequest } from '../../redux/apiCalls';



const CartPage = () => {
  const cart = useSelector((state) => state?.cart);
  const navigate = useNavigate()
  const Auth = localStorage.getItem("auth");
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({})
 useEffect(()=>{
   userRequest.get(`/user/find/${Auth}`)
     .then(response => {
       setUser(response.data.user);
     })
     .catch(error => {
       console.error(error);
     });
 },[Auth])

  // 
  const onToken = (token) => {
      setStripeToken(token);
  };

  // 
  useEffect(() => {
    const makeRequiest = async () => {
      try {
        const res = await axios.post("/stripe/pay", {
          tokenId: stripeToken?.id,
          amount: Math.round(cart?.total * 100),
        });
        console.log(res.data);
        if(res.data){
          navigate("/success");
        }
      } catch (err) {
        console.log(err.response.data);
      }
    }
    stripeToken && makeRequiest();
  }, [stripeToken]);



  return (
    <>
      <Navbar />
      {cart?.products.length === 0 ?
        <div className='continueshoping_container'>
          <h1>Your Cart is Empty </h1>
          <NavLink to="/">Continue Shoping !</NavLink>
        </div>
        : <div className='cart shadow'>
          <h1 className='text-2xl font-semibold  '>Shoping Cart</h1>
          {cart && <div className="cartwrapper">
            {cart?.products?.map((item) => (

              <div className="item" key={item.id}>
                <div className="itemcontents">
                  <div className="itemleft">
                    <img src={item?.images[0 || 1]} alt="Loading..." className="itemimg" />
                    <div className="itemcontent">
                      <h3 className='font-semibold ' style={{ color: `${item?.color}` }} >{item?.title} </h3>
                      <span style={{ color: `${item?.color}` }}>{item.color}</span>
                      <select style={{ color: `${item?.color}` }}>
                        <option value="1">{item.quantity}</option>
                      </select>
                      <span>{item?.category}</span>
                      <span className=''>{item.stock && "In Stock"} </span>
                    </div>
                  </div>
                </div>
                <div className="itemright">
                  <span>${item.price}</span>
                  <button className='removebtn' onClick={() => dispatch(removeProduct(item))}>Remove</button>
                </div>
              </div>
            ))}
          </div>}
          <div className="cartbottom flex flex-col relative">
            <span className='text-2xl text-black'>Subtotal</span>
            <span className='text-gray-400'>Shipping and taxes will be calculated at checkout.</span>
            <span className="total absolute ">{cart.total}</span>
          </div>
          <StripeCheckout className="checkoutbtn "
            name={user?.name || ""}
            description="Big Data Stuff"
            image={'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg'}
            ComponentClass="div"
            panelLabel="pay Money"
            amount={cart?.total * 100}
            currency="SAR"
            stripeKey="pk_test_51KGo0XHG7qACO4ZleQqv0XtS5T9ryIsssF6WRliEaQZOJ0sVZm5TSes4uQVS9bSuAKyjeysqnUD8DFgNDGxJF8oC002HOxI3YC"
            email={user?.email || ""}
            shippingAddress
            billingAddress={true}
            token={onToken}
          >
            <button className='checkoutbtn w-full '>checkout</button>
          </StripeCheckout>
          <p className='w-full continueshoping'>or <Link to="/" className=''>Continue shoping </Link></p>
        </div>}
    </>
  )
}

export default CartPage;