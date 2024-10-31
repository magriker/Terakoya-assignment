import { css } from "@emotion/react";
import { Button, Modal, TextField } from "@mui/material";
// import { Box } from "@mui/system";
import React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
// import Modal from "@mui/material/Modal";

const ListBox = ({ list, keynum, deleList, submitEdit }) => {
  console.log(keynum);

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

  const modalBox = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background-color: rgb(142, 153, 149);
    border: 2px solid #000;
    box-shadow: 24;
    padding: 3rem;
  `;

  const modalForm = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div css={listContainer}>
        <p>日付：{list.date}</p>
        <p>タイトル：{list.title}</p>
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
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box css={modalBox}>
          <form action="" css={modalForm} onSubmit={() => submitEdit()}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="タイトル"
              variant="outlined"
              value={list.title}
              // {...register("title")}
            />

            <TextField
              id="outlined-multiline-static"
              label="メモ"
              multiline
              fullWidth
              rows={8}
              value={list.memo}
            />
            <Button variant="outlined" type="submit">
              変更
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ListBox;
