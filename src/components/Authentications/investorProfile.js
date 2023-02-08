import { Formik, Field } from "formik";
import Image from "next/image";
import Link from "next/link";
const InvestorProfile = ({ setStep }) => {
  return (
    <div className="registration-box">
      <div className="flex-box d-column gap-x-sm">
        <h6 className="p-lg center-text ">Step 2 of 3</h6>
        <h3 className="p-xl center-text">Investor profile</h3>
      </div>
      <Formik
        initialValues={{ checked: [] }}
        validate={(values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setStep(3);
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
            <div className="form-cantainer" role="group" aria-labelledby="checkbox-group">
              <div className="flex-box gap-lg">
                <p className="p-sm text-weight-medium">Are you familiar with cryptocurrencies?</p>
                <label
                  for="Toggle4"
                  className="w-[76px] inline-flex items-center gap-1 rounded-2xl p-1 cursor-pointer bg-garbg text-garbg"
                >
                  <Field id="Toggle4" type="checkbox" name="toggle" className="hidden peer" />
                  <span className="w-8 h-8  p-[6px] rounded-xl bg-garbg peer-checked:bg-btncolor">
                    <Image
                      src={values.toggle === true ? "/images/check-w.svg" : "/images/check-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className=" w-8 h-8  p-[6px] rounded-xl bg-btncolor peer-checked:bg-garbg">
                    <Image
                      src={values.toggle === false ? "/images/close-w.svg" : "/images/close-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                </label>
              </div>

              <div className="flex-box gap-lg">
                <p className="p-sm text-weight-medium">Are you an accredited investor?</p>
                <label
                  for="Toggle5"
                  className="w-[76px] inline-flex items-center gap-1 rounded-2xl p-1 cursor-pointer bg-garbg text-garbg"
                >
                  <Field id="Toggle5" type="checkbox" name="toggle1" className="hidden peer" />
                  <span className="w-8 h-8  p-[6px] rounded-xl bg-garbg peer-checked:bg-btncolor">
                    <Image
                      src={values.toggle1 === true ? "/images/check-w.svg" : "/images/check-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className=" w-8 h-8  p-[6px] rounded-xl bg-btncolor peer-checked:bg-garbg">
                    <Image
                      src={values.toggle1 === false ? "/images/close-w.svg" : "/images/close-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                </label>
              </div>

              <div className="flex-box gap-lg">
                <p className="p-sm text-weight-medium">
                  Do you have knowledge about finance / financial products?
                </p>
                <label
                  for="Toggle6"
                  className="w-[76px] inline-flex items-center gap-1 rounded-2xl p-1 cursor-pointer bg-garbg text-garbg"
                >
                  <Field id="Toggle6" type="checkbox" name="toggle2" className="hidden peer" />
                  <span className="w-8 h-8  p-[6px] rounded-xl bg-garbg peer-checked:bg-btncolor">
                    <Image
                      src={values.toggle2 === true ? "/images/check-w.svg" : "/images/check-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className=" w-8 h-8  p-[6px] rounded-xl bg-btncolor peer-checked:bg-garbg">
                    <Image
                      src={values.toggle2 === false ? "/images/close-w.svg" : "/images/close-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                </label>
              </div>
            </div>

            <div className="flex-box d-column gap-x-sm items-start">
              <h6 className="p-sm text-weight-medium ">Why are we asking?</h6>
              <h3 className="p-sm ">
                There are different investment rules associated with accredited investors and
                individuals who are familiar with financial products.{" "}
                <span className="text-textcolor">Find out more</span>
              </h3>
            </div>

            <div className="flex-box gap-4">
              <button
                onClick={() => setStep(1)}
                type="button"
                className="flex-box  gap-x-sm btn-border secondary justify-center"
              >
                Back
              </button>
              <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
                Next
              </button>
            </div>

            <Link href="" className="p-sm text-textcolor text-center font-medium">
              Skip for now
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default InvestorProfile;
