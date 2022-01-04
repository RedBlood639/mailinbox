import axios from "axios";
import { LETTER_API } from "./api-urls";

export const getAllLetters = async () => {
  const res = await axios
    .get(LETTER_API.get)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

  return res;
};

export const getLetterById = async (id: any) => {
  const res = await axios
    .get(LETTER_API.get + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};

export const addLetterAction = async (data: any) => {
  const res = await axios
    .post(LETTER_API.addnew, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

  return res;
};
