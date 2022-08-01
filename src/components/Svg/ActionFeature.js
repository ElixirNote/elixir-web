import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "45vh",
    backgroundColor: "white",
    backgroundImage: 'url(' + require('../../images/bg-secondary.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  },
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={4} className={classes.root} />
        <Grid item xs={4} className={classes.root} />
        <Grid item xs={4} className={classes.root} />
      </Grid>
    </div>
  );
}