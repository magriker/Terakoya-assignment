/** @jsxImportSource @emotion/react */

import * as React from "react";
import { Container } from "@mui/material";
import { appTitle, titleContainer, blurBg } from "./Css";
import MemoModal from "./MemoModal";
import Calendar from "./Calendar.jsx";

const Memo = () => {
  const memo = window.localStorage.getItem("memo");
  const defaultItem = { title: "", memo: "", date: null };
  const [memoLists, setMemoLists] = React.useState(
    memo ? JSON.parse(memo) : []
  );

  const [open, setOpen] = React.useState(false);
  // const [targetItem, setTargetItem] = React.useState();
  const [targetItem, setTargetItem] = React.useState(defaultItem);
  const [IsNewModal, setIsNewModal] = React.useState(false);

  //Calender
  const [targetDate, setTargetDate] = React.useState();

  const handleOpen = (item) => {
    setOpen(true);
    setTargetItem(item);
  };
  const handleClose = () => {
    setOpen(false);
    setIsNewModal(false);
  };

  const editContents = (targetItem) => {
    console.log(targetItem);
    const newlists = memoLists.map((item) =>
      item.id === targetItem.id
        ? { ...item, title: targetItem.title, memo: targetItem.memo }
        : item
    );
    setMemoLists([...newlists]);
    handleClose();
  };

  const handleCreatButtonClick = () => {
    setTargetItem(defaultItem);
    setIsNewModal(true);
    setOpen(true);
  };

  const deleList = (targetItem) => {
    console.log(targetItem);
    console.log("clicked");
    const newItemlists = memoLists.filter((item) => item.id !== targetItem.id);
    setMemoLists(newItemlists);
    window.localStorage.setItem("memo", JSON.stringify([...newItemlists]));
    handleClose();
  };

  return (
    <>
      <div css={open ? blurBg : ""}>
        <Container css={titleContainer}>
          <h1 css={appTitle}>Memo App</h1>
        </Container>
        <Container>
          <Calendar
            memoLists={memoLists}
            handleCreatButtonClick={handleCreatButtonClick}
            setTargetDate={setTargetDate}
            handleOpen={handleOpen}
          ></Calendar>
        </Container>
        <MemoModal
          open={open}
          handleClose={handleClose}
          editContents={editContents}
          IsNewModal={IsNewModal}
          memoLists={memoLists}
          setMemoLists={setMemoLists}
          targetItem={targetItem}
          setTargetItem={setTargetItem}
          targetDate={targetDate}
          deleList={deleList}
        ></MemoModal>
      </div>
    </>
  );
};

export default Memo;
