import axios from "axios";
import { EMAIL_API } from "./api-urls";

export const gmailAuth = async () => {
  const res = await axios
    .get(EMAIL_API.gmailAuth)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};
