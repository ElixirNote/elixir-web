import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

import Ecosystem from "../../../images/guinsoo-ecosystem-elixir.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(5),
    backgroundColor: "#ffffff",
  },
  container: {
    display: "flex",
    height: "70vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Feature4() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Title
          name="Technologies we work with"
          tip="We don't just focus on one technology, instead we specialize in a whole range of open-source and public cloud tools . Thanks to that, we always select the most optimal Big Data solutions for our clients."
        />
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Grid container className={classes.container}>
              <img src={Ecosystem} alt="ecosystem" width={"100%"} />
            </Grid>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
    </div>
  );
}