import { FiMenu, FiX } from "react-icons/fi";
import NavigationStyle from "./NavigationStyle.module.css";
import { useState } from "react";
import logo from "../../resources/img/logo.png";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
  const [menuState, setMenuState] = useState(false);
  const changeMenuState = () => {
    setMenuState(!menuState);
  };
  const style = NavigationStyle;

  return (
    <div className={style.NavigationHolder} data-menu={menuState}>
      <div className={style.menuIconsHolder} data-menu={!menuState}>
        <FiMenu
          className={style.MenuIconMobileOpen}
          data-menu={menuState}
          onClick={() => {
            changeMenuState();
          }}
        />
        <FiX
          className={style.MenuIconMobileOpen}
          data-menu={!menuState}
          style={{ color: "white" }}
          onClick={() => {
            changeMenuState();
          }}
        />
      </div>
      <ul className={style.menuItemsHolder} data-menu={menuState}>
        <NavLink
          className={style.link}
          to={"/"}
          onClick={() => changeMenuState()}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={style.link}
          to={"services"}
          onClick={() => changeMenuState()}
        >
          <li>Services</li>
        </NavLink>
        <NavLink
          className={style.link}
          to={"portfolio"}
          onClick={() => changeMenuState()}
        >
          <li>Portfolio</li>
        </NavLink>
        <NavLink
          className={style.link}
          to={"team"}
          onClick={() => changeMenuState()}
        >
          <li>Team</li>
        </NavLink>
        <NavLink
          className={style.link}
          to={"about"}
          onClick={() => changeMenuState()}
        >
          <li>About</li>
        </NavLink>
      </ul>
      <div className={style.logoHolder}>
        <div>
          <a href="/#contact"><button className="buttonMainMobile">Get in touch</button></a>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
