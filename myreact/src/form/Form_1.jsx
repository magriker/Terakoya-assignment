import { useState } from "react";

function Form_1() {
  console.log("test");

  const [form, setForm] = useState({
    age: 20,
    title: "test",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form action="">
        <div>
          年齢:
          <input name="age" value={form.age} onChange={handleChange}></input>
        </div>
        <div>
          タイトル:
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
          ></input>
        </div>
        <p>
          年齢は{form.age}、タイトルは{form.title}
        </p>
      </form>
    </>
  );
}

export default Form_1;
