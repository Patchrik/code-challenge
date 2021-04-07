import React from "react";
import { Grid } from "@material-ui/core";
//icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
//styles
import styles from "../styles/Home.module.css";

const StarText = () => {
  return (
    <div className={styles.fade}>
      <section className={styles.starWars}>
        <div className={styles.crawl}>
          <div className={styles.title}>
            <p>Star Wars Search</p>
            <h1>A Single Page Application</h1>
          </div>
          <p>
            Start searching by typing the name of your favorite Star Wars
            character in the search bar located in the top left.
          </p>
          <Grid direction="row">
            <ArrowBackIcon style={{ fontSize: "70px" }} />
            Seriously, it's right there.
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>Please, just type SOMETHING!</p>
        </div>
      </section>
    </div>
  );
};

export default StarText;
