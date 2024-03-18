import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { loginApi } from '../../../redux/apiCalls';
import { useDispatch } from 'react-redux';
import "./login.scss"

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        loginApi(dispatch, { email, password });
    }
    return (
        <div className='login'>
            <div className="loginwrapper">
                <form  action="#" onSubmit={handleSubmit}>
                    <div className="logintop">
                        <img
                            className="loginlogo"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2>Login Now</h2>
                    </div>
                    <div className="loginitem">
                        <label htmlFor="email">eMAIL</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className=""
                            placeholder='Enter email'
                        />
                    </div>
                    <div className='loginitem'>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className=""
                            placeholder='Enter Your Password'
                        />
                    </div>
                    <div className='loginitem'>
                        <button
                            type="submit"
                            className="loginbtn"
                        >
                            Sign in
                        </button>
                    </div>
                    <div className='loginitem'>
                        <p>
                      <span>Don't have Any Account?</span> <NavLink to="/register">Register</NavLink>
                        </p>
                    </div>

                </form>
               
            </div>

        </div>

    )
}

export default LoginComponent