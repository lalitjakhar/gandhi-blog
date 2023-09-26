import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <>
            <div className="container contact_content_body mb-5">
                <h1>Contact us</h1>
                <div className="contact_content_form pt-4">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                </div>
                <div className="contact_content_form pt-4">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                </div>
                <div className="contact_content_form pt-4">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Phone Number" />
                </div>
                <div className="contact_content_form pt-4">
                    <textarea rows="4" cols="50" name="comment" className='form-control' form="usrform">
                        Your Message</textarea>
                </div>
                <div className="contact_content_form pt-4">
                    <form action="#">
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
