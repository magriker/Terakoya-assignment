/** @jsxImportSource @emotion/react */

import { Box, Button, Modal, TextField } from "@mui/material";
import { css } from "@emotion/react";
import { useState } from "react";

const MemoModal = ({ memo, open, handleClose, submitEdit }) => {
  const [title, setTitle] = useState(memo.title);
  const [content, setCotent] = useState(memo.memo);

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
            value={content}
            onChange={(e) => setCotent(e.target.value)}
          />
          <Button variant="outlined" onClick={() => submitEdit(title, content)}>
            変更
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default MemoModal;
