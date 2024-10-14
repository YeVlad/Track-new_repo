import css from "./StarRating.module.css";

const StarRating = ({ rating }) => {
  return (
    <div>
      <svg className={rating > 0 ? css.star_gold_icon : css.star_icon}>
        <use xlinkHref="/src/assets/sprite.svg#icon-star"></use>
      </svg>
      <svg className={rating > 1 ? css.star_gold_icon : css.star_icon}>
        <use xlinkHref="/src/assets/sprite.svg#icon-star"></use>
      </svg>
      <svg className={rating > 2 ? css.star_gold_icon : css.star_icon}>
        <use xlinkHref="/src/assets/sprite.svg#icon-star"></use>
      </svg>
      <svg className={rating > 3 ? css.star_gold_icon : css.star_icon}>
        <use xlinkHref="/src/assets/sprite.svg#icon-star"></use>
      </svg>
      <svg className={rating > 4 ? css.star_gold_icon : css.star_icon}>
        <use xlinkHref="/src/assets/sprite.svg#icon-star"></use>
      </svg>
    </div>
  );
};

export default StarRating;
