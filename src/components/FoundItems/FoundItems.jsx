import { useState } from "react";
import TruckItem from "../TruckItem/TruckItem";
import { selectFilters } from "../../redux/filters/selectors";
import { selectIsEnd } from "../../redux/tracks/selectors";

import css from "./FoundItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNextTracks } from "../../redux/tracks/operations";

const FoundItems = ({ fetchedTracks }) => {
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const isEnd = useSelector(selectIsEnd);

  const handleLoad = () => {
    dispatch(fetchNextTracks({ ...filters, page }));
    setPage(page + 1);
  };

  return (
    <div className={css.list_container}>
      <ul className={css.list_of_cars}>
        {fetchedTracks.map((item) => {
          return <TruckItem key={item.id} car={item} />;
        })}
      </ul>
      {!isEnd && (
        <button className={css.load_more_button} onClick={handleLoad}>
          Load more
        </button>
      )}
    </div>
  );
};
export default FoundItems;
