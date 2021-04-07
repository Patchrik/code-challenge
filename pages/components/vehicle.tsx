import React from "react";
//third party
import { Grid, TableBody, TableCell } from "@material-ui/core";
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
}

const Vehicle = ({ id, light, dataView, capitalizeFirstLetter }: ShipProps) => {
  // get ships query
  const { data, status, error } = useQuery(`vehicle-${id}`, () =>
    getPersonDetails("vehicles", id, error)
  );

  console.log({ data });

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
        <TableBody>
          <TableCell>
            {data?.name ? capitalizeFirstLetter(data?.name) : "Uknown"}
          </TableCell>
          <TableCell>
            {data?.model ? capitalizeFirstLetter(data?.model) : "Uknown"}
          </TableCell>
          <TableCell>
            {data?.vehicle_class
              ? capitalizeFirstLetter(data?.vehicle_class)
              : "Uknown"}
          </TableCell>
          <TableCell>
            {data?.cost_in_credits
              ? capitalizeFirstLetter(data?.cost_in_credits)
              : "Uknown"}
          </TableCell>
          <TableCell>
            {data?.max_atmosphering_speed
              ? data?.max_atmosphering_speed
              : "Uknown"}
          </TableCell>
          <TableCell>{data?.length ? data?.length : "Uknown"}</TableCell>
          <TableCell>
            {data?.passengers ? data?.passengers : "Uknown"}
          </TableCell>
          <TableCell>{data?.crew ? data?.crew : "Uknown"}</TableCell>
          <TableCell>
            {data?.manufacturer
              ? capitalizeFirstLetter(data?.manufacturer)
              : "Uknown"}
          </TableCell>
        </TableBody>
      )}
    </>
  );
};

export default Vehicle;
