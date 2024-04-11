import { useState } from "react";
import axios from "axios";
import { Modal } from "@mui/material";
import "./EditInventory.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function EditInventory({key,inventoryId,
    inventoryName,
    inventoryServings,
    inventoryBestBefore}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="edit__trigger" onClick={handleOpen}>
        <FontAwesomeIcon icon={faPenToSquare} className="listitem__editicon" />
      </div>
      <Modal className="modal" open={open} onClose={handleClose}
      />
    </>
  );
}
export default EditInventory;
