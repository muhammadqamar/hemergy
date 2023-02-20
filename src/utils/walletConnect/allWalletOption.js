import { useState } from "react";
import { Formik, Field } from "formik";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import WalletConnects from "./connectors";

const AllWalletOption = ({ setStep, userDetail }) => {
  const dispatch = useDispatch();
  const [viewAllWallet, setviewAllWallet] = useState(false);
  const user = useSelector((state) => state.user?.user);
  return (
    <div className="registration-box">
      <div className="flex-box d-column gap-x-sm">
        <h6 className="p-lg center-text ">Step 4 of 4</h6>
        <h3 className="p-xl center-text">Payment method</h3>
      </div>
      <Formik initialValues={{}} onSubmit={async (values, { setSubmitting }) => {}}>
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
              <div className="flex-box justify-center gap-2">
                <button className="btn secondary  text-textblack bg-white ">Bank account</button>
                <button className="btn secondary  text-textcolor bg-cardbg ">
                  Connect cryptowallet
                </button>
              </div>
              <div className="flex gap-36 justify-around">
                <div
                  className="wallet-option-box"
                  onClick={() => {
                    setviewAllWallet(false);
                  }}
                >
                  <Image src="/images/smartphone.svg" alt="logo" width={11} height={17} />
                  <p className="p-sm-semi  text-textcolor">Mobile</p>
                </div>
                <div className="wallet-option-box">
                  <Image src="/images/qr_code_scanner.svg" alt="logo" width={16} height={16} />
                  <p className="p-sm-semi font-medium text-textblack">Scan with your wallet</p>
                </div>
              </div>
              {!viewAllWallet && (
                <div className="flex justify-center items-center">
                  <Image src="/images/QRcode.png" alt="logo" width={176} height={176} />
                </div>
              )}

              <div className="flex  ml-2 gap-1.5">
                <Image src="/images/computer.svg" alt="logo" width={17} height={13} />
                <p className="p-sm-semi  text-textcolor">Desktop</p>
              </div>
              <WalletConnects setviewAllWallet={setviewAllWallet} viewAllWallet={viewAllWallet} />
            </div>

            <div className="gap-4 flex-box">
              <button
                onClick={() => setStep(1)}
                type="button"
                className="justify-center flex-box gap-x-sm btn-border secondary"
              >
                Back
              </button>
              <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "....." : "Done"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AllWalletOption;
