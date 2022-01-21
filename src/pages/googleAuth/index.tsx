import { oauthCallback } from "actions/emailActions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getMyInfo } from "utils/getMyInfo";

const GoogleAuth = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.query.code) {
      oauthCallback(router.query.code, getMyInfo().email);
    }
  }, [router.query]);

  return <div></div>;
};

export default GoogleAuth;
