import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <section className="navbar_body">
                <nav className="navbar navbar-expand-lg navbar_body_content">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Media</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">On Social Media</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar_content_icons">
                            <i className="bi bi-moon-stars"></i>
                            <i className="bi bi-search"></i>
                            <i className="bi bi-border-width"></i>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar;
