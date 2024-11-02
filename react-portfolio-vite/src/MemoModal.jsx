/** @jsxImportSource @emotion/react */

import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { modalBox, modalForm } from "./Css";

const MemoModal = ({ item, open, handleClose, editContents, keynum }) => {
  const [title, setTitle] = useState(item.title);
  const [content, setCotent] = useState(item.memo);

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
            defaultValue={item.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            // {...register("title")}
          />

          <TextField
            id="outlined-multiline-static"
            label="メモ"
            multiline
            fullWidth
            rows={8}
            defaultValue={item.memo}
            value={content}
            onChange={(e) => setCotent(e.target.value)}
          />
          <Button
            variant="outlined"
            onClick={() => editContents(title, content, keynum)}
          >
            変更
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default MemoModal;
