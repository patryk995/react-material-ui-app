import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Excersise DB</Typography>
      </Toolbar>
    </AppBar>
  );
}
