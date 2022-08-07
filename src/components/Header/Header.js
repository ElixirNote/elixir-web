import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';

// styles
import useStyles from "./styles";

// pictures
import ElixirNoteLogo from "../../images/elixirnote-footer.svg";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar
      id="attr"
      position="fixed"
      elevation={0}
      className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img
          src={ElixirNoteLogo}
          className={classes.logo}
          alt="glab-logo"
          onClick={() => window.open("#/app/home", "_self")}
        />
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/", "_target")}
        >
          Overview
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/ecosystem/ecosystem", "_target")}
        >
          Ecosystem
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/solutions/solutions", "_target")}
        >
          Solution
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/appendix/faq", "_target")}
        >
          FAQ
        </p>
        <div className={classes.grow} />
        <div>
          <Button
            variant={"outlined"}
            className={classes.buttonDownload}
            onClick={() => window.open("https://github.com/ElixirNote/elixirnote/releases", "_target")}
          >
            Download
          </Button>
        </div>
        <GitHubIcon style={{marginLeft: 24, marginRight: 24}} onClick={() => window.open("https://github.com/ElixirNote", "_target")} />
        <div className={classes.gap} />
      </Toolbar>
    </AppBar>
  );
}
