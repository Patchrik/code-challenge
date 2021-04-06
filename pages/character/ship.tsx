import React from "react";
//third party
import { Grid } from "@material-ui/core";
//api
import { useQuery } from "react-query";
import { getPersonDetails } from "../api/api";
//styled
import CachedIcon from "@material-ui/icons/Cached";
import styles from "../../styles/Home.module.css";

interface ShipProps {
  id: string;
  light: boolean;
}

const Ship = ({ id, light }: ShipProps) => {
  const { data, status, error } = useQuery(`ship-${id}`, () =>
    getPersonDetails("starships", id, error)
  );

  return (
    <>
      {status === "loading" ? (
        <Grid
          container
          direction="row"
          xs={12}
          justify="center"
          alignItems="center"
        >
          <CachedIcon
            className={styles?.rotate}
            style={{ color: light ? "blue" : "red" }}
          />
        </Grid>
      ) : (
        <Grid
          container
          direction="row"
          xs={12}
          justify="center"
          alignContent="center"
          key={data?.id}
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          <Grid item direction="column" xs={2} style={{ textAlign: "center" }}>
            {data?.name ? data?.name : null}
          </Grid>
          <Grid item direction="column" xs={2} style={{ textAlign: "center" }}>
            {data?.cost_in_credits ? data?.cost_in_credits : null}
          </Grid>
          <Grid item direction="column" xs={2} style={{ textAlign: "center" }}>
            {data?.crew ? data?.crew : null}
          </Grid>
          <Grid item direction="column" xs={2} style={{ textAlign: "center" }}>
            {data?.manufacturer ? data?.manufacturer : null}
          </Grid>
          <Grid item direction="column" xs={2} style={{ textAlign: "center" }}>
            {data?.passengers ? data?.passengers : null}
          </Grid>
          <Grid item direction="column" xs={2} style={{ textAlign: "center" }}>
            {data?.starship_class ? data?.starship_class : null}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Ship;
