/** @jsxImportSource @emotion/react */

import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { listButton, listContainer } from "./Css";

const MemoItem = ({ item, keynum, deleList, handleOpen }) => {
  return (
    <div>
      <div css={listContainer}>
        <p>日付：{item.date}</p>
        <p>タイトル：{item.title}</p>
        <Button
          variant="contained"
          css={listButton}
          onClick={() => handleOpen(item, keynum)}
        >
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
  );
};

export default MemoItem;
