import React, { useState, useEffect } from 'react';
import './Preloader.scss';
import logo from '../assets/img/logo.svg';

const Preloader = () => {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPreloader(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        showPreloader && (
            <div className={`preloader ${showPreloader ? 'fade-in' : 'fade-out'}`}>
                <div className={`preloader-content ${showPreloader ? 'scaled' : ''}`}>
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </div>
        )
    );
};

export default Preloader;