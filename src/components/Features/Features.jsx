import { useSelector } from "react-redux";
import css from "./Features.module.css";
import { selectTrack } from "../../redux/tracks/selectors";

const Features = () => {
  const car = useSelector(selectTrack);

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

  return (
    <div className={css.feature_container}>
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
      <h3 className={css.h3_details}>Vehicle details</h3>
      <ul className={css.text_details}>
        <li className={css.text_detail}>
          <p className={css.detail}>Form</p>
          <p className={css.detail}>
            {car.form == "alcove"
              ? "Alcove"
              : car.form == "panelTruck"
              ? "Van"
              : "Vully Integrated"}
          </p>
        </li>
        <li className={css.text_detail}>
          <p className={css.detail}>Length</p>
          <p className={css.detail}>{car.length.slice(0, -1)} m</p>
        </li>
        <li className={css.text_detail}>
          <p className={css.detail}>Width</p>
          <p className={css.detail}>{car.width.slice(0, -1)} m</p>
        </li>
        <li className={css.text_detail}>
          <p className={css.detail}>Height</p>
          <p className={css.detail}>{car.height.slice(0, -1)} m</p>
        </li>
        <li className={css.text_detail}>
          <p className={css.detail}>Tank</p>
          <p className={css.detail}>{car.tank.slice(0, -1)} l</p>
        </li>
        <li className={css.text_detail}>
          <p className={css.detail}>Consumption</p>
          <p className={css.detail}>{car.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
