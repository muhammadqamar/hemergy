import { Formik } from "formik";
import Image from "next/image";

const CreditCard = () => {
  return (
    <div className="token-form">
      <Formik
        initialValues={{ cardNumber: "", month: "", year: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.cardNumber) {
            errors.cardNumber = "Required";
          }

          if (!values.month) {
            errors.month = "Required";
          }
          if (!values.year) {
            errors.year = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const updateUser = await axios.put(`http://localhost:4000/api/user/financials`, {
              ...values,
              email: userDetail?.email || "muhammadqamar111@gmail.com",
            });
            setSubmitting(false);
            console.log(updateUser);
            if (updateUser?.data?.userFound) {
              router.push("/projects");
            }
          } catch (error) {
            setSubmitting(false);
          }
        }}
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
          <form className="form-cantainer" onSubmit={handleSubmit}>
            <div className="input-box">
              <label className="p-sm text-weight-medium text-white">Card number</label>
              <div className="input-field">
                <input
                  className="p-sm"
                  placeholder=""
                  type="number"
                  name="cardNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cardNumber}
                />
                <Image src="/images/credit_card.svg" alt="Credit Card" width={20} height={20} />
              </div>
              <p className="error p-x-sm">
                {errors.cardNumber && touched.cardNumber && errors.cardNumber}
              </p>
            </div>

            <div className="input-box">
              <label className="p-sm text-weight-medium text-white">Expiry date</label>
              <div className="flex">
                <div>
                  <div className="input-field">
                    <input
                      className="p-sm"
                      placeholder="Month"
                      type="month"
                      name="month"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.month}
                    />
                  </div>
                  <p className="error p-x-sm">{errors.month && touched.month && errors.month}</p>
                </div>
                <div>
                  <div className="input-field">
                    <input
                      className="p-sm"
                      placeholder="Year"
                      type="number"
                      min="1980"
                      max="2023"
                      name="month"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.year}
                    />
                  </div>
                  <p className="error p-x-sm">{errors.year && touched.year && errors.year}</p>
                </div>
              </div>
            </div>

            <div className="gap-4 flex-box">
              <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
                Buy now € 143.56
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreditCard;
