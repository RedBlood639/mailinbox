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
