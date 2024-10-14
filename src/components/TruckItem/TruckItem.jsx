import { NavLink } from "react-router-dom";
import css from "./TruckItem.module.css";

import { changeLikes } from "../../redux/likes/slice";
import { selectLikes } from "../../redux/likes/selectors";
import { useDispatch, useSelector } from "react-redux";

const TruckItem = ({ car }) => {
  const mainPhoto = car.gallery[0].original;
  const isAC = car.AC;
  const isAutomatic = car.transmission;
  const isKitchen = car.kitchen;
  const isTV = car.TV;
  const isBathroom = car.bathroom;
  const isRadio = car.radio;
  const isPetrol = car.engine;

  const isRefrigerator = car.isRefrigerator;
  const isWater = car.water;
  const isGas = car.gas;
  const isMicrowave = car.microwave;

  const dispatch = useDispatch();

  const likes = useSelector(selectLikes);
  const isLiked = likes.includes(car.id);

  const likeCar = () => {
    dispatch(changeLikes(car.id));
  };
  return (
    <li className={css.car_card}>
      <img src={mainPhoto} alt="Track photo" className={css.car_photo} />
      <div className={css.main_info}>
        <div className={css.name_price_and_like}>
          <h2 className={css.car_name}>{car.name}</h2>
          <div className={css.heart_and_price}>
            <h2 className={css.car_price}>€{car.price}.00</h2>
            <button className={css.button_like} onClick={likeCar}>
              <svg
                className={
                  isLiked ? [css.icon, css.liked_icon].join(" ") : css.icon
                }
              >
                <use xlinkHref="/src/assets/sprite.svg#icon-Property-1Default"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.reviews_and_location}>
          <svg className={css.star_icon}>
            <use xlinkHref="/src/assets/sprite.svg#icon-star"></use>
          </svg>
          <p className={css.info}>
            {car.rating}({car.reviews.length} Reviews)
          </p>
          <svg className={css.map_icon}>
            <use xlinkHref="/src/assets/sprite.svg#icon-map"></use>
          </svg>
          <p className={css.info}>{car.location}</p>
        </div>
        <p className={css.car_description}>{car.description}</p>
        <ul className={css.features}>
          {isAutomatic == "automatic" && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-diagram"></use>
              </svg>
              <p className={css.feature_name}>Automatic</p>
            </li>
          )}
          {isPetrol == "petrol" && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-fuel-pump"></use>
              </svg>
              <p className={css.feature_name}>Petrol</p>
            </li>
          )}
          {isKitchen && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-cup-hot"></use>
              </svg>
              <p className={css.feature_name}>Kitchen</p>
            </li>
          )}
          {isAC && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-wind"></use>
              </svg>
              <p className={css.feature_name}>AC</p>
            </li>
          )}
          {isRadio && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-ui-radios"></use>
              </svg>
              <p className={css.feature_name}>Radio</p>
            </li>
          )}
          {isTV && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-tv"></use>
              </svg>
              <p className={css.feature_name}>TV</p>
            </li>
          )}
          {isBathroom && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-ph_shower"></use>
              </svg>
              <p className={css.feature_name}>Bathroom</p>
            </li>
          )}
          {isRefrigerator && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-solar_fridge-outline"></use>
              </svg>
              <p className={css.feature_name}>Refrigerator</p>
            </li>
          )}
          {isWater && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-bi_droplet"></use>
              </svg>
              <p className={css.feature_name}>Water</p>
            </li>
          )}
          {isGas && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-hugeicons_gas-stove"></use>
              </svg>
              <p className={css.feature_name}>Gas</p>
            </li>
          )}
          {isMicrowave && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-lucide_microwave"></use>
              </svg>
              <p className={css.feature_name}>Microwave</p>
            </li>
          )}
        </ul>
        <NavLink
          to={`/catalog/${car.id}/features`}
          className={css.show_more_button}
        >
          Show more
        </NavLink>
      </div>
    </li>
  );
};
export default TruckItem;
