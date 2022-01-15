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

export const editLetterAction = async (id: any, data: any) => {
  const res = await axios
    .post(LETTER_API.edit + id, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

  return res;
};

export const getMyLetters = async (email: any) => {
  const res = await axios
    .get(LETTER_API.getByEmail + email)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};

export const removeLetter = async (id: any) => {
  const res = axios
    .delete(LETTER_API.removeById + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};

export const recommendLetter = async (email: any, id: any) => {
  const res = axios
    .post(LETTER_API.recommend + email + "/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};

export const oppositeLetter = async (email: any, id: any) => {
  const res = axios
    .post(LETTER_API.opposite + email + "/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};
