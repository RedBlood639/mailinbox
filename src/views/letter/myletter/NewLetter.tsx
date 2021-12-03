import dynamic from "next/dynamic";
import { BiSave } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

import { PageTitle } from "layouts/layout.style";
import React, { useState } from "react";
import {
  LetterFormSection,
  NewActions,
  TitleDiv,
  TitleForm,
} from "./letter.style";
import { EditorState } from "draft-js";
import { EditorProps } from "react-draft-wysiwyg";

import { Tooltip } from "@mui/material";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const NewLetter = () => {
  const [state, setState] = useState<any>({
    title: "",
    content: "",
  });
  const [editorState, setEditorState] = useState<any>(() =>
    EditorState.createEmpty()
  );

  const handleTitleChange = (e: any) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleContentStateChange = (e: any) => {
    // console.log("as HTML:", htmlToDraft(draftToHtml(e)));
    console.log("as HTML:", draftToHtml(e));
    // console.log(editorState.getCurrentContent().getPlainText());
  };

  return (
    <div>
      <TitleDiv>
        <PageTitle fSize={25} textTransform="none">
          Compose New Letter
        </PageTitle>
        <NewActions>
          <Tooltip title="Save" placement="top" arrow>
            <div>
              <BiSave />
            </div>
          </Tooltip>
          <Tooltip title="Close" placement="top" arrow>
            <div>
              <AiOutlineCloseSquare />
            </div>
          </Tooltip>
        </NewActions>
      </TitleDiv>
      <LetterFormSection>
        <TitleForm
          type="text"
          value={state.title}
          onChange={handleTitleChange}
          name="title"
          placeholder="Title here...."
        />
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onContentStateChange={handleContentStateChange}
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
      </LetterFormSection>
    </div>
  );
};

export default NewLetter;
