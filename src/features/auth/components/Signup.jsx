import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterApi } from '../../../redux/apiCalls'
import { useDispatch } from 'react-redux'
import "./register.scss"

const Signup = () => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        setUser((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }



    // handling submit function
    const handleSubmit = (e)=>{
        e.preventDefault();

        RegisterApi(dispatch, user)
    }

  return (
      <div className='register'>

          <div className="registerwrapper">
                  <form  onSubmit={handleSubmit}>
                      <div className="registertop">
                          <img
                              className="mx-auto h-10 w-auto"
                              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                              alt="Your Company"
                          />
                          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                              Sign up Now
                          </h2>
                      <img
                          className="mx-auto h-10 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          alt="Your Company"
                      />
                      </div>
                      <div className='registeritem'>
                          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                             Name
                          </label>
                          
                              <input
                                  onChange={handleChange}
                                  id="name"
                                  name="name"
                                  type="text"
                                  required
                                  placeholder='Type Your Name'
                                  
                              />
                          
                      </div>
                      <div className='registeritem'>
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Email address
                          </label>
                          
                              <input
                                  onChange={handleChange}
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                          placeholder='example@gmail.com..'

                                  
                              />
                         
                      </div>

                      
                          
                      <div className='registeritem'>
                              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                  Password
                              </label>
                              <input
                                  onChange={handleChange}
                                  id="password"
                                  name="password"
                                  type="password"
                                  autoComplete="current-password"
                                  required
                          placeholder='Enter A Password..'

                                  
                              />
                          </div>
                      
                      <div className='registeritem'>
                          <button
                              type="submit"
                             
                          >
                              Sign up 
                          </button>
                      </div>
                  <div className="registeritem">

                  <p >
                      Already member?
                      <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                          Login
                      </Link>
                  </p>
                  </div>
                  </form>

              
          </div>

      </div>
  )
}

export default Signup