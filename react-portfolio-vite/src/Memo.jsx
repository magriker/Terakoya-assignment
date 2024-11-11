/** @jsxImportSource @emotion/react */

import * as React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { appTitle, titleButton, titleContainer } from "./Css";
import MemoItem from "./MemoItem";
import MemoModal from "./MemoModal";
import Cat from "./Cat";

const fetchCat = async () => {
  const url = `https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_1TY1LTtnqm0jrtDiQhBntqDINzilwv7hnnWguQLtD1Epdj3DCmYNV66eU6qNiuHm`;

  const res = await fetch(url);

  if (res.ok) {
    // console.log(await res.json());
    return res.json();
  }

  throw new Error(res.statusText);
};

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
  // fetch state
  const [catdata, setCatData] = React.useState(null);
  const [isLoading, setIsloading] = React.useState(false);
  const getCatimg = async () => {
    setIsloading(true);
    try {
      const d = await fetchCat();
      setCatData(d);
      console.log(catdata);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

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
          <Button
            variant="outlined"
            css={titleButton}
            onClick={handleCreatButtonClick}
          >
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
        <Container>
          <Cat catdata={catdata} isLoading={isLoading}></Cat>
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
          getCatimg={getCatimg}
        ></MemoModal>
      </div>
    </>
  );
};

export default Memo;
