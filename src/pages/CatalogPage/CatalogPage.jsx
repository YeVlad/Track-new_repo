import { useSelector } from "react-redux";
import FiltersForm from "../../components/FiltersForm/FiltersForm";
import FoundItems from "../../components/FoundItems/FoundItems";
import css from "./CatalogPage.module.css";

import { selectIsLoading, selectTracks } from "../../redux/tracks/selectors";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const fetchedTracks = useSelector(selectTracks);
  const isLoad = useSelector(selectIsLoading);

  return (
    <section className={css.catalog}>
      <FiltersForm />
      {fetchedTracks.length > 0 ? (
        <FoundItems fetchedTracks={fetchedTracks} />
      ) : (
        <div className={css.empty_space}>
          <p className={css.fine_speech}> Let`s find something!</p>
        </div>
      )}
      {isLoad && <Loader />}
    </section>
  );
};

export default CatalogPage;
