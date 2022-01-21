import axios from "axios";
import { EMAIL_API } from "./api-urls";

export const gmailAuth = async (email: string) => {
  const res = await axios
    .get(EMAIL_API.gmailAuth + email)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};

export const getMessages = async (email: any) => {
  const res = await axios
    .post(EMAIL_API.getMessages, { email: email })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  // console.log(res);
  return res;
};

export const getMessageById = async (id: any, email: any) => {
  const result = await axios
    .post(EMAIL_API.getMessageById + id, { email: email })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return result;
};

export const oauthCallback = (code: any, email: any) => {
  const result = axios
    .post(EMAIL_API.oauthCallback, { code: code, email: email })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err.response.data;
    });
  return result;
};

export const publishEmail = async (data: any) => {
  const result = axios
    .post(EMAIL_API.publishEmail, { ...data })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return result;
};
