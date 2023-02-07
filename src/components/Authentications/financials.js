import { Formik, Field } from "formik";
import Image from "next/image";

const Financials = () => {
  return (
    <div className="registration-box">
      <div className="flex-box d-column gap-x-sm">
        <h6 className="p-lg center-text ">Step 3 of 3</h6>
        <h3 className="p-xl center-text">Financials</h3>
      </div>
      <Formik
        initialValues={{ annualTurnover: "", disposableIncome: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.annualTurnover) {
            errors.annualTurnover = "Required";
          }

          if (!values.disposableIncome) {
            errors.disposableIncome = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
              <label className="p-sm text-weight-medium">Annual turnover</label>

              <div className="input-field">
                <p className="p-sm">€</p>
                <input
                  className="input p-sm"
                  placeholder="0.00"
                  type="number"
                  name="annualTurnover"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.annualTurnover}
                />
              </div>
              <p className=" p-x-sm text-[#6B6D88]">
                How much income do you have after monthly expenses
              </p>
              <p className="error p-x-sm">
                {errors.annualTurnover && touched.annualTurnover && errors.annualTurnover}
              </p>
            </div>

            <div className="input-box">
              <label className="p-sm text-weight-medium">Disposable income</label>
              <div className="input-field">
                <p className="p-sm">€</p>
                <input
                  className="input p-sm"
                  placeholder="0.00"
                  type="number"
                  name="disposableIncome"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.disposableIncome}
                />
                <p className="flex-shrink-0 p-sm">/ m</p>
              </div>
              <p className=" p-x-sm text-[#6B6D88]">
                How much income do you have after monthly expenses
              </p>
              <p className="error p-x-sm">
                {errors.disposableIncome && touched.disposableIncome && errors.disposableIncome}
              </p>
            </div>

            <div className="flex-box gap-4">
              <button className="flex-box fit-width gap-x-sm btn-border secondary justify-center">
                Back
              </button>
              <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
                Done
              </button>
            </div>

            <p className="p-sm text-textcolor text-center font-medium">Skip for now</p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Financials;
