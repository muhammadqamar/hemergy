import axios from "axios";
import { BASE_URL } from "../../../config/baseUrl";
export const getKYCAccessToken = async (setLoading) => {
  try {
    let response = await axios.post(`http://localhost:4000/api/investor/generate/sumsub-token`);
    // let response = await axios.post(
    //   `https://api.sumsub.com/resources/accessTokens?userId=JamesBond007&levelName=basic-kyc-level&ttlInSecs=600`
    // );

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const kycVerified = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    let response = await axios.post(`${BASE_URL}/api/investor/verified/identity`);
    dispatch({
      type: "success",
      message: response?.config?.status,
      time: 1000,
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    if (error?.response?.data) {
      dispatch(
        setAlert({
          type: "error",
          message: error?.response?.data?.status,
          time: 1000,
        })
      );
    } else {
      dispatch(setAlert({ type: "error", message: error?.message, time: 1000 }));
    }
    console.log(error);
  }
};
