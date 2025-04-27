import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
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
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>
          <span>Name</span>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={s.error} name="name" component="div" />
        </label>

        <label htmlFor={numberFieldId}>
          <span>Number</span>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage className={s.error} name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
