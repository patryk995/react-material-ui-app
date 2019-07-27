import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Create from "../Exercises/Dialogs/Create";

export default function Header({ muscles, onExerciseCreate }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flex: 1 }}>
          Excersise DB
        </Typography>
        <Create muscles={muscles} onCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
}
