/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const FormDiray = () => {
  const container = css`
    width: 50%;
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
  console.log(JSON.parse(diary));
  const [diaryList, setDiaryList] = useState(diary ? JSON.parse(diary) : []);

  const schema = yup.object().shape({
    title: yup.string().required("タイトルが必要です。"),
    memo: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: "",
      title: "",
      memo: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setDiaryList([...diaryList, data]);
    window.localStorage.setItem("diary", JSON.stringify([...diaryList, data]));
    reset();
  };

  return (
    <div css={container}>
      <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
        日付：
        <label htmlFor="" css={labelStyle}>
          <input type="date" css={inputStyle} {...register("date")}></input>
        </label>
        <br />
        タイトル：
        <input
          css={titleStyle}
          type="text"
          placeholder="タイトル"
          {...register("title")}
        />
        <p css={errorStyle}>{errors.title?.message}</p>
        <label htmlFor="memo">メモ：</label>
        <textarea
          id="memo"
          rows={10}
          cols={50}
          {...register("memo")}
          css={textareaStyle}
        ></textarea>
        <button type="submit" css={buttonStyle}>
          保存
        </button>
      </form>
      <br />
      {diaryList.map((list, index) => (
        <div key={index}>
          <p>
            日付：{list.date}
            <br />
            タイトル：{list.title}
            <br />
            メモ：{list.memo}
          </p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default FormDiray;
