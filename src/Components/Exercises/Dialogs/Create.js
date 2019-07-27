import React, { Fragment, Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});
export default withStyles(styles)(
  class Create extends Component {
    state = {
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    };

    handleToggle = () => {
      this.setState({ open: !this.state.open });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: value
        }
      });
    };
    handleSubmit = () => {
      // TODO validate

      const { exercise } = this.state;

      this.props.onCreate({
        ...exercise,
        id: exercise.title.replace(" ", "-").toLocaleLowerCase()
      });
      this.setState({
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
      this.handleToggle();
    };
    render() {
      const {
        open,
        exercise: { title, description, muscles }
      } = this.state;
      const { muscles: categories, classes } = this.props;
      return (
        <Fragment>
          <Button color="inherit" onClick={this.handleToggle}>
            <AddCircleIcon color="inherit" fontSize="large" />
          </Button>

          <Dialog
            open={open}
            onClose={this.handleToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Create new exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Please fill form below.</DialogContentText>
              <TextField
                className={classes.FormControl}
                autoFocus
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
              />
              <br />
              <TextField
                className={classes.FormControl}
                multiline
                rows="4"
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
              />
              <br />
              <FormControl>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select
                  className={classes.FormControl}
                  value={muscles}
                  onChange={this.handleChange("muscles")}
                >
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button color="inherit" onClick={this.handleSubmit}>
                <AddCircleIcon color="inherit" fontSize="large" />
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
