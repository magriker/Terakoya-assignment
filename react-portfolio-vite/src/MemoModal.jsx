/** @jsxImportSource @emotion/react */

import { Box, Button, Modal, TextField } from "@mui/material";
import { modalBox, modalForm } from "./Css";

const MemoModal = ({
  open,
  handleClose,
  editContents,
  newTitle,
  newMemo,
  setNewTitle,
  setNewMemo,
  targetNum,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box css={modalBox}>
        <form action="" css={modalForm}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="タイトル"
            variant="outlined"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            // {...register("title")}
          />

          <TextField
            id="outlined-multiline-static"
            label="メモ"
            multiline
            fullWidth
            rows={8}
            value={newMemo}
            onChange={(e) => setNewMemo(e.target.value)}
          />
          <Button
            variant="outlined"
            onClick={() => editContents(newTitle, newMemo, targetNum)}
          >
            変更
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default MemoModal;
