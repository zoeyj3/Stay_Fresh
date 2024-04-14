import Menu from "../Menu/Menu";
import "./MenuButton.scss";
import { Link } from "react-router-dom";

import * as React from "react";

import Drawer from "@mui/material/Drawer";


import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuButton() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="menubutton">
      <a  onClick={toggleDrawer(true)}>
        <FontAwesomeIcon className="menubutton__hambergericon" icon={faBars} />
      </a>
      <Drawer  open={open} onClose={toggleDrawer(false)}>
        <Menu />
      </Drawer>
    </div>
  );
}
export default MenuButton;
