import Input from "components/input";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { NewLetterCardDiv } from "components/newletter/newletter.styled";
import { EditorState } from "draft-js";
import { EditorProps } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Div } from "styles/globals.styled";
import Button from "components/button";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
const NewEmailCard = () => {
  const [editorState, setEditorState] = useState<any>(() =>
    EditorState.createEmpty()
  );
  const handleContentStateChange = (e: any) => {
    // console.log("as HTML:", htmlToDraft(draftToHtml(e)));
    console.log("as HTML:", draftToHtml(e));
    // console.log(editorState.getCurrentContent().getPlainText());
  };

  return (
    <NewLetterCardDiv>
      <Input type="text" placeholder="To :" />
      <Div mt={13} />

      <Input type="text" placeholder="Subject :" />
      <Div mt={13} />

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
      <Div justifyContent="flex-end" mt={40} gap={15}>
        <Button
          label="PRIVATE"
          onClick={() => {}}
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
          onClick={() => {}}
          style={{
            fSize: 20,
            fWeight: 700,
            fColor: "#fff",
            p: "7px 17px",
            bgColor: "#FB6F6F",
            radius: 10,
          }}
        />
      </Div>
    </NewLetterCardDiv>
  );
};

export default NewEmailCard;
