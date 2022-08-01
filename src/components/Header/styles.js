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
      backgroundColor: "white",
      color: theme.palette.primary.main,
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    logo: {
      marginLeft: theme.spacing(10),
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      height: 38,
    },
    grow: {
      flexGrow: 1,
    },
    subTitle: {
      width: 150,
      color: theme.palette.text.secondary,
      fontSize: 15,
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.main,
      },
      textAlign: "center",
    },
    gap: {
      marginRight: theme.spacing(10),
    },
    headerMenu: {
      marginTop: theme.spacing(7),
      padding: theme.spacing(2),
    },
    productTitle: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      color: theme.palette.text.primary,
      fontSize: 15,
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.main,
      }
    },
    productDesc: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      color: theme.palette.text.secondary,
      fontSize: 13,
    },
    buttonInfoToMore: {
      fontSize: 16,
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      borderRadius: 4,
      textTransform: "Capitalize",
    },
  });
});
