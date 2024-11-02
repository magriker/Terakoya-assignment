/** @jsxImportSource @emotion/react */

import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MemoModal from "./MemoModal";
import { listButton, listContainer } from "./Css";

const ListBox = ({
  item,
  keynum,
  deleList,
  editContents,
  handleOpen,
  handleClose,
  open,
}) => {
  return (
    <div>
      <div css={listContainer}>
        <p>日付：{item.date}</p>
        <p>タイトル：{item.title}</p>
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
          item={item}
          open={open}
          handleClose={handleClose}
          editContents={editContents}
          keynum={keynum}
        ></MemoModal>
      </div>
    </div>
  );
};

export default ListBox;
