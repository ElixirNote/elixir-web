import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";

// styles
import useStyles from "./styles";

// pictures
import ElixirFooterLogo from "../../images/elixirnote-footer.svg";
import GitHubLogo from "../../images/github.svg";

export default function Footer() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container  className={classes.footerPos}>
            <Grid item xs={2}>
              <img
                src={ElixirFooterLogo}
                className={classes.logo}
                alt="spotrix-logo-footer"
              />
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>ElixirNote</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/ElixirNote", "_target")}>About Us</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/ElixirNote/elixirnote/blob/main/LICENSE", "_target")}>License</p>
                  <p className={classes.body2} onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/", "_target")}>Document</p>
                  <p className={classes.body2} onClick={() => window.open("https://ciusji.gitbook.io/elixirnote/appendix/faq", "_target")}>FAQs</p>
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>GuinsooLab</b>
                  <p className={classes.body2} onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/solutions/guinsoolab-console", "_target")}>Console</p>
                  <p className={classes.body2} onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/solutions/guinsoolab-finance", "_target")}>Finance</p>
                  <p className={classes.body2} onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/solutions/guinsoolab-infrastructure", "_target")}>Infrastructure</p>
                  <p className={classes.body2} onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/solutions/guinsoolab-nextgen-bi", "_target")}>NextGen BI</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/Spotrix", "_target")}>Spotrix</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/ElixirNote", "_target")}>ElixirNote</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/LeonaLog", "_target")}>Leona</p>
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>Community</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/ElixirNote", "_target")}>
                    <img src={GitHubLogo} width={14} alt="github-logo"/>
                    &nbsp;&nbsp;GitHub
                  </p>
                </Grid>
                <Grid item xs={5} className={classes.footerBody}>
                  <b className={classes.title2}>Subscribe</b>
                  <p className={classes.body3}>Stay up to date with our latest news.</p>
                  <InputBase className={classes.input} placeholder={"Enter email address"}/>
                  <Button variant={"outlined"} className={classes.button}>Subscribe</Button>
                </Grid>
                <Grid item xs={1} className={classes.footerBody}/>
              </Grid>
            </Grid>
          </Grid>
          <Divider className={classes.appDivider}/>
          <p className={classes.copyright}>
            © 2021-{currentYear} ElixirNote & GuinsoooLab
            <br/>
            <br/>
            <span>GuinsooLab, Guinsoo, and the Guinsoo feather logo are either registered trademarks or trademarks of the GuinsooLab.</span>
            <br/>
            <span>All other products or name brands are trademarks of their respective holders, including the Guinsoolab, and Guinsoo resources.</span>
          </p>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}