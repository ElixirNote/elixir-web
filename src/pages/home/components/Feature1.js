import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

import AbractionHeroImg from "../../../images/abraction-hero.svg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
  },
  leftPaper: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  rightPaper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  logoSlogan: {
    fontSize: 76,
    fontWeight: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main
  },
  logoSloganBody: {
    fontSize: 16,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
  },
  buttonInfoToMore: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    borderRadius: 4,
    textTransform: "Capitalize",
  },
  mainTitle: {
    display: "flex",
    color: theme.palette.text.primary,
    justifyContent: "center",
  },
}));

export default function Feature1() {
  const classes = useStyles();

  const defaultSystemName = "ElixirNote";
  const slogan = "Go from data to knowledge";

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.leftPaper}>
            <div>
              <p className={classes.logoSlogan}>
                {defaultSystemName}
              </p>
              <p className={classes.logoSloganBody}>
                {slogan}
              </p>
            </div>
            <div>
            </div>
            <div>
              <Button
                variant={"contained"}
                color={"primary"}
                className={classes.buttonInfoToMore}
                onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/", "_blank")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.rightPaper}>
            <img src={AbractionHeroImg} alt="abraction-hero" width={"100%"} />
          </div>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}