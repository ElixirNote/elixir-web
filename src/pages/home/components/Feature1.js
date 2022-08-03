import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import AddCircleIcon from '@material-ui/icons/AddCircle';

import PossibleSheet from "../../../images/possible_sheet.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#000000",
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
    fontSize: 48,
    fontWeight: 800,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: "#ffffff"
  },
  wordCell: {
    fontSize: 48,
    fontWeight: 800,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: "#00d5ff",
    borderColor: "#ff1667",
    borderWidth: 1,
    borderStyle: "solid",
  },
  logoSloganBody: {
    fontSize: 48,
    fontWeight: 500,
    color: "#f0f0f0",
    textDecoration: "underline",
  },
  buttonInfoToMore: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    textTransform: "Capitalize",
    color: "#ffffff",
    backgroundColor: "#000000",
    borderColor: "#ffffff",
    borderRadius: 20,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginRight: theme.spacing(5),
  },
  buttonQuickstart: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    textTransform: "Capitalize",
    color: "#ff9b00",
    borderColor: "#33d62c",
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 0,
  },
  mainTitle: {
    display: "flex",
    color: theme.palette.text.primary,
    justifyContent: "center",
  },
}));

export default function Feature1() {
  const classes = useStyles();

  const defaultSystemName = "from data to knowledge";
  const slogan = "Super Easy";

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.leftPaper}>
            <div>
              <p className={classes.logoSlogan}>
                <AddCircleIcon style={{color: "#ffffff"}} />&nbsp;
                <span className={classes.wordCell}>Go</span>&nbsp;
                {defaultSystemName}, <i className={classes.logoSloganBody}>{slogan}</i>
              </p>
            </div>
            <div>
            </div>
            <div>
              <Button
                variant={"outlined"}
                className={classes.buttonInfoToMore}
                endIcon={<ArrowRightAltIcon />}
                onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/", "_blank")}
              >
                Learn More
              </Button>
              <Button
                variant={"outlined"}
                className={classes.buttonQuickstart}
                onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/guides/installation/install-from-source", "_blank")}
              >
                Start Now?
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.rightPaper}>
            <img src={PossibleSheet} width={"100%"} alt="possible-sheet" />
          </div>
        </Grid>
        {/*<Grid item xs={1}>*/}
        {/*</Grid>*/}
      </Grid>
    </div>
  );
}