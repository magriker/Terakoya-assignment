/** @jsxImportSource @emotion/react */
import { v4 as uuid } from "uuid";
import { Box, Button, Modal, TextField } from "@mui/material";
import {
  errorStyle,
  formButton,
  formConatainer,
  modalBox,
  modalForm,
  textfield,
} from "./Css";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const MemoModal = ({
  open,
  handleClose,
  editContents,
  IsNewModal,
  memoLists,
  setMemoLists,
  targetItem,
  setTargetItem,
  getCatimg,
}) => {
  const schema = yup.object().shape({
    date: yup.string().required("日付が必要です"),
    title: yup.string().required("タイトルが必要です"),
    memo: yup.string(),
  });

  const useFormmethod = useForm({
    defaultValues: {
      ...targetItem,
    },
    resolver: yupResolver(schema),
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box css={modalBox}>
        <FormProvider {...useFormmethod}>
          <form action="" css={modalForm}>
            <CreatNewitem
              handleClose={handleClose}
              setMemoLists={setMemoLists}
              memoLists={memoLists}
              editContents={editContents}
              targetItem={targetItem}
              setTargetItem={setTargetItem}
              IsNewModal={IsNewModal}
              getCatimg={getCatimg}
            ></CreatNewitem>
          </form>
        </FormProvider>
      </Box>
    </Modal>
  );
};

const CreatNewitem = ({
  handleClose,
  setMemoLists,
  memoLists,
  editContents,
  targetItem,
  setTargetItem,
  IsNewModal,
  getCatimg,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useFormContext();

  const onSubmit = (data) => {
    const dateString = dayjs(data.date).format("YYYY-MM-DD");
    const result = { ...data, date: dateString, id: uuid() };
    setMemoLists([...memoLists, result]);
    window.localStorage.setItem("memo", JSON.stringify([...memoLists, result]));
    console.log("out", data);
    handleClose();
    getCatimg();
    reset();
  };

  return (
    <div css={formConatainer}>
      {IsNewModal ? (
        <>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <p css={errorStyle}>{errors.date?.message}</p>
                <DatePicker
                  label="日付"
                  format="YYYY/MM/DD"
                  {...field}
                  renderLoading={() => <TextField {...register("date")} />}
                />
              </LocalizationProvider>
            )}
          />
          <p css={errorStyle}>{errors.title?.message}</p>
          <TextField
            id="outlined-basic"
            fullWidth
            label="タイトル"
            variant="outlined"
            css={textfield}
            {...register("title")}
          />
          <TextField
            id="outlined-multiline-static"
            label="メモ"
            multiline
            fullWidth
            rows={8}
            css={textfield}
            {...register("memo")}
          />
          <Button
            variant="outlined"
            type="submit"
            css={formButton}
            onClick={handleSubmit(onSubmit)}
          >
            保存
          </Button>
        </>
      ) : (
        <>
          <TextField
            id="outlined-basic"
            fullWidth
            label="タイトル"
            variant="outlined"
            value={targetItem.title}
            onChange={(e) =>
              setTargetItem({ ...targetItem, title: e.target.value })
            }
            css={textfield}
          />

          <TextField
            id="outlined-multiline-static"
            label="メモ"
            multiline
            fullWidth
            rows={8}
            value={targetItem.memo}
            onChange={(e) =>
              setTargetItem({ ...targetItem, memo: e.target.value })
            }
            css={textfield}
          />
          <Button
            variant="outlined"
            onClick={() => editContents(targetItem)}
            css={formButton}
          >
            変更
          </Button>
        </>
      )}
    </div>
  );
};

export default MemoModal;
