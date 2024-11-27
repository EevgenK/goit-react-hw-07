import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsOps";

const validNumber = /^\d{3}-\d{3}-\d{4}$/;
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .matches(
      validNumber,
      `The phone number must consist only of integer numbers and be in the following format: XXX-XXX-XX-XX`
    )
    .required("Required"),
});
const initialValues = {
  name: "",
  number: "",
};
const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = ({ name, number }, actions) => {
    dispatch(addContact({ name, number }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={s.field} id={nameFieldId} type="text" name="name" />
        <ErrorMessage className={s.error} name="name" component="span" />
        <label className={s.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={s.field}
          id={numberFieldId}
          type="tel"
          name="number"
        />
        <ErrorMessage className={s.error} name="number" component="span" />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
