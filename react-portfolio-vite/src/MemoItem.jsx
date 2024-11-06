/** @jsxImportSource @emotion/react */

import { Button, css } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { listButton, listContainer } from "./Css";
import EditNoteIcon from "@mui/icons-material/EditNote";

const MemoItem = ({ item, keynum, deleList, handleOpen }) => {
  const buttonContainer = css`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `;

  return (
    <div>
      <div css={listContainer}>
        <p>日付：{item.date}</p>
        <p>タイトル：{item.title}</p>
        <div css={buttonContainer}>
          <Button
            variant="contained"
            css={listButton}
            onClick={() => handleOpen(item, keynum)}
          >
            <EditNoteIcon />
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
        </div>
      </div>
    </div>
  );
};

export default MemoItem;
