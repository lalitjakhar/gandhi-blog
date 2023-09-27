import React from 'react';
import './Gallery.css';
import bwvijr from '../../assets/bwvijr.png';
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'

const Gallery = () => {
    return (
        <>
            <div className="nav_gallery_content_body">
                <div className="nav_gallery_content_heading">
                    <h2>“Be The Change That You Wish To See In The World.”</h2>
                </div>
            </div>
            <div className="nav_gallery_content_para">
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from. <br /> <br />Read more...</p>
            </div>
            <div className="container mt-5">
                <div className="john_video_content_body">
                    <h1>John Doe Speaks</h1>
                </div>
            </div>
            <div className="container mt-5">
                <div className="journey_content_body_heading">
                    <h1>Journey</h1>
                </div>
                <div className="journey_content_2019_body">
                    <div className="journey_content_body_image">
                        <img src={bwvijr} alt="" />
                    </div>
                    <div className="journey_content_2019">
                        <div className="journey_content_heading">
                            <h1>2019</h1>
                        </div>
                        <div className="journey_2019_content_detail">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="gallery_pics_content_body">
                    <div className="gallery_pics_content_heading">
                        <h1>Gallery</h1>
                    </div>
                    <div className="gallery_pics_container">
                        <div className="gallery_pics_content_first">
                            <img className='img-fluid' src={gallery1} alt="" />
                        </div>
                        <div className="gallery_pics_content_second">
                            <div className="gallery_pics_content_second_first">
                                <img className='img-fluid' src={gallery2} alt="" />
                            </div>
                            <div className="gallery_pics_content_second_sec">
                                <img className='img-fluid' src={gallery3} alt="" />
                                <img className='img-fluid' src={gallery3} alt="" />
                                <img className='img-fluid' src={gallery3} alt="" />
                                <img className='img-fluid' src={gallery3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
