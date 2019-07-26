import React from "react";
import { Paper } from "@material-ui/core";

export default function LeftPane({ styles }) {
  console.log(styles);
  return <Paper style={styles.Paper}>Left Pane</Paper>;
}
