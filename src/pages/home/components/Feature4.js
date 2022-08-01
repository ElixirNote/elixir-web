import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Divider from "@material-ui/core/Divider";

// components
import Title from "../../../components/Title";

// videos
import InsightsVideo from "../../../video/insights.mp4";
import CloudDataVideo from "../../../video/clouddata.mp4";
import DeveloperVideo from "../../../video/developer.mp4";
import BacklogVideo from "../../../video/backlog.mp4";


const MainFeatures = [
  {
    id: 1,
    video: InsightsVideo,
    title: "Instant insights for all",
    longDesc: "Stop waiting for custom reports from data experts and instantly answer ad-hoc data questions on the fly.",
    link: "https://ciusji.gitbook.io/spotrix/",
  },
  {
    id: 2,
    video: CloudDataVideo,
    title: "Unleash the value of your cloud data",
    longDesc: "Maximize the value of your cloud data warehouse and accelerate speed-to-insight for everyone across your business.",
    link: "https://ciusji.gitbook.io/spotrix/",
  },
  {
    id: 3,
    video: DeveloperVideo,
    title: "Build Interactive Data Apps",
    longDesc: "Drive adoption by embedding search and insight-driven actions into your apps using our low-code developer-friendly platform.",
    link: "https://ciusji.gitbook.io/spotrix/",
  },
  {
    id: 4,
    video: BacklogVideo,
    title: "Bye-bye backlog",
    longDesc: "Empower non-technical people to answer their own data questions, while you build a single source of truth with security and governance at scale.",
    link: "https://ciusji.gitbook.io/spotrix/",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f2f6fa",
  },
  items: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(5),
  },
  featureContainer: {
    height: "75vh",
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
    "& > video": {
      width: "40vw",
      height: "40vw",
    },
  },
  featureInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  learnMore: {
    marginTop: theme.spacing(4),
    width: "40%",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    textTransform: "Capitalize",
    fontWeight: 600,
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  buttonLink: {
    marginTop: theme.spacing(5),
  },
  buttonInfoToSystem: {
    margin: "0px 8px",
    borderRadius: 4,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: 2,
    width: 40,
  },
}));

export default function Feature4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="Explore Your Data"
        tip="Building enterprise-ready business intelligence web application"
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
                <Divider className={classes.divider} />
                <p className={classes.featureLongDesc}>
                  {info.longDesc}
                </p>
                <Button
                  variant="outlined"
                  color={"primary"}
                  endIcon={<ArrowRightAltIcon />}
                  className={classes.learnMore}
                  onClick={() => window.open(info.link, "_target")}
                >
                  Learn More
                </Button>
              </Grid>
              <Grid item xs={7} className={classes.featurePic}>
                <video autoPlay={true} loop={true} muted={true}>
                  <source src={info.video} type={"video/mp4"} />
                </video>
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