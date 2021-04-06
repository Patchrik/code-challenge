import React from "react";
//third party
import { Grid, Button } from "@material-ui/core";

// btn interface
interface ModeProps {
  light: boolean;
  setLight: (value: boolean) => void;
}

const ModeBtn = ({ light, setLight }: ModeProps) => {
  return (
    // dark/light toggle btn
    <Grid
      direction="column"
      container
      xs={5}
      style={{ paddingRight: "25px", zIndex: "10" }}
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
    </Grid>
  );
};

export default ModeBtn;
