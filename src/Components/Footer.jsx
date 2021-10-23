import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <div className="footer">
      <h3>Developed by Anas Raza</h3>
      <div className="social">
        <a href="https://www.facebook.com/anasraza987/" rel="noopener noreferrer" target="_blank"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/anas-raza987/" rel="noopener noreferrer" target="_blank"><LinkedInIcon /></a>
        <a href="https://github.com/AnasRRaza" rel="noopener noreferrer" target="_blank"><GitHubIcon /></a>
      </div>
    </div >
  )
}

export default Footer;
