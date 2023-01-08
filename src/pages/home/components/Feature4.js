import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

import BigDataEcosystem from "../../../images/bigdata-ecosystem.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.light,
  },
  container: {
    display: "flex",
    height: "50vh",
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
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Grid container className={classes.container}>
              <img src={BigDataEcosystem} alt="ecosystem" width={"100%"} />
            </Grid>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
    </div>
  );
}