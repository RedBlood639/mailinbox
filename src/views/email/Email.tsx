import React, { useState } from "react";

import { EmailListPart, EmailPage } from "./email.style";
import EmailListSection from "./emailList/EmailListSection";
import EmailMenuSection from "./emailMenu/EmailMenuSection";
import EmailViewSection from "./emailView/EmailViewSection";
import NewEmailSection from "./newEmail/NewEmailSection";

const Email = () => {
  const [viewEmail, setViewEmail] = useState<any>({});

  return (
    <EmailPage>
      <EmailListPart>
        <EmailMenuSection />
        <EmailListSection />
      </EmailListPart>
      <EmailViewSection />
      <NewEmailSection />
    </EmailPage>
  );
};

export default Email;
