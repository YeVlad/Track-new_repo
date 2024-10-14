import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.hero}>
      <h1 className={css.hero_h1}>Campers of your dreams</h1>
      <p className={css.hero_description}>
        You can find everything you want in our catalog
      </p>
      <NavLink to="/catalog" className={css.button_to_catalog}>
        View Now
      </NavLink>
    </section>
  );
};

export default HomePage;
