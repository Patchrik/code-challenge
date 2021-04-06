import React from "react";
//third party
import { Grid } from "@material-ui/core";
//api
import { useQuery } from "react-query";
import { getPersonDetails } from "../api/api";
//styled
import CachedIcon from "@material-ui/icons/Cached";
import styles from "../../styles/Home.module.css";

interface FilmProps {
  id: string;
  light: boolean;
}

const Film = ({ id, light }: FilmProps) => {
  const { data, status, error } = useQuery(`film-${id}`, () =>
    getPersonDetails("films", id, error)
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
          key={data?.id}
          style={{ textAlign: "center" }}
        >
          <Grid item direction="column" xs={6}>
            {data?.title ? data?.title : null}
          </Grid>
          <Grid item direction="column" xs={6}>
            {data?.director ? data?.director : null}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Film;
