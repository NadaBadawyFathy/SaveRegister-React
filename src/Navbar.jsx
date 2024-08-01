import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg pt-3 pb-3 border-bottom navbar-light bg-light"> 
            <div className="container">
                <Link to="/navbar" className="navbar-brand text-primary"><h1>React</h1></Link>
                <button className="navbar-toggler border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{boxShadow:"none"}}>
                    <i className="fa-solid fa-bars text-primary" style={{fontSize:"26px"}}></i>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <Link to="/register" className="nav-link">
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Register</button>
                        </Link>
                        <Link to="/login" className="nav-link">
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
