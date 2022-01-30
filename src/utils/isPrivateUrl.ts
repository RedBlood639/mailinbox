const unauthUrl = ["/signin", "/signup", "/getstarted", "/resetpass"];

export const isPrivateUrl = (path: string, isAuth: boolean) => {
  if (isAuth) {
    return unauthUrl.filter((item) => item.includes(path)).length > 0
      ? false
      : true;
  } else {
    return unauthUrl.filter((item) => item.includes(path)).length > 0 ||
      path === "/"
      ? true
      : false;
  }
};
