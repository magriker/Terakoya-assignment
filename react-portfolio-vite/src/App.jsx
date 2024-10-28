/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Container } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ja from "date-fns/locale/ja";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  return (
    <>
      {/* <Menu></Menu> */}
      {/* <Memo></Memo> */}
      <Memo></Memo>
    </>
  );
}

const Memo = () => {
  const titleContainer = css`
    margin: 3rem auto;
  `;

  const textfield = css`
    margin: 1rem 0;
  `;

  const titleButton = css`
    width: 7rem;
    height: 3rem;
    margin-right: 0.5rem;
  `;

  const appTitle = css`
    font-size: 4rem;
  `;

  const formButton = css`
    width: 10rem;
    align-self: flex-end;
  `;

  const formConatainer = css`
    display: flex;
    flex-direction: column;
  `;

  const errorStyle = css`
    color: red;
  `;

  const listContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 5px;
    padding: 4px;
    margin-bottom: 5px;

    &:hover {
      background-color: darkblue;
      color: white;
      cursor: pointer;
    }
  `;

  const listButton = css`
    margin-right: 0;
  `;

  const memo = window.localStorage.getItem("memo");
  const [memoLists, setMemoLists] = React.useState(
    memo ? JSON.parse(memo) : []
  );

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

    console.log(memoLists);

    const result = { ...data, date: dateString };
    console.log(result);
    setMemoLists([...memoLists, result]);

    window.localStorage.setItem("memo", JSON.stringify([...memoLists, result]));

    reset();
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
          {memoLists.map((list, index) => (
            <div key={index} css={listContainer}>
              <p>日付：{list.date}</p>
              <p>タイトル：{list.title}</p>
              <Button variant="contained" css={listButton}>
                <DeleteIcon />
                削除
              </Button>
            </div>
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
      </div>
    </>
  );
};

const listBox = ({ date, title }) => {
  return;
};

const Menu = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Memo"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EditNoteIcon></EditNoteIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default App;
