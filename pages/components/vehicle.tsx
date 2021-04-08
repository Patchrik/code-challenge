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
  capitalizeFirstLetter: (value: string) => string;
  StyledTableCell?: any;
  StyledTableRow?: any;
}

const Vehicle = ({
  id,
  light,
  dataView,
  capitalizeFirstLetter,
  StyledTableCell,
  StyledTableRow,
}: ShipProps) => {
  // get ships query
  const { data, status, error } = useQuery(`vehicle-${id}`, () =>
    getPersonDetails("vehicles", id, error)
  );

  return (
    <>
      {/* return loading or vehicle info */}
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
      ) : dataView === "details" ? null : (
        <StyledTableRow>
          <StyledTableCell>
            {data?.name ? capitalizeFirstLetter(data?.name) : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.model ? capitalizeFirstLetter(data?.model) : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.vehicle_class
              ? capitalizeFirstLetter(data?.vehicle_class)
              : "Uknown"}
          </StyledTableCell>
          <StyledTableCell>
            {data?.cost_in_credits
              ? capitalizeFirstLetter(data?.cost_in_credits)
              : "Uknown"}
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
            {data?.manufacturer
              ? capitalizeFirstLetter(data?.manufacturer)
              : "Uknown"}
          </StyledTableCell>
        </StyledTableRow>
      )}
    </>
  );
};

export default Vehicle;
