/** @jsxImportSource @emotion/react */

import * as React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import {
  appTitle,
  errorStyle,
  formButton,
  formConatainer,
  textfield,
  titleButton,
  titleContainer,
} from "./Css";
import MemoItem from "./MemoItem";
import MemoModal from "./MemoModal";

const Memo = () => {
  const memo = window.localStorage.getItem("memo");
  const [memoLists, setMemoLists] = React.useState(
    memo ? JSON.parse(memo) : []
  );

  const [open, setOpen] = React.useState(false);
  // const [targetItem, setTargetItem] = React.useState();
  const [newTitle, setNewTitle] = React.useState();
  const [newMemo, setNewMemo] = React.useState();
  const [targetNum, setTargetNum] = React.useState();

  const handleOpen = (item, keynum) => {
    setOpen(true);
    setNewTitle(item.title);
    setNewMemo(item.memo);
    setTargetNum(keynum);
  };
  const handleClose = () => setOpen(false);

  const schema = yup.object().shape({
    date: yup.string().required("日付が必要です"),
    title: yup.string().required("タイトルが必要です"),
    memo: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: null,
      title: "",
      memo: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const dateString = dayjs(data.date).format("YYYY-MM-DD");
    const result = { ...data, date: dateString };
    setMemoLists([...memoLists, result]);
    window.localStorage.setItem("memo", JSON.stringify([...memoLists, result]));
    reset();
  };

  const editContents = (newTitle, newMemo, targetNum) => {
    console.log(newTitle, newMemo);
    const newlists = memoLists.map((item, index) =>
      index === targetNum ? { ...item, title: newTitle, memo: newMemo } : item
    );
    setMemoLists([...newlists]);

    handleClose();
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
          <Button variant="outlined" css={titleButton}>
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
          <form
            action=""
            css={formConatainer}
            onSubmit={handleSubmit(onSubmit)}
          >
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
              {...register("title")}
              css={textfield}
            />
            <TextField
              id="outlined-multiline-static"
              label="メモ"
              multiline
              fullWidth
              {...register("memo")}
              rows={8}
              css={textfield}
            />
            <Button variant="outlined" type="submit" css={formButton}>
              保存
            </Button>
          </form>
        </Container>
        <MemoModal
          open={open}
          newTitle={newTitle}
          newMemo={newMemo}
          handleClose={handleClose}
          editContents={editContents}
          setNewTitle={setNewTitle}
          setNewMemo={setNewMemo}
          targetNum={targetNum}
        ></MemoModal>
      </div>
    </>
  );
};

export default Memo;
