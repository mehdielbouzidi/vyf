import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {},
}));

export const Home = () => {
  const classes = useStyles();

  return <main className={classes.content}></main>;
};
