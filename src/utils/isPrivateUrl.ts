const unauthUrl = ["/signin", "/signup", "/getstarted"];

export const isPrivateUrl = (path: string, isAuth: boolean) => {
  if (isAuth) {
    return unauthUrl.filter((item) => item === path).length > 0 ? false : true;
  } else {
    return unauthUrl.filter((item) => item === path).length > 0 || path === "/"
      ? true
      : false;
  }
};
