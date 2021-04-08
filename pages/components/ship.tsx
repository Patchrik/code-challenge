import React from "react";
//third party
import { Grid } from "@material-ui/core";
//api
import { useQuery } from "react-query";
import { getPersonDetails } from "../api/api";
//styled
import CachedIcon from "@material-ui/icons/Cached";
import styles from "../../styles/Home.module.css";

// ships interface
interface ShipProps {
  id: string;
  light: boolean;
  dataView: string;
  StyledTableCell?: any;
  StyledTableRow?: any;
}

const Ship = ({
  id,
  light,
  dataView,
  StyledTableCell,
  StyledTableRow,
}: ShipProps) => {
  // get ships query
  const { data, status, error } = useQuery(`ship-${id}`, () =>
    getPersonDetails("starships", id, error)
  );

  return (
    <>
      {/* return loading or ship info */}
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
      ) : (
        <StyledTableRow>
          <StyledTableCell>
            {data?.name ? data?.name : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.model ? data?.model : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.starship_class ? data?.starship_class : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.hyperdrive_rating ? data?.hyperdrive_rating : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.max_atmosphering_speed
              ? data?.max_atmosphering_speed
              : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.length ? data?.length : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.passengers ? data?.passengers : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.crew ? data?.crew : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.manufacturer ? data?.manufacturer : "Uknown"}
          </StyledTableCell>
        </StyledTableRow>
      )}
    </>
  );
};

export default Ship;
