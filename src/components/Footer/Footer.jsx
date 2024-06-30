import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import menu from '../../data/navMenu';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-logo'>
            <img src="/logo.svg" alt="logo" />
        </div>
        <p className='footer-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident facere voluptates delectus ex debitis deserunt aspernatur et? Dicta voluptatem ipsum molestias consectetur, quo quas accusamus illo tempora a est?</p>
        {/* Footer navigation */}
        <div className='footer-links'>
          {menu.map((list, index) => (
            <li key={index}>
              <Link to={list.path}>{list.name}</Link>
            </li>
          ))}   
        </div>
        {/* Footer icons */}
        <div className='footer-icons'>
            <FontAwesomeIcon icon={faGithub} className="font-awesome-icon" />
            <FontAwesomeIcon icon={faFacebook} className="font-awesome-icon" />
            <FontAwesomeIcon icon={faTwitter} className="font-awesome-icon" />
            <FontAwesomeIcon icon={faYoutube} className="font-awesome-icon" />
        </div>
        

      
    </footer>
  )
}

export default Footer;
