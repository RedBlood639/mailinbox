import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({});
const LetterContext = createContext({});

const unAuthed = ["/signin", "/signup", "/getstarted"];

export const AppWrapper = ({ children }: any) => {
  const router = useRouter();
  const [authContext, setAuthContext] = useState<any>({
    isAuthenticated: false,
    user: "",
  });
  const [letterContext, setLetterContext] = useState(null);
  const authValue = useMemo(
    () => ({ authContext, setAuthContext }),
    [authContext]
  );
  const letterValue = useMemo(
    () => ({ letterContext, setLetterContext }),
    [letterContext]
  );

  const setContext = () => {
    const token = localStorage.getItem("user");

    if (token) {
      const decoded: any = jwt_decode(String(token));
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("user");
        setAuthContext({
          ...authContext,
          isAuthenticated: false,
          user: "",
        });
      } else {
        setAuthContext({
          ...authContext,
          isAuthenticated: true,
          user: localStorage.getItem("user"),
        });
      }
    }
  };

  useEffect(() => {
    setContext();
  }, []);

  useEffect(() => {
    const loadFunc = async () => {
      await setContext();
    };
    loadFunc();

    console.log(authContext);
  }, [router]);

  return (
    <AuthContext.Provider value={authValue}>
      <LetterContext.Provider value={letterValue}>
        {children}
      </LetterContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext<any>(AuthContext);
};

export const useLetterContext = () => {
  return useContext<any>(LetterContext);
};
