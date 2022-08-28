import React from "react";
import styles from "./Item.module.css";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Edit, Delete } from "@mui/icons-material";

const Item = () => {
  return (
    <div className={styles.Item}>
      <Checkbox />
      <Button>
        <Edit />
      </Button>
      <Button>
        <Delete />
      </Button>
    </div>
  );
};

export default Item;
