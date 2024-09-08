import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const Form = () => {
  const [formlist, setFormlist] = useState([]);

  const schema = yup.object().shape({
    fullName: yup.string().required("Your name should be full name"),
    age: yup.number().positive().integer().min(18).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFormlist([...formlist, data]);
    console.log(formlist);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        ></input>
        <p>{errors.fullName?.message}</p>
        <input type="unmber" placeholder="Age..." {...register("age")}></input>
        <p>{errors.age?.message}</p>

        <input
          type="text"
          placeholder="Email..."
          {...register("email")}
        ></input>
        <p>{errors.email?.message}</p>

        <input
          type="text"
          placeholder="Password..."
          {...register("password")}
        ></input>
        <p>{errors.password?.message}</p>

        <input
          type="text"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        ></input>
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit"></input>
      </form>
      {formlist.map((list, index) => (
        <div key={index}>{list.fullName}</div>
      ))}
    </>
  );
};

export default Form;
