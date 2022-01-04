import Input from "components/input";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { EditorState } from "draft-js";
import { EditorProps } from "react-draft-wysiwyg";
import { toast, ToastContainer } from "react-toastify";
import { Div } from "styles/globals.styled";
import { NewLetterCardDiv } from "./newletter.styled";
import draftToHtml from "draftjs-to-html";
import Button from "components/button";
import { getMyInfo } from "utils/getMyInfo";
import { addLetterAction } from "actions/letterAction";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const EditLetter = () => {
  const [state, setState] = useState<any>({
    to: "",
    plainText: "",
    htmlText: null,
  });
  const [editorState, setEditorState] = useState<any>(() =>
    EditorState.createEmpty()
  );

  const handleContentStateChange = (e: any) => {
    setState({
      ...state,
      plainText: editorState.getCurrentContent().getPlainText(),
      htmlText: draftToHtml(e),
    });
  };

  const handleChange = (e: any) => {
    setState({ ...state, to: e.target.value });
  };

  const handleAddClick = async (num: number) => {
    if (!state.to) {
      toast.error("To field is required", {
        theme: "colored",
        autoClose: 3000,
      });
    } else if (!state.plainText) {
      toast.error("Text must be 30 characters at least.", {
        theme: "colored",
        autoClose: 3000,
      });
    } else {
      const data = {
        to: state.to,
        from: getMyInfo().email,
        plainText: state.plainText,
        htmlText: state.htmlText,
        date: new Date(),
        stateFlag: num,
      };
      const res = await addLetterAction(data);
      if (res.error) {
        toast.error(res.error, {
          theme: "colored",
          autoClose: 3000,
        });
      } else {
        toast.success("A Letter is created successfully", {
          theme: "colored",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <NewLetterCardDiv>
      <ToastContainer />
      <Input
        type="text"
        label="To"
        placeholder="Name"
        value={state.to}
        onChange={handleChange}
      />
      <Div mt={26} />
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
          onClick={() => handleAddClick(1)}
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
          onClick={() => handleAddClick(0)}
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

export default EditLetter;
