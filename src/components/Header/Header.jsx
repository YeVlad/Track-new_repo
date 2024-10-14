import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header_styles}>
      <svg className={css.logo}>
        <use xlinkHref="/src/assets/sprite.svg#icon-Logo"></use>
      </svg>
      <nav className={css.nav_styles}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Catalog
        </NavLink>
      </nav>
      <div className={css.hidden_element}>
        <svg className={css.logo}>
          <use xlinkHref="/src/assets/sprite.svg#icon-Logo"></use>
        </svg>
      </div>
    </header>
  );
};
export default Header;
