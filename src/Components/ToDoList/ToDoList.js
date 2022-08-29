import React, { useEffect, useState } from "react";
import styles from "./ToDoList.module.css";
import ToDoItem from "../ToDoItem/ToDoItem";
import { TextField, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ToDoList = () => {
  const [defaultItems] = useState([]);
  const [items, setItems] = useState(defaultItems);

  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const lsItems = localStorage.getItem("toDoItems");
    if (!lsItems)
      localStorage.setItem("toDoItems", JSON.stringify(defaultItems));
    else setItems(JSON.parse(lsItems));
    console.log("init");
  }, [defaultItems]);

  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(items));
    console.log("update local storage");
  }, [items]);

  const inputHandler = (e) => {
    setNewItem(e.target.value);
  };

  const addItemHandler = (e) => {
    e.preventDefault();
    setItems([...items, newItem]);
    console.log("Add");
    setNewItem("");
  };

  const editHandler = (e, idx) => {
    const newItems = items.map((element, index) =>
      index === idx ? e.target.value : element
    );
    setItems(newItems);
  };

  const deleteHandler = (index) => {
    const filteredItems = items.filter((_, idx) => idx !== index);
    setItems(filteredItems);
  };

  return (
    <div className={styles.ToDoList}>
      <form onSubmit={addItemHandler}>
        <Paper elevation={2} className={styles.InputArea}>
          <TextField
            placeholder="Write your task here..."
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
          itemName={item}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};

export default ToDoList;
