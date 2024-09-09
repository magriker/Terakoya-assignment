import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const FormDiray = () => {
  const [diaryList, setDiaryList] = useState([]);

  const schema = yup.object().shape({
    title: yup.string().required("タイトルを入れてください"),
    memo: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    setDiaryList([...diaryList, data]);
    console.log(diaryList);

    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        タイトル：
        <input type="text" placeholder="タイトル" {...register("title")} />
        <p className="error">{errors.title?.message}</p>
        <br />
        <label htmlFor="memo">メモ：</label>
        <textarea
          id="memo"
          rows={10}
          cols={50}
          {...register("memo")}
        ></textarea>
        <button type="submit">保存</button>
      </form>
      <br />
      {diaryList.map((list, index) => (
        <div key={index}>
          <p>
            <br />
            タイトル：{list.title}
            <br />
            メモ：{list.memo}
          </p>
          <br />
        </div>
      ))}
    </>
  );
};

export default FormDiray;
