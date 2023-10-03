import React from 'react';
import './Home.css';
import profile from '../../assets/profile.jpg'

const Home = () => {
    return (
        <>
            <div className="home_body_content_back">
                <div className="container">
                    <div className="home_page_body_content pt-5">
                        <h1>Mohandas Karamchand Gandhi</h1>
                    </div>
                    <div className="home_page_body_content_pic py-5">
                        <img src={profile} alt="gandhi" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
