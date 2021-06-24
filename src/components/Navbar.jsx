import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../assets/bugra.png';

function Navbar({ data }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <Link className="navbar__logo" to="/">
          <img className="navbar__logo" src={Logo} alt="greentangerin_logo" />
        </Link>
        <ul className={click ? 'nav__menu__active' : 'nav__menu'}>
          {data.Navbar.map((e) => (
            <div aria-hidden="true" className="navbar__main__logo" key={e.id} onClick={closeMobileMenu}>
              <a className={e.cName} href={e.url}>
                {e.title}
              </a>
            </div>
          ))}
        </ul>
        <div aria-hidden="true" className={click ? 'no__display' : 'display'} onClick={() => handleClick()}>
          <MenuIcon className={click ? 'display' : 'no__display'} />
        </div>
        <div aria-hidden="true" className={click ? 'display' : 'no__display'} onClick={() => handleClick()}>
          <CloseIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
