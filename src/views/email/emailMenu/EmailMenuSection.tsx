import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import {
  MdDelete,
  MdLibraryAdd,
  MdOutlineSearch,
  MdRefresh,
  MdChecklist,
} from "react-icons/md";
import {
  EmailMenu,
  EmailMenuBar,
  EmailMenuItem,
  FilterInput,
  ListAction,
  ListActions,
} from "./emailMenu.style";

interface Props {
  onNewEmail?: any;
  newEmailBtnRef?: any;
}

const EmailMenuSection = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState("inbox");

  return (
    <EmailMenuBar>
      <EmailMenu>
        <EmailMenuItem
          active={selectedItem === "inbox"}
          onClick={() => setSelectedItem("inbox")}
        >
          Inbox
        </EmailMenuItem>
        <EmailMenuItem
          active={selectedItem === "sent"}
          onClick={() => setSelectedItem("sent")}
        >
          Sent
        </EmailMenuItem>
        <EmailMenuItem
          active={selectedItem === "draft"}
          onClick={() => setSelectedItem("draft")}
        >
          Draft
        </EmailMenuItem>
        <EmailMenuItem
          active={selectedItem === "favourite"}
          onClick={() => setSelectedItem("favourite")}
        >
          Favourite
        </EmailMenuItem>
      </EmailMenu>
      <ListActions>
        <FilterInput>
          <MdOutlineSearch />
          <input type="text" placeholder="Search ..." />
        </FilterInput>
        <Tooltip title="New" placement="top" arrow>
          <ListAction ref={props.newEmailBtnRef} onClick={props.onNewEmail}>
            <MdLibraryAdd />
          </ListAction>
        </Tooltip>
        <Tooltip title="Select" placement="top" arrow>
          <ListAction>
            <MdChecklist />
          </ListAction>
        </Tooltip>
        <Tooltip title="Delete" placement="top" arrow>
          <ListAction>
            <MdDelete />
          </ListAction>
        </Tooltip>
        <Tooltip title="Refresh" placement="top" arrow>
          <ListAction>
            <MdRefresh />
          </ListAction>
        </Tooltip>
      </ListActions>
    </EmailMenuBar>
  );
};

export default EmailMenuSection;
