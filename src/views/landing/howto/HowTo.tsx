import React, { useState } from "react";
import Image from "next/image";

import { FaHandPointRight } from "react-icons/fa";

import {
  HowToPartDiv,
  QuestionPart,
  Question,
  AnswerPart,
  QandAPart,
  QuestionMark,
  AnswerTitle,
  Answer,
  Questions,
} from "./howto.style";
import { OverLayout, PageContainer, PageTitle } from "layouts/layout.style";

import avatar from "assets/images/members/2.png";

const howtoData = [
  {
    q: "What is this, exactly?",
    a: "Way back in 2002, we had a crazy idea that it would be fun to get a surprise letter from the past. So we spent a couple weekends making FutureMe. Here's what the original version of FutureMe looked like!. We told some friends...who told some of their friends...and so on...and now many, many millions of letters have been written to the future. Some of these letters have been delivered from the past, and many more are still time traveling into the future.",
  },
  {
    q: "Why should I write a letter to the future?",
    a: "Thinking about and writing to the future - your future - is a powerful exercise. Check out all the people who agree! So take some time to reflect on what you think - and want - the future to bring in a year, five years, ten years...more? You can use FutureMe to imagine your dreams. Or make a prediction about your life, or the world at large. Maybe write a resolution for a new year. You could even write a letter to your future self as a form of therapy! Also - do you know what's even better than writing a letter to the future? Getting a surprise letter from the past. But you'll have to trust us (and futureme fans) on that...until the future arrives and you get your first letter and can see for yourself!",
  },
  {
    q: "Will this random web-site still be around in the future?",
    a: "Yup! We are very good at delivering letters from the past - we've being doing it for almost twenty years! We run FutureMe in a financially prudent manner (thanks to many of you who contribute) to ensure that we will continue to stick around. (Side note: thinking about the future of FutureMe is very...meta... 🤔)",
  },
  {
    q: "How much does it cost to use FutureMe?",
    a: "FutureMe is free for basic use. But we would be honored if you would consider becoming a Premium Member because FutureMe requires money and time to ensure the delivery of your letters all the way into the future. Premium Members also get extra features, including the removal of all advertising, the ability to add pictures to your letters, and to ask for our support team to help you find any long lost letters. After using FutureMe for over 3 years or writing 20 letters (whichever comes first), we will ask you (nicely!) to upgrade. You can choose a price that you think is fair based on where you live, how old you are, and how much value you get from FutureMe.",
  },
  {
    q: "Wait, but what if my email changes?",
    a: "You should use an email address that you plan to keep for a long time (gmail, hotmail, yahoo, etc) rather than your work address for that job you hate or the school you're about to graduate from. But you can also create a FutureMe account, and then, if need be, you can change the email for your future letters from your FutureMe Account. And you can also always sign into FutureMe to read your letters that have previously been delivered from the past.",
  },
  {
    q: '"Public, but anonymous"? What\'s the deal with that?',
    a: 'If you designate your email as "public, but anonymous", it will be included in the public letters section. There are some amazing stories from the past that our community has shared. Your email address will never be shown or shared, but the body and the subject of the letter will be. Please refrain from mentioning specific people in a public letter (and if you do, we reserve the right to delete your letter. Read our terms and conditions of use for more details.',
  },
  {
    q: "What is this, exactly?",
    a: "Way back in 2002, we had a crazy idea that it would be fun to get a surprise letter from the past. So we spent a couple weekends making FutureMe. Here's what the original version of FutureMe looked like!. We told some friends...who told some of their friends...and so on...and now many, many millions of letters have been written to the future. Some of these letters have been delivered from the past, and many more are still time traveling into the future.",
  },
  {
    q: "Why should I write a letter to the future?",
    a: "Thinking about and writing to the future - your future - is a powerful exercise. Check out all the people who agree! So take some time to reflect on what you think - and want - the future to bring in a year, five years, ten years...more? You can use FutureMe to imagine your dreams. Or make a prediction about your life, or the world at large. Maybe write a resolution for a new year. You could even write a letter to your future self as a form of therapy! Also - do you know what's even better than writing a letter to the future? Getting a surprise letter from the past. But you'll have to trust us (and futureme fans) on that...until the future arrives and you get your first letter and can see for yourself!",
  },
  {
    q: "Will this random web-site still be around in the future?",
    a: "Yup! We are very good at delivering letters from the past - we've being doing it for almost twenty years! We run FutureMe in a financially prudent manner (thanks to many of you who contribute) to ensure that we will continue to stick around. (Side note: thinking about the future of FutureMe is very...meta... 🤔)",
  },
  {
    q: "How much does it cost to use FutureMe?",
    a: "FutureMe is free for basic use. But we would be honored if you would consider becoming a Premium Member because FutureMe requires money and time to ensure the delivery of your letters all the way into the future. Premium Members also get extra features, including the removal of all advertising, the ability to add pictures to your letters, and to ask for our support team to help you find any long lost letters. After using FutureMe for over 3 years or writing 20 letters (whichever comes first), we will ask you (nicely!) to upgrade. You can choose a price that you think is fair based on where you live, how old you are, and how much value you get from FutureMe.",
  },
  {
    q: "Wait, but what if my email changes?",
    a: "You should use an email address that you plan to keep for a long time (gmail, hotmail, yahoo, etc) rather than your work address for that job you hate or the school you're about to graduate from. But you can also create a FutureMe account, and then, if need be, you can change the email for your future letters from your FutureMe Account. And you can also always sign into FutureMe to read your letters that have previously been delivered from the past.",
  },
  {
    q: '"Public, but anonymous"? What\'s the deal with that?',
    a: 'If you designate your email as "public, but anonymous", it will be included in the public letters section. There are some amazing stories from the past that our community has shared. Your email address will never be shown or shared, but the body and the subject of the letter will be. Please refrain from mentioning specific people in a public letter (and if you do, we reserve the right to delete your letter. Read our terms and conditions of use for more details.',
  },
];

const HowToPart = () => {
  const [qaData, setQaData] = useState({
    id: -1,
    q: "Welcome",
    a: "Welcome to our site",
  });

  return (
    <HowToPartDiv id="howto">
      <OverLayout>
        <PageContainer>
          <PageTitle pd="50px 0 30px 0">How To</PageTitle>
          <QandAPart>
            <QuestionPart>
              <QuestionMark>Questions</QuestionMark>
              <Questions>
                {howtoData.map((item: any, key: any) => (
                  <Question
                    key={key}
                    onClick={() => {
                      setQaData({ id: key, q: item.q, a: item.a });
                    }}
                    className={qaData.id === key ? "selected_question" : ""}
                  >
                    {qaData.id === key && <FaHandPointRight />}
                    {item.q}
                  </Question>
                ))}
              </Questions>
            </QuestionPart>
            <AnswerPart>
              <AnswerTitle>
                <Image src={avatar} alt="avatar" width="50px" height="50px" />
                <span>{qaData.q}</span>
              </AnswerTitle>
              <Answer>{qaData.a}</Answer>
            </AnswerPart>
          </QandAPart>
        </PageContainer>
      </OverLayout>
    </HowToPartDiv>
  );
};

export default HowToPart;
