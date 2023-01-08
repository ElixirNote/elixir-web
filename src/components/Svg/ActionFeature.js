import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "65vh",
    backgroundImage: 'url(' + require('../../images/bg-actions.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: 600,
    marginBottom: theme.spacing(3),
  },
  buttonDownload: {
    backgroundColor: theme.palette.primary.main,
    padding: "8px 32px",
    paddingBottom: 8,
    borderRadius: 4,
    fontSize: 16,
    fontWeight: "bolder",
    textTransform: "Capitalize",
    color: "#fff",
  },
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.root}>
          <p className={classes.title}>Let’s get insight. Try elixir today.</p>
          <Button
            variant={"contained"}
            className={classes.buttonDownload}
            onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/guides/installation", "_target")}
          >
            Download
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}