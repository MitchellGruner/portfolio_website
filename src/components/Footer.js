import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className="grid-child">
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <Link to='/' className="space">Home</Link>{" "}
                        <Link to='/projects' className="space">Projects</Link>
                        <Link to='/resume' className="space">Resume</Link>
                        <Link to='/contact' className="space">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
                MITCHELL GRUNER {' '}<i class="fas fa-code"></i>
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to={{ pathname: "https://github.com/MitchellGruner" }}
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to={{ pathname: "https://www.linkedin.com/in/mitchell-gruner-12a4ab163/" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/mitchyo_2209/?hl=en" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/mitchell.gruner" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;