import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    flexDirection: "column",
  },
  featureTitle: {
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: 40,
    display: "flex",
    justifyContent: "center",
    marginBottom: 0,
  },
  featureTip: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100vw",
    color: theme.palette.text.secondary,
    fontSize: 16,
    lineHeight: 2,
  },
  tip: {
    width: 600,
  },
}));
