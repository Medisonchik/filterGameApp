import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-logo'>
            <img src="/logo.svg" alt="logo" />
        </div>
        <p className='footer-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident facere voluptates delectus ex debitis deserunt aspernatur et? Dicta voluptatem ipsum molestias consectetur, quo quas accusamus illo tempora a est?</p>
        <div className='footer-links'>
            
        </div>
        <div className='footer-icons'>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
        </div>
        

      
    </footer>
  )
}

export default Footer;
