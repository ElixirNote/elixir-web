import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "80vh",
    backgroundColor: theme.palette.primary.main,
    backgroundImage: 'url(' + require('../../../images/xxx.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 40%",
    backgroundPosition: "bottom center",
  },
  leftPaper: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "30vw",
  },
  rightPaper: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "35vw",
  },
  logoSlogan: {
    fontSize: 48,
    fontWeight: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: "#ffffff",
  },
  logoSloganBody: {
    fontSize: 64,
    fontWeight: 800,
    color: "#ffffff"
  },
  tryItToday: {
    fontSize: 16,
    marginTop: theme.spacing(2),
    textTransform: "Capitalize",
    color: "#ffffff",
    borderColor: "#ffffff",
    paddingLeft: theme.spacing(4),
    borderRadius: 20,
    backgroundColor: "#ca6c87",
  },
  buttonInfoToMore: {
    fontSize: 16,
    marginTop: theme.spacing(2),
    textTransform: "Capitalize",
    color: "#ffffff",
    borderColor: "#ffffff",
    paddingLeft: 0,
  },
  desc: {
    color: "#ffffff",
    fontSize: 24,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function Feature1() {
  const classes = useStyles();

  const defaultSystemName = "Explore, analyze, and communicate with data, ";
  const slogan = "together";

  const desc0 = "Collaborate to uncover new insights and make better decisions."
  const desc1 = "Visualize data to communicate clearly."
  const desc2 = "Share findings with transparency and context"
  const desc3 = "Get support and inspiration from the community."

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={1} lg={2}>
        </Grid>
        <Grid item md={5} lg={4}>
          <div className={classes.leftPaper}>
            <div>
              <p className={classes.logoSlogan}>
                {defaultSystemName}<b className={classes.logoSloganBody}>{slogan}</b>
              </p>
            </div>
            <div>
              <Button
                variant={"text"}
                className={classes.tryItToday}
                endIcon={<ArrowRightAltIcon />}
                onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/", "_blank")}
              >
                Try ElixirNote Today
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item md={5} lg={4}>
          <div className={classes.rightPaper}>
            <p className={classes.desc}>
              {desc0}
            </p>
            <p className={classes.desc}>
              {desc1}
            </p>
            <p className={classes.desc}>
              {desc2}
            </p>
            <p className={classes.desc}>
              {desc3}
            </p>
            <Button
              variant={"text"}
              className={classes.buttonInfoToMore}
              endIcon={<ArrowRightAltIcon />}
              onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/", "_blank")}
            >
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid item md={1} lg={2}>
        </Grid>
      </Grid>
    </div>
  );
}