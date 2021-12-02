import React from "react";
import {
  EmailContent,
  EmailDate,
  EmailItemDiv,
  EmailSubject,
  FavouriteIcon,
} from "./emailList.style";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const EmailItem = ({ checkFlag, favourite }: any) => {
  return (
    <EmailItemDiv htmlFor="selected">
      {checkFlag ? (
        <FavouriteIcon>
          <input type="checkbox" id="selected" />
        </FavouriteIcon>
      ) : (
        <FavouriteIcon>
          {!favourite ? <AiOutlineStar /> : <AiTwotoneStar />}
        </FavouriteIcon>
      )}
      <EmailSubject>
        asdfasdfasdfasdfasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </EmailSubject>
      <EmailContent>
        asdfasdfasdfasdfasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </EmailContent>
      <EmailDate>
        {new Intl.DateTimeFormat("en-US", {
          dateStyle: "medium",
          timeStyle: "medium",
        }).format(new Date())}
      </EmailDate>
    </EmailItemDiv>
  );
};

export default EmailItem;
