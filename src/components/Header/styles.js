import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => {
  return ({
    appBar: {
      width: "100vw",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: theme.palette.primary.main,
      color: "#ffffff",
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    logo: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      height: 38,
    },
    grow: {
      flexGrow: 1,
    },
    subTitle: {
      width: 100,
      color: "#ffffff",
      fontSize: 15,
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.text.hint,
      },
      textAlign: "center",
    },
    gap: {
      marginRight: theme.spacing(10),
    },
    buttonDownload: {
      color: theme.palette.primary.main,
      backgroundColor: "#ffffff",
      borderColor: theme.palette.primary.main,
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      borderRadius: 20,
      textTransform: "Capitalize",
      "&:hover": {
        color: "#000000",
      }
    },
  });
});
