import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
  },
  paper: {
    padding: 30,
    height: 500,
  },
  title: {
    flex: "1 1 100%",
    paddingLeft: 0,
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
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/rest")
      .then((res) => {
        // console.log(res.data);
        const opleidingen = res.data.map((opleiding) => {
          const opleidingstypes = {};
          Object.keys(opleiding).forEach((key) => {
            opleidingstypes[key] = key === "id" ? opleiding[key] : opleiding[key].trim();
          });
          return opleidingstypes;
        });
        setData(opleidingen);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className={classes.content}>
      <Paper className={classes.paper}>
        <Toolbar style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 10 }}>
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Opleidingstype
          </Typography>

          <Tooltip title="Meer">
            <IconButton aria-label="filter list" color="primary">
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} className={classes.button} component={Link} to={"/aanmaken"}>
            Aanmaken
          </Button>
        </Toolbar>
        <DataGrid
          rowHeight={25}
          checkboxSelection
          disableSelectionOnClick
          className={classes.root}
          onRowSelected
          columns={[
            { field: "id", headerName: "Code", flex: 0.2 },
            { field: "kostenplaats", headerName: "Kostenplaats", flex: 0.5 },
            { field: "grootboek", headerName: "Grootboek", flex: 0.5 },
            { field: "omschrijving", headerName: "Omschrijving", flex: 1 },
          ]}
          rows={data}
        />

        <Toolbar />
      </Paper>
    </main>
  );
}
