import { path } from "utils/helpUrl";

const BASE_URL = "http://localhost:5000/";

export const AUTH_API = {
  login: path(BASE_URL, "user/login"),
  register: path(BASE_URL, "user/register"),
  verify: path(BASE_URL, "user/verify/"),
  resend: path(BASE_URL, "user/resend/"),
};

export const LETTER_API = {
  get: path(BASE_URL, "letter/"),
  getByEmail: path(BASE_URL, "letter/email/"),
  addnew: path(BASE_URL, "letter/new"),
  removeById: path(BASE_URL, "letter/"),
};
