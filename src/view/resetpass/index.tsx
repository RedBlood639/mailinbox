import { resetPassword } from "actions/authActions";
import Button from "components/button";
import Input from "components/input";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Div, Text } from "styles/globals.styled";
import { isMobile } from "utils/isMobile";

const ResetPassSection = () => {
  const [mobile, setmobile] = useState<boolean>(false);
  const router = useRouter();
  const [state, setState] = useState({
    newPass: "",
    confirmPass: "",
  });
  const [loading, setLoading] = useState<any>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setmobile(isMobile(768));
    });
    setmobile(isMobile(768));
  }, []);

  const handleChange = (e: any) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = async () => {
    if (state.newPass === "") {
      toast.error("Enter new password", {
        theme: "colored",
        autoClose: 3000,
      });
    } else if (state.confirmPass === "") {
      toast.error("Confirm your password", {
        theme: "colored",
        autoClose: 3000,
      });
    } else if (state.newPass !== state.confirmPass) {
      toast.error("Password is not matched.", {
        theme: "colored",
        autoClose: 3000,
      });
    } else {
      const newData = {
        password: state.newPass,
        token: router.query.token,
      };
      const res = await resetPassword(newData);
      if (res.error) {
        toast.error(res.error, {
          theme: "colored",
          autoClose: 3000,
        });
      } else {
        setState({ newPass: "", confirmPass: "" });
        toast.success(res.error, {
          theme: "colored",
          autoClose: 3000,
        });
        setTimeout(() => {
          router.push("/signin");
        }, 3000);
      }
    }
  };

  return (
    <Div mode="column" w={80} maxW={500} m={mobile ? "30px auto" : "auto"}>
      <ToastContainer />
      <Text fSize={36} fWeight={800} mb={30}>
        Reset your password
      </Text>
      <Div mt={13} />
      <Input
        type="password"
        name="newPass"
        placeholder="New Password"
        onChange={handleChange}
        value={state.newPass}
        label="New Password"
      />
      <Div mt={26} />
      <Input
        type="password"
        name="confirmPass"
        placeholder="Confirm Password"
        onChange={handleChange}
        value={state.confirmPass}
        label="Confirm Password"
      />
      <Div mt={13} />
      <Button
        label="Reset"
        onClick={loading ? () => {} : handleReset}
        loading={loading}
        style={{
          fSize: 16,
          fWeight: 700,
          fColor: "#fff",
          p: "12px 24px",
          bgColor: "#4E6AF0",
          radius: 5,
        }}
      />
    </Div>
  );
};

export default ResetPassSection;
