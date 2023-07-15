import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Banner.scss';
import logoZh from "../assets/img/logo-zh.svg";
import logoEng from "../assets/img/logo-eng.svg";
import image1 from "../assets/img/image1.webp";
import image2 from "../assets/img/image2.webp";
import image3 from "../assets/img/image3.webp";
import image4 from "../assets/img/image4.webp";
import image5 from "../assets/img/image5.webp";
import image6 from "../assets/img/image6.webp";
import image7 from "../assets/img/image7.webp";
import image8 from "../assets/img/image8.webp";
import image9 from "../assets/img/image9.webp";
import barcode from "../assets/img/barcode.webp";

const Banner = () => {
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    const handleLogoMouseEnter = () => {
        setIsLogoHovered(true);
    };

    const handleLogoMouseLeave = () => {
        setIsLogoHovered(false);
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

    useEffect(() => {
        let interval;

        if (isCarouselPlaying) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 2000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isCarouselPlaying, images.length]);

    const handleCarouselMouseEnter = () => {
        setIsCarouselPlaying(false);
    };

    const handleCarouselMouseLeave = () => {
        setIsCarouselPlaying(true);
    };

    return (
        <div className="banner">
            <div className='top'>
                <div className="logo">
                    <Link to="/" onMouseEnter={handleLogoMouseEnter} onMouseLeave={handleLogoMouseLeave}>
                        <img
                            src={isLogoHovered ? logoEng : logoZh}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <nav className="navbar">
                    <ul className="navbar-links">
                        <li>
                            <Link to="projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="carousel" onMouseEnter={handleCarouselMouseEnter} onMouseLeave={handleCarouselMouseLeave}>
                <div className="carousel-images">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`metaphor ${index + 1}`}
                            className={index === currentImageIndex ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
            <div className="quotation">
                <a href="https://b3hcsi9xhcr.typeform.com/to/ffmTiZVz" target='blank'>
                    <img src={barcode} alt="get a quotation" />
                </a>
            </div>
        </div>
    );
};

export default Banner;
