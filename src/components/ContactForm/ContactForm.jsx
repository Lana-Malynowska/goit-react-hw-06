import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.name,
        number: values.number,
      })
    );
    resetForm();
  };

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .trim()
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^\+?[0-9\s\-()]{7,20}$/, "Invalid phone number")
      .required("Required"),
  });

  return (
    <Formik
      validationSchema={applySchema}
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage className={s.error} name="name" component="div" />
        </label>

        <label>
          <span>Number</span>
          <Field type="text" name="number" />
          <ErrorMessage className={s.error} name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
