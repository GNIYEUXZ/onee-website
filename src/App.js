import './App.scss';
import { React, useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar.js';
import Preloader from './components/Preloader';

const App = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  return (
    <div className='home'>
      <Preloader />
      {windowWidth >= 830 && (
        <div className="banner-col">
          <Banner />
        </div>
      )}
      <div className="content-col">
        <Outlet />
      </div>
      {windowWidth <= 830 && (
        <Navbar />
      )}
    </div>
  );
};

export default App;
