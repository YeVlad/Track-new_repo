import { useSelector } from "react-redux";
import css from "./Reviews.module.css";
import { selectTrack } from "../../redux/tracks/selectors";
import StarRating from "../StarRating/StarRating";

const Reviews = () => {
  const car = useSelector(selectTrack);

  return (
    <div className={css.reviews_container}>
      <ul className={css.reviews_list}>
        {car.reviews.map((review) => {
          return (
            <li key={review.reviewer_name}>
              <div className={css.reviewer_info}>
                <div className={css.avatar_container}>
                  <p className={css.pseudo_avatar}>
                    {review.reviewer_name.slice(0, 1)}
                  </p>
                </div>

                <div className={css.name_and_rating}>
                  <p className={css.reviewer_name}>{review.reviewer_name}</p>
                  <StarRating rating={review.reviewer_rating} />
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
