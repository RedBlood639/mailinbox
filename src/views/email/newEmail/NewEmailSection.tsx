import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  HeaderAction,
  NewEmailDiv,
  NewEmailForm,
  NewEmailHeader,
  NewEmailInput,
} from "./newEmail.style";
import { EditorState } from "draft-js";
import { EditorProps } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import { MdOutlineClose } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { Tooltip } from "@mui/material";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const NewEmailSection = () => {
  const [editorState, setEditorState] = useState<any>(() =>
    EditorState.createEmpty()
  );

  const handleContentStateChange = (e: any) => {
    // console.log("as HTML:", htmlToDraft(draftToHtml(e)));
    console.log("as HTML:", draftToHtml(e));
    // console.log(editorState.getCurrentContent().getPlainText());
  };
  return (
    <NewEmailDiv>
      <NewEmailHeader>
        <span>New Message</span>
        <HeaderAction>
          <Tooltip title="Send" placement="top" arrow>
            <div className="header_action">
              <IoIosSend />
            </div>
          </Tooltip>
          <Tooltip title="Close" placement="top" arrow>
            <div className="header_action">
              <MdOutlineClose />
            </div>
          </Tooltip>
        </HeaderAction>
      </NewEmailHeader>
      <NewEmailForm>
        <NewEmailInput>
          <input type="text" placeholder="To : " />
        </NewEmailInput>
        <NewEmailInput>
          <input type="text" placeholder="Subject : " />
        </NewEmailInput>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onContentStateChange={handleContentStateChange}
          editorStyle={{
            maxHeight: "50vh",
            minHeight: "40vh",
            padding: "0 10px",
          }}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "emoji",
              "fontFamily",
              "fontSize",
              "list",
              "textAlign",
              "history",
            ],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </NewEmailForm>
    </NewEmailDiv>
  );
};

export default NewEmailSection;
