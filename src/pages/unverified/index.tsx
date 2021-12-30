import Button from "components/button";
import { HeaderSection } from "layout";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer, Text } from "styles/globals.styled";
import jwtDecode from "jwt-decode";
import { resendAction } from "actions/authActions";
import { toast, ToastContainer } from "react-toastify";

const index = () => {
  const [decoded, setDecoded] = useState<any>({});
  useEffect(() => {
    const temp: any = jwtDecode(localStorage.user);
    setDecoded(temp.user);
  }, []);

  const handleResend = async () => {
    const res = await resendAction(decoded.email);
    if (res.success) {
      toast.success(res.success, { theme: "colored", autoClose: 3000 });
    } else {
      toast.error(res.error, { theme: "colored", autoClose: 3000 });
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="center" mode="column" m="50px 0">
            <Text tAlign="center" fSize={40} fWeight={900}>
              Verify your account
            </Text>
            <Text tAlign="center" fSize={30} fWeight={700} mt={30}>
              We sent an email to the address :{" "}
              <a
                href="https://mail.google.com"
                style={{ color: "blue" }}
                target="_blank"
              >
                {decoded.email}
              </a>
            </Text>
            <Text tAlign="center" fSize={30} fWeight={700} mt={20}>
              Please check your email and click on the link provided <br />
              to verify your address.
            </Text>
          </Div>
          <div style={{ textAlign: "center" }}>
            <Button
              label="Resend request"
              onClick={handleResend}
              style={{
                fSize: 20,
                fWeight: 700,
                fColor: "#fff",
                p: "10px 19px",
                bgColor: "#D30505",
                radius: 12,
              }}
            />
          </div>
        </Container>
      </HomeContainer>
    </React.Fragment>
  );
};

export default index;
