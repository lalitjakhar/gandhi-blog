import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Socialmedia.css';
import carousel_img_1 from '../../assets/navbarmain.png';
// import Gallery2 from '../../assets/gallery2.png'

const Socialmedia = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const responsive1 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="container">
                <div className="social_media_content_body_heading">
                    <h2>Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots</h2>
                    <p>Sep 2019</p>
                </div>
                <div className="carousel_content_body_first">
                    <Carousel responsive={responsive} arrows={true}>
                        <div><img src={carousel_img_1} className="d-block w-100" alt="..." /></div>
                        <div><img src={carousel_img_1} className="d-block w-100" alt="..." /></div>
                        <div><img src={carousel_img_1} className="d-block w-100" alt="..." /></div>
                        <div><img src={carousel_img_1} className="d-block w-100" alt="..." /></div>
                        <div><img src={carousel_img_1} className="d-block w-100" alt="..." /></div>
                        <div><img src={carousel_img_1} className="d-block w-100" alt="..." /></div>
                    </Carousel>
                </div>
                <div className="carousel_content_body_sec my-3">
                    <Carousel responsive={responsive1} arrows={true}>
                        <div className="carousel_card_content_body">
                            <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</h5>
                            <div className="carousel_card_content_footer">
                                <p>11 Sep 2023</p>
                                <i class="bi bi-forward-fill"></i>
                            </div>
                        </div>
                        <div className="carousel_card_content_body">
                            <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</h5>
                            <div className="carousel_card_content_footer">
                                <p>11 Sep 2023</p>
                                <i class="bi bi-forward-fill"></i>
                            </div>
                        </div>
                        <div className="carousel_card_content_body">
                            <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</h5>
                            <div className="carousel_card_content_footer">
                                <p>11 Sep 2023</p>
                                <i class="bi bi-forward-fill"></i>
                            </div>
                        </div>
                        <div className="carousel_card_content_body">
                            <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</h5>
                            <div className="carousel_card_content_footer">
                                <p>11 Sep 2023</p>
                                <i class="bi bi-forward-fill"></i>
                            </div>
                        </div>
                        <div className="carousel_card_content_body">
                            <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</h5>
                            <div className="carousel_card_content_footer">
                                <p>11 Sep 2023</p>
                                <i class="bi bi-forward-fill"></i>
                            </div>
                        </div>
                        <div className="carousel_card_content_body">
                            <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</h5>
                            <div className="carousel_card_content_footer">
                                <p>11 Sep 2023</p>
                                <i class="bi bi-forward-fill"></i>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default Socialmedia;
