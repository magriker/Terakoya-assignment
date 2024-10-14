import { useMutation, useQuery } from "react-query";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Iso } from "@mui/icons-material";
import { number } from "yup";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const fetchMeigen = async (number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
  console.log(number);
  await sleep(2000);
  const res = await fetch(url);
  if (res.ok) {
    return res.json();
  }

  throw new Error(res.statusText);
  // console.log(res.statusText);
  // return;
};

const Pokemon3 = () => {
  const { register, handleSubmit, reset, watch } = useForm({
    number: 1,
  });

  const num = watch("number");

  const [data, setData] = useState(null);
  const { mutate: meigenApi, isLoading } = useMutation({
    mutationFn: (num) => fetchMeigen(num),
    onSuccess: (data) => {
      setData(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    meigenApi(data.number);
  };

  return (
    <>
      <div>
        {isLoading && <p>..loading</p>}
        {!isLoading && <img src={data?.sprites?.front_default}></img>}
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
          <Button variant="contained" type="submit" disabled={isLoading}>
            決定
          </Button>
        </Stack>
      </form>
    </>
  );
};

const Pokemon2 = () => {
  const [number, setNumber] = useState(1);
  const { data, isLoading, refetch, isError, error } = useQuery(
    "meigen",
    () => fetchMeigen(number),
    { enabled: false, retry: 1 }
  );

  const handleClick = async () => {
    await refetch();
  };

  return (
    <>
      <div>
        {isLoading && <p>..loading</p>}
        {!isLoading && <img src={data?.sprites?.front_default}></img>}
      </div>
      <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={handleClick} disabled={isLoading}>
        決定
      </button>
      {isError && error.message}
    </>
  );
};

const Pokemon = () => {
  const [number, setNumber] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const handleClick = async () => {
    setIsloading(true);
    try {
      const d = await fetchMeigen(number);
      setData(d);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <>
      <div>
        {isLoading && <p>..loading</p>}
        {!isLoading && <img src={data?.sprites?.front_default}></img>}
      </div>
      <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={handleClick} disabled={isLoading}>
        決定
      </button>
      <div style={{ marginTop: 30 }}>
        <Pokemon3></Pokemon3>
      </div>
    </>
  );
};

export default Pokemon3;
