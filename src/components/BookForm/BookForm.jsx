import { Formik, Form, Field } from "formik";
import css from "./BookForm.module.css";
import toast, { Toaster } from "react-hot-toast";

const BookForm = () => {
  const handleSendBook = (values, actions) => {
    if (values.name.trim().length == 0) {
      const notify = () => toast("Enter your name pls");
      notify();
      return;
    }
    if (values.email.trim().length == 0) {
      const notify = () => toast("Enter your email pls");
      notify();
      return;
    }
    if (values.date.trim().length == 0) {
      const notify = () => toast("Enter book date pls");
      notify();
      return;
    }
    const notify = () =>
      toast(
        `Name: ${values.name}
        Email: ${values.email}
        Date: ${values.date}
        We just got your message!`
      );
    notify();
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        onSubmit={handleSendBook}
      >
        <Form className={css.book_form}>
          <h3 className={css.appeal}>Book your campervan now</h3>
          <p className={css.mini_appeal}>
            Stay connected! We are always ready to help you.
          </p>
          <Field
            name="name"
            className={css.form_field}
            placeholder="Name*"
          ></Field>
          <Field
            name="email"
            className={css.form_field}
            placeholder="Email*"
          ></Field>
          <Field
            name="date"
            className={css.form_field}
            placeholder="Booking date*"
          ></Field>
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={css.form_textarea}
          ></Field>
          <button className={css.book_button} type="submit">
            Send
          </button>
          <Toaster />
        </Form>
      </Formik>
    </>
  );
};
export default BookForm;
