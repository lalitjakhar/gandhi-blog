import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Media from '../Media/Media';
import Socialmedia from '../Socialmedia/Socialmedia';

const Routing = () => {
    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/gallery" element={<Gallery />}></Route>
                    <Route path="/media" element={<Media />}></Route>
                    <Route path="/socialmedia" element={<Socialmedia />}></Route>
                </Routes>
                <Footer/>
            </div>
        </>
    );
}

export default Routing;
