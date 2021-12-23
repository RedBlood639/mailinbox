export const isEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
};

export const EmailValidation = (data: any) => {
  if (!data.email) {
    return "Email field is required.";
  } else if (!isEmail(data.email)) {
    return "Email is not valid.";
  } else {
    return "success";
  }
};

export const passValidation = (data: any) => {
  if (!data.pass1) {
    return "Password field is required.";
  } else if (!data.pass2) {
    return "Confirm Password field is required.";
  } else if (data.pass1 !== data.pass2) {
    return "Password is not matched.";
  } else {
    return "success";
  }
};

export const LoginValidation = (data: any) => {
  if (!data.email) {
    return "Email field is required.";
  } else if (!isEmail(data.email)) {
    return "Email is not valid.";
  } else if (!data.password) {
    return "Confirm Password field is required.";
  } else {
    return "success";
  }
};
