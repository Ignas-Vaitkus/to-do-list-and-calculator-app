import React from "react";
import PropTypes from "prop-types";
import styles from "./ToDoItem.module.css";
import { Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Delete } from "@mui/icons-material";

const Item = (props) => {
  return (
    <div className={styles.Item}>
      <Checkbox />
      <div className={styles.Text}>{props.itemName}</div>
      <Button
        style={{ minWidth: "auto" }}
        onClick={() => props.deleteHandler(props.id)}
      >
        <Delete />
      </Button>
    </div>
  );
};

Item.propTypes = {
  deleteHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  itemName: PropTypes.string,
};

export default Item;
