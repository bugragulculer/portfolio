import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../assets/bugra.png';

function Navbar({ data }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [size, setSize] = useState();
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => (
    size >= 768 ? setClick(false) : null
  ), [size])
  
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <Link className="navbar__logo" to="/">
          <img className="navbar__logo" src={Logo} alt="greentangerin_logo" />
        </Link>
        <ul className={click ? 'nav__menu__active' : 'nav__menu'}>
          {data.Navbar.map((e) => (
            <div aria-hidden="true" key={e.id} onClick={closeMobileMenu}>
              <a className={e.cName} href={e.url}>
                {e.title}
              </a>
            </div>
          ))}
        </ul>
        <div aria-hidden="true" key={data.Navbar[5].id} onClick={closeMobileMenu}>
              <a className={data.Navbar[5].cName} href={data.Navbar[5].url}>
                {data.Navbar[5].title}
              </a>
            </div>
        <div aria-hidden="true" className={click ? 'no__display' : 'display'} onClick={() => handleClick()}>
          <MenuIcon />
        </div>
        <div aria-hidden="true" className={click ? 'display' : 'no__display'} onClick={() => handleClick()}>
          <CloseIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
