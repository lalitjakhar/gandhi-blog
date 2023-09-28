import React from 'react';
import './Navbar.css';
import NavbarMain from '../../assets/navbarmain.png'
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Media from '../Media/Media';
import Socialmedia from '../Socialmedia/Socialmedia';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="navbar_body">
                <nav className="navbar navbar-expand-lg navbar_body_content">
                    <div className="container">
                        <button className="navbar-toggler navbar_toggler_btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => navigate("/")}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => navigate("/about")}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => navigate("/gallery")}>Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => navigate("/media")}>Media</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => navigate("/socialmedia")}>On Social Media</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => navigate("/Contact")}>Contact Us</a>
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
