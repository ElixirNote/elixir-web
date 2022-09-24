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
      backgroundColor: "#ffffff",
      fontWeight: "bold",
      color: theme.palette.text.primary,
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
      textAlign: "center",
      "&:hover": {
        cursor: "pointer",
        color: "#1fdc6b",
      },
    },
    gap: {
      marginRight: theme.spacing(10),
    },
    buttonDownload: {
      backgroundColor: "#1fdc6b",
      color: "#fff",
      fontWeight: "bold",
      padding: "8px 32px",
      borderRadius: 4,
      textTransform: "Capitalize",
    },
  });
});
