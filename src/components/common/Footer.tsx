import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/bugra.png';
import youtube from '../../assets/youtube.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import spotify from '../../assets/spotify.svg';
import medium from '../../assets/medium.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import dribbble from '../../assets/dribbble.svg';
import behance from '../../assets/behance.svg';

interface types {
  Footer: {
    header: string,
    subheader: string,
    copyright: string
  }
}

const Footer = ({ data }: { data: types }) => {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" className="bugra__logo" />
      </Link>
      <h4 className="quote">{data.Footer.header}</h4>
      <div className="footer__social__media">
        <a href="https://twitter.com/BugraGulculer">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/bugragulculer">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://medium.com/@bugragulculer">
          <img src={medium} alt="medium" />
        </a>
        <a href="https://www.youtube.com/channel/UCbxvcNnIvtiF_1VZKMPyWCA">
          <img src={youtube} alt="youtube" />
        </a>
        <a href="https://www.linkedin.com/in/bugrahangulculer/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://open.spotify.com/user/au5qk0lfuvss0mbreim751fjq?si=ybhEgSLjQ-C11upoVRJNKg">
          <img src={spotify} alt="spotify" />
        </a>
        <a href="https://github.com/bugragulculer">
          <img src={github} alt="github" />
        </a>
        <a href="https://dribbble.com/BugraGulculer">
          <img src={dribbble} alt="dribbble" />
        </a>
        <a href="https://www.behance.net/bugragulculer">
          <img src={behance} alt="behance" />
        </a>
      </div>
      <h4 className="copyright">{data.Footer.subheader}</h4>
      <h4 className="copyright">{data.Footer.copyright}</h4>
    </footer>
  );
};

export default Footer;
