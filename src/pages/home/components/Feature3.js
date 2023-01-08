import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "50vh",
    width: "100vw",
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
  },
  card: {
    display: "flex",
    height: "50vh",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  solutions: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bolder",
    fontSize: 32,
  },
  contents: {
    width: "50vw",
    lineHeight: 1.8,
    fontWeight: "bold",
  },
  contentTips: {
    width: "50vw",
    lineHeight: 1.8,
    color: theme.palette.text.secondary
  },
}));

export default function Feature3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={10}>
          <div className={classes.card}>
            <p className={classes.solutions}>——— WHY US?</p>
            <p className={classes.title}>Building Big Data Solutions for Business</p>
            <p className={classes.contents}>Elixir is a community that has been helping organizations since 2020 to
              change their data into assets. Realizing how important it is for companies to build structures that will
              enable efficient data management, we not only have excellent specialists in their respective fields.</p>
            <p className={classes.contentTips}>
              Building Big Data solutions for business on a daily basis, we know how important is not only the code, but
              the very process of cooperation with the business stakeholders and in order to maximize the profits of the
              project.
            </p>
          </div>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}