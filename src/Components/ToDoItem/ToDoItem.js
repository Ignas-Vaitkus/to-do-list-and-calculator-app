import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ToDoItem.module.css";
import { IconButton, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Delete } from "@mui/icons-material";

const Item = (props) => {
  return (
    <div className={styles.Item}>
      <Checkbox />
      <TextField
        className={styles.Text}
        variant="standard"
        value={props.itemName}
        onChange={(e) => props.editHandler(e, props.id)}
      />
      <IconButton
        color="error"
        onClick={(e) => {
          props.deleteHandler(props.id);
        }}
      >
        <Delete />
      </IconButton>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Item;
