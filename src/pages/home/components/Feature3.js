import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';

// components
import Title from "../../../components/Title";

// imgs
import PlatformIcon from "../../../images/platform.svg";
import BiIcon from "../../../images/bi.svg";
import AppIcon from "../../../images/app.svg";
import ModelIcon from "../../../images/model.svg";
import PreIcon from "../../../images/pre.svg";
import ActionIcon from "../../../images/monitor.svg";
import ApiIcon from "../../../images/api.svg";
import SecurityIcon from "../../../images/security.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(10),
  },
  content: {
    height: "15vh",
    color: theme.palette.text.primary,
    lineHeight: 2,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    color: "black",
  },
  card: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.primary.main,
    }
  }
}));

export default function Feature3() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Title
          name="More about Irelia"
          tip=""
        />
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={3}>
                <Card variant={"outlined"} className={classes.card} onClick={() => window.open("https://ciusji.gitbook.io/irelia", "_target")}>
                  <img src={PlatformIcon} width={30} alt="platform" />
                  <p>Platform</p>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card variant={"outlined"} className={classes.card} onClick={() => window.open("https://ciusji.gitbook.io/irelia", "_target")}>
                  <img src={BiIcon} width={30} alt="bi" />
                  <p>Business Intelligence</p>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card variant={"outlined"} className={classes.card} onClick={() => window.open("https://ciusji.gitbook.io/irelia", "_target")}>
                  <img src={AppIcon} width={30} alt="app" />
                  <p>Applications</p>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card variant={"outlined"} className={classes.card} onClick={() => window.open("https://ciusji.gitbook.io/irelia", "_target")}>
                  <img src={ModelIcon} width={30} alt="modeling" />
                  <p>Data Modeling</p>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card variant={"outlined"} className={classes.card} onClick={() => window.open("https://ciusji.gitbook.io/irelia/", "_target")}>
                  <img src={PreIcon} width={30} alt="pre" />
                  <p>Spotrix Pre</p>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card variant={"outlined"} className={classes.card} onClick={() => window.open("https://ciusji.gitbook.io/irelia", "_target")}>
                  <img src={ActionIcon} width={30} alt="action" />
                  <p>Data Actions</p>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card variant={"outlined"} className={classes.card} onClick={() => window.open("https://ciusji.gitbook.io/irelia", "_target")}>
                  <img src={ApiIcon} width={30} alt="api" />
                  <p>API</p>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card variant={"outlined"} className={classes.card} onClick={() => window.open("https://ciusji.gitbook.io/irelia", "_target")}>
                  <img src={SecurityIcon} width={30} alt="security" />
                  <p>Security</p>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
    </div>
  );
}