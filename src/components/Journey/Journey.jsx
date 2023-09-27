import React from 'react';
import bwvijr from '../../assets/bwvijr.png';
import './Journey.css';

const Journey = () => {
    return (
        <>
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
        </>
    );
}

export default Journey;
