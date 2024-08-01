import React , { useState } from 'react'
import login from '../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Base } from '../Api';

export default function Login(props) {
    // replace window.location.pathname And Don't Refresh Page
    const Navigate = useNavigate();

    const [formData ,setFormData] = useState({
        email:"",
        password:"",
    });

    const handleChange = (e) => {
        const {name ,value} = e.target; // e.target.name or e.target.value

        setFormData({
            ...formData, // دي لازم تتعمل عشان ميحذفش اي اسم عندي ويضيف كل مره بس الحاجه الي بضيفها لا لازم كلهم يكونوا موجودين
            [name]:value 
            
        });

        // console.log(formData)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        e.preventDefault()
        axios.post(`${Base}/users/signin`,formData).then((res)=> {
            console.log(res);
            if (res.data.message === 'login') {
                localStorage.setItem('userToken',res.data.token);

                props.getUser();
                Navigate('/navbar');
            }
        }
        ).catch((err)=> console.log(err));

        // console.log(`${Base}/users/signin`)
    };
    return (
        <div>
            <section className="vh-100 text-white bg-dark">
                <div className="container-fluid h-custom vh-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={login} className="img-fluid d-none d-lg-block" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" id="email" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" 
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required/>
                                    <label className="form-label" htmlFor="email">Email</label>
                                </div>
                                <div className="form-outline mb-3">
                                    <input type="password" id="password" className="form-control form-control-lg"
                                        placeholder="Enter password" 
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        required/>
                                    <label className="form-label" htmlFor="password">Password</label>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" required />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                                        <Link to="/register" className="link-danger">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
