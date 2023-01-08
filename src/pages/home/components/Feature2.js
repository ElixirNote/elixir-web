import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// icons
import ServerIcon from "../../../images/icon-service-server.svg";
import AnalyticalIcon from "../../../images/icon-mission-analytical.svg";
import SettingIcon from "../../../images/icon-mission-settings.svg";
import DatabaseIcon from "../../../images/icon-mission-database.svg";
import AnalyticsIcon from "../../../images/icon-career-analytics.svg";
import CloudIcon from "../../../images/icon-career-cloud.svg";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    backgroundImage: 'url(' + require('../../../images/feature-bg.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.light,
    marginBottom: theme.spacing(10),
  },
  card: {
    display: "flex",
    height: "70vh",
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
    width: "30vw",
    lineHeight: 1.8,
    borderLeft: "4px solid",
    borderColor: theme.palette.primary.main,
    paddingLeft: 8,
  },
  featureCard: {
    display: "flex",
    height: "40vh",
    justifyContent: "center",
    alignItems: "center",
  },
  featureContent: {
    width: "100%",
    height: "calc(40vh - 32px)",
    backgroundColor: "#252c2e",
    borderRadius: 4,
    margin: theme.spacing(2),
    padding: "50px 20px 30px",
    color: theme.palette.background.light,
    "& > p": {
      fontSize: 20,
      fontWeight: 600,
      "&:hover": {
        color: theme.palette.primary.main,
      }
    },
    "& > img": {
      width: 32,
      height: 32,
    },
  },

}));

const Content = [
  {
    icon: ServerIcon,
    title: "Reduce low-value tasks",
    body: "Thanks to tools used by Data Lake platform, Data Scientists are free from tasks that would otherwise take up too much time",
  },
  {
    icon: AnalyticalIcon,
    title: "Minimize engineering effort",
    body: "Thanks to Data Science solutions, your Data Scientist won’t need DevOps support to develop and implement data models",
  },
  {
    icon: SettingIcon,
    title: "Faster research",
    body: "Thanks to the transparency of activities on the Data Lake Platform, Data Scientists can see the activities of other stakeholders",
  },
  {
    icon: DatabaseIcon,
    title: "Better collaboration",
    body: "Better cooperation between your Data Scientists and with external entities significantly increases the productivity of your Big Data team",
  },
  {
    icon: AnalyticsIcon,
    title: "Better quality",
    body: "Having single access to data ensures accuracy and consistency of analysis",
  },
  {
    icon: CloudIcon,
    title: "Single interface",
    body: "Give your Data Scientists the freedom of choosing from a wide variety of Big Data and analytics tools and gain the meaningful insights you need",
  }
]

export default function Feature2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={10}>
          <div className={classes.card}>
            <p className={classes.solutions}>——— OUR SOLUTIONS</p>
            <p className={classes.title}>Big data Solutions</p>
            <p className={classes.contents}>Elixir implements a wide range of Big Data solutions, from Machine
              Learning Platform, through Google Analytics Bootcamp, to Complex Event Processing Platform. Check out
              our solutions and choose the most suitable for your business...</p>
          </div>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container>
            {Content.map(item => (
              <Grid item xs={6} className={classes.featureCard} key={item.title}>
                <div className={classes.featureContent}>
                  <img src={item.icon} alt="icon"/>
                  <p>{item.title}</p>
                  <span>{item.body}</span>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}