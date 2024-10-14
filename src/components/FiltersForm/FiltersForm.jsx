import { Formik, Form, Field } from "formik";
import { fetchNewTracks } from "../../redux/tracks/operations";
import css from "./FiltersForm.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const FiltersForm = () => {
  const dispatch = useDispatch();

  const handleNewSearch = (values) => {
    const modifiedValues = {
      ...values,
      AC: values.AC ? true : "",
      transmission: values.transmission ? "automatic" : "",
      kitchen: values.kitchen ? true : "",
      TV: values.TV ? true : "",
      bathroom: values.bathroom ? true : "",
    };
    dispatch(changeFilter(modifiedValues));

    dispatch(fetchNewTracks(modifiedValues));
  };

  return (
    <div className={css.form_container}>
      <Formik
        initialValues={{
          location: "",
          AC: "",
          transmission: "",
          kitchen: "",
          TV: "",
          bathroom: "",
          form: "",
        }}
        onSubmit={handleNewSearch}
      >
        <Form className={css.filters_form}>
          <label htmlFor="location" className={css.location_label}>
            Location
          </label>
          <div className={css.location_div}>
            <svg className={[css.icon, css.map_field_icon].join(" ")}>
              <use xlinkHref="/src/assets/sprite.svg#icon-map"></use>
            </svg>
            <Field className={css.location_field} name="location" />
          </div>

          <p className={css.word_filters}>Filters</p>
          <p className={css.word_equipment}>Vehicle equipment</p>
          <fieldset className={css.checkbox_group}>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <Field
                  type="checkbox"
                  className={css.checkbox_input}
                  name="AC"
                />
                <span className={css.checkbox_tile}>
                  <svg className={css.icon}>
                    <use xlinkHref="/src/assets/sprite.svg#icon-wind"></use>
                  </svg>
                  <span className={css.checkbox_label}>AC</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <Field
                  type="checkbox"
                  className={css.checkbox_input}
                  name="transmission"
                />
                <span className={css.checkbox_tile}>
                  <svg className={css.icon}>
                    <use xlinkHref="/src/assets/sprite.svg#icon-diagram"></use>
                  </svg>
                  <span className={css.checkbox_label}>Automatic</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <Field
                  type="checkbox"
                  className={css.checkbox_input}
                  name="kitchen"
                />
                <span className={css.checkbox_tile}>
                  <svg className={css.icon}>
                    <use xlinkHref="/src/assets/sprite.svg#icon-cup-hot"></use>
                  </svg>
                  <span className={css.checkbox_label}>Kitchen</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <Field
                  type="checkbox"
                  className={css.checkbox_input}
                  name="TV"
                />
                <span className={css.checkbox_tile}>
                  <svg className={css.icon}>
                    <use xlinkHref="/src/assets/sprite.svg#icon-tv"></use>
                  </svg>
                  <span className={css.checkbox_label}>TV</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <Field
                  type="checkbox"
                  className={css.checkbox_input}
                  name="bathroom"
                />
                <span className={css.checkbox_tile}>
                  <svg className={css.icon}>
                    <use xlinkHref="/src/assets/sprite.svg#icon-ph_shower"></use>
                  </svg>
                  <span className={css.checkbox_label}>Bathroom</span>
                </span>
              </label>
            </div>
          </fieldset>

          <p className={css.word_equipment}>Vehicle type</p>
          <fieldset className={css.checkbox_group}>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <Field
                  type="radio"
                  className={css.checkbox_input}
                  name="form"
                  value="panelTruck"
                />
                <span className={css.checkbox_tile}>
                  <svg className={css.icon}>
                    <use xlinkHref="/src/assets/sprite.svg#icon-bi_grid-1x2"></use>
                  </svg>
                  <span className={css.checkbox_label}>Van</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <Field
                  type="radio"
                  className={css.checkbox_input}
                  name="form"
                  value="fullyIntegrated"
                />
                <span className={css.checkbox_tile}>
                  <svg className={css.icon}>
                    <use xlinkHref="/src/assets/sprite.svg#icon-bi_grid"></use>
                  </svg>
                  <span className={css.checkbox_label}>Vully Integrated</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <Field
                  type="radio"
                  className={css.checkbox_input}
                  name="form"
                  value="alcove"
                />
                <span className={css.checkbox_tile}>
                  <svg className={css.icon}>
                    <use xlinkHref="/src/assets/sprite.svg#icon-bi_grid-3x3-gap"></use>
                  </svg>
                  <span className={css.checkbox_label}>Alcove</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <Field
                  type="radio"
                  className={css.checkbox_input}
                  name="form"
                  value=""
                />
                <span className={css.checkbox_tile}>
                  <span className={css.checkbox_label}>Any</span>
                </span>
              </label>
            </div>
          </fieldset>

          <button className={css.search_button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FiltersForm;
