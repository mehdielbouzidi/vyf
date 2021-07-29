import React, { useReducer } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 30,
  },

  title: {
    paddingLeft: 5,
    marginBottom: 20,
    fontSize: 18,
  },

  content: {
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 230,
    },
  },

  buttons: {
    padding: 10,
  },

  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Aanmaken = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    axios
      .post("/saveOpleidingstype", formData)
      .then((res) => {
        setOpen(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <main className={classes.content}>
      <Paper className={classes.paper}>
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Opleidingstype aanmaken
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <TextField name="kostenplaats" label="Kostenplaats" id="outlined-margin-dense" defaultValue="Kostenplaats" size="small" margin="dense" variant="outlined" onChange={handleChange} />
            <TextField name="grootboek" label="Grootboek" id="outlined-margin-dense" defaultValue="Grootboek" size="small" margin="dense" variant="outlined" onChange={handleChange} />
            <TextField name="omschrijving" label="Omschrijving" id="outlined-margin-dense" defaultValue="Omschrijving" size="small" margin="dense" variant="outlined" onChange={handleChange} />
          </div>
          <div className={classes.buttons}>
            <Button onClick={handleSubmit} variant="contained" color="primary" size="small" style={{ marginRight: 10 }}>
              Bewaar
            </Button>
            <Link to="/table" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" size="small">
                Annuleren
              </Button>
            </Link>
          </div>
        </form>
      </Paper>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Opleidingstype aangemaakt
        </Alert>
      </Snackbar>
    </main>
  );
};
