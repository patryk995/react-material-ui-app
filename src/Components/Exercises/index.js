import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: "calc(100vh - 64px - 48px - 77px)",
    overflowY: "auto"
  }
};
export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    title = "Welcome!",
    description = "Please select exercise from the list on the left."
  }
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) => (
                  <ListItem key={id} button onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="h1" component="h2">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Paper>
    </Grid>
  </Grid>
);
