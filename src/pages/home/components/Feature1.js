import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import EditIcon from '@material-ui/icons/Edit';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import MountainPic from "../../../images/mountain.webp";
import IcebergPic from "../../../images/iceberg.webp";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    backgroundImage: 'url(' + require('../../../images/auora.webp') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100vh",
  },
  main: {
    display: "flex",
    flexDirection: "column",
  },
  firstMain: {
    display: "flex",
    height: "70vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  secondMain: {
    display: "flex",
    height: "30vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  slogan: {
    fontSize: 64,
    color: theme.palette.background.light,
    fontFamily: "Lato,sans-serif!important",
    paddingTop: theme.spacing(10),
  },
  startButton: {
    background: theme.palette.primary.main,
    color: theme.palette.background.light,
    fontWeight: 600,
    textTransform: "Capitalize",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginRight: theme.spacing(4),
    "&:hover": {
      background: theme.palette.primary.dark,
    }
  },
  exampleButton: {
    color: theme.palette.primary.main,
    background: theme.palette.background.light,
    fontWeight: 600,
    textTransform: "Capitalize",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginRight: theme.spacing(4),
    "&:hover": {
      borderColor: theme.palette.primary.light,
    }
  },
  tip: {
    color: theme.palette.background.light,
  },
  demoButton: {
    paddingLeft: 4,
    textTransform: "Capitalize",
    color: theme.palette.primary.main,
    fontWeight: 800,
  },
  rightInfo: {
    paddingTop: theme.spacing(10),
  },
}));

export default function Feature1() {
  const classes = useStyles();

  // const defaultSystemName = "We help teams turn their data into assets";
  const defaultSystemName = "Where data teams do their best work";

  return (
    <div className={classes.root}>
      <Grid container className={classes.firstMain}>
        <Grid item xs={2}/>
        <Grid item xs={4}>
          <p className={classes.slogan}>{defaultSystemName}</p>
          <Button
            variant={"contained"}
            startIcon={<EditIcon/>}
            className={classes.startButton}
            onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/guides/get-started", "_target")}
          >
            Quickstart
          </Button>
          <Button
            variant={"contained"}
            endIcon={<OpenInNewIcon/>}
            className={classes.exampleButton}
            onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/", "_target")}
          >
            Documentation
          </Button>
          <p className={classes.tip}>Want to see how Elixir can help your team?</p>
          <Button
            className={classes.demoButton}
            variant={"link"}
            startIcon={<PersonalVideoIcon color="main" />}
            onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/guides/get-started", "_target")}
          >
            Book a demo
          </Button>
        </Grid>
        <Grid item xs={5} className={classes.rightInfo}>
          <img src={IcebergPic} width={"100%"} alt="banner"/>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
      <Grid container className={classes.secondMain}>
        <img src={MountainPic} height={"100%"} alt="mountain" />
      </Grid>
    </div>
  );
}