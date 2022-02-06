const unauthUrl = ["/signin", "/signup", "/getstarted", "/resetpass", "/terms"];

export const isPrivateUrl = (path: string, isAuth: boolean) => {
  if (isAuth) {
    return unauthUrl.filter((item) => path.includes(item)).length > 0
      ? false
      : true;
  } else {
    return unauthUrl.filter((item) => path.includes(item)).length > 0 ||
      path === "/"
      ? true
      : false;
  }
};
