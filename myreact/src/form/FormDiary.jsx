/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import BasicTable from "../mui/BasicTable";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, Button } from "@mui/material";
import ja from "date-fns/locale/ja";
import dayjs from "dayjs";

const FormDiary = () => {
  const container = css`
    width: 50%;
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `;

  const tabelContainer = css`
    width: 80%;
    margin: 5rem auto;
  `;

  const formStyle = css`
    display: flex;
    flex-direction: column;
  `;

  const buttonStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 14px;
    border-radius: 6px;
    border: none;
    margin-top: 5px;
    background: #6e6d70;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1),
      inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5),
      0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
    color: #dfdedf;
  `;

  const textareaStyle = css`
    border-radius: 6px;
    padding: 10px;
    border: 2px solid #ccc;
  `;

  const titleStyle = css`
    border-radius: 6px;
    padding: 10px;
    border: 2px solid #ccc;
  `;

  const labelStyle = css`
    position: relative;
    display: inline-block;
    width: 200px;
    height: 36px;
    border: 2px solid #ccc;
    border-radius: 6px;
  `;

  const inputStyle = css`
    position: relative;
    padding: 0 10px;
    width: 200px;
    height: 36px;
    border: 0;
    background: transparent;
    box-sizing: border-box;
    font-size: 14px;
  `;

  const errorStyle = css`
    color: red;
  `;

  const diary = window.localStorage.getItem("diary");
  // console.log(JSON.parse(diary));
  const [diaryList, setDiaryList] = useState(diary ? JSON.parse(diary) : []);

  const schema = yup.object().shape({
    date: yup.string().required("日付が必要です"),
    title: yup.string().required("タイトルが必要です。"),
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
    console.log(data);

    const dateString = dayjs(data.date).format("YYYY-MM-DD");
    const result = { ...data, date: dateString };
    console.log(result);

    setDiaryList([...diaryList, result]);
    window.localStorage.setItem("diary", JSON.stringify([...diaryList, data]));
    reset();
  };

  return (
    <>
      <div css={container}>
        <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={ja}
              >
                <p css={errorStyle}>{errors.date?.message}</p>
                <DatePicker
                  label="日付"
                  format="YYYY/MM/DD"
                  {...field}
                  render={() => <TextField {...register("date")} />}
                />
              </LocalizationProvider>
            )}
          />
          <br />

          <TextField
            label="タイトル"
            {...register("title")}
            fullWidth
            margin="normal"
          />
          <p css={errorStyle}>{errors.title?.message}</p>
          <TextField
            id="filled-multiline-static"
            label="メモ"
            multiline
            rows={7}
            defaultValue="Default Value"
            {...register("memo")}
          />
          <button type="submit" css={buttonStyle}>
            保存
          </button>
        </form>

        <br />
      </div>
      <div css={tabelContainer}>
        <BasicTable diaryList={diaryList}></BasicTable>
      </div>
    </>
  );
};

export default FormDiary;
