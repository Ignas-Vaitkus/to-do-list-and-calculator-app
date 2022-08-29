import React, { useEffect, useState, useRef } from "react";
import styles from "./ToDoList.module.css";
import ToDoItem from "../ToDoItem/ToDoItem";
import { TextField, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ToDoList = () => {
  const [items, setItems] = useState([
    { name: "Task 1" },
    { name: "Task 2" },
    { name: "Task 3" },
  ]);

  const [newItem, setNewItem] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    const lsItems = localStorage.getItem("toDoItems");
    if (!lsItems) localStorage.setItem("toDoItems", JSON.stringify(items));
    else setItems(JSON.parse(lsItems));
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(items));
    console.log("Ls");
  }, [items]);

  const inputHandler = (e) => {
    setNewItem(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();

    setItems([...items, { name: newItem }]);

    console.log("Add");
    setNewItem("");
  };

  const deleteHandler = (index) => {
    const filteredItems = items.filter((_, idx) => idx !== index);
    setItems(filteredItems);
  };

  return (
    <div className={styles.ToDoList}>
      <form onSubmit={addHandler}>
        <Paper elevation={2} className={styles.InputArea}>
          <TextField
            placeholder="Write your task..."
            variant="standard"
            style={{ flexGrow: "1" }}
            onChange={inputHandler}
            value={newItem}
          />
          <IconButton type="submit" color="primary" aria-label="add item">
            <AddIcon />
          </IconButton>
        </Paper>
      </form>
      {items.map((item, idx) => (
        <ToDoItem
          key={idx}
          id={idx}
          deleteHandler={deleteHandler}
          itemName={item.name}
        />
      ))}
    </div>
  );
};

export default ToDoList;
