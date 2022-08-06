import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Cover0 from "../../../images/Plot_Cover.png";
import Cover1 from "../../../images/Template_Cover.png";
import Cover2 from "../../../images/API_Cover.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),
  },
  card: {
    display: "flex",
    height: "35vh",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.text.primary,
  }
}));

export default function Feature2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={4}>
                <div className={classes.card}>
                  <img src={Cover0} alt="img" width={"100%"} height="70%" style={{borderRadius: 4, border: "1px solid #bbbbbb"}} />
                  <p className={classes.cardTitle}>Plot CheatSheets</p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.card}>
                  <img src={Cover1} alt="img" width={"100%"} height="70%" style={{borderRadius: 4, border: "1px solid #bbbbbb"}} />
                  <p className={classes.cardTitle}>Workflow Templates</p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.card}>
                  <img src={Cover2} alt="img" width={"100%"} height="70%" style={{borderRadius: 4, border: "1px solid #bbbbbb"}} />
                  <p className={classes.cardTitle}>API Starters</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} />
        </Grid>
    </div>
  );
}