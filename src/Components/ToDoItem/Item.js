import React from "react";
import styles from "./Item.module.css";
import { Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Delete } from "@mui/icons-material";

const Item = () => {
  return (
    <div className={styles.Item}>
      <Checkbox />
      <TextField
        className={styles.Text}
        variant="standard"
        defaultValue="Task"
      />
      <Button style={{ minWidth: "auto" }}>
        <Delete />
      </Button>
    </div>
  );
};

export default Item;
