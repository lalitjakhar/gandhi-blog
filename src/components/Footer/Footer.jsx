import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer_content">
                <div className="container">
                    <div className="footer_content_body">
                        <div className="footer_content_heading">
                            <h2>Get exclusive news and updates</h2>
                        </div>
                        <div className="footer_content_form pt-4">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email" />
                        </div>
                        <div className="footer_content_links pt-4">
                            <div className="footer_link_body">
                                <div className="footer_link_heading">
                                    <p>Quick Links</p>
                                </div>
                                <div className="footer_links_box">
                                    <ul>
                                        <li>
                                            <a href="">Home</a>
                                        </li>
                                        <li>
                                            <a href="">About</a>
                                        </li>
                                        <li>
                                            <a href="">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="">Media</a>
                                        </li>
                                        <li>
                                            <a href="">On Social Media</a>
                                        </li>
                                        <li>
                                            <a href="">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_content_icon_body">
                                <div className="footer_icon_heading">
                                    <p>On social media</p>
                                </div>
                                <div className="footer_icon_content">
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-instagram"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-youtube"></i>
                                </div>
                            </div>
                        </div>
                        <div className="footer_copyright_content">
                            <p>Copyright @ 2023. All rights reserved. | Privacy policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
