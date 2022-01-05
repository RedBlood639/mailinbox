import { loginAction, verifyAction } from "actions/authActions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
// import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { useAuthContext } from "context/state";

const Verify = () => {
  const { authContext, setAuthContext } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    const fetchVerify = async (id: string) => {
      const res = await verifyAction(id);
      const user: any = jwtDecode(localStorage.user);
      if (res.success) {
        const data: any = {
          email: user.user.email,
        };
        if (user.user.email) {
          const result = await loginAction(data);

          localStorage.setItem("user", result.token);
          setAuthContext({
            ...authContext,
            isAuthenticated: true,
            user: data.token,
          });

          router.push("/home");
        }
      }
    };
    if (router.query.id) {
      fetchVerify(router.query.id.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);
  return <div>{router.query.id}</div>;
};

export default Verify;
