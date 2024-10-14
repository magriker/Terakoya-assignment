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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NoteIcon from "@mui/icons-material/Note";
import FormDiray from "../form/FormDiary";
import Form_1 from "../form/Form_1";
import QueryMeigen from "../form/ReactQuery";
import { Query, QueryClient, QueryClientProvider } from "react-query";
import ReactQuery_test from "../form/Pokemon";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

const cli = new QueryClient();

export default function MuiMenue() {
  const [menue, setMenue] = React.useState(null);

  // const [state, setState] = React.useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // });
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();

  const ANCHOR = "left";

  const toggleDrawer = () => {
    setToggle(!toggle);
  };

  const handelClick = (text) => {
    console.log(text);

    const lowerCase = text.toLowerCase();
    navigate(`/${lowerCase}`);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {["Diary", "Pokemon"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handelClick(text)}>
              <ListItemIcon>
                <NoteIcon></NoteIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div>
        <React.Fragment>
          <Button onClick={toggleDrawer}>Menue</Button>
          <Drawer anchor={ANCHOR} open={toggle} onClose={toggleDrawer}>
            {list(ANCHOR)}
          </Drawer>
        </React.Fragment>
        <Outlet></Outlet>
      </div>
    </>
  );
}
