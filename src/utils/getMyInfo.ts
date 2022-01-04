import jwtDecode from "jwt-decode";

export const getMyInfo = () => {
  const token = localStorage.user;
  if (token) {
    const decoded: any = jwtDecode(token);
    return decoded.user;
  } else {
    return { error: "Not authenticated" };
  }
};
