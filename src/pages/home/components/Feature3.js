import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

// Data Spots
import DataSpot0 from "../../../images/Data_Spot_0.png";
import DataSpot1 from "../../../images/Data_Spot_1.png";
import DataSpot2 from "../../../images/Data_Spot_2.png";
import DataSpot3 from "../../../images/Data_Spot_3.png";


const MainFeatures = [
  {
    id: 1,
    img: DataSpot0,
    title: "Build it once, then move on.",
    longDescs: [
      "◉ Reduce repetitive work by creating customizable and forkable reports that can be easily updated and adjusted.",
      "◉ Write a SQL query, add interactivity easily with built-in drop-downs, sliders, search boxes, etc. or other custom results-filtering options to the notebook, and share a link. ",
      "◉ Easily create tools and templates for common data requests."
    ],
  },
  {
    id: 2,
    img: DataSpot1,
    title: "Customize with code.",
    longDescs: [
      "◉ Write any custom JavaScript, CSS, HTML.",
      "◉ Incorporate branding colors for a report.",
      "◉ Standardize data and time.",
      "◉ Add animation and interactivity to your reports.",
    ],
  },
  {
    id: 3,
    img: DataSpot2,
    title: "Bring ML models to life for your team.",
    longDescs: [
      "◉ Visualize ML models though simulations to cement stakeholder understanding.",
      "◉ Prose lives with the data and the analysis in the same notebook, providing transparency and context."
    ],
  },
  {
    id: 4,
    img: DataSpot3,
    title: "Create better reports, faster.",
    longDescs: [
      "◉ Add animation and interactivity to your reports.",
      "◉ View a different time period, type of chart, or show filtered results.",
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  items: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(5),
  },
  featureContainer: {
    height: "70vh",
    marginTop: theme.spacing(2),
  },
  appName: {
    color: "black",
    fontSize: 32,
    fontWeight: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  featureLongDesc: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontSize: 16,
  },
  featurePic: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  featureInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
}));

export default function Feature3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="Get to the real work faster"
        tip="Spend your time analyzing data, finding insights, and creating expressive visualizations for reports and dashboards."
      />
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          {MainFeatures.map(info => (
            <Grid container
              spacing={5}
              key={info.id}
              className={classes.featureContainer}
              id={info.id}
              direction={info.id % 2 === 0 ? "row-reverse" : "row"}
              justify={"flex-start"}
            >
              <Grid item xs={5} className={classes.featureInfo}>
                <p className={classes.appName}>
                  {info.title}
                </p>
                {info.longDescs.map(tt => (
                  <p className={classes.featureLongDesc}>
                    {tt}
                  </p>
                ))}
              </Grid>
              <Grid item xs={7} className={classes.featurePic}>
                <img src={info.img} width={"90%"} alt="img" />
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}