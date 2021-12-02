import React, { useEffect, useRef, useState } from "react";

import { EmailListPart, EmailPage } from "./email.style";
import EmailListSection from "./emailList/EmailListSection";
import EmailMenuSection from "./emailMenu/EmailMenuSection";
import EmailViewSection from "./emailView/EmailViewSection";
import NewEmailSection from "./newEmail/NewEmailSection";

const Email = () => {
  const [viewEmail, setViewEmail] = useState<any>({});
  const [newEmail, setNewEmail] = useState(false);
  const newEmailRef = useRef<any>(null);
  const newEmailBtnRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutClickNewEmail);
    return () => {
      document.removeEventListener("mousedown", handleOutClickNewEmail);
    };
  }, []);

  const handleNewEmail = () => {
    if (!newEmail) {
      setNewEmail((prev) => !prev);
    }
  };

  const handleOutClickNewEmail = (e: any) => {
    if (
      (newEmailRef.current && newEmailRef.current.contains(e.target)) ||
      (newEmailBtnRef.current && newEmailBtnRef.current.contains(e.target))
    ) {
      return;
    } else {
      handleCloseNewEmail();
    }
  };

  const handleCloseNewEmail = () => {
    setNewEmail(false);
  };

  return (
    <EmailPage>
      <EmailListPart>
        <EmailMenuSection
          onNewEmail={handleNewEmail}
          newEmailBtnRef={newEmailBtnRef}
        />
        <EmailListSection />
      </EmailListPart>
      <EmailViewSection
        active={Object.keys(viewEmail).length > 0 ? true : false}
      />
      <NewEmailSection
        show={newEmail}
        newEmailRef={newEmailRef}
        handleClose={handleCloseNewEmail}
      />
    </EmailPage>
  );
};

export default Email;
