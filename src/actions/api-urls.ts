import { path } from "utils/helpUrl";

// const BASE_URL = "http://localhost:5000/";
const BASE_URL = "https://api.madreply.com/";

export const AUTH_API = {
  login: path(BASE_URL, "user/login"),
  register: path(BASE_URL, "user/register"),
  verify: path(BASE_URL, "user/verify/"),
  resend: path(BASE_URL, "user/resend/"),
  logout: path(BASE_URL, "user/logout"),
};

export const LETTER_API = {
  get: path(BASE_URL, "letter/"),
  getByEmail: path(BASE_URL, "letter/email/"),
  addnew: path(BASE_URL, "letter/new"),
  edit: path(BASE_URL, "letter/edit/"),
  removeById: path(BASE_URL, "letter/"),
  recommend: path(BASE_URL, "letter/like/"),
  opposite: path(BASE_URL, "letter/unlike/"),
};

export const EMAIL_API = {
  gmailAuth: path(BASE_URL, "auth/gmailAuth/"),
  getMessages: path(BASE_URL, "email/getMessages"),
  getMessageById: path(BASE_URL, "email/getMessage/"),
  oauthCallback: path(BASE_URL, "email/oauth2Callback"),
};
