import React from "react";
import styles from "./ToDoList.module.css";
import Item from "../ToDoItem/Item";
import { TextField, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ToDoList = () => {
  return (
    <div className={styles.ToDoList}>
      <Paper elevation="2" className={styles.InputArea}>
        <TextField
          placeholder="Write your task..."
          variant="standard"
          style={{ flexGrow: "1" }}
        />
        <Button style={{ minWidth: "auto" }} onClick="addItemHandler">
          <AddIcon />
        </Button>
      </Paper>
      <Item />
    </div>
  );
};

export default ToDoList;
