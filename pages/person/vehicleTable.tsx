import React from "react";
//third party
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
//components
import Vehicle from "../components/vehicle";

// data type
type DataObject = {
  vehicles: Array<any>;
};

// vehicle interface
interface VehicleTableProps {
  data: DataObject;
  light: boolean;
  capitalizeFirstLetter: (value: string) => string;
  dataView: string;
}

const VehicleTable = ({
  data,
  light,
  capitalizeFirstLetter,
  dataView,
}: VehicleTableProps) => {
  // return vehicle table
  return (
    <Grid
      item
      direction="row"
      xs={12}
      style={{
        border: light ? "2px solid blue" : "2px solid red",
        borderRadius: "6px",
        backgroundColor: "white",
      }}
    >
      <TableContainer>
        <Table stickyHeader>
          {/* table header */}
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Max Speed</TableCell>
              <TableCell>Length</TableCell>
              <TableCell>Passengers</TableCell>
              <TableCell>Crew</TableCell>
              <TableCell>Manufacturer</TableCell>
            </TableRow>
          </TableHead>

          {/* map over data / return table body */}
          {data?.vehicles.map((vehicle: string) => {
            const vehicleUrlSections = vehicle.split("/").filter(Boolean);
            const vehicleId = vehicleUrlSections[vehicleUrlSections.length - 1];
            return (
              <Vehicle
                id={vehicleId}
                light={light}
                key={`Vehicle-${vehicleId}`}
                dataView={dataView}
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            );
          })}
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default VehicleTable;
