import MenuList from "../MenuList/MenuList";
import "./Menu.scss";
import { Link } from "react-router-dom";

import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="menu">
      <Button onClick={toggleDrawer(true)}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Drawer className="menu__card" open={open} onClose={toggleDrawer(false)}>
        <MenuList />
      </Drawer>
    </div>
  );
}
export default Menu;
