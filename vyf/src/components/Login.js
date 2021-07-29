import React, { useState, useReducer, useContext } from "react";
import { makeStyles, Container, Typography, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import myContext, { setAuth, setPath } from "../MyContext.js";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = () => {
  const classes = useStyles();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [loginError, setLoginError] = useState(false);
  const [state, setContext] = useContext(myContext);
  let history = useHistory();

  const handleSubmit = (event) => {
    axios
      .post("/api", formData)
      .then((res) => {
        const auth2 = res.data.auth ? true : false;
        setContext(setAuth(auth2));
        if (!auth2) {
          localStorage.removeItem("token");
          setLoginError(true);
        } else {
          localStorage.setItem("token", res.data.accessToken);
          setContext(setPath(res.data.url));
          history.push("/home");
        }
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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src="logo.png" alt="logo" style={{ paddingBottom: 50 }}></img>
        <Typography component="h1" variant="h5">
          Inloggen
        </Typography>
        <form>
          <TextField error={loginError} name="username" variant="outlined" margin="normal" required fullWidth id="email" label="E-mailadres " autoComplete="email" autoFocus onChange={handleChange} />
          <TextField error={loginError} name="password" helperText={loginError ? "Ongeldige gebruikersnaam of wachtwoord" : ""} variant="outlined" margin="normal" required fullWidth label="Wachtwoord" type="password" id="password" autoComplete="current-password" onChange={handleChange} />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Onthoud mij" />
          <Button onClick={handleSubmit} fullWidth variant="contained" color="primary" className={classes.submit}>
            Inloggen
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Wachtwoord vergeten?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Geen account? Registreer hier"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
