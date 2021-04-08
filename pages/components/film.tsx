import React from "react";
//third party
import { Grid } from "@material-ui/core";
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
  StyledTableCell?: any;
  StyledTableRow?: any;
}

const Film = ({
  id,
  light,
  dataView,
  StyledTableCell,
  StyledTableRow,
}: FilmProps) => {
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
        <StyledTableRow>
          <StyledTableCell>
            {data?.title ? data?.title : "Unknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.director ? data?.director : "Unknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.producer ? data?.producer : "Unknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.release_date
              ? moment(data?.release_date).format("MM/DD/YYYY")
              : "Unknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.episode_id ? data?.episode_id : "Unknown"}
          </StyledTableCell>
        </StyledTableRow>
      )}
    </>
  );
};

export default Film;
