import http from './http';
import { ShowError } from './error'

const investorLogin = async (data) => {
  try {
    return await http.post(`/auth/login`, data)
  } catch (error) {
    ShowError(error?.response?.data?.status)
    return error
  }
}

export {
  investorLogin,
};