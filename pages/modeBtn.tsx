import React from "react";
import { useRouter } from "next/router";
//third party
import { Grid, Button } from "@material-ui/core";
//styles
import Home from "@material-ui/icons/Home";
import styles from "../styles/Home.module.css";

// btn interface
interface ModeProps {
  light: boolean;
  setLight: (value: boolean) => void;
  dataView: string;
}

const ModeBtn = ({ light, setLight, dataView }: ModeProps) => {
  //define router
  const router = useRouter();

  return (
    // dark/light toggle btn
    <Grid
      direction="column"
      container
      xs={5}
      style={{
        paddingRight: "25px",
        position: "absolute",
        top: "25px",
        right: "5px",
      }}
      className={styles?.zIndex}
      justify="flex-end"
      alignContent="flex-end"
    >
      <Grid direction="row" xs={2}>
        {light ? (
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setLight && setLight(false)}
          >
            Dark Side
          </Button>
        ) : (
          <Button
            color="primary"
            variant="contained"
            onClick={() => setLight && setLight(true)}
          >
            Light Side
          </Button>
        )}
      </Grid>
      {dataView === "table" && (
        <Grid direction="row" xs={2} style={{ paddingTop: "15px" }}>
          {light ? (
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                router?.push({
                  pathname: `/`,
                });
              }}
            >
              <Home />
            </Button>
          ) : (
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                router?.push({
                  pathname: `/`,
                });
              }}
            >
              <Home />
            </Button>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default ModeBtn;
