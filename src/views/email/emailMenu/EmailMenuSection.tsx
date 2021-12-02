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

const EmailMenuSection = () => {
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
        <ListAction>
          <MdLibraryAdd />
        </ListAction>
        <ListAction>
          <MdChecklist />
        </ListAction>
        <ListAction>
          <MdDelete />
        </ListAction>
        <ListAction>
          <MdRefresh />
        </ListAction>
      </ListActions>
    </EmailMenuBar>
  );
};

export default EmailMenuSection;
