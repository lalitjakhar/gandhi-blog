import React from 'react';
import './Media.css';

const Media = () => {
    return (
        <>
            <div className="container media_video_content_body">
                <iframe width="100%" height="565px" src="https://www.youtube.com/embed/hpZwCRInrgo?si=ah2CU7Qna5iYeN4D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </>
    );
}

export default Media;
