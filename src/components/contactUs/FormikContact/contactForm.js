import React from "react";
import { Formik, Field } from "formik";
import Image from "next/image";
const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        // birthDate: "",
        // country: "",
        // address: "",
        email: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.surname) {
          errors.surname = "Required";
        }
        // if (!values.birthDate) {
        //   errors.birthDate = "Required";
        // }
        // if (!values.country) {
        //   errors.country = "Required";
        // }
        // if (!values.address) {
        //   errors.address = "Required";
        // }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
      }}
      //   onSubmit={async (values, { setSubmitting }) => {
      //     try {
      //       const updateUser = await axios.put(
      //         `http://localhost:4000/api/user/updateuser`,
      //         { ...values, email: userDetail?.email }
      //       );
      //       setSubmitting(false);
      //       console.log(updateUser);
      //       if (updateUser?.data?.userFound) {
      //         setStep(2);
      //       }
      //     } catch (error) {
      //       setSubmitting(false);
      //     }
      //   }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <>
          <form onSubmit={handleSubmit}>
            <div className="names-box">
              <div className="label-box">
                <label>First name</label>
                <input
                  className="name-input"
                  placeholder="Name"
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p className="error p-x-sm">
                  {errors.name && touched.name && errors.name}
                </p>
              </div>
              <div className="label-box">
                <label>Last name</label>
                <input
                  className="name-input"
                  placeholder="Surname"
                  type="surname"
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />
                <p className="error p-x-sm">
                  {errors.surname && touched.surname && errors.surname}
                </p>
              </div>
            </div>
            <div className="label-box birth-box">
              <label>Birth date</label>
              <input
                className="birth-input"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="name@address.com"
              />
              <Image
                className={
                  errors.email
                    ? "mail-box bottom-[23px]"
                    : "mail-box bottom-[10px]"
                }
                src="/images/mail-logo.png"
                alt="mail"
                width={20}
                height={20}
              />
              <p className="error p-x-sm">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div className="label-box">
              <label>Country</label>
              <textarea
                name="country"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.country}
                rows="6"
                cols="50"
                placeholder="Tell us what you need..."
              />
              {/* <p className="error p-x-sm">
                {errors.country && touched.country && errors.country}
              </p> */}
            </div>
            <button className="send-btn" type="submit" disabled={isSubmitting}>
              {/* {isSubmitting ? (
                "....."
              ) : (
                <> */}
              <p className="send-text">Send</p>
              <Image
                src="/images/send-logo.png"
                alt="send"
                width={20}
                height={20}
              />
              {/* </>
              )} */}
            </button>
          </form>
        </>
      )}
    </Formik>
  );
};

export default ContactForm;
