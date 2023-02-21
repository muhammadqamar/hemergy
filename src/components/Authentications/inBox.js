import {useState} from 'react'
import Link from "next/link";
import axios from 'axios';
import { toast } from 'react-toastify';
import Image from "next/image";
const InBox = ({ setRegisterState, registerState, type, hideButtons }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className="registration-box">
      <div className="inbox-img flex-box">
        <img src="/images/favorite.svg" alt="inbox" />
      </div>
      <h4 className="p-xl center-text">Check your inbox!</h4>
      <p className="p-sm center-text">
        {type == 'password-recovery' ?
          <>We have sent you a recovery link to:<strong> {registerState?.email} </strong>
            to complete password-recovery</> :
          <>Please follow the confirmation link sent to email address <strong> {registerState?.email} </strong>
            to complete registration</>}
      </p>
      {!hideButtons  &&
        <div className="flex-box d-column gap-sm">
          <button onClick={async () => {
            try {
              setIsSubmitting(true)
              const userFound = await axios.post(
                `http://localhost:4000/api/auth/sendEmailAgain`,
                registerState
              );



              if (userFound?.data?.success) {
                setIsSubmitting(false)
                toast.success(userFound?.data?.status, {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });

              }

            } catch (error) {
              setIsSubmitting(false)
              toast.error(error?.response?.data?.status || error.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }

          }} className="btn secondary blue">{isSubmitting ? <Image src="/images/loader.svg" alt="google" width={20} height={20} /> : 'Resend email'}</button>
          <button
            onClick={() => setRegisterState('')}
            className=" btn-border secondary"
          >
            Sign up with a different email
          </button>

        </div>
      }
      {!hideButtons &&
        <p className="mb-6 center-text p-sm">
          Already a member?&nbsp;
          <Link href="/login" className="text-textcolor text-weight-medium">
            Sign in
          </Link>
        </p>
      }
    </div>
  );
};

export default InBox;
