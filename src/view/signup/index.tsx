import Button from "components/button";
import Input from "components/input";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

import { Div, Text } from "styles/globals.styled";
import { EmailValidation, passValidation } from "utils/authValidation";
import GoogleLogin from "react-google-login";
import { registerAction } from "actions/authActions";

import credentials from "config/credentials.json";
import { isMobile } from "utils/isMobile";
import { CustomSelect } from "components/SearchBox/searchbox.styled";
import Checkbox from "components/checkbox";

const dayOption: any = [];
const monthOption: any = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
].map((item: any, key: any) => ({
  value: key + 1 < 10 ? "0" + key + 1 : key + 1,
  label: item,
}));
const yearOption: any = [];

const genderOption: any = [
  { value: 1, label: "Man" },
  { value: 0, label: "Women" },
];

for (let d = 1; d <= 31; d++) {
  dayOption.push({ value: d < 10 ? "0" + d : "" + d, label: d });
}

for (let i = new Date().getFullYear(); i >= 1960; i--) {
  yearOption.push({ value: i, label: i });
}

const SignUpSection = () => {
  const [selectedOption, setSelectedOption] = useState<any>({
    d: null,
    m: null,
    y: null,
    gender: null,
  });
  const router = useRouter();
  const [state, setState] = useState({
    email: "",
    fName: "",
    lName: "",
    pass1: "",
    pass2: "",
    isAllow: false,
  });
  const [flag, setFlag] = useState(true);
  const [loading, setLoading] = useState<any>(false);
  const [policy, setPolicy] = useState<boolean>(false);
  const [mobile, setmobile] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setmobile(isMobile(768));
    });
    setmobile(isMobile(768));
    console.log(monthOption.length);
  }, []);

  const handleChange = (e: any) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = async () => {
    setLoading(true);
    const validation = passValidation(state, selectedOption);
    if (validation !== "success") {
      toast.error(validation, { theme: "colored", autoClose: 3000 });
    } else {
      const { d, m, y, gender } = selectedOption;
      const birth = d.value + "/" + m.value + "/" + y.value;
      const data = {
        email: state.email,
        fName: state.fName,
        lName: state.lName,
        birth: new Date(birth),
        gender,
        password: state.pass1,
        isAllow: state.isAllow,
      };
      const res = await registerAction(data);
      if (res.error) {
        toast.error(res.error, { theme: "colored", autoClose: 3000 });
      } else {
        toast.success(res.success, { theme: "colored", autoClose: 3000 });
      }
    }
    setLoading(false);
  };

  const handleGotocreate = () => {
    setLoading(true);
    const validation = EmailValidation(state);
    if (validation !== "success") {
      toast.error(validation, { theme: "colored", autoClose: 3000 });
    } else {
      setFlag(false);
      setState((prev) => ({ ...prev, isAllow: false }));
    }
    setLoading(false);
  };

  const googleAuthSuccess = (res: any) => {
    const userInfo = res.profileObj;
    setState({
      ...state,
      email: userInfo.email,
      fName: userInfo.givenName,
      lName: userInfo.familyName,
      isAllow: true,
    });
    setFlag(false);
  };

  const googleAuthFailed = (err: any) => {
    toast.error("Google Authentication Failed", {
      theme: "colored",
    });
    setFlag(true);
    setState({
      email: "",
      pass1: "",
      fName: "",
      lName: "",
      pass2: "",
      isAllow: false,
    });
  };

  const handleSelectChange = (e: any, d: any) => {
    setSelectedOption({ ...selectedOption, [d]: e });
  };

  const handleCheckbox = () => {
    setPolicy((prev) => !prev);
  };

  return (
    <Div maxH="100vh" style={{ overflow: "auto" }} p="30px 0">
      <Div mode="column" w={80} maxW={500} m={mobile ? "30px auto" : "auto"}>
        <ToastContainer />
        <Text fSize={36} fWeight={800} mb={32}>
          Create your account
        </Text>
        <GoogleLogin
          // 561228158715-g8dqcj35lqseg3l4231hbh60bs1kggs3.apps.googleusercontent.com
          clientId={credentials.web.client_id}
          buttonText="Login"
          onSuccess={googleAuthSuccess}
          onFailure={googleAuthFailed}
          // uxMode="popup"
          // redirectUri="http://localhost:3000"
          redirectUri={credentials.web.redirect_uris[0]}
          cookiePolicy="single_host_origin"
          render={(renderProps) => (
            <Button
              label={
                <>
                  <FcGoogle /> Continue with Google
                </>
              }
              onClick={renderProps.onClick}
              style={{
                fSize: 16,
                fWeight: 700,
                fColor: "#fff",
                p: "12px 20px",
                bgColor: "#2D3748",
                radius: 5,
              }}
            />
          )}
        />

        <Text fColor="#C4C4C4" tAlign="center" m="30px 0">
          -- OR --
        </Text>
        <Div mt={13} />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={state.email}
          label="Email"
          disabled={!flag}
        />
        <Div mt={13} />
        {!flag && (
          <>
            <Div justifyContent="space-between" gap={10}>
              <Input
                type="text"
                name="fName"
                placeholder="First Name"
                onChange={handleChange}
                value={state.fName}
                label="First Name"
                style={{ width: "inherit" }}
              />
              <Input
                type="text"
                name="lName"
                placeholder="Last Name"
                onChange={handleChange}
                value={state.lName}
                label="Last Name"
                style={{ width: "inherit" }}
              />
            </Div>
            <Div mt={13} />
            <Text fSize={16} fWeight={500} fColor="#2d3748" mb={3}>
              Your date of birth
            </Text>
            <Div justifyContent="space-between" gap={10}>
              <CustomSelect
                placeholder="Day"
                value={selectedOption.d}
                onChange={(e) => handleSelectChange(e, "d")}
                options={dayOption}
              />
              <CustomSelect
                placeholder="Month"
                value={selectedOption.m}
                onChange={(e) => handleSelectChange(e, "m")}
                options={monthOption}
              />
              <CustomSelect
                placeholder="Year"
                value={selectedOption.y}
                onChange={(e) => handleSelectChange(e, "y")}
                options={yearOption}
              />
            </Div>
            <Div mt={13} />
            <Text fSize={16} fWeight={500} fColor="#2d3748" mb={3}>
              Gender
            </Text>
            <CustomSelect
              placeholder="Gender"
              value={selectedOption.gender}
              onChange={(e) => handleSelectChange(e, "gender")}
              options={genderOption}
            />
            <Div mt={13} />
            <Input
              type="password"
              name="pass1"
              placeholder="Password"
              onChange={handleChange}
              value={state.pass1}
              label="Password"
            />
            <Div mt={13} />
            <Input
              type="password"
              name="pass2"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={state.pass2}
              label="Confirm Password"
            />
          </>
        )}
        <Div mt={20} />
        {!flag && (
          <Div justifyContent="space-between">
            <Text style={{ cursor: "pointer" }} onClick={handleCheckbox}>
              <Checkbox checked={policy} onChange={() => {}} />
              <span style={{ marginLeft: 8 }}>
                I confirm to agree with{" "}
                <a
                  href="https://madreply.com/terms"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <b> Terms and Conditions </b>
                  and
                  <b> Privacy Policy</b>
                </a>
              </span>
            </Text>
          </Div>
        )}
        <Div mt={20} />
        {flag ? (
          <Button
            label="Go to Create"
            onClick={loading ? () => {} : handleGotocreate}
            style={{
              fSize: 16,
              fWeight: 700,
              fColor: "#fff",
              p: "12px 24px",
              bgColor: "#4E6AF0",
              radius: 5,
            }}
            loading={loading}
          />
        ) : (
          <Button
            label="Create Account"
            onClick={loading ? () => {} : handleSignUp}
            style={{
              fSize: 16,
              fWeight: 700,
              fColor: "#fff",
              p: "12px 24px",
              bgColor: "#4E6AF0",
              radius: 5,
            }}
            loading={loading}
          />
        )}

        <Div justifyContent="center" mt={30} gap={5}>
          <Text fColor="#616161" fSize={16}>
            Already have an account?
          </Text>
          <Text
            fColor="#4E6AF0"
            fSize={16}
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/signin");
            }}
          >
            Login
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default SignUpSection;
