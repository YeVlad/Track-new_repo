import { NavLink, Outlet } from "react-router-dom";
import css from "./DetailedInfo.module.css";
import BookForm from "../BookForm/BookForm";

const DetailedInfo = () => {
  return (
    <section>
      <div className={css.local_navigation}>
        <NavLink
          to="features"
          className={({ isActive }) =>
            isActive ? [css.activeSubLink, css.subLink].join(" ") : css.subLink
          }
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? [css.activeSubLink, css.subLink].join(" ") : css.subLink
          }
        >
          Reviews
        </NavLink>
      </div>
      <div className={css.outlet_and_form}>
        <Outlet />
        <BookForm />
      </div>
    </section>
  );
};
export default DetailedInfo;
