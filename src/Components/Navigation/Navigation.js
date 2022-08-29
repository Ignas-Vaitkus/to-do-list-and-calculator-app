import { useState } from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [value, setValue] = useState("to-do-list");
  const repoName = "to-do-list-and-calculator-app";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          component={Link}
          to="/to-do-list"
          label="To Do List"
          value="to-do-list"
          icon={<FormatListBulletedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/calculator"
          label="Calculator"
          value="calculator"
          icon={<CalculateIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
