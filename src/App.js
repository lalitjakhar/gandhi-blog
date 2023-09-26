import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <>
      <Navbar/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default App;
