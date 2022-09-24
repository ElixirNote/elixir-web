import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "90vh",
    backgroundColor: "#fff",
  },
  leftPaper: {
    height: "90vh",
    width: "100%",
    backgroundImage: 'url(' + require('../../../images/home-left.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "50vw 80vh",
    backgroundPosition: "bottom center",
    paddingRight: theme.spacing(5),
  },
  rightPaper: {
    height: "90vh",
    display: "flex",
    backgroundImage: 'url(' + require('../../../images/dots.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "60vw 90vh",
    backgroundPosition: "bottom right",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",

    paddingLeft: theme.spacing(5),
  },
  logoSlogan: {
    fontSize: 64,
    fontWeight: "bolder",
    width: "35vw",
    lineHeight: 1.2,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  tryItToday: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    textTransform: "Capitalize",
    color: "#ffffff",
    borderRadius: 4,
    backgroundColor: "#1fdc6b",
    padding: "8px 32px",
  },
  buttonInfoToMore: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    textTransform: "Capitalize",
    color: "#1fdc6b",
    borderColor: "#1fdc6b",
    padding: "8px 32px",
  },
}));

export default function Feature1() {
  const classes = useStyles();

  const defaultSystemName = "We help teams turn their data into assets";

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={6} lg={6}>
          <div className={classes.leftPaper}>
          </div>
        </Grid>
        <Grid item md={6} lg={6}>
          <div className={classes.rightPaper}>
            <div>
              <p className={classes.logoSlogan}>
                {defaultSystemName}
              </p>
            </div>
            <div>
              <Button
                variant={"contained"}
                disableElevation
                className={classes.tryItToday}
                onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/", "_blank")}
              >
                Try Today
              </Button>
              <Button
                variant={"outlined"}
                className={classes.buttonInfoToMore}
                onClick={() => window.open("https://github.com/ElixirNote", "_blank")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item md={1} lg={2}>
        </Grid>
      </Grid>
    </div>
  );
}