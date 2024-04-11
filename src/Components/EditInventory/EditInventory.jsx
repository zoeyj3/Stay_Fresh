import { useState } from "react";
import axios from "axios";
import {  Modal } from "@mui/material";
import './EditInventory.scss'

function EditInventory(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

}
export default EditInventory;