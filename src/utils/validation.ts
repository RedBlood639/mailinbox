export const isEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
};

export const validationSignUp = (state: any) => {
  if (state.fName === "") {
    return "First Name field is required!";
  } else if (state.lName === "") {
    return "Last Name field is required!";
  } else if (state.email === "") {
    return "Email field is required!";
  } else if (!isEmail(state.email)) {
    return "Invalid email!";
  } else if (state.pass1 === "") {
    return "Password field is required!";
  } else if (state.pass2 === "") {
    return "Confirm Password field is required!";
  } else if (state.pass1 !== state.pass2) {
    return "The passwords do not match.";
  } else {
    return "success";
  }
};

export const validationSignIn = (state: any) => {
  if (state.email === "" || state.password === "") {
    return "Incorrect email or password!";
  } else if (!isEmail(state.email)) {
    return "Invalid email!";
  } else {
    return "success";
  }
};
