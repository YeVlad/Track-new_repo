import css from "./GeneralOverview.module.css";

const GeneralOverview = ({ car }) => {
  return (
    <section>
      <h2 className={css.car_name}>{car.name}</h2>
      <div className={css.reviews_and_location}>
        <svg className={css.star_icon}>
          <use xlinkHref="/src/assets/sprite.svg#icon-star"></use>
        </svg>
        <p className={[css.info, css.underlined].join(" ")}>
          {car.rating}({car.reviews.length} Reviews)
        </p>
        <svg className={css.map_icon}>
          <use xlinkHref="/src/assets/sprite.svg#icon-map"></use>
        </svg>
        <p className={css.info}>{car.location}</p>
      </div>
      <h2 className={css.car_price}>€{car.price}.00</h2>
      <ul className={css.photoes_collection}>
        {car.gallery.map((item) => {
          return (
            <li key={item.original}>
              <img src={item.original} alt="car" className={css.car_photo} />
            </li>
          );
        })}
      </ul>
      <p className={css.car_description}>{car.description}</p>
    </section>
  );
};
export default GeneralOverview;
