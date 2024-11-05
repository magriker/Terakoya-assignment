/** @jsxImportSource @emotion/react */

import * as React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { appTitle, titleButton, titleContainer } from "./Css";
import MemoItem from "./MemoItem";
import MemoModal from "./MemoModal";

const Memo = () => {
  const memo = window.localStorage.getItem("memo");
  const [memoLists, setMemoLists] = React.useState(
    memo ? JSON.parse(memo) : []
  );

  const [open, setOpen] = React.useState(false);
  // const [targetItem, setTargetItem] = React.useState();
  const [newTitle, setNewTitle] = React.useState();
  const [newMemo, setNewMemo] = React.useState();
  const [targetNum, setTargetNum] = React.useState();
  const [openNewModal, setOpenNewModal] = React.useState(false);

  const handleOpen = (item, keynum) => {
    setOpen(true);
    setNewTitle(item.title);
    setNewMemo(item.memo);
    setTargetNum(keynum);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenNewModal(false);
  };

  const editContents = (newTitle, newMemo, targetNum) => {
    console.log(newTitle, newMemo);
    const newlists = memoLists.map((item, index) =>
      index === targetNum ? { ...item, title: newTitle, memo: newMemo } : item
    );
    setMemoLists([...newlists]);

    handleClose();
  };

  const creatNewMemo = () => {
    console.log("clicked");
    setOpenNewModal(true);
    setOpen(true);
    console.log(openNewModal);
  };

  const deleList = (keynum) => {
    console.log(keynum);
    console.log("clicked");
    const data = memoLists.filter((_, index) => index !== keynum);
    setMemoLists(data);
    window.localStorage.setItem("memo", JSON.stringify([...data]));
  };

  return (
    <>
      <div>
        <Container css={titleContainer}>
          <h1 css={appTitle}>Memo App</h1>
          <Button variant="outlined" css={titleButton} onClick={creatNewMemo}>
            新規作成
          </Button>
        </Container>
        <Container>
          {memoLists.map((item, index) => (
            <MemoItem
              item={item}
              key={index}
              keynum={index}
              deleList={deleList}
              editContents={editContents}
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}
            />
          ))}
        </Container>

        <MemoModal
          open={open}
          newTitle={newTitle}
          newMemo={newMemo}
          handleClose={handleClose}
          editContents={editContents}
          setNewTitle={setNewTitle}
          setNewMemo={setNewMemo}
          setOpenNewModal={setOpenNewModal}
          targetNum={targetNum}
          openNewModal={openNewModal}
          memoLists={memoLists}
          setMemoLists={setMemoLists}
        ></MemoModal>
      </div>
    </>
  );
};

export default Memo;
