import React from "react";
//third party
import { Grid, TableBody, TableCell } from "@material-ui/core";
import moment from "moment";
//api
import { useQuery } from "react-query";
import { getPersonDetails } from "../api/api";
//styled
import CachedIcon from "@material-ui/icons/Cached";
import styles from "../../styles/Home.module.css";

// film interface
interface FilmProps {
  id: string;
  light: boolean;
  dataView: string;
}

const Film = ({ id, light, dataView }: FilmProps) => {
  // get films query
  const { data, status, error } = useQuery(`film-${id}`, () =>
    getPersonDetails("films", id, error)
  );

  return (
    <>
      {/* return loading or film info */}
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
      ) : dataView === "details" ? (
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
      ) : (
        <TableBody>
          <TableCell>{data?.title ? data?.title : "Unknown"}</TableCell>
          <TableCell>{data?.director ? data?.director : "Unknown"}</TableCell>
          <TableCell>{data?.producer ? data?.producer : "Unknown"}</TableCell>
          <TableCell>
            {data?.release_date
              ? moment(data?.release_date).format("MM/DD/YYYY")
              : "Unknown"}
          </TableCell>
          <TableCell>
            {data?.episode_id ? data?.episode_id : "Unknown"}
          </TableCell>
        </TableBody>
      )}
    </>
  );
};

export default Film;
