import React from "react";
import styles from "./ToDoList.module.css";
import Item from "../ToDoItem/Item";

const ToDoList = () => {
  return (
    <div className={styles.ToDoList}>
      <Item />
    </div>
  );
};

export default ToDoList;
