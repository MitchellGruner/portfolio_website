import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./videos/video-1.mp4' autoPlay loop muted />
            <h1>Mitchell Gruner</h1>
            <p>B.S. in Computer Science</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'><Link to="/contact" className="no_text_decoration_1">CONTACT</Link></Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'><Link to="/projects" className="no_text_decoration">VIEW PROJECTS</Link> 
                <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection;
