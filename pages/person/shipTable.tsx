import React from "react";
//third party
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
  Theme,
  createStyles,
  TableCell,
} from "@material-ui/core";
//components
import Ship from "../components/ship";

// data type
type DataObject = {
  starships: Array<any>;
};

// ship interface
interface ShipTableProps {
  data: DataObject;
  light: boolean;
  dataView: string;
}

//custom styled table cells
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme?.palette?.action?.hover,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

//custom styled table rows
const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(even)": {
        backgroundColor: theme?.palette?.action?.hover,
      },
    },
  })
)(TableRow);

const ShipTable = ({ data, light, dataView }: ShipTableProps) => {
  // return ship table
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
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Model</StyledTableCell>
              <StyledTableCell>Class</StyledTableCell>
              <StyledTableCell>Hyperdrive Rating</StyledTableCell>
              <StyledTableCell>Max Speed</StyledTableCell>
              <StyledTableCell>Length</StyledTableCell>
              <StyledTableCell>Passengers</StyledTableCell>
              <StyledTableCell>Crew</StyledTableCell>
              <StyledTableCell>Manufacturer</StyledTableCell>
            </TableRow>
          </TableHead>

          {/* map over data / return table body */}
          {data?.starships?.map((ship: string) => {
            const shipUrlSections = ship.split("/").filter(Boolean);
            const shipId = shipUrlSections[shipUrlSections.length - 1];
            return (
              <Ship
                id={shipId}
                light={light}
                key={`Ship-${shipId}`}
                dataView={dataView}
                StyledTableCell={StyledTableCell}
                StyledTableRow={StyledTableRow}
              />
            );
          })}
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ShipTable;
