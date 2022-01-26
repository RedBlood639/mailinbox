import { LoginUser, RegisterUser } from "types";
import axios from "axios";

import { AUTH_API } from "./api-urls";

export const loginAction = async (data: LoginUser) => {
  const res = await axios
    .post(AUTH_API.login, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

  return res;
};

export const registerAction = async (data: RegisterUser) => {
  const result = await axios
    .post(AUTH_API.register, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

  return result;
};

export const resendAction = async (email: string) => {
  const result = await axios
    .post(AUTH_API.resend + email)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

  return result;
};

export const verifyAction = async (token: string) => {
  const result = await axios
    .post(AUTH_API.verify + token)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

  return result;
};

export const logout = async (email: any) => {
  const result = await axios
    .post(AUTH_API.logout, { email: email })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return result;
};
