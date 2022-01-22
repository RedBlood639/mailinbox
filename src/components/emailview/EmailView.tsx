import { publishEmail } from "actions/emailActions";
import Button from "components/button";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import { LetterViewDiv } from "components/letterview/letterview.styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Div, Text } from "styles/globals.styled";
import { getMyInfo } from "utils/getMyInfo";
import { EmailHeader } from "./emailview.styled";

const EmailViewCard = ({ data, loading }: any) => {
  const [email, setEmail] = useState<any>(null);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setEmail(data);
    }
  }, [data]);

  const handlePublish = async () => {
    setBtnLoading(true);
    // console.log(data);
    const newData = {
      e_id: data.id,
      publisher: getMyInfo().email,
      from: data.headers.from,
      to: data.headers.to,
      date: data.internalDate,
      snippet: data.snippet,
      html: data.textHtml,
      publishDate: Date.now(),
    };
    const res = await publishEmail(newData);

    if (res.success) {
      toast.success(res.success, {
        theme: "colored",
        autoClose: 3000,
      });
    } else {
      toast.error(res.error, {
        theme: "colored",
        autoClose: 3000,
      });
    }
    setBtnLoading(false);
  };

  return !loading ? (
    email && (
      <LetterViewDiv>
        <Div justifyContent="space-between" mb={30}>
          <Button
            label="BACK"
            onClick={() => router.back()}
            style={{
              fSize: 20,
              fWeight: 700,
              fColor: "#FB6F6F",
              p: "7px 17px",
              bgColor: "white",
              bColor: "#C4C4C4",
              radius: 10,
            }}
          />
          <Button
            label="PUBLISH"
            onClick={handlePublish}
            style={{
              fSize: 20,
              fWeight: 700,
              fColor: "#fff",
              p: "7px 17px",
              bgColor: "#FB6F6F",
              radius: 10,
            }}
            loading={btnLoading}
          />
        </Div>
        <EmailHeader>
          <Text fWeight={700} fSize={20}>
            {email.headers.subject}
          </Text>
          <Text fColor="" wrap="nowrap">
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "short",
              timeStyle: "medium",
            }).format(email.internalDate)}
          </Text>
        </EmailHeader>
        <Text mt={10} mb={30}>
          From : {email.headers.from}
        </Text>
        <div
          dangerouslySetInnerHTML={{
            __html: email.textHtml,
          }}
        ></div>
      </LetterViewDiv>
    )
  ) : (
    <LetterListCardDiv style={{ textAlign: "center", fontSize: 20 }}>
      Loading ...
    </LetterListCardDiv>
  );
};

export default EmailViewCard;
