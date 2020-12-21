import React, { useState } from "react";
import { Grid, Typography, AppBar, IconButton, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PaperComponent from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

// import AddNote from "./AddNote";

import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AddNote(){
  <div>
  <Box sx={{
    width: 300,
    height: 300,
    bgcolor: 'primary.dark',
    'hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  }}>
    <Typography value={title}>{title}</Typography>
    <Typography value={description}>{description}</Typography>
  </Box>
</div>
}

function HomePage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setitle] = useState("");
  const [description, setdescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container xs={12} display="flex">
        <AppBar align="center">
          <Grid item>
            <Typography>KeepNote</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleClickOpen}>
              <AddIcon />
            </IconButton>
          </Grid>
        </AppBar>
        {/* <div>
          <AddNote title={title} description= {description} />
        </div> */}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          AddNewNotes
        </DialogTitle>

        <DialogContent>
          <Typography>created_at:</Typography>
          <TextField
            id="filled-secondary"
            value = {title}
            label="Title"
            id="title"
            variant="filled"
            color="secondary"
            onChange={(e) => {
              setitle(e.target.value);
              console.log(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            id="filled-secondary"
            label="Note"
            id="description"
            value={description}
            variant="filled"
            color="secondary"
            onChange={(e) => setdescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
          onClick={() => AddNote(title, description)}
            onClick={handleClose}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default HomePage;
