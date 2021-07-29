import React, { useContext, useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid } from "@material-ui/core";
import myContext, { setFilter } from "../MyContext.js";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: 0,
    marginTop: 20,
    paddingBottom: 30,
    borderRadius: 0,
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
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);
  const [filter, dispatch] = useContext(myContext);

  const handleChange = (event) => {
    const keyword = event.target.value;

    dispatch(
      setFilter({
        ...filter.filter,
        [event.target.name]: keyword,
      })
    );
  };

  return (
    <div className={classes.content}>
      <Breadcrumbs aria-label="breadcrumb" style={{ fontSize: "small" }}>
        <Link color="inherit">Stam</Link>
        <Link color="primary">Opleidingstype</Link>
      </Breadcrumbs>
      <Paper className={classes.paper} elevation={0}>
        <Toolbar className={classes.root}>
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Filter
          </Typography>
          <Grid item xs></Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="small" className={classes.button} style={{ marginRight: 10 }}>
              Filter
            </Button>
            <Button variant="contained" color="primary" size="small" onClick={() => setCount(count + 1)} className={classes.button} startIcon={<AddIcon />}>
              Regel toevoegen
            </Button>
          </Grid>
        </Toolbar>
        <Grid style={{ paddingLeft: 15, paddingTop: 0 }}>
          {[...Array(count)].map((_, i) => (
            <div alignItems="center" style={{ margin: "auto", verticalAlign: "bottom" }} key={i}>
              <Grid>
                <FormControl variant="outlined" className={classes.formControl} size="small">
                  <InputLabel id="demo-simple-select-outlined-label">Naam</InputLabel>
                  <Select labelId="demo-simple-select-outlined-label" defaultValue="omschrijving" id="demo-simple-select-outlined" label="Naam">
                    <MenuItem value="id">Code</MenuItem>
                    <MenuItem value="kostenplaats">Kostenplaats</MenuItem>
                    <MenuItem value="grootboek">Grootboek</MenuItem>
                    <MenuItem value="omschrijving">Omschrijving</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl} size="small">
                  <InputLabel id="demo-simple-select-outlined-label">Voorwaarde</InputLabel>
                  <Select labelId="demo-simple-select-outlined-label" defaultValue="contains" name="contains" id="demo-simple-select-outlined" label="Voorwaarde" onChange={handleChange}>
                    <MenuItem value="contains">Bevat</MenuItem>
                    <MenuItem value="isEqual">Is gelijk aan</MenuItem>
                    <MenuItem value="startsWith">Begint met</MenuItem>
                    <MenuItem value="notContaining">Niet ingevuld</MenuItem>
                    <MenuItem value="isFilled">Is ingevuld</MenuItem>
                  </Select>
                </FormControl>

                <TextField className={classes.formControl} label="Expressie" value={filter.expression} size="small" name="expression" variant="outlined" onChange={handleChange} />

                {count > 1 ? (
                  <IconButton aria-label="delete" style={{ verticalAlign: "bottom" }} onClick={() => setCount(count - 1)}>
                    <DeleteIcon />
                  </IconButton>
                ) : null}
              </Grid>
            </div>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
