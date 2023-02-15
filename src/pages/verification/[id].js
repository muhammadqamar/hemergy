import { useEffect, useState } from "react";
import axios from 'axios';
import {  toast } from 'react-toastify';
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import RegisterSlider from "@/components/Authentications/registerSlider";
import VerificationBox from "@/components/Authentications/verification";
import InvestorProfile from "@/components/Authentications/investorProfile";
import Financials from "@/components/Authentications/financials";
import WalletOption from "@/components/Authentications/walletOption";
import EmailVerify from "@/components/Authentications/emailVerify";

import {addUser} from "@/store/reducer/user";

const Verification = ({ params }) => {
  const [step, setStep] = useState(1);
  const [loader, setLoading] = useState(true)
  const [userDetail, setUserDetail] = useState()
  const dispatch =  useDispatch()
  const router = useRouter()

  useEffect(() => {

   (async()=>{
    try {
     setLoading(true);

      if (params?.id) {

        let response = await axios.post(
          `http://localhost:4000/api/auth/verify/account`,
          {
            code:params?.id
          }
        );
        setUserDetail(response?.data?.user)
        dispatch(addUser(response?.data?.user))
        if (response?.data?.user?.platform === "custom") {
          setLoading(false);
          localStorage.setItem("hemergy-email", response?.data?.user?.email);
          router.push('/login')
        }

      }
    } catch (error) {
      setLoading(false);

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

      console.log(error);
    }


   })()


  }, [])
  return (
    <div className="authentications-section">
      <div className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </div>


      <EmailVerify loader={loader}/>

      <div className="auth-wather" />
    </div>
  );
};

export default Verification;


export const getServerSideProps = (context) => {
  return {
    props: {
      params: context?.params,
    },
  };
};