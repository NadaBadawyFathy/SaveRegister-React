import axios from 'axios';
import React, { useState } from 'react';
import { Base } from '../Api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    // replace window.location.pathname And Don't Refresh Page
    const Navigate = useNavigate();

    const [formData ,setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });

    const handleChange = (e) => {
        const {name ,value} = e.target; // e.target.name or e.target.value

        setFormData({
            ...formData, 
            [name]:value 
                
        });

        // console.log(formData)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post(`${Base}/users/signup`,formData).then((res)=> {
            console.log(res);
            if (res.data.message === 'success') {
                Navigate('/login')
            }
        }
        ).catch((err)=> console.log(err));

        // console.log(`${Base}/users/signup`)
    };

    return (
        <div>
            <section className="vh-100 text-white bg-dark overflow-hidden">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card bg-dark text-white" style={{ borderRadius: '30px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="name" name='name' className="form-control" 
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        />
                                                        <label className="form-label" htmlFor="name">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" name='email' id="email" className="form-control" 
                                                        required
                                                        value={formData.email} 
                                                        onChange={handleChange} 
                                                        // هتفضل زي اول فاليو فيها ومش هتقدري تغيريها حتي لو اول مره الحقل فاضيvalueلو معملتش الخطوه دي قيمه 
                                                        />
                                                        <label className="form-label" htmlFor="email">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" name='password' id="password" className="form-control" 
                                                        required
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        />
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required/>
                                                    <label className="form-check-label" htmlFor="form2Example3c">
                                                        I agree to all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
