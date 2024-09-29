import { useQuery } from "react-query";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

const QueryMeigen = () => {
  const [number, setNumber] = useState(1);
  const { register, handleSubmit, reset } = useForm({
    number: "",
  });
  console.log(number);

  const onSubmit = (data) => {
    setNumber(Number(data.number));
    fetchMeigen();
    reset();
  };

  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

  const fetchMeigen = async () => {
    console.log(number);

    await sleep(2000);
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }

    throw new Error(res.statusText);
  };

  const { data, isLoading, isError, error } = useQuery("meigen", fetchMeigen);

  return (
    <>
      <div>
        {isLoading && <p>..loading</p>}
        {!isLoading && <img src={data.sprites.front_default}></img>}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-basic"
          label="好きな数字を入れてください"
          variant="standard"
          type="number"
          {...register("number")}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit">
            決定
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default QueryMeigen;
