import React, { useState, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../redux/actions/themeActions";
import { changeLang } from "../../redux/actions/langActions";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "../../assets/bugra.png";
import LogoDark from "../../assets/bugra_dark.png";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";

interface types {
  map(arg0: (e: types, index: number) => JSX.Element | null): React.ReactNode;
  data: any;
  Navbar: any;
  id: number;
  cName: string;
  url: string;
  title: string;
  [key: number]: {
    id: number;
    cName: string;
    url: string;
    title: string;
  };
}

function Navbar({ data }: { data: types }) {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  const lang = useSelector((state: RootStateOrAny) => state.lang);

  const [click, setClick] = useState(false);
  const [size, setSize] = useState({});
  const [langMenu, setLangMenu] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const Navbar: types = data.Navbar;

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(
    () => (size >= 768 ? setClick(false) : setClick(click)),
    [size, click]
  );

  const onChangeTheme = () => {
    theme === "dark"
      ? dispatch(changeTheme("light"))
      : dispatch(changeTheme("dark"));
  };

  const onChangeLang = (language:string) => {
    dispatch(changeLang(language));
  };

  const handleLanguageMenu = () => {
    setLangMenu(!langMenu);
    closeMobileMenu();
  };

  return (
    <nav className={`navbar navbar--${theme}`}>
      <div className="navbar__wrapper">
        <div
          className="language"
          key={Navbar[5].id}
          onClick={handleLanguageMenu}
        >
          {langMenu ? (
            <div>
              {lang}
              <div className="language__menu">
                <p onClick={() => onChangeLang("en")}>en</p>
                <p onClick={() => onChangeLang("tr")}>tr</p>
              </div>
            </div>
          ) : (
            <div>{lang}</div>
          )}
        </div>
        {theme === "dark" ? (
          <Link className="navbar__logo" to="/">
            <img
              className="navbar__logo"
              src={LogoDark}
              alt="greentangerin_logo"
            />
          </Link>
        ) : (
          <Link className="navbar__logo" to="/">
            <img className="navbar__logo" src={Logo} alt="greentangerin_logo" />
          </Link>
        )}
        <ul className={click ? `nav__menu__active--${theme}` : `nav__menu`}>
          {Navbar.map((e: types, index: number) =>
            index === 5 ? null : (
              <div aria-hidden="true" key={e.id} onClick={closeMobileMenu}>
                <a className={e.cName} href={e.url}>
                  {e.title}
                </a>
              </div>
            )
          )}
        </ul>
        {theme === "dark" ? (
          <WbSunnyIcon onClick={onChangeTheme} className="icon icon--dark" />
        ) : (
          <NightsStayIcon
            onClick={onChangeTheme}
            className="icon navbar__desktop icon--light"
          />
        )}
        <div
          aria-hidden="true"
          className={click ? "no__display" : "display"}
          onClick={handleClick}
        >
          <MenuIcon />
        </div>
        <div
          aria-hidden="true"
          className={click ? "display" : "no__display"}
          onClick={handleClick}
        >
          <CloseIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
