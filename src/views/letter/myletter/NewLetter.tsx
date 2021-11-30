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
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Tooltip } from "@mui/material";
// import draftToHtml from "draftjs-to-html";
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
  };

  return (
    <div>
      <TitleDiv>
        <PageTitle fSize={25} fColor="rgb(0,30,60)" textTransform="none">
          Compose New Letter
        </PageTitle>
        <NewActions>
          <Tooltip title="Save" placement="top">
            <BiSave />
          </Tooltip>
          <Tooltip title="Close" placement="top">
            <AiOutlineCloseSquare />
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
        />
      </LetterFormSection>
    </div>
  );
};

export default NewLetter;
