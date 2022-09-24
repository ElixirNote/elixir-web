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
    height: "300vh",
    width: "100vw",
    backgroundImage: 'url(' + require('../../../images/feature-bg.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundColor: "#fff",
    color: "#fff",
  },
  card: {
    display: "flex",
    height: "100vh",
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
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: theme.spacing(2),
    boxShadow: "0 0 35px 0 rgb(206 215 219 / 48%)",
    "&:hover": {
      boxShadow: "0 0 35px 0 rgb(206 215 219 / 90%)",
    },
    padding: "50px 20px 40px",
    color: theme.palette.text.primary,
    "& > p": {
      fontSize: 20,
      "&:hover": {
        color: "1fdc6a"
      }
    }
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
    body: "thanks to the transparency of activities on the Data Lake Platform, Data Scientists can see the activities of other stakeholders",
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
            <Grid item xs={4} />
            {Content.map(item => (
              <Grid item xs={4} className={classes.featureCard} key={item.title}>
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