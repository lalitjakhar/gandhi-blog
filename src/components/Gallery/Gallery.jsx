import React from 'react';
import './Gallery.css';
import Journey from '../Journey/Journey';
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'

const Gallery = () => {
    return (
        <>
            <div className="nav_gallery_body_back">
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
                    <div className="john_video_content">
                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/TCO1n6udZg8?si=vsqV2Cx6hgGHiBeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
                </div>
                <Journey />
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
            </div>
        </>
    );
}

export default Gallery;
