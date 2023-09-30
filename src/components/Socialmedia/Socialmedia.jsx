import React from 'react';
import './Socialmedia.css';
import Carousel from '../../assets/carousel.png'
import Gallery2 from '../../assets/gallery2.png'

const Socialmedia = () => {
    return (
        <>
            <div className="social_media_content_body_back pt-5">
                <div className="container">
                    <div className="social_media_content_body_heading">
                        <h2>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots </h2>
                    </div>
                    <div id="carouselExampleAutoplaying" className="carousel slide py-5" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Carousel} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Carousel} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Carousel} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Socialmedia;
