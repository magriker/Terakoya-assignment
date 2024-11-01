/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MemoModal from "./MemoModal";

const ListBox = ({ memo, keynum, deleList, submitEdit }) => {
  const listContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 5px;
    padding: 4px;
    margin-bottom: 5px;
    transition: all 0.2s;

    &:hover {
      border: 1px solid rgb(63, 164, 252);
      box-shadow: 0 0 5px rgb(63, 164, 252);

      cursor: pointer;
    }
  `;

  const listButton = css`
    margin-right: 0;
  `;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div css={listContainer}>
        <p>日付：{memo.date}</p>
        <p>タイトル：{memo.title}</p>
        <Button variant="contained" css={listButton} onClick={handleOpen}>
          編集
        </Button>
        <Button
          variant="contained"
          css={listButton}
          onClick={() => deleList(keynum)}
        >
          <DeleteIcon />
          削除
        </Button>
        <MemoModal
          memo={memo}
          open={open}
          handleClose={handleClose}
          submitEdit={submitEdit(handleClose)}
        ></MemoModal>
      </div>
    </div>
  );
};

export default ListBox;
