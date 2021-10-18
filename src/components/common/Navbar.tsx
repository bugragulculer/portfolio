import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../../assets/bugra.png';

interface types {
  map(arg0: (e: types, index: number) => JSX.Element | null): React.ReactNode;
  data: any,
  Navbar: any,
  id: number,
  cName: string,
  url: string,
  title: string,
  [key: number]: {
    id: number,
    cName: string,
    url: string,
    title: string
  },
}

function Navbar({ data }: {data: types}) {
  const [click, setClick] = useState(false);
  const [size, setSize] = useState({});

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const Navbar:types = data.Navbar;

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => (
    size >= 768 ? setClick(false) : setClick(true)
  ), [size, click])

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <Link className="navbar__logo" to="/">
          <img className="navbar__logo" src={Logo} alt="greentangerin_logo" />
        </Link>
        <ul className={click ? 'nav__menu__active' : 'nav__menu'}>
          {Navbar.map((e: types, index: number) => (
            index === 5 ? null : (
              <div aria-hidden="true" key={e.id} onClick={closeMobileMenu}>
                <a className={e.cName} href={e.url}>
                  {e.title}
                </a>
              </div>
            )
          ))}
        </ul>
        <div className='language' key={Navbar[5].id} onClick={closeMobileMenu}>
          <a className={Navbar[5].cName} href={Navbar[5].url}>
            {Navbar[5].title}
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
