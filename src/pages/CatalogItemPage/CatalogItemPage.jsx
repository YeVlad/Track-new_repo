import DetailedInfo from "../../components/DetailedInfo/DetailedInfo";
import GeneralOverview from "../../components/GeneralOverview/GeneralOverview";
import { useParams } from "react-router-dom";

import css from "./CatalogItemPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchById } from "../../redux/tracks/operations";
import { selectIsLoading, selectTrack } from "../../redux/tracks/selectors";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";

const CatalogItemPage = () => {
  const { trackId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchById(trackId));
  }, [dispatch]);

  const item = useSelector(selectTrack);

  const isLoad = useSelector(selectIsLoading);

  return (
    <div className={css.page_container}>
      {Object.keys(item).length > 0 && (
        <>
          <GeneralOverview car={item} />
          <DetailedInfo car={item} />
        </>
      )}
      {isLoad && <Loader />}
    </div>
  );
};

export default CatalogItemPage;
