import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./CommentForm.module.css";
import { Toaster, toast } from "react-hot-toast";

const CommentForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required").nullable(),
    comment: Yup.string()
      .min(5, "Comment must be at least 5 characters")
      .max(500, "Comment must be 500 characters or less"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      console.log("Form submitted successfully!", values);
      toast.success("Your comment has been sent successfully!");
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Book your campervan now</h2>
      <p className={styles.subHeading}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.fieldContainer}>
              <Field
                type="text"
                name="name"
                className={styles.inputField}
                placeholder="Name*"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldContainer}>
              <Field
                type="email"
                name="email"
                className={styles.inputField}
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldContainer}>
              <Field
                type="date"
                name="bookingDate"
                className={styles.inputField}
                placeholder="Booking Date*"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldContainer}>
              <Field
                as="textarea"
                name="comment"
                className={styles.textarea}
                placeholder="Comment"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={styles.error}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default CommentForm;
