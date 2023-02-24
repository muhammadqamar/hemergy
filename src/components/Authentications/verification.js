import { useState, useMemo } from "react";
import { Formik, Field } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/services/user";
import { addUser } from "@/store/reducer/user";
import ReactFlagsSelect from "react-flags-select";
const Verification = ({ userDetail, setStep }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  const [selected, setSelected] = useState("");

  return (
    <div className="relative z-[1] w-full md:w-[480px] h-auto flex flex-col gap-6 pt-12 px-4 md:px-8 pb-6 bg-white rounded-3xl shadow-lgshadow text-textblack">
      <div className="flex-box d-column gap-x-sm">
        <h6 className="p-lg center-text ">Step 1 of 5</h6>

        <h3 className="p-xl center-text">Let’s get to know you</h3>
      </div>

      <Formik
        initialValues={{
          name: user?.firstName || "",
          surname: user?.lastName || "",
          birthDate: user?.dob || "",
          country: user?.country || "",
          address: user?.address || "",
        }}
        enableReinitialize
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.surname) {
            errors.surname = "Required";
          }
          if (!values.birthDate) {
            errors.birthDate = "Required";
          }
          if (!selected) {
            errors.country = "Required";
          }
          if (!values.address) {
            errors.address = "Required";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setFieldValue }) => {
          const result = await updateUser({
            ...values,
            country: selected,
            email: userDetail?.email,
          });
          if (result?.data?.userFound) {
            dispatch(addUser(result?.data?.userFound));
            setStep(2);
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
          <form className="form-cantainer gap-6" onSubmit={handleSubmit}>
            <div className="flex-col flex-box gap-sm sm:flex-row">
              <div className="input-box">
                <label className="p-sm text-weight-medium">First name</label>
                <div className="input-field">
                  <input
                    className="input p-sm"
                    placeholder="Name"
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                <p className="error p-x-sm"> {errors.name && touched.name && errors.name}</p>
              </div>

              <div className="input-box">
                <label className="p-sm text-weight-medium">Last name</label>
                <div className="input-field">
                  <input
                    className="input p-sm"
                    placeholder="Surname"
                    type="surname"
                    name="surname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                  />
                </div>
                <p className="error p-x-sm">
                  {errors.surname && touched.surname && errors.surname}
                </p>
              </div>
            </div>

            <div className="input-box">
              <label className="p-sm text-weight-medium">Birth date</label>
              <div className="input-field">
                <input
                  className="input p-sm"
                  placeholder=""
                  type="date"
                  name="birthDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birthDate}
                />
              </div>
              <p className="error p-x-sm">
                {errors.birthDate && touched.birthDate && errors.birthDate}
              </p>
            </div>
            <div className="input-box">
              <label className="p-sm text-weight-medium">Country</label>
              <div className="input-field">
                {/* <img src="/images/country.svg" width="20px" height="20px" alt="country" />
                <Field
                  className="input p-sm"
                  as="select"
                  name="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                >
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field> */}
                <ReactFlagsSelect
                  className="p-sm text-weight-medium w-full ml-[-16px]"
                  selectButtonClassName="country-drop-list"
                  selected={selected}
                  fullWidth={true}
                  onSelect={(code) => setSelected(code)}
                />
              </div>
              <p className="error p-x-sm">{errors.country && touched.country && errors.country}</p>
            </div>

            <div className="input-box">
              <label className="p-sm text-weight-medium">Address finder</label>
              <div className="input-field">
                <Image src="/images/search.svg" alt="google" width={20} height={20} />
                <input
                  className="input p-sm"
                  placeholder="Start typing the address"
                  type="address"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </div>
              <p className="error p-x-sm">{errors.address && touched.address && errors.address}</p>
            </div>

            <Link href="" className="p-sm text-weight-medium text-textcolor">
              Enter address manually
            </Link>

            <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Image src="/images/loader.svg" alt="google" width={20} height={20} />
              ) : (
                "Next"
              )}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Verification;
