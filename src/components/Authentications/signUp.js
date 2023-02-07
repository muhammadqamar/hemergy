import { Formik, Field } from "formik";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="registration-box">
      <h3 className="p-xl center-text">Sign up to Hemergy</h3>
      <Formik
        initialValues={{ email: "", password: "", checked: [] }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
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
              <label className="p-sm text-weight-medium">Email</label>
              <div className="input-field">
                <input
                  placeholder="Emain"
                  className="input p-sm"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <p className="error p-x-sm"> {errors.email && touched.email && errors.email}</p>
            </div>

            <div className="input-box">
              <label className="p-sm text-weight-medium">Password</label>
              <div className="input-field">
                <input
                  className="input p-sm"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div className="pointer"></div>
                <Image src="/images/visibility.svg" alt="visibility" width={20} height={20} />
              </div>
              <p className="error p-x-sm">
                {errors.password && touched.password && errors.password}
              </p>
            </div>

            <div className="flex-box">
              <div role="group" aria-labelledby="checkbox-group">
                <label className="flex-box gap-x-sm ">
                  <Field className="checkbox" type="checkbox" name="checked" value="Remember me" />
                  <p className="p-sm">Remember me</p>
                </label>
              </div>
              <Link href="" className="p-sm text-weight-medium p-link">
                Forgot password?
              </Link>
            </div>

            <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
              Sign up
            </button>

            <div className="flex-box gap-x-sm">
              <div className="divider" />
              <p className="p-sm">or</p>
              <div className="divider" />
            </div>

            <button className="flex-box fit-width gap-x-sm btn-border secondary">
              <Image src="/images/Google.svg" alt="google" width={20} height={20} />
              Sign up with Google
            </button>

            <p className=" center-text p-sm" style={{ marginBottom: "24px" }}>
              Already a member?&nbsp;
              <span style={{ color: "#4E62EE" }} className="text-weight-medium">
                Sign in
              </span>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
