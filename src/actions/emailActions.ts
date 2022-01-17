import axios from "axios";
import { EMAIL_API } from "./api-urls";

export const gmailAuth = async () => {
  console.log("object");
  const res = await axios
    .get(EMAIL_API.gmailAuth)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};
